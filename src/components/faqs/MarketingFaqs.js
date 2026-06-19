"use client"

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Marketingfaqs = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <span  className='faqqs_div'>FAQ<span className='small_text'>s</span></span>
                        <h2>FAQs About Social Media Management
                        </h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>Does Quecko offer any additional marketing services?

                                </Accordion.Header>
                                <Accordion.Body>
                                Yes! In addition to social media marketing (SMM), we provide PR services, influencer marketing, and community management to maximize your Web3 project’s visibility and engagement.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>Will I retain ownership of my social media accounts?
                                </Accordion.Header>
                                <Accordion.Body>
                                Absolutely! You maintain full control and ownership of your accounts. Quecko acts as your strategic partner, managing and optimizing your social media presence while ensuring transparency and security.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> What is required to promote my Web3 project on social media, and what are the deadlines?</Accordion.Header>
                                <Accordion.Body>
                                Successful promotion requires a deep understanding of your project, data analysis, and the right marketing strategies. We start by optimizing your social media profiles immediately after onboarding. A full content strategy typically takes up to 10 days to ensure the best approach for growth and engagement.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>Can Quecko help if I don’t have existing social media accounts?</Accordion.Header>
                                <Accordion.Body>
                                Yes! If you don’t have social media accounts, we can set them up from scratch, optimize them, and build a strong online presence tailored to your Web3 project’s needs.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>What results can I expect from Quecko’s Web3 social media marketing services?

                                </Accordion.Header>
                                <Accordion.Body>
                                Our services are designed to increase brand awareness, grow your follower base, boost engagement, and drive conversions. Whether your goal is to promote an NFT launch, a DeFi platform, or a blockchain startup, we craft strategies that deliver measurable results.
                                </Accordion.Body>
                            </Accordion.Item>





                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Marketingfaqs