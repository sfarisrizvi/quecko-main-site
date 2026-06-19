"use client"

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqsnodes = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <span  className='faqqs_div'>FAQ<span className='small_text'>s</span></span>
                        <h2>Frequently Asked Questions (FAQs) About Infrastructure & Node Services</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What are Infrastructure & Node Services?
                                </Accordion.Header>
                                <Accordion.Body>
                                Infrastructure and node services involve setting up and maintaining the foundational components of blockchain networks, such as full nodes, validators, RPC endpoints, and APIs. These services ensure secure, scalable, and efficient blockchain operations.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>Why does my business need Infrastructure & Node Services?
                                </Accordion.Header>
                                <Accordion.Body>
                                These services are essential for businesses looking to participate in blockchain networks, validate transactions, secure data, and build decentralized applications. They provide the backbone for scalability, security, and seamless operations.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> What is the difference between a full node and a validator?
                                </Accordion.Header>
                                <Accordion.Body>
                                Full Node: Maintains a complete copy of the blockchain, validates transactions, and ensures network transparency.
Validator: Participates in consensus mechanisms (e.g., Proof-of-Stake) to secure the network and validate blocks, often earning rewards in return.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>Can I run my own nodes, or should I use a service provider?
                                </Accordion.Header>
                                <Accordion.Body>
                                While you can run your own nodes, it requires technical expertise, resources, and ongoing maintenance. Using a service provider like Quecko ensures hassle-free setup, optimization, and 24/7 support.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>What industries benefit from Infrastructure & Node Services?
                                </Accordion.Header>
                                <Accordion.Body>
                                Industries like DeFi, supply chain, healthcare, gaming, real estate, telecommunications, and government sectors benefit from these services to enhance transparency, security, and efficiency.

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="5">
                                <Accordion.Header> <span>06.</span>How do RPC & API services work?


                                </Accordion.Header>
                                <Accordion.Body>
                                RPC (Remote Procedure Call) and API services allow applications to interact with blockchain networks. They enable functions like querying data, sending transactions, and accessing network information seamlessly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header> <span>07.</span> What is cross-chain interoperability, and how do nodes enable it?

                                </Accordion.Header>
                                <Accordion.Body>
                                Cross-chain interoperability allows different blockchain networks to communicate and share data or assets. Nodes and bridges facilitate this by acting as connectors between blockchains.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header> <span>08.</span>How secure are Infrastructure & Node Services?

                                </Accordion.Header>
                                <Accordion.Body>
                                Quecko’s services are built with top-tier security protocols, ensuring tamper-proof operations, data integrity, and protection against attacks.


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header> <span>09.</span>Can I customize node services for my specific business needs?

                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, Quecko offers tailored solutions to meet your unique requirements, whether you need private nodes, custom RPC endpoints, or validator setups.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header> <span>10.</span>How do I get started with Quecko’s Infrastructure & Node Services?

                                </Accordion.Header>
                                <Accordion.Body>
                                Simply contact our team for a consultation. We’ll assess your needs and provide a customized solution to power your blockchain journey.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqsnodes