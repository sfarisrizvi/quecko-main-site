"use client"

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqscompliance = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <span  className='faqqs_div'>FAQ<span className='small_text'>s</span></span>
                        <h2>Frequently Asked Questions (FAQs) About Tokenomics & Compliance</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>How does tokenomics impact the sustainability of a blockchain project?
                                </Accordion.Header>
                                <Accordion.Body>
                                Tokenomics defines the supply, distribution, and utility of tokens, ensuring a balanced ecosystem by preventing inflation, ensuring liquidity, and incentivizing long-term participation.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span> What are the key compliance requirements for token launches?
                                </Accordion.Header>
                                <Accordion.Body>
                                Projects must adhere to KYC/AML regulations, securities laws (e.g., SEC, MiCA), tax obligations, and reporting standards to prevent legal risks and ensure investor protection.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> How do DAOs ensure compliance while maintaining decentralization?
                                </Accordion.Header>
                                <Accordion.Body>
                                DAOs use legal wrappers, structured governance frameworks, and jurisdiction-specific entities (like Wyoming DAO LLCs) to maintain decentralization while ensuring regulatory alignment.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span> Why is regulatory compliance crucial for DeFi and stablecoins?
                                </Accordion.Header>
                                <Accordion.Body>
                                DeFi protocols and stablecoins operate within financial regulations (e.g., FATF travel rule, MiCA) to prevent fraud, money laundering, and illicit transactions while ensuring user security.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>How does tokenization of real-world assets (RWA) comply with securities laws?

                                </Accordion.Header>
                                <Accordion.Body>
                                RWA tokenization must follow securities regulations (e.g., Reg D, Reg S, or EU Prospectus Directive) to ensure legal ownership, investor rights, and adherence to financial compliance standards.

                                </Accordion.Body>
                            </Accordion.Item>




                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqscompliance