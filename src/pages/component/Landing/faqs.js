import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
    return (
        <>
            <section className='main_faqs'id="faqs">
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <h4 className='faqstag'>FAQ</h4>
                        <h2>Answer to your questions</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What services does Quecko offer?</Accordion.Header>
                                <Accordion.Body>
                                Quecko specializes in Web3 development, including decentralized applications (dApps), smart contracts, DeFi solutions, DAOs, NFT marketplaces, and blockchain consulting. We also provide resource augmentation and Web3 marketing to help businesses scale efficiently.                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>How does Quecko ensure the security of blockchain solutions?
                                </Accordion.Header>
                                <Accordion.Body>
                                Security is our top priority. We follow best practices, conduct rigorous smart contract audits, and implement robust encryption protocols to ensure all solutions are secure, reliable, and resistant to vulnerabilities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> Can Quecko help with Web3 marketing and community building?</Accordion.Header>
                                <Accordion.Body>
                                Yes! We provide strategic Web3 marketing services, including brand positioning, community engagement, influencer partnerships, social media growth, and performance marketing to help projects gain traction and build a loyal user base.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span> How does the resource augmentation process work?</Accordion.Header>
                                <Accordion.Body>
                                Our resource augmentation process involves four key steps: consultation, talent matching, onboarding, and ongoing support. We carefully select top-tier Web3 developers, designers, and marketers to seamlessly integrate with your team and scale your project efficiently.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>How can I get started with Quecko?</Accordion.Header>
                                <Accordion.Body>
                                Getting started is simple! Contact us via our website, email, or social media channels. Our team will schedule a consultation to understand your needs and recommend the best solutions for your project.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs