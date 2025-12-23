import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqswebdevelp = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <span  className='faqqs_div'>FAQ<span className='small_text'>s</span></span>
                        <h2>FAQs About Prediction Market Development
</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What industries use prediction markets?



                                </Accordion.Header>
                                <Accordion.Body>
                              Sports, DeFi, governance, real estate, climate initiatives, cultural events, enterprise forecasting anywhere collective intelligence provides value.


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span>  How long does development take?
                                </Accordion.Header>
                                <Accordion.Body>
                               Typical build time ranges from 8 to 20 weeks, depending on functionality, oracle complexity, and network selection.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> Which blockchain networks do you support?

                                </Accordion.Header>
                                <Accordion.Body>
                                Solana, Ethereum, Polygon, Arbitrum, Optimism, Base, and multi-chain environments.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>  Do you provide post-launch support?

                                </Accordion.Header>
                                <Accordion.Body>
                                Yes monitoring, oracle management, market tools, governance, upgrades, and ongoing scaling.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span> Can prediction markets be integrated into existing applications?


                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, we can plug prediction logic, AMMs, or oracle layers into any Web2 or Web3 product.


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