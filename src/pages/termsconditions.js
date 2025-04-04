import React from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'

const termsconditions = () => {
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
                                <p>Terms of use</p>
                                <div className="animation-section style-1">

                                    <h1>Terms of Use</h1>

                                </div>
                            </div>

                            <img className="downarrow" src="\Assets\downarrow.svg" />
                        </div>


                    </section>
                    <div className='terms_pagenew'>
                        {/* <h3>Welcome to Quecko Inc. By accessing or using our website (https://quecko.com) and our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                </h3> */}
                        <p>Welcome to Quecko Inc. By accessing or using our website (https://quecko.com) and our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                        </p>
                        <h4>Acceptance of Terms</h4>
                        <p>By visiting our website or using our services, you agree that you have read, understood, and accepted these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website or services.</p>
                        <h4>Definitions
                        </h4>
                        <ul class="custom-list">
                            <li>“Quecko,” “we,” “us” or “our” refers to Quecko.</li>
                            <li>“Services” includes all software development, blockchain, Web3, mobile app, and digital solutions provided by Quecko.</li>
                            <li>“User” or “you” refers to any individual or entity that accesses or uses our website and services.
                            </li>
                            <li>“Content” includes all text, graphics, logos, images, and other materials available on the website.</li>
                            <li>“Third-Party Services” means any services provided by third parties that may be integrated or linked to our website.
                            </li>
                        </ul>
                        <h4> Use of Our Website and Services
                        </h4>
                        <p>a. Eligibility</p>
                        <p>You must be at least 18 years old (or the legal age of majority in your jurisdiction) to use our website and services.</p>
<p>b. Account Registration</p>
<p>Some features of our services may require you to register an account. You agree to provide accurate and complete information and to update it as necessary. You are responsible for maintaining the confidentiality of your account credentials.</p>
<p>c. Permitted Use</p>
<p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You must not:</p>

                        <ul class="custom-list">
                            <li>Violate any applicable law or regulation.
                            </li>
                            <li>Infringe upon any intellectual property rights.</li>
                            <li>Transmit any viruses, malware, or harmful content.
                            </li>
                            <li>Engage in unauthorized data collection or other harmful activities.
                            </li>

                        </ul>
                        <h4> Intellectual Property
                        </h4>
                        <p>All content, trademarks, logos, and software on our website are the property of Quecko or its licensors. You may view, download, and print content for your personal, non-commercial use only. Any other use of our intellectual property requires prior written consent from Quecko.</p>
                        <h4> Disclaimers and Limitation of Liability
                        </h4>
                        <p>a.  No Warranty
                        </p>
                        <p>Our website and services are provided “as is” without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                        </p>
                        <p>b.  Limitation of Liability
                        </p>
                        <p>To the fullest extent permitted by law, Quecko shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website or services, even if advised of the possibility of such damages.
                        </p>




                        <p>c. Indemnification

                        </p>
                        <p>You agree to indemnify, defend, and hold harmless Quecko, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our website or violation of these Terms.

                        </p>

                       <h4> Third-Party Links and Services
                       </h4>
                       <p>Our website may contain links to third-party websites or services that are not owned or controlled by Quecko. We are not responsible for the content or practices of these third parties. Your use of any linked website is at your own risk.</p>
                       <h4>Modifications to Terms</h4>
                       <p>We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the website or services following any changes constitutes acceptance of the new Terms.
                       </p>
                       <h4>Governing Law and Dispute Resolution
                       </h4>
                       <p>These Terms and your use of our website and services shall be governed by and construed in accordance with the laws of [Insert Governing Jurisdiction]. Any disputes arising under or in connection with these Terms shall be resolved through negotiation in good faith. If a resolution cannot be reached, disputes will be submitted to [arbitration/mediation] in [Insert City, Country].
                       </p>
                       <h4> Contact Information</h4>
                       <p>If you have any questions about these Terms and Conditions, please contact us at:
Email: [info@quecko.com]
Phone: +971-50-740-0268
</p>
                    </div>
                </div>
            </section>
            <Work/>
            <Footer/>
        </>

    )
}

export default termsconditions
