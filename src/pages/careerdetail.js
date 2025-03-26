import React from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'

const careerdetail = () => {
    return (
        <>
            <Header />
            <div className='details_career'>
                <div className='inner_details_page'>
                    <section className='contact_us_main2'>
                        <div className='left_siide'>
                            <p>Get Hired</p>
                            <h1>UX/UI designer</h1>
                            <h2>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.
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
                        <h5>We're a leading Blockchain development company based in Islamabad.
                            And we're looking for a Graphic Designer to oversee the activities of our creative design team.
                            The ideal individual must be creative, a multi-tasker, a self-starter and a leader who has proven experience and a good track record..</h5>

                        <h4>Skills & Requirements:</h4>
                        <h5>2-3 years of relevant experience being a graphic designer.
                            -Create and design various materials for print and digital collateral
                            -Ensure projects are completed with high quality and on schedule
                            -Establish creative direction for the company as well as brand guidelines
                            -Prioritize and manage multiple projects within design specifications and budget restrictions
                            -Perform retouching and manipulation of images
                            -Work with a wide range of media and use graphic design sottware.</h5>

                        <h4>What we offer:</h4>
                        <h5>Market competitive salary based on experience and skill set.</h5>
                        <h5>Annual Increments</h5>
                        <h5>Performance Based Bonuses</h5>
                        <h5>Paid leaves and Leaves Encashment</h5>
                        <h5>Need-based Advance salary option</h5>
                        <h5>Free Lunch</h5>
                        <h5>Free Unlimited Tea/Coffee</h5>
                        <h5>All expenses paid team-building retreats. (yearly)</h5>
                        <h5>All expenses paid annual dinner</h5>
                        <h5>Performance-based cash bonuses</h5>
                        <h5>A friendly and nurturing environment</h5>
                        <h5>Company issued Laptop</h5>
                        <h5>Opportunities for fast growth</h5>







                    </div>
                </div>

            </div>
            <Work />
            <Footer />

        </>
    )
}

export default careerdetail
