import React from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'

const Privacypolicy = () => {
    return (
        <>
            <Header />
            <section>
                <div>
                    <section className="main_banner1 terms_page" >
                        {/* <Header/> */}
                        <img className="upper_shadow d-none" src="\Assets\shadowupper.png" />
                        <img className="lowershadow  d-none" src="\Assets\shadowlower.png" />
                        <div className="inner_banner terms_page">
                            <video className='main-banner-video'
                                muted="muted" playsinline="playsinline"
                                autoPlay
                                loop
                                width="100%"
                                id="myVideo">
                                <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330920/queckosite%20(new)/videos/bannervideo_ns7oz8.mp4" type="video/mp4" />
                            </video>
                            <div className="textual_inner myinnner_data" >
                                <p>Privacy policy</p>
                                <div className="animation-section style-1">

                                    <h1>Privacy policy</h1>

                                </div>
                            </div>

                            <img className="downarrow" src="\Assets\downarrow.svg" />
                        </div>


                    </section>
                    <div className='terms_pagenew'>
                        {/* <h3>Welcome to Quecko Inc. By accessing or using our website (https://quecko.com) and our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                </h3> */}
                        <p>Quecko (“we”, “us” or “our”) is committed to protecting the privacy of our visitors, partners, and customers. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you access our website (https://quecko.com) and use our services.

                        </p>
                        <h2> Information We Collect
                        </h2>
                        <p>a. Personal Information
                        </p>
                        <p>When you contact us, register for updates, or request our services, we may collect:</p>

                        <ul class="custom-list">
                            <li>Contact details: Name, email address, phone number, and mailing address.
                            </li>
                            <li>Professional details: Job title, company name, and industry (especially relevant when discussing our enterprise and blockchain solutions).</li>
                            <li>Other information: Any details you voluntarily provide through forms, inquiries, or chat sessions.

                            </li>

                        </ul>


                        <p>b. Usage Data

                        </p>
                        <p>We automatically collect non-personally identifiable information when you visit our website, such as:
                        </p>

                        <ul class="custom-list">
                            <li>IP address, browser type, and operating system..
                            </li>
                            <li>Pages visited, referral sources, and the duration of your visit.
                            </li>
                            <li>Data collected through cookies and similar tracking technologies.

                            </li>

                        </ul>



                        <p>c. Cookies and Tracking Technologies


                        </p>
                        <p>We use cookies and similar technologies to:

                        </p>

                        <p>1.  Enhance your browsing experience.</p>
                        <p>2.  Analyze website usage and improve our content.
                        </p>
                        <p>3.  Deliver personalized content and advertising (where you have given consent). </p>
                        <p></p>
                        <p>For more details on managing cookies, please refer to our Cookie Policy.
                        </p>



                        <h2>How We Use Your Information

                        </h2>
                        <p>We use your information for various purposes, including to:
                        </p>


                        <ul class="custom-list">
                            <li>Provide and improve our services: Deliver software solutions, blockchain development, and digital products.
                            </li>
                            <li>Communicate with you: Send newsletters, updates, and respond to support inquiries.
                                Personalize your experience: Customize website content and offers based on your interests.
                            </li>
                            <li>Legal compliance: Meet our regulatory obligations and protect our rights.

                            </li>
                            <li>Business operations: Analyze trends, perform research, and improve our offerings.

                            </li>

                        </ul>





                        <h2>How We Share Your Information

                        </h2>
                        <p>We do not sell your personal information. We may share your data with:

                        </p>


                        <ul class="custom-list">
                            <li>Service providers and partners: Third parties who support our operations (e.g., hosting providers, analytics services) under strict confidentiality obligations.

                            </li>
                            <li>Affiliates: Companies under common control that help deliver our products and services.

                            </li>
                            <li>Legal authorities: In response to a lawful request or if required to protect our rights or the safety of others.


                            </li>


                        </ul>



                        <h2>Data Security and Retention


                        </h2>



                        <ul class="custom-list">
                            <li>Security Measures: We implement appropriate administrative, technical, and physical safeguards to protect your data from unauthorized access, disclosure, or alteration.

                            </li>
                            <li>Data Retention: We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once no longer needed, your information will be securely deleted or anonymized.

                            </li>
                            <li>International Transfers: Your data may be processed and stored in jurisdictions where our service providers operate. We ensure adequate safeguards are in place to protect your information during such transfers.


                            </li>


                        </ul>



                        <h2> Your Rights


                        </h2>
                        <p>Depending on your jurisdiction, you may have the right to:
                        </p>


                        <ul class="custom-list">
                            <li>Access, update, or correct your personal information.

                            </li>
                            <li>Request deletion of your data (subject to certain legal obligations).

                            </li>
                            <li>Restrict or object to processing.

                            </li>
                            <li>Withdraw consent at any time, where applicable.


                            </li>

                        </ul>

<p>To exercise these rights, please contact us using the details provided below.
</p>






                        <h2>Changes to This Privacy Policy

                        </h2>
                        <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website along with the new effective date.
                        </p>
                        <h2> Contact Us

                        </h2>

                        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

                        </p>

                        <p>Email: [info@quecko.com]

                        </p>




                        <p>Phone: +971-50-740-0268

                        </p>

                    </div>
                </div>
            </section>
            <Work />
            <Footer />
        </>

    )
}

export default Privacypolicy
