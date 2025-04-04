import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Mobileappfaqs = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <h6  className='faqqs_div'>FAQ</h6>
                        <h2>Frequently Asked Questions (FAQs) About Mobile App Development</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What is Web3 mobile app development?

                                </Accordion.Header>
                                <Accordion.Body>
                                Web3 mobile app development involves creating decentralized applications (DApps) that run on blockchain networks, enabling secure and transparent interactions.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>How do Web3 apps differ from traditional mobile apps?</Accordion.Header>
                                <Accordion.Body>
                                Web3 apps operate on decentralized networks, giving users control over their data and assets, unlike traditional apps that rely on centralized servers.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span>What are the key benefits of integrating Web3 into mobile apps?
                                </Accordion.Header>
                                <Accordion.Body>
                                Web3 integration enables secure transactions, blockchain-based authentication, digital asset ownership, and decentralized finance (DeFi) features.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>Can Web3 functionality be added to existing mobile apps?
                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, existing apps can integrate Web3 features like crypto payments, NFTs, and blockchain authentication through APIs and SDKs.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>What industries can benefit from Web3 mobile applications?

                                </Accordion.Header>
                                <Accordion.Body>
                                Industries like finance, gaming, real estate, healthcare, and e-commerce can leverage Web3 for secure transactions, tokenized assets, and decentralized identity management.

                                </Accordion.Body>
                            </Accordion.Item>




                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mobileappfaqs