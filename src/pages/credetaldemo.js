
import React, { useEffect, useState } from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import { SingleJobwithSlug } from '@/Utils/Services/services'
import { useRouter } from 'next/router';
import Loader from '@/hooks/loader'
import Head from 'next/head'
import { post } from 'jquery'
import axios from 'axios'
import { set } from 'date-fns'

const careerdetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [Data, setData] = useState(null)

    const [index, setIndex] = useState(0)

    const item = Data?.[index] || null;


    const SingleJobS = async (slug) => {
        try {
            const data = await SingleJobwithSlug(slug);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (slug) {
            SingleJobS(slug);
        }
    }, [slug]);

    useEffect(() => {
        if (item) {
            setForm((prev) => ({ ...prev, jobTitle: item?.title?.rendered }));
        }
    }, [item]);


    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
    });

    // console.log('form: ', form);
    // console.log(form.cvFile, 'form.cvFile');

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    // console.log("file: ", file)


    // const handleSubmit = async () => {
    //     if (!form.name || !form.email || !form.phone || !form.cvFile) {
    //         setErrorMsg('Please fill in all fields and attach your CV.');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('name', form.name);
    //     formData.append('email', form.email);
    //     formData.append('phone', form.phone);
    //     formData.append('cvFile', form.cvFile); // Append the file

    //     setLoading(true);
    //     try {
    //         const res = await axios.post('/api/submit', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });

    //         if (res.data.success) {
    //             setSuccessMsg('Your application has been submitted successfully.');
    //         } else {
    //             setErrorMsg('There was an error submitting your application.');
    //         }
    //     } catch (err) {
    //         setErrorMsg('Something went wrong.');
    //         console.error(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     const payload = {
    //         name: form.name,
    //         email: form.email,
    //         phone: form.phone,
    //         jobTitle: form.jobTitle,
    //     };

    //     const validationErrors = {};
    //     if (!payload.name) validationErrors.name = 'Name is required';
    //     if (!payload.email) validationErrors.email = 'Email is required';
    //     if (!payload.phone) validationErrors.phone = 'Phone is required';
    //     if (!payload.jobTitle) validationErrors.jobTitle = 'Job title is required';
    //     if (!form.cvFile) validationErrors.cvFile = 'CV file is required';

    //     if (Object.keys(validationErrors).length > 0) {
    //         setErrors(validationErrors);
    //         setLoading(false);
    //         return;
    //     }

    //     // setErrors({});

    //     // Prepare a FormData to send the file and fields together
    //     const data = new FormData();
    //     data.append('name', payload.name);
    //     data.append('email', payload.email);
    //     data.append('phone', payload.phone);
    //     data.append('jobTitle', payload.jobTitle);
    //     data.append('cvFile', form.cvFile); // Just send to your own API

    //     try {
    //         const res = await axios.post('/api/submit', data); // No need for multipart header, browser handles it

    //         if (res.data.success) {
    //             setSuccessMsg('Your application has been submitted successfully.');
    //             setForm({ name: '', email: '', phone: '', jobTitle: '', cvFile: null });
    //         } else {
    //             setErrorMsg('There was an error submitting your application.');
    //         }
    //     } catch (error) {
    //         console.error('Submission error:', error.response?.data || error.message);
    //         setErrorMsg('Something went wrong.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e) => {
        // console.log("first")
        e.preventDefault();
        setLoading(true);
        // console.log("file", file)

        const payload = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            jobTitle: form.jobTitle,
            cvFile: file,
        };




        // console.log('payload: ', payload);
        // console.log(payload.cvFile, 'payload.cvFile');
        const validationErrors = {};
        if (!payload.name) validationErrors.name = 'Name is required';
        if (!payload.email) validationErrors.email = 'Email is required';
        if (!payload.phone) validationErrors.phone = 'Phone is required';
        if (!payload.jobTitle) validationErrors.jobTitle = 'Job title is required';
        if (!file) validationErrors.cvFile = 'CV file is required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        setErrors({});

        const formData = new FormData();
        formData.append('b2-2', form.name);
        formData.append('b2-5', form.email);
        formData.append('b2-7', form.phone);
        formData.append('b2-8', form.jobTitle);
        formData.append('b2-6', file);



        // console.log('formData: ', formData);

        // const data = new FormData();
        // Object.entries(payload).forEach(([key, value]) => data.append(key, value));
        // data.append('cvFile', form.cvFile); // this is the only file
        try {

            // console.log('data: ', payload);
            const res = await axios.post('/api/submit', formData); // let browser handle headers
            // console.log('res: ', res.data);
            if (res.data.success) {
                setSuccessMsg('Application submitted!');
                setForm({ name: '', email: '', phone: '', jobTitle: '', cvFile: null });
            } else {
                setErrorMsg('Submission failed!');
            }
        } catch (err) {
            console.error('Error:', err);
            setErrorMsg('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };


    if (!Data) {
        return <Loader />;
    }


    { successMsg && <p style={{ color: 'green' }}>{successMsg}</p> }
    { errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p> }

    const handleCsvFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) {
            // console.log("No file selected");
            return;
        }
        setFile(file);
    }

    return (
        <>

            <Head>
                <meta property="og:title" content="About Us - Quecko" />
                <meta
                    property="og:description"
                    content="Learn more about Quecko, our mission, values, and the team behind our innovative digital solutions."
                />
                <meta property="og:url" content="https://quecko.com/about-us/" />
                <link
                    rel="canonical"
                    href={`${typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''}`}
                />
                <meta name="publisher" content="Quecko" />
                <meta name="robots" content="index, follow" />

            </Head>
            <Header />
            <div className='details_career'>
                <div className='inner_details_page'>
                    {item && (
                        <>
                            <section className='contact_us_main2'>
                                <div className='left_siide'>
                                    <p>Get Hired</p>
                                    <h1>{item?.title?.rendered}</h1>

                                    <h2>
                                        {item?.acf?.job_description}
                                    </h2>

                                </div>
                                <div className='right_sidde'>
                                    <input type="text" id="fname" name="fname" placeholder='Name'
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                                    <input type="text" id="fname" name="fname" placeholder='Phone'
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                                    <input type="text" id="fname" name="fname" placeholder='Email@company.com'
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                    <div className='uploaded_divv'>
                                        <div className='cv_upload'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                                <g clip-path="url(#clip0_795_1070)">
                                                    <path d="M11.4998 14.6666V9.16659M11.4998 9.16659L8.74984 10.9999M11.4998 9.16659L14.2498 10.9999M21.5832 13.7499C21.5832 11.7249 19.9415 10.0833 17.9165 10.0833C17.8948 10.0833 17.8736 10.0834 17.852 10.0838C17.4075 6.97394 14.7326 4.58325 11.4998 4.58325C8.93624 4.58325 6.72418 6.08662 5.69637 8.25983C3.30673 8.41624 1.4165 10.4039 1.4165 12.8331C1.4165 15.3644 3.46853 17.4167 5.99984 17.4167L17.9165 17.4166C19.9415 17.4166 21.5832 15.775 21.5832 13.7499Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_795_1070">
                                                        <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Upload CV
                                        </div>
                                        <input
                                            type="file"
                                            accept='.pdf'
                                            onChange={(e) =>
                                                handleCsvFileSelect(e)
                                            }
                                        />


                                        <h6>Max file size 10MB.</h6>
                                    </div>

                                    <div className='button_div'>
                                        <button onClick={handleSubmit} disabled={loading}>
                                            {loading ? 'Submitting...' : 'Apply Now'}
                                        </button>
                                    </div>


                                </div>
                            </section>
                            <div className='descriptions'>
                                <h4>Job description
                                </h4>
                                <h5
                                >
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item?.content?.rendered
                                                ?.replace(/&#8211;\s*/g, '')
                                                ?.replace(/–\s*/g, '')
                                        }}
                                    />
                                </h5>

                            </div>
                        </>
                    )}

                </div>

            </div>
            <Work />
            <Footer />

        </>
    )
}

export default careerdetail