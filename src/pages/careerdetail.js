
"use client"

import { useEffect, useRef, useState } from "react"
import Header from "./component/Landing/header"
import Work from "./component/Landing/work"
import Footer from "./component/Landing/footer"
import { SingleJobwithSlug } from "@/Utils/Services/services"
import { useRouter } from "next/router"
import Loader from "@/hooks/loader"
import Head from "next/head"
import axios from "axios"

const careerdetail = () => {
    const router = useRouter()
    const { slug } = router.query
    const [Data, setData] = useState(null)
    const [submitted, setSubmitted] = useState(false);

    const [index, setIndex] = useState(0)

    const item = Data?.[index] || null

    const SingleJobS = async (slug) => {
        try {
            const data = await SingleJobwithSlug(slug)
            setData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (slug) {
            SingleJobS(slug)
        }
    }, [slug])

    useEffect(() => {
        if (item) {
            setForm((prev) => ({ ...prev, jobTitle: item?.title?.rendered }))
        }
    }, [item])

    // Inside your component:
    const fileInputRef = useRef(null)

    const handleCVUploadClick = () => {
        fileInputRef.current.click()
    }

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        jobTitle: "",
        cvFile: null,
    })

    const [loading, setLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [errors, setErrors] = useState({})

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
        e.preventDefault()
        setLoading(true)
        setSuccessMsg("")
        setErrorMsg("")

        const validationErrors = {}

        // Name validation
        if (!form.name) {
            validationErrors.name = "Name is required"
        } else {
            const nameRegex = /^[A-Za-z\s]+$/
            if (!nameRegex.test(form.name.trim())) {
                validationErrors.name = "Name can only contain letters and spaces"
            }
        }


        // Email validation
        if (!form.email) {
            validationErrors.email = "Email is required"
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(form.email)) {
                validationErrors.email = "Invalid email format"
            }
        }

        // Phone number validation (only digits allowed)
        if (!form.phone) {
            validationErrors.phone = "Phone is required"
        } else {
            const phoneRegex = /^[0-9]+$/
            if (!phoneRegex.test(form.phone)) {
                validationErrors.phone = "Phone number must contain only digits"
            }
        }

        // Job title validation
        if (!form.jobTitle) validationErrors.jobTitle = "Job title is required"

        // CV file validation (PDF only)
        if (!form.cvFile) {
            validationErrors.cvFile = "CV file is required"
        } else if (form.cvFile.type !== "application/pdf") {
            validationErrors.cvFile = "Only PDF files are allowed"
        }

        // Set errors if any
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setLoading(false)
            return
        }


        setErrors({})

        // Create FormData to properly handle file upload
        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("email", form.email)
        formData.append("phone", form.phone)
        formData.append("jobTitle", form.jobTitle)

        // Make sure the file is appended with the correct field name
        if (form.cvFile) {
            formData.append("cvFile", form.cvFile)
        }

        try {
            console.log("Submitting form with file:", form.cvFile ? form.cvFile.name : "No file")

            const res = await axios.post("/api/submit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            if (res.data.success) {
                setSuccessMsg("Application submitted successfully!")
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    jobTitle: item?.title?.rendered || "",
                    cvFile: null,
                })
                setSubmitted(true);


                // Reset file input
                const fileInput = document.querySelector('input[type="file"]')
                if (fileInput) fileInput.value = ""
            } else {
                setErrorMsg(res.data.message || "Submission failed!")
            }
        } catch (err) {
            console.error("Error:", err)
            setErrorMsg(err.response?.data?.message || "Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (!Data) {
        return <Loader />
    }
    // successMsg && <p style={{ color: "green" }}>{successMsg}</p>
    // errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>
    const handleInputFocus = () => {
        if (submitted) setSubmitted(false);
    };

    
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
                    href={`${typeof window !== "undefined" ? window.location.origin + window.location.pathname : ""}`}
                />
                <meta name="publisher" content="Quecko" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header />
            <div className="details_career">
                <div className="inner_details_page">
                    {item && (
                        <>
                            <section className="contact_us_main2">
                                <div className="left_siide">
                                    <p>Get Hired</p>
                                    <h1>{item?.title?.rendered}</h1>

                                    <h2>{item?.acf?.job_description}</h2>
                                </div>
                                <div className="right_sidde">
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        placeholder="Name"
                                        value={form.name}
                                        onChange={(e) =>{
                                             setForm({ ...form, name: e.target.value })
                                            if (errors.name) {
                                                setErrors((prevErrors) => ({ ...prevErrors, name: '' }))
                                            }
                                        }
                                    }
                                        onFocus={handleInputFocus}
                                    />
                                    {errors.name && <p style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '0.75vw',
                                        paddingLeft: '0.625vw',
                                        color: 'red',
                                    }} className='errror_mssg'>{errors.name}</p>}

                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        placeholder="Phone"
                                        value={form.phone}
                                        onChange={(e) => {
                                            setForm({ ...form, phone: e.target.value })
                                            if(errors.phone){
                                                setErrors((prevErrors) => ({ ...prevErrors, phone: '' }))
                                            }
                                        }}
                                        onFocus={handleInputFocus}
                                    />
                                    {errors.phone && <p style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '0.75vw',
                                        paddingLeft: '0.625vw',
                                        color: 'red',
                                    }} className='errror_mssg'>{errors.phone}</p>}

                                    
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        placeholder="Email@company.com"
                                        value={form.email}
                                        onChange={(e) => {
                                            setForm({ ...form, email: e.target.value })
                                            if(errors.email){
                                                setErrors((prevErrors) => ({ ...prevErrors, email: '' }))
                                            }
                                        }}
                                        onFocus={handleInputFocus}
                                    />
                                    {errors.email && <p style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '0.75vw',
                                        paddingLeft: '0.625vw',
                                        color: 'red',
                                    }} className='errror_mssg'>{errors.email}</p>}


                                    <div className="uploaded_divv">
                                        {/* <div className="cv_upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                                <g clip-path="url(#clip0_795_1070)">
                                                    <path
                                                        d="M11.4998 14.6666V9.16659M11.4998 9.16659L8.74984 10.9999M11.4998 9.16659L14.2498 10.9999M21.5832 13.7499C21.5832 11.7249 19.9415 10.0833 17.9165 10.0833C17.8948 10.0833 17.8736 10.0834 17.852 10.0838C17.4075 6.97394 14.7326 4.58325 11.4998 4.58325C8.93624 4.58325 6.72418 6.08662 5.69637 8.25983C3.30673 8.41624 1.4165 10.4039 1.4165 12.8331C1.4165 15.3644 3.46853 17.4167 5.99984 17.4167L17.9165 17.4166C19.9415 17.4166 21.5832 15.775 21.5832 13.7499Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_795_1070">
                                                        <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Upload CV
                                        </div>
                                        <input type="file" accept="application/pdf"
  onChange={(e) => setForm((prev) => ({ ...prev, cvFile: e.target.files[0] }))} /> */}


                                        {/* {errors.cvFile && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.cvFile}</p>} */}
                                        <div className="cv_upload" onClick={handleCVUploadClick} style={{ cursor: 'pointer' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                                <g clipPath="url(#clip0_795_1070)">
                                                    <path
                                                        d="M11.4998 14.6666V9.16659M11.4998 9.16659L8.74984 10.9999M11.4998 9.16659L14.2498 10.9999M21.5832 13.7499C21.5832 11.7249 19.9415 10.0833 17.9165 10.0833C17.8948 10.0833 17.8736 10.0834 17.852 10.0838C17.4075 6.97394 14.7326 4.58325 11.4998 4.58325C8.93624 4.58325 6.72418 6.08662 5.69637 8.25983C3.30673 8.41624 1.4165 10.4039 1.4165 12.8331C1.4165 15.3644 3.46853 17.4167 5.99984 17.4167L17.9165 17.4166C19.9415 17.4166 21.5832 15.775 21.5832 13.7499Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
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
                                            ref={fileInputRef}
                                            type="file"
                                            accept="application/pdf"
                                            style={{ display: 'none' }}
                                            onChange={(e) =>

                                               {
                                                setForm((prev) => ({ ...prev, cvFile: e.target.files[0] }))
                                                if(errors.cvFile){
                                                    setErrors((prevErrors) => ({ ...prevErrors, cvFile: '' }))
                                                    
                                                }

                                               }
                                            }
                                            onFocus={handleInputFocus}
                                        />

                                        {/* Show file name if selected */}
                                        {form.cvFile && <p style={{ marginTop: '0.5rem' }}>{form.cvFile.name}</p>}

                                        {/* Show error if any */}
                                        {errors.cvFile && (
                                            <p style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                fontSize: '0.75vw',
                                                paddingLeft: '0.625vw',
                                                color: 'red',
                                            }} className='errror_mssg'>{errors.cvFile}</p>
                                        )}

                                        <h6>Max file size 10MB.</h6>
                                    </div>

                                    <div className="button_div">
                                        <button onClick={handleSubmit} disabled={loading}>
                                             {loading ? 'Submitting...' : submitted ? 'Submitted' : 'Apply Now'}

                                        </button>
                                    </div>
                                </div>
                            </section>
                            <div className="descriptions">
                                <h4>Job description</h4>
                                <h5>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item?.content?.rendered?.replace(/&#8211;\s*/g, "")?.replace(/–\s*/g, ""),
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
