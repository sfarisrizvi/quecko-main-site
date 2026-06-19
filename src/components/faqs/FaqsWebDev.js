"use client"

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqswebdevelp = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <span  className='faqqs_div'>FAQ<span className='small_text'>s</span></span>
                        <h2>FAQs About Web 3 Development</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What industries can benefit from Web3 development?
                                </Accordion.Header>
                                <Accordion.Body>
                                Web3 solutions are transforming industries like finance (DeFi), gaming (GameFi), real estate (RWA tokenization), supply chain, healthcare, and enterprise solutions by enhancing transparency, security, and decentralization.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>  How long does it take to develop a Web3 application?
                                </Accordion.Header>
                                <Accordion.Body>
                                The timeline depends on the complexity of your project. A basic dApp may take a few weeks, while enterprise-grade blockchain solutions may require several months. Our team provides detailed project timelines after consultation.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> What blockchain networks do you support?
                                </Accordion.Header>
                                <Accordion.Body>
                                We develop on Ethereum, BNB Chain, Solana, Polygon, Avalanche, Near, Cosmos, and other custom blockchain networks, depending on your project requirements.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span> Do you offer post-launch support?
                                </Accordion.Header>
                                <Accordion.Body>
                                Absolutely! We provide ongoing maintenance, security updates, and feature enhancements to keep your Web3 application running smoothly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span> Can you integrate smart contracts with existing applications?

                                </Accordion.Header>
                                <Accordion.Body>
                                Yes! We specialize in integrating smart contracts, decentralized storage, and blockchain functionalities into existing apps, ensuring seamless Web3 adoption.

                                </Accordion.Body>
                            </Accordion.Item>


                            {/* <Accordion.Item eventKey="5">
                                <Accordion.Header> <span>06.</span> What is the importance of tokenization in blockchain?

                                </Accordion.Header>
                                <Accordion.Body>
                                Tokenization allows real-world assets (real estate, stocks, digital art) to be converted into digital tokens on a blockchain, making them easier to trade, more accessible, and highly secure.
                                </Accordion.Body>
                            </Accordion.Item> */}
                            {/* <Accordion.Item eventKey="6">
                                <Accordion.Header> <span>07.</span> How do I choose the right blockchain for my project?
                                </Accordion.Header>
                                <Accordion.Body>
                                It depends on your requirements—Ethereum for smart contracts, Solana for high-speed transactions, Binance Smart Chain for cost-effective solutions, and private blockchains for enterprise use cases.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header> <span>08.</span> Is blockchain development expensive?
                                </Accordion.Header>
                                <Accordion.Body>
                                Costs vary based on project complexity, features, and blockchain type. However, investing in blockchain enhances security, efficiency, and long-term cost savings for businesses.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header> <span>09.</span>How long does it take to develop a blockchain solution?
                                </Accordion.Header>
                                <Accordion.Body>
                                Timelines depend on project scope. A simple smart contract may take a few weeks, while a custom blockchain platform or dApp can take several months to develop.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header> <span>10.</span>Can I integrate blockchain with my existing business systems?

                                </Accordion.Header>
                                <Accordion.Body>
                                Yes! Many blockchain solutions offer seamless API integrations to enhance security, automation, and transparency in existing ERP, CRM, and cloud-based systems.
                                </Accordion.Body>
                            </Accordion.Item> */}

                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqswebdevelp