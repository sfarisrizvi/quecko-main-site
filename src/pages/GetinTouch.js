import { SiteKey } from '@/Utils/Enviroment';
import React, { useRef, useState,useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha"; 
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';

const Getintouch = () => {

    const [showA, setShowA] = useState(false);
    const [name, setName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null); 
    const recaptchaRef = useRef(null); 
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
            const emailjsPayload = { ...payload };
            const result = await emailjs.send(
                'service_ppg76cf',
                'template_bymdrau',
                emailjsPayload, 
                '5_dvI4T78SrG6vKnY'
            );
             await axios.post('/api/submitForm', payload);  
             setName('');
            setEmail('');
            setTelegram('');
            setMessage('');
            setSubmitted(true);
            setRecaptchaToken(null);  
            recaptchaRef.current?.reset(); 
        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            if (error.response?.data?.error === 'recaptcha_failed') {
                setErrors({ recaptcha: 'reCAPTCHA verification failed. Please try again.' });
            } else {
                setErrors({ submit: 'An error occurred during submission. Please try again.' });  
            }
            setRecaptchaToken(null); 
            recaptchaRef.current?.reset();  
        } finally {
            setLoading(false);
        }
    };
    const handleInputFocus = (fieldName) => {
        if (submitted) setSubmitted(false);
        setErrors(prevErrors => ({ ...prevErrors, [fieldName]: '' }));
    };

    const handleTelegramChange = (e) => {
        let newValue = e.target.value;
        if (newValue && !newValue.startsWith("@")) {
            newValue = "@" + newValue;
        }
        setTelegram(newValue);
        handleInputFocus('telegram');  
    };
    useEffect(() => {
        if (submitted) {
            setShowA(true);
            const timeout = setTimeout(() => {
                setShowA(false);
            }, 3000);  
            return () => clearTimeout(timeout);
        }
    }, [submitted]);

     const handleRecaptchaChange = (token) => {
        // console.log("reCAPTCHA token:", token);
        setRecaptchaToken(token);
         if (errors.recaptcha) {
            setErrors(prevErrors => ({ ...prevErrors, recaptcha: '' }));
        }
    };

     const handleRecaptchaExpire = () => {
        // console.log("reCAPTCHA expired");
        setRecaptchaToken(null);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='forms_div_section'>
                    <div className='inputttunner'>
                        <input placeholder='Name' type="text" id="fname" name="fname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => handleInputFocus('name')}

                        />
                        {errors.name && <div className='errror_mssg' style={{ color: 'red' }}>{errors.name}</div>}
                        <input placeholder='Email@company.com' type="text" id="fname" name="fname"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => handleInputFocus('email')}
                        />
                        {errors.email && <div className='errror_mssg' style={{ color: 'red' }}>{errors.email}</div>}

                    </div>
                    <input placeholder='Telegram' type="text" id="fname" name="fname"
                        value={telegram}
                        onChange={handleTelegramChange}
                                    onFocus={() => handleInputFocus('telegram')}
                    />
                    {errors.telegram && <div className='errror_mssg' style={{ color: 'red' }}>{errors.telegram}</div>}
                    <textarea placeholder='Your Message' id="w3review" name="w3review" rows="4" cols="50"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => handleInputFocus('message')}
                    />
                    {errors.message && <div className='errror_mssg' style={{ color: 'red' }}>{errors.message}</div>}
                    <div className='recaptcha-container'  >  
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={YOUR_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                            onExpired={handleRecaptchaExpire} 
                        />
                        {errors.recaptcha && <div className='errror_mssg' style={{ color: 'red', marginTop: '5px' }}>{errors.recaptcha}</div>}
                    </div>
                    {errors.submit && <div className='errror_mssg' style={{ color: 'red', marginBottom: '10px' }}>{errors.submit}</div>}


                    <button type="submit" disabled={loading || submitted}>  
                        {loading ? 'Submitting...' : submitted ? 'Submitted ✓' : 'Get in Touch'}
                    </button>
                </div>
            </form>
             <div className='toast_mains' >
                <Toast show={showA} onClose={() => setShowA(true)} delay={3000} autohide>

                    <Toast.Body>
                        <div className='toastt_mark'>
                            <img src='\Assets\tick.svg' alt="Success Tick"   />  
                            <div>
                                <h3>Thanks for getting in touch!</h3>
                                <p style={{ margin: 0 }}>We’ve received your request. Expect to hear from us soon!</p>  
                            </div>
                        </div>
                    </Toast.Body>
                </Toast>
            </div>
        </>
    )
}

export default Getintouch