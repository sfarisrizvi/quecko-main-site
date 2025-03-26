import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Consultingfaqs = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <h1>FAQ</h1>
                        <h2>Frequently Asked Questions (FAQs) About Enterprise & Consulting Services</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What industries can benefit from your Enterprise & Consulting services?

                                </Accordion.Header>
                                <Accordion.Body>
                                Our services cater to industries such as finance, healthcare, real estate, supply chain, and technology, helping businesses automate processes, enhance security, and drive digital transformation.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>How can blockchain and smart contracts improve enterprise operations?</Accordion.Header>
                                <Accordion.Body>
                                Blockchain enables transparency, automation, and security while smart contracts eliminate intermediaries, reducing costs and streamlining operations with tamper-proof execution.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span>Do you offer custom enterprise solutions based on business needs?</Accordion.Header>
                                <Accordion.Body>
                                Yes, we provide tailor-made blockchain and digital solutions designed to align with your business objectives, ensuring scalability, security, and efficiency.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>How do consulting services help businesses implement emerging technologies?
                                </Accordion.Header>
                                <Accordion.Body>
                                Our consulting services guide businesses in strategic adoption of blockchain, AI, and automation, offering insights on implementation, compliance, and ROI optimization.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>What makes your Enterprise & Consulting services different from competitors?
                                </Accordion.Header>
                                <Accordion.Body>
                                We combine deep technical expertise, industry knowledge, and innovative solutions to deliver high-impact strategies, ensuring a competitive edge in your sector.

                                </Accordion.Body>
                            </Accordion.Item>


                 
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Consultingfaqs