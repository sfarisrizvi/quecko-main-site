import React from 'react'
import Header from './component/Landing/header'
import Contactus from './contactus'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'

const contactusdetail = () => {
  return (
    <>
    <Header/>
    <div className='detailss_page'>
    <div className='contact_us_detailss'>
    <section className='contact_us_main mycontactus'>
                <div className='left_siide'>
                    <p>Contact us</p>
                    <h1>Become a client</h1>
                    <h2>Share your marketing challenge with us, and we'll craft a tailored solution just for you. Get a proposal!
                    </h2>
                    <h3>Get in touch</h3>
                    <div className='svgs_divv'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0057 14.7046C13.4086 15.1026 12.7151 15.313 12 15.313C11.285 15.313 10.5914 15.1026 9.99431 14.7046L0.159797 8.14801C0.105234 8.11164 0.0520781 8.07372 0 8.03472V18.7783C0 20.0101 0.999609 20.9877 2.20936 20.9877H21.7906C23.0224 20.9877 24 19.9881 24 18.7783V8.03467C23.9478 8.07376 23.8945 8.11178 23.8398 8.1482L14.0057 14.7046Z" fill="black" />
                            <path d="M0.939844 6.97795L10.7744 13.5345C11.1466 13.7827 11.5733 13.9068 12 13.9068C12.4267 13.9068 12.8534 13.7827 13.2256 13.5345L23.0602 6.97795C23.6487 6.58584 24 5.92959 24 5.2213C24 4.00345 23.0092 3.0127 21.7914 3.0127H2.20861C0.990797 3.01274 0 4.00349 0 5.22248C0 5.92959 0.351375 6.58584 0.939844 6.97795Z" fill="black" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <g clip-path="url(#clip0_988_136)">
                                <path d="M9.52826 15.426L9.13126 21.01C9.69926 21.01 9.94526 20.766 10.2403 20.473L12.9033 17.928L18.4213 21.969C19.4333 22.533 20.1463 22.236 20.4193 21.038L24.0413 4.06603L24.0423 4.06503C24.3633 2.56903 23.5013 1.98403 22.5153 2.35103L1.22526 10.502C-0.227738 11.066 -0.205738 11.876 0.978262 12.243L6.42126 13.936L19.0643 6.02503C19.6593 5.63103 20.2003 5.84903 19.7553 6.24303L9.52826 15.426Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_988_136">
                                    <rect width="24" height="24" fill="white" transform="translate(0.111328 0.245117)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_988_139)">
                                <path d="M19.929 19.5943L19.9338 19.5935V12.5562C19.9338 9.11343 19.1927 6.46143 15.1679 6.46143C13.233 6.46143 11.9346 7.52319 11.4045 8.52978H11.3486V6.78283H7.53247V19.5935H11.5061V13.2501C11.5061 11.58 11.8227 9.96492 13.8911 9.96492C15.929 9.96492 15.9594 11.871 15.9594 13.3573V19.5943H19.929Z" fill="black" />
                                <path d="M1.06226 6.78369H5.04067V19.5944H1.06226V6.78369Z" fill="black" />
                                <path d="M3.04982 0.405762C1.77779 0.405762 0.745605 1.43794 0.745605 2.70998C0.745605 3.98201 1.77779 5.03578 3.04982 5.03578C4.32186 5.03578 5.35404 3.98201 5.35404 2.70998C5.35324 1.43794 4.32106 0.405762 3.04982 0.405762Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_988_139">
                                    <rect width="19.1885" height="19.1885" fill="white" transform="translate(0.745605 0.405762)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='right_sidde'>
                    <input type="text" id="fname" name="fname" placeholder='Name' />
                    <input type="text" id="fname" name="fname" placeholder='Telegram' />
                    <input type="text" id="fname" name="fname" placeholder='Email@company.com' />
                    <textarea placeholder='Your Message' id="w3review" name="w3review" rows="6" cols="50"/>
                    <div className='button_div'>
                        <button>Get in Touch</button>
                    </div>
                   
                </div>
            </section>
    </div>
    </div>

    
    <Work/>
    <Footer/>
    </>
  )
}

export default contactusdetail
