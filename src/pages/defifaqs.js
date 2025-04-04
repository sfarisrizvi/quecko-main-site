import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Defifaqs = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <h5 className='faqqs_div'>FAQ</h5>
                        <h2>Frequently Asked Questions (FAQs) About Web3 & DeFi Solutions</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What is a decentralized exchange (DEX)?

                                </Accordion.Header>
                                <Accordion.Body>
                                A DEX is a platform that allows users to trade cryptocurrencies directly without intermediaries, using blockchain technology for secure and transparent transactions.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span> How does yield farming work?
                                </Accordion.Header>
                                <Accordion.Body>
                                Yield farming involves lending or staking crypto assets on DeFi platforms to earn rewards, typically in the form of additional tokens or interest.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> What is the difference between AMM and order book-based DEX?
                                </Accordion.Header>
                                <Accordion.Body>
                                AMM-based DEX uses liquidity pools for trading, while order book-based DEX relies on a traditional buy/sell order system.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span> Can Quecko integrate NFTs into my existing platform?
                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, Quecko can integrate NFT functionality into your existing platform using APIs and SDKs, enabling features like minting, trading, and auctions.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span> What industries can benefit from Quecko’s DeFi solutions?
                                </Accordion.Header>
                                <Accordion.Body>
                                Industries like finance, gaming, real estate, and e-commerce can leverage Quecko’s DeFi solutions for secure transactions, tokenized assets, and decentralized financial services.

                                </Accordion.Body>
                            </Accordion.Item>




                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Defifaqs