import React, { useEffect, useState } from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import { SingleJobwithSlug } from '@/Utils/Services/services'
import { useRouter } from 'next/router';

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

    if (!Data) {
        return <div>Loading...</div>;
    }



    return (
        <>
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
                                    <input type="text" id="fname" name="fname" placeholder='Name' />
                                    <input type="text" id="fname" name="fname" placeholder='Phone' />
                                    <input type="text" id="fname" name="fname" placeholder='Email@company.com' />
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
                                        <h6>Max file size 10MB.</h6>
                                    </div>

                                    <div className='button_div'>
                                        <button>Apply Now</button>
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
