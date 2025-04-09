import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Rawfaqs = () => {
    return (
        <>
            <section className='main_faqs_new'>
                <div className='inner_faqs'>
                    <div className='middle_left'>
                        <span className='faqqs_div'>FAQ</span>
                        <h2>Frequently Asked Questions (FAQs) About Real-World Asset (RWA) Tokenization</h2>
                    </div>
                    <div className='middle_right'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>01.</span>What is RWA tokenization?

                                </Accordion.Header>
                                <Accordion.Body>
                                RWA tokenization is the process of converting real-world assets like real estate, commodities, or bonds into blockchain-based digital tokens, enabling fractional ownership, liquidity, and seamless transactions.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>02.</span> How does RWA tokenization benefit businesses and investors?
                                </Accordion.Header>
                                <Accordion.Body>
                                It enhances liquidity, reduces transaction costs, improves transparency, and allows global accessibility to traditionally illiquid assets.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <span>03.</span> What types of assets can be tokenized?
                                </Accordion.Header>
                                <Accordion.Body>
                                Almost any real-world asset can be tokenized, including real estate, private equity, commodities, luxury goods, and debt instruments.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <span>04.</span>Is RWA tokenization legally compliant?</Accordion.Header>
                                <Accordion.Body>
                                Yes, compliance depends on jurisdiction-specific regulations. Regulated platforms ensure adherence to KYC/AML and security laws.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> <span>05.</span>How secure is RWA tokenization?

                                </Accordion.Header>
                                <Accordion.Body>
                                Blockchain ensures immutability, transparency, and security, while smart contracts automate transactions, reducing fraud risks.
                                </Accordion.Body>
                            </Accordion.Item>




                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rawfaqs