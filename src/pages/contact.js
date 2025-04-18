

"use client"; // Add this at the very top!

import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import Header from './component/Landing/header';
// import Contactus from './contactus'; // Assuming this isn't needed directly here if it's just the page component
import Work from './component/Landing/work';
import Footer from './component/Landing/footer';
import Head from 'next/head';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA
import { SiteKey } from '@/Utils/Enviroment';

const contactusdetail = () => {
    const [showA, setShowA] = useState(false);
    const [name, setName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null); // State for reCAPTCHA token
    const recaptchaRef = useRef(null); // Ref for reCAPTCHA instance

    const YOUR_RECAPTCHA_SITE_KEY = SiteKey

     const regex = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        message: /^.{5,}$/,
    };

    const validateForm = (payload) => {
        const validationErrors = {};

        if (!payload.name) {
            validationErrors.name = "Name is required";
        } else if (!regex.name.test(payload.name)) {
            validationErrors.name = "Name must contain only letters and spaces";
        }
        if (!payload.email) {
            validationErrors.email = "Email is required";
        } else if (!regex.email.test(payload.email)) {
            validationErrors.email = "Invalid email format";
        }
        const cleanedMessage = payload.message.replace(/\s/g, '');
        if (!payload.message) {
            validationErrors.message = "Message is required";
        } else if (cleanedMessage.length < 5) {
            validationErrors.message = "Message must be at least 5 non-space characters";
        }

         if (!recaptchaToken) {
            validationErrors.recaptcha = "Please complete the reCAPTCHA verification.";
        }

        return validationErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            message,
            telegram,
            'g-recaptcha-response': recaptchaToken 
        };

        const validationErrors = validateForm(payload);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);  
            return;
        }

        setLoading(true);
        setErrors({});  

        try {
            // EmailJS Send - Note: EmailJS might have its own reCAPTCHA settings,
            // but sending the token like this doesn't automatically verify it on their side for v2 checkbox.
            // Verification should ideally happen in your '/api/submitForm'.
            const emailjsPayload = { ...payload };
            // delete emailjsPayload['g-recaptcha-response']; // Optionally remove token if EmailJS doesn't use it

            const result = await emailjs.send(
                'service_ppg76cf',
                'template_bymdrau',
                emailjsPayload, // Send payload (potentially without token)
                '5_dvI4T78SrG6vKnY'
            );
            console.log('EmailJS sent:', result.text);

            // --- IMPORTANT: Backend Verification ---
            // Your '/api/submitForm' endpoint *must* verify the 'g-recaptcha-response' token
            // using your SECRET KEY ("6Lde_wIlAAAAAEy4cJehUYb9cAcc2_OPfnLnpz_R") before processing the form.
            // If verification fails there, it should return an error.
            await axios.post('/api/submitForm', payload); // Send full payload including token to your API

            // Reset form on success
            setName('');
            setEmail('');
            setTelegram('');
            setMessage('');
            setSubmitted(true);
            setRecaptchaToken(null); // Clear token state
            recaptchaRef.current?.reset(); // Reset reCAPTCHA widget

        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            // Handle specific errors, e.g., reCAPTCHA verification failure from your API
            if (error.response?.data?.error === 'recaptcha_failed') {
                setErrors({ recaptcha: 'reCAPTCHA verification failed. Please try again.' });
            } else {
                setErrors({ submit: 'An error occurred during submission. Please try again.' }); // Generic submit error
            }
            setRecaptchaToken(null); // Clear potentially invalid token
            recaptchaRef.current?.reset(); // Reset reCAPTCHA widget on error too
        } finally {
            setLoading(false);
        }
    };

    // handleInputFocus remains the same
    const handleInputFocus = (fieldName) => {
        if (submitted) setSubmitted(false);
        // Clear specific error on focus
        setErrors(prevErrors => ({ ...prevErrors, [fieldName]: '' }));
    };

    // handleTelegramChange remains the same
    const handleTelegramChange = (e) => {
        let newValue = e.target.value;
        if (newValue && !newValue.startsWith("@")) {
            newValue = "@" + newValue;
        }
        setTelegram(newValue);
        handleInputFocus('telegram'); // Clear error on change
    };

    // useEffect for Toast remains the same
    useEffect(() => {
        if (submitted) {
            setShowA(true);
            const timeout = setTimeout(() => {
                setShowA(false);
            }, 3000); // Increased timeout slightly for better visibility
            return () => clearTimeout(timeout);
        }
    }, [submitted]);

    // Function to handle reCAPTCHA token changes
    const handleRecaptchaChange = (token) => {
        console.log("reCAPTCHA token:", token);
        setRecaptchaToken(token);
        // Clear reCAPTCHA specific error when user interacts
        if (errors.recaptcha) {
            setErrors(prevErrors => ({ ...prevErrors, recaptcha: '' }));
        }
    };

    // Function to handle reCAPTCHA expiration
    const handleRecaptchaExpire = () => {
        console.log("reCAPTCHA expired");
        setRecaptchaToken(null);
    };

    return (
        <>
            <Head>
                {/* Head content remains the same */}
                <title>Contact Us - Quecko</title>
                <meta property="og:title" content="Contact Us - Quecko" />
                <meta
                    property="og:description"
                    content="Get in touch with Quecko for inquiries, support, or collaborations. We're here to help!"
                />
                <meta property="og:url" content="https://quecko.com/contact/" />

                <meta property="og:url" content="https://quecko.com/about-us/" />
                <link
                    rel="canonical"
                    href={`${typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''}`}
                />
                <meta name="publisher" content="Quecko" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header />
            <div className='detailss_page'>
                <div className='contact_us_detailss'>
                    <section className='contact_us_main mycontactus'>
                        <div className='left_siide'>
                            {/* Left side content remains the same */}
                            <p >Contact Us</p>
                            <h2 className='cliiientnew'>Share your Web3 challenge with us, and we'll craft a tailored solution just for you. Get a proposal!
                            </h2>
                            <p>Get in touch</p>
                            <div className='svgs_divv'>
                                {/* Links remain the same */}
                                <div className='mails_divvvv'>
                                    <a href="mailto:info@quecko.com">
                                        <div className='projectss_runs'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                <g clip-path="url(#clip0_1519_269)">
                                                    <path d="M12.1714 12.7536C11.6739 13.0854 11.0959 13.2607 10.5 13.2607C9.90414 13.2607 9.32617 13.0854 8.82859 12.7536L0.633164 7.28986C0.587695 7.25955 0.543398 7.22794 0.5 7.19544V16.1485C0.5 17.1749 1.33301 17.9896 2.34113 17.9896H18.6588C19.6853 17.9896 20.5 17.1566 20.5 16.1485V7.1954C20.4565 7.22798 20.4121 7.25966 20.3665 7.29001L12.1714 12.7536Z" fill="black" />
                                                    <path d="M1.2832 6.31475L9.47863 11.7786C9.78887 11.9854 10.1444 12.0888 10.5 12.0888C10.8555 12.0888 11.2111 11.9854 11.5214 11.7786L19.7168 6.31475C20.2072 5.98799 20.5 5.44112 20.5 4.85088C20.5 3.836 19.6743 3.01038 18.6595 3.01038H2.34051C1.32566 3.01042 0.5 3.83604 0.5 4.85186C0.5 5.44112 0.792812 5.98799 1.2832 6.31475Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1519_269">
                                                        <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>info@quecko.com</p>
                                        </div>
                                    </a>
                                    <a href="tel:+971507400268">
                                        <div className='projectss_runs'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                                <path d="M15.5671 14.1826L17.8132 15.3037C17.7067 15.8357 17.419 16.3143 16.999 16.6578C16.5791 17.0014 16.053 17.1886 15.5104 17.1875C13.6463 17.1854 11.859 16.444 10.5409 15.1258C9.22271 13.8077 8.48125 12.0204 8.47919 10.1563C8.47904 9.61439 8.66665 9.0892 9.01011 8.67008C9.35356 8.25095 9.83164 7.96378 10.363 7.85744L11.4841 10.1035L10.53 11.5235C10.4587 11.6304 10.4149 11.7533 10.4024 11.8812C10.39 12.0092 10.4093 12.1382 10.4587 12.2569C11.0176 13.5854 12.0745 14.6422 13.403 15.2012C13.5221 15.2527 13.6521 15.2738 13.7813 15.2626C13.9105 15.2513 14.0349 15.2081 14.1432 15.1367L15.5671 14.1826ZM23.3229 12.5C23.3233 14.2535 22.8697 15.9771 22.0063 17.5033C21.1429 19.0294 19.8991 20.306 18.3959 21.2088C16.8927 22.1116 15.1814 22.6099 13.4285 22.6551C11.6757 22.7003 9.94096 22.2909 8.39325 21.4668L5.06805 22.5752C4.79275 22.667 4.49731 22.6803 4.21486 22.6137C3.9324 22.547 3.6741 22.403 3.46889 22.1978C3.26367 21.9926 3.11967 21.7343 3.05301 21.4518C2.98636 21.1694 2.99968 20.874 3.09149 20.5986L4.19989 17.2735C3.47543 15.9114 3.07079 14.4021 3.01668 12.8603C2.96258 11.3185 3.26044 9.78465 3.88765 8.37515C4.51486 6.96564 5.45494 5.71754 6.63653 4.72559C7.81811 3.73365 9.21016 3.02392 10.707 2.65028C12.2038 2.27665 13.7661 2.24893 15.2752 2.56922C16.7844 2.88952 18.2007 3.54941 19.4168 4.49881C20.6328 5.44822 21.6166 6.66218 22.2934 8.04855C22.9702 9.43491 23.3223 10.9573 23.3229 12.5ZM19.4167 14.8438C19.4168 14.6986 19.3765 14.5563 19.3002 14.4328C19.224 14.3093 19.1148 14.2095 18.985 14.1445L15.86 12.582C15.737 12.5207 15.6 12.493 15.4629 12.5016C15.3257 12.5101 15.1932 12.5547 15.0788 12.6309L13.6442 13.5879C12.9857 13.2259 12.4437 12.6839 12.0817 12.0254L13.0388 10.5908C13.1149 10.4764 13.1595 10.3439 13.1681 10.2068C13.1766 10.0696 13.1489 9.93259 13.0876 9.80959L11.5251 6.68459C11.4603 6.5538 11.3602 6.44376 11.2361 6.36695C11.112 6.29015 10.9689 6.24964 10.8229 6.25002C9.78693 6.25002 8.79337 6.66157 8.0608 7.39413C7.32824 8.12669 6.91669 9.12026 6.91669 10.1563C6.91927 12.4347 7.82551 14.619 9.43659 16.2301C11.0477 17.8412 13.232 18.7474 15.5104 18.75C16.0234 18.75 16.5314 18.649 17.0053 18.4527C17.4792 18.2564 17.9098 17.9686 18.2726 17.6059C18.6353 17.2432 18.923 16.8126 19.1193 16.3386C19.3156 15.8647 19.4167 15.3567 19.4167 14.8438Z" fill="black" />
                                            </svg>
                                            <p>+971-50-740-0268</p>
                                        </div>
                                    </a>
                                    <a href="t.me/971507400268" target='_blank' rel="noopener noreferrer"> {/* Added rel for security */}
                                        <div className='projectss_runs'>
                                            <img className='telegramimg' src='\Assets\telegram.svg' alt="Telegram Icon" /> {/* Added alt text */}
                                            <p>+971-50-740-0268</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='smalll_svgsss'>
                                {/* Social links remain the same - Added rel for security */}
                                <a href="https://www.instagram.com/quecko.web3?igsh=ZHlqb3ZlMW02ZXdk" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M17.875 2.4375H8.125C6.61708 2.43911 5.17138 3.03885 4.10511 4.10511C3.03885 5.17138 2.43911 6.61708 2.4375 8.125V17.875C2.43911 19.3829 3.03885 20.8286 4.10511 21.8949C5.17138 22.9612 6.61708 23.5609 8.125 23.5625H17.875C19.3829 23.5609 20.8286 22.9612 21.8949 21.8949C22.9612 20.8286 23.5609 19.3829 23.5625 17.875V8.125C23.5609 6.61708 22.9612 5.17138 21.8949 4.10511C20.8286 3.03885 19.3829 2.43911 17.875 2.4375ZM13 17.875C12.0358 17.875 11.0933 17.5891 10.2916 17.0534C9.48991 16.5177 8.86506 15.7564 8.49609 14.8656C8.12711 13.9748 8.03057 12.9946 8.21867 12.0489C8.40677 11.1033 8.87107 10.2346 9.55285 9.55285C10.2346 8.87107 11.1033 8.40677 12.0489 8.21867C12.9946 8.03057 13.9748 8.12711 14.8656 8.49609C15.7564 8.86506 16.5177 9.48991 17.0534 10.2916C17.5891 11.0933 17.875 12.0358 17.875 13C17.8737 14.2925 17.3596 15.5317 16.4457 16.4457C15.5317 17.3596 14.2925 17.8737 13 17.875ZM19.0938 8.125C18.8527 8.125 18.6171 8.05352 18.4166 7.9196C18.2162 7.78569 18.06 7.59534 17.9678 7.37265C17.8755 7.14995 17.8514 6.9049 17.8984 6.66848C17.9454 6.43207 18.0615 6.21491 18.232 6.04446C18.4024 5.87402 18.6196 5.75794 18.856 5.71092C19.0924 5.66389 19.3374 5.68803 19.5601 5.78027C19.7828 5.87252 19.9732 6.02873 20.1071 6.22915C20.241 6.42957 20.3125 6.6652 20.3125 6.90625C20.3125 7.22948 20.1841 7.53948 19.9555 7.76804C19.727 7.9966 19.417 8.125 19.0938 8.125ZM16.25 13C16.25 13.6428 16.0594 14.2711 15.7023 14.8056C15.3452 15.3401 14.8376 15.7566 14.2437 16.0026C13.6499 16.2486 12.9964 16.313 12.366 16.1876C11.7355 16.0622 11.1564 15.7526 10.7019 15.2981C10.2474 14.8436 9.93785 14.2645 9.81245 13.634C9.68705 13.0036 9.75141 12.3501 9.99739 11.7563C10.2434 11.1624 10.6599 10.6548 11.1944 10.2977C11.7289 9.94061 12.3572 9.75 13 9.75C13.862 9.75 14.6886 10.0924 15.2981 10.7019C15.9076 11.3114 16.25 12.138 16.25 13Z" fill="black" />
                                    </svg>
                                </a>
                                <a href="https://x.com/Quecko_Inc" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M21.8359 22.3285C21.766 22.4559 21.6631 22.5623 21.5381 22.6364C21.413 22.7105 21.2704 22.7498 21.125 22.75H16.25C16.1133 22.75 15.9787 22.7154 15.8589 22.6495C15.7391 22.5837 15.6378 22.4886 15.5645 22.3732L11.4522 15.9108L5.47625 22.4839C5.33057 22.6404 5.12908 22.7332 4.91547 22.7421C4.70185 22.751 4.49333 22.6754 4.3351 22.5316C4.17688 22.3878 4.08171 22.1874 4.07022 21.9739C4.05874 21.7604 4.13186 21.551 4.27375 21.3911L10.5473 14.4848L4.18945 4.49922C4.11115 4.37637 4.06731 4.23473 4.06254 4.08913C4.05777 3.94353 4.09222 3.79932 4.16231 3.67161C4.2324 3.5439 4.33553 3.43738 4.46092 3.3632C4.5863 3.28903 4.72932 3.24993 4.875 3.25H9.75C9.88674 3.25004 10.0213 3.2846 10.1411 3.35046C10.2609 3.41633 10.3622 3.51138 10.4355 3.6268L14.5478 10.0892L20.5237 3.51609C20.6694 3.3596 20.8709 3.26684 21.0845 3.25792C21.2981 3.24899 21.5067 3.32462 21.6649 3.46842C21.8231 3.61221 21.9183 3.81257 21.9298 4.02606C21.9413 4.23955 21.8681 4.44897 21.7262 4.60891L15.4527 11.5101L21.8105 21.5018C21.8884 21.6247 21.9318 21.7663 21.9363 21.9117C21.9408 22.0571 21.9061 22.2011 21.8359 22.3285Z" fill="black" />
                                    </svg>
                                </a>
                                <a href="https://pk.linkedin.com/company/queckoinc" target="_blank" rel="noopener noreferrer">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clip-path="url(#clip0_1519_301)">
                                            <path d="M17.3107 17.315L17.3148 17.3143V11.2153C17.3148 8.23157 16.6725 5.93317 13.1844 5.93317C11.5075 5.93317 10.3822 6.85336 9.9228 7.72574H9.87429V6.21172H6.567V17.3143H10.0108V11.8167C10.0108 10.3692 10.2852 8.96953 12.0778 8.96953C13.844 8.96953 13.8703 10.6214 13.8703 11.9096V17.315H17.3107Z" fill="black" />
                                            <path d="M0.959381 6.2124H4.40734V17.315H0.959381V6.2124Z" fill="black" />
                                            <path d="M2.68198 0.684998C1.57955 0.684998 0.68499 1.57955 0.68499 2.68198C0.68499 3.78442 1.57955 4.69768 2.68198 4.69768C3.78441 4.69768 4.67896 3.78442 4.67896 2.68198C4.67827 1.57955 3.78372 0.684998 2.68198 0.684998Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1519_301">
                                                <rect width="16.63" height="16.63" fill="white" transform="translate(0.68499 0.684998)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='right_sidde'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => handleInputFocus('name')} // Pass field name
                                />
                                {errors.name && <div className='errror_mssg' style={{ color: 'red' }}>{errors.name}</div>}

                                <input
                                    type="text"
                                    name="telegram"
                                    placeholder='Telegram' // Added example
                                    value={telegram}
                                    onChange={handleTelegramChange}
                                    onFocus={() => handleInputFocus('telegram')} // Pass field name
                                />
                                {errors.telegram && <div className='errror_mssg' style={{ color: 'red' }}>{errors.telegram}</div>}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email@company.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => handleInputFocus('email')} // Pass field name
                                />
                                {errors.email && <div className='errror_mssg' style={{ color: 'red' }}>{errors.email}</div>}

                                <textarea
                                    placeholder='Your Message'
                                    name="message"
                                    rows="6"
                                    cols="50"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onFocus={() => handleInputFocus('message')} // Pass field name
                                />
                                {errors.message && <div className='errror_mssg' style={{ color: 'red' }}>{errors.message}</div>}

                                {/* Add reCAPTCHA Widget */}
                                <div className='recaptcha-container'  > {/* Add some margin */}
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={YOUR_RECAPTCHA_SITE_KEY}
                                        onChange={handleRecaptchaChange}
                                        onExpired={handleRecaptchaExpire} // Handle expiration
                                    // theme="dark" // Optional: if your site has a dark theme
                                    />
                                    {errors.recaptcha && <div className='errror_mssg' style={{ color: 'red', marginTop: '5px' }}>{errors.recaptcha}</div>}
                                </div>

                                {/* Display general submission error */}
                                {errors.submit && <div className='errror_mssg' style={{ color: 'red', marginBottom: '10px' }}>{errors.submit}</div>}


                                <div className='button_div'>
                                    <button type="submit" disabled={loading || submitted}> {/* Disable if submitted too */}
                                        {loading ? 'Submitting...' : submitted ? 'Submitted ✓' : 'Get in Touch'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            <Work />
            <Footer />

            {/* Toast Notification */}
            <div className='toast_mains' >  
                <Toast show={showA} onClose={() => setShowA(true)} delay={3000} autohide>
              
                    <Toast.Body>
                        <div className='toastt_mark'>
                            <img src='\Assets\tick.svg' alt="Success Tick"   /> {/* Added alt text & basic styling */}
                            <div>
                                <h3>Thanks for getting in touch!</h3>
                                <p style={{ margin: 0 }}>We’ve received your request. Expect to hear from us soon!</p> {/* Removed default margin */}
                            </div>
                        </div>
                    </Toast.Body>
                </Toast>
            </div>
        </>
    );
}

export default contactusdetail;