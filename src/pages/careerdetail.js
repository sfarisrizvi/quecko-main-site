import React, { useEffect, useState } from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import { SingleJobwithSlug } from '@/Utils/Services/services'
import { useRouter } from 'next/router';
import Loader from '@/hooks/loader'
import Head from 'next/head'

const careerdetail = () => {
    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';

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



    ///////
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [jobTitle, setJobTitle] = useState(item?.title?.rendered || '');



    useEffect(() => {
        if (item?.title?.rendered) {
            setJobTitle(item.title.rendered);
        }
    }, [item]);


    
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("b2-2", name);         // Name
        formData.append("b2-5", email);        // Email
        formData.append("b2-7", phone);        // Phone
        formData.append("b2-6", selectedFile); // Upload CV
        formData.append("b2-8", jobTitle);     // Job Title

        try {
            const response = await fetch("http://dev.quecko.com/wp-json/bitform/v1/submit/2", {
                method: "POST",
                headers: {
                    "BitForm-API-Key": "BitForm-API-Key 59971a5c6213ecbb4e58bf91b4a56962f05311d8"
                },
                body: formData
            });

            const result = await response.json();
            if (response.ok) {
                alert("Application submitted successfully!");
            } else {
                alert("Submission failed.");
                console.error(result);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred.");
        }
    };



 






    useEffect(() => {
        if (slug) {
            SingleJobS(slug);
        }
    }, [slug]);

    if (!Data) {
        return <Loader/>;
    }



    return (
        <>

            <Head>
                <meta property="og:title" content="Quecko - Leading the Blockchain Revolution with Innovative Solutions" />
                <meta
                    property="og:description"
                    content="Quecko Inc. delivers innovative blockchain and Web3 solutions tailored to your needs. Empowering fintech with secure, scalable, and decentralized solutions."
                />
                <meta property="og:url" content={fullUrl} />
                <link rel="canonical" href={fullUrl} />
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
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                     />
                                    <input type="text" id="fname" name="fname" placeholder='Phone' 
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                     
                                    />
                                    <input type="text" id="fname" name="fname" placeholder='Email@company.com'
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}

                                     />
                                    <div className='uploaded_divv'>
                                        <div className='cv_upload' onClick={() => document.getElementById('cvUpload').click()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                                <g clipPath="url(#clip0_795_1070)">
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

                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            id="cvUpload"
                                            style={{ display: 'none' }}
                                            onChange={(e) => setSelectedFile(e.target.files[0])}
                                            accept=".   ,.doc,.docx"
                                        />

                                        <h6>Max file size 10MB.</h6>
                                        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                                    </div>


                                    <div className='button_div'>
                                        <button onClick={handleSubmit}>Apply Now</button>
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
