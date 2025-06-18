
import { BitFormheaders, bitFormResponseUrl, SECRETKEY, verifyUrlGoogle } from '@/Utils/Enviroment';
import axios from 'axios';
import FormData from 'form-data';

// Get the Secret Key from environment variables
const RECAPTCHA_SECRET_KEY = SECRETKEY;
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    // Destructure form fields AND the reCAPTCHA token from the request body
    // Ensure the key matches what you send from the frontend ('g-recaptcha-response')
    const { name, email, message, telegram, 'g-recaptcha-response': recaptchaToken } = req.body;

    // --- 1. reCAPTCHA Server-Side Verification ---
    if (!RECAPTCHA_SECRET_KEY) {
        console.error("FATAL: RECAPTCHA_SECRET_KEY environment variable not set.");
        return res.status(500).json({ success: false, message: 'Server configuration error.' });
    }

    if (!recaptchaToken) {
        return res.status(400).json({ success: false, message: 'reCAPTCHA token missing.', error: 'recaptcha_missing' });
    }

    try {
        // Construct the verification URL
        // Using POST is slightly preferred by Google, but GET works too.
        // We'll use POST with URLSearchParams for clarity.
        const verifyUrl = verifyUrlGoogle;

        const verificationParams = new URLSearchParams();
        verificationParams.append('secret', RECAPTCHA_SECRET_KEY);
        verificationParams.append('response', recaptchaToken);
        // Optionally add remoteip: verificationParams.append('remoteip', req.socket.remoteAddress); // If needed and proxy headers are handled correctly

        const recaptchaVerificationResponse = await axios.post(
            verifyUrl,
            verificationParams, // Send as x-www-form-urlencoded
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        );

        const verificationData = recaptchaVerificationResponse.data;

        // console.log("reCAPTCHA Verification Data:", verificationData); // Log for debugging

        // Check if verification was successful
        if (!verificationData.success) {
            // Log the error codes from Google for diagnostics
            console.warn('reCAPTCHA verification failed:', verificationData['error-codes']);
            return res.status(400).json({
                success: false,
                message: 'reCAPTCHA verification failed. Please try again.',
                error: 'recaptcha_failed', // Specific error code for frontend
                details: verificationData['error-codes'] || ['unknown'],
            });
        }

        // Optional: Check hostname if configured in reCAPTCHA settings
        // if (verificationData.hostname !== 'your-expected-hostname.com') {
        //    console.warn('reCAPTCHA hostname mismatch:', verificationData.hostname);
        //    return res.status(400).json({ success: false, message: 'reCAPTCHA hostname mismatch.' });
        // }

        // Optional: Check action if using v3 (not applicable here for v2 checkbox)
        // Optional: Check score threshold if using v3

        // --- 2. If reCAPTCHA is valid, proceed to submit to BitForm ---
        // console.log("reCAPTCHA verified successfully. Submitting to BitForm...");

        // Create form-data object and append fields (original logic)
        const formData = new FormData();
        formData.append("b1-2", name || ''); // Handle potentially undefined fields
        formData.append("b1-5", email || '');
        formData.append("b1-3", message || '');
        formData.append("b1-7", telegram || ''); // Make sure telegram is handled if optional

        const bitFormResponse = await axios.post(
            // 'https://dev.quecko.com/wp-json/bitform/v1/entry/1',
            bitFormResponseUrl,
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    "BitForm-API-Key": BitFormheaders, 
                    //  "59971a5c6213ecbb4e58bf91b4a56962f05311d8", // Consider moving this to env vars too
                },
            }
        );

        // console.log("BitForm submission successful.");
        return res.status(200).json({ success: true, data: bitFormResponse.data });

    } catch (error) {
        // Differentiate between reCAPTCHA verification error and BitForm submission error
        if (axios.isAxiosError(error) && error.request?.path === '/recaptcha/api/siteverify') { // Check if error is from Google call
            console.error('Error during reCAPTCHA verification request:', error.message);
            if (error.response) {
                console.error("Google Verification Response Status:", error.response.status);
                console.error("Google Verification Response Data:", error.response.data);
            }
            return res.status(500).json({
                success: false,
                message: 'Server Error during reCAPTCHA check.',
                error: 'recaptcha_request_failed',
            });
        } else { // Assume error is from BitForm submission or other logic
            console.error('BitForm Submission Error or other:', error.response?.data || error.message);
            return res.status(error.response?.status || 500).json({ // Use BitForm's status if available
                success: false,
                message: 'Failed to submit form.',
                error: 'bitform_submission_failed',
                details: error.response?.data || error.message,
            });
        }
    }
}