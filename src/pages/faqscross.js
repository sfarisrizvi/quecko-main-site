import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqscross = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <h1>FAQ</h1>
                        <h2>FAQs  Related to Interoperability & Cross-Chain Solutions

                        </h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What is blockchain interoperability?

                                </Accordion.Header>
                                <Accordion.Body>
                                Blockchain interoperability refers to the ability of different blockchain networks to communicate, share data, and transfer assets seamlessly.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>Why is interoperability important in blockchain?</Accordion.Header>
                                <Accordion.Body>
                                It enables cross-chain asset transfers, improves scalability, reduces network congestion, and enhances overall blockchain adoption by eliminating isolated ecosystems.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span>How do cross-chain bridges work?
                                </Accordion.Header>
                                <Accordion.Body>
                                Cross-chain bridges facilitate asset and data transfers between different blockchain networks using smart contracts, wrapped tokens, and decentralized validation methods.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>What industries benefit from blockchain interoperability?
                                </Accordion.Header>
                                <Accordion.Body>
                                Industries like finance, healthcare, supply chain, gaming, and real estate leverage interoperability for seamless transactions, decentralized identity, and enhanced efficiency.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>Can existing blockchain applications become interoperable?

                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, existing dApps and blockchain platforms can integrate interoperability solutions, enabling cross-chain functionality and multi-network compatibility.
                                </Accordion.Body>
                            </Accordion.Item>


                        
                 
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqscross