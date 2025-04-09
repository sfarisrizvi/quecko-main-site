"use client"

import React, { useState } from 'react'
import Header from './component/Landing/header'
import Contactus from './contactus'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import Head from 'next/head'
import axios from 'axios'
import emailjs from '@emailjs/browser';


const contactusdetail = () => {

    const [name, setName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);




    const regex = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        // telegram: /^@[A-Za-z0-9_]{5,32}$/,
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
        // if (!payload.telegram) {
        //     validationErrors.telegram = "Telegram is required";
        // } else if (!regex.telegram.test(payload.telegram)) {
        //     validationErrors.telegram = "Invalid Telegram username format. It should start with '@' and contain 5-32 characters (letters, numbers, or underscores).";
        // }

        const cleanedMessage = payload.message.replace(/\s/g, '');
        if (!payload.message) {
            validationErrors.message = "Message is required";
        } else if (cleanedMessage.length < 5) {
            validationErrors.message = "Message must be at least 5 non-space characters";
        }
        return validationErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            name,
            email,
            message,
            telegram,
            time: new Date().toLocaleString(),
        };
        const validationErrors = validateForm(payload);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        setErrors({});
        try {
            const result = await emailjs.send(
                'service_ppg76cf',
                'template_bymdrau',
                payload,
                '5_dvI4T78SrG6vKnY'
            );
            console.log('Email sent:', result.text);
            await axios.post('/api/submitForm', payload);
            setName('');
            setEmail('');
            setTelegram('');
            setMessage('');
            setSubmitted(true);
        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    const handleInputFocus = () => {
        if (submitted) setSubmitted(false);
    };


    const handleTelegramChange = (e) => {
        let newValue = e.target.value;
        if (newValue && !newValue.startsWith("@")) {
            newValue = "@" + newValue;
        }
        setTelegram(newValue);
        setErrors({ ...errors, telegram: "" });
    };



    return (
        <>
            <Head>
                <title>Contact Us - Quecko</title>
                <meta property="og:title" content="Contact Us - Quecko" />
                <meta
                    property="og:description"
                    content="Get in touch with Quecko for inquiries, support, or collaborations. We're here to help!"
                />
                <meta property="og:url" content="https://quecko.com/contact/" />
                <link rel="canonical" href="https://quecko.com/contact/" />
            </Head>
            <Header />
            <div className='detailss_page'>
                <div className='contact_us_detailss'>
                    <section className='contact_us_main mycontactus'>
                        <div className='left_siide'>
                            <p>Contact Us</p>
                            <h2 className='cliiientnew'>Share your marketing challenge with us, and we'll craft a tailored solution just for you. Get a proposal!
                            </h2>
                            <p>Get in touch</p>
                            <div className='svgs_divv'>

                                <a href="mailto:info@quecko.com" target="_blank" rel="noopener noreferrer">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0057 14.7046C13.4086 15.1026 12.7151 15.313 12 15.313C11.285 15.313 10.5914 15.1026 9.99431 14.7046L0.159797 8.14801C0.105234 8.11164 0.0520781 8.07372 0 8.03472V18.7783C0 20.0101 0.999609 20.9877 2.20936 20.9877H21.7906C23.0224 20.9877 24 19.9881 24 18.7783V8.03467C23.9478 8.07376 23.8945 8.11178 23.8398 8.1482L14.0057 14.7046Z" fill="black" />
                                        <path d="M0.939844 6.97795L10.7744 13.5345C11.1466 13.7827 11.5733 13.9068 12 13.9068C12.4267 13.9068 12.8534 13.7827 13.2256 13.5345L23.0602 6.97795C23.6487 6.58584 24 5.92959 24 5.2213C24 4.00345 23.0092 3.0127 21.7914 3.0127H2.20861C0.990797 3.01274 0 4.00349 0 5.22248C0 5.92959 0.351375 6.58584 0.939844 6.97795Z" fill="black" />
                                    </svg>
                                </a>

                                <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <g clip-path="url(#clip0_988_136)">
                                            <path d="M9.52826 15.426L9.13126 21.01C9.69926 21.01 9.94526 20.766 10.2403 20.473L12.9033 17.928L18.4213 21.969C19.4333 22.533 20.1463 22.236 20.4193 21.038L24.0413 4.06603L24.0423 4.06503C24.3633 2.56903 23.5013 1.98403 22.5153 2.35103L1.22526 10.502C-0.227738 11.066 -0.205738 11.876 0.978262 12.243L6.42126 13.936L19.0643 6.02503C19.6593 5.63103 20.2003 5.84903 19.7553 6.24303L9.52826 15.426Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_988_136">
                                                <rect width="24" height="24" fill="white" transform="translate(0.111328 0.245117)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>


                                <a href="https://www.linkedin.com/company/queckoinc/" target="_blank" rel="noopener noreferrer">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g clip-path="url(#clip0_988_139)">
                                            <path d="M19.929 19.5943L19.9338 19.5935V12.5562C19.9338 9.11343 19.1927 6.46143 15.1679 6.46143C13.233 6.46143 11.9346 7.52319 11.4045 8.52978H11.3486V6.78283H7.53247V19.5935H11.5061V13.2501C11.5061 11.58 11.8227 9.96492 13.8911 9.96492C15.929 9.96492 15.9594 11.871 15.9594 13.3573V19.5943H19.929Z" fill="black" />
                                            <path d="M1.06226 6.78369H5.04067V19.5944H1.06226V6.78369Z" fill="black" />
                                            <path d="M3.04982 0.405762C1.77779 0.405762 0.745605 1.43794 0.745605 2.70998C0.745605 3.98201 1.77779 5.03578 3.04982 5.03578C4.32186 5.03578 5.35404 3.98201 5.35404 2.70998C5.35324 1.43794 4.32106 0.405762 3.04982 0.405762Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_988_139">
                                                <rect width="19.1885" height="19.1885" fill="white" transform="translate(0.745605 0.405762)" />
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

                                    onChange={(e) => {
                                        setName(e.target.value)
                                        setErrors({ ...errors, name: '' });


                                    }
                                    }
                                    onFocus={handleInputFocus}


                                />
                                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                                <input
                                    type="text"
                                    name="telegram"
                                    placeholder='Telegram'
                                    value={telegram}
                                    onChange={handleTelegramChange}

                                    onFocus={handleInputFocus}

                                />
                                {errors.telegram && <div style={{ color: 'red' }}>{errors.telegram}</div>}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email@company.com'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setErrors({ ...errors, email: '' });



                                    }
                                    }
                                    onFocus={handleInputFocus}


                                />
                                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

                                <textarea
                                    placeholder='Your Message'
                                    name="message"
                                    rows="6"
                                    cols="50"
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value)
                                        setErrors({ ...errors, message: '' });
                                    }
                                    }
                                    onFocus={handleInputFocus}


                                />
                                {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}

                                <div className='button_div'>
                                    <button type="submit" disabled={loading}>
                                        {loading ? 'Submitting...' : submitted ? 'Submitted' : 'Get in Touch'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>


            <Work />
            <Footer />
        </>
    )
}

export default contactusdetail
