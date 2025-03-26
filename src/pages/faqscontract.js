import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faqscontract = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <h1>FAQ</h1>
                        <h2>Frequently Asked Questions (FAQs) About Blockchain Development</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What is blockchain development, and how can it benefit my business?
                                </Accordion.Header>
                                <Accordion.Body>
                                Blockchain development involves creating decentralized applications, smart contracts, and blockchain-based platforms to enhance security, transparency, and efficiency. It helps businesses streamline operations, reduce costs, prevent fraud, and build trust with users.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span> What industries can benefit from blockchain technology?</Accordion.Header>
                                <Accordion.Body>
                                Blockchain is transforming industries like finance (DeFi), supply chain, healthcare, gaming, real estate, digital identity, and enterprise security by offering secure, decentralized solutions.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> What’s the difference between Layer 1 and Layer 2 blockchain solutions?</Accordion.Header>
                                <Accordion.Body>
                                Layer 1 refers to the base blockchain (e.g., Ethereum, Solana, Bitcoin) that processes transactions directly.
<br></br>
Layer 2 solutions (e.g., Polygon, Arbitrum) operate on top of Layer 1 to improve scalability and reduce transaction fees.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>What are smart contracts, and how do they work?</Accordion.Header>
                                <Accordion.Body>
                                Smart contracts are self-executing programs stored on a blockchain that automatically enforce agreements when predefined conditions are met—eliminating the need for intermediaries.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>How does a dApp (decentralized application) differ from a traditional app?
                                </Accordion.Header>
                                <Accordion.Body>
                                Unlike traditional apps, dApps run on decentralized networks (blockchains) rather than centralized servers, ensuring enhanced security, censorship resistance, and user control over data.

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="5">
                                <Accordion.Header> <span>06.</span> What is the importance of tokenization in blockchain?

                                </Accordion.Header>
                                <Accordion.Body>
                                Tokenization allows real-world assets (real estate, stocks, digital art) to be converted into digital tokens on a blockchain, making them easier to trade, more accessible, and highly secure.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
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
                            </Accordion.Item>
                 
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqscontract