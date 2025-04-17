import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const fahad = () => {
     const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const checkScreenSize = () => {
                setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint
            };

            checkScreenSize(); // Initial check

            window.addEventListener('resize', checkScreenSize);

            return () => window.removeEventListener('resize', checkScreenSize);
        }, []);

        if (!isMobile) {
            return <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>This page is only available on mobile devices.</h2>
            </div>
        }
  return (
    <>
      <section className='fahadprnt' >
        <div className="postionbottomimg">
          <img className='img-fluid imggebottom' src="\Assets\groups.png" alt="" />
        </div>
        <div className="contianer">
          <div className="buildbloks">
            <img className='img-fluid imgtopheader' src="\Assets\buildgroupbg.png" alt="" />
          </div>
          <div className="profileimf">
            <img className='img-fluid img-profile' src="\Assets\fahadprofile.png" alt="" />
            <Link href="https://t.me/Ferroo155" target='blank'>
            <img className='img-fluid telegramshare' src="\Assets\telegramlogo.svg" alt="" />
            </Link>
          </div>
          <div className="namepalatesss">
            <h2>Fahad Suleman</h2>
            <p><span>CMO </span>at Quecko</p>
          </div>
          <div className="aboutfahad">
            <h2>About Me</h2>
            <p>CMO at Quecko, Web3 marketer and blockchain development consultant helping businesses scale
              through innovative blockchain solutions.</p>
          </div>
          <div className="prntlinkbtn">

          <div className='social'>
            <a href="https://api.whatsapp.com/send/?phone=923333480179&text&type=phone_number&app_absent=0"  target='blank'> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M18.5641 14.8496L18.5549 14.9283C16.313 13.7779 16.0785 13.6246 15.789 14.0718C15.5882 14.3814 15.003 15.0836 14.8266 15.2915C14.6482 15.4961 14.4708 15.5119 14.168 15.3702C13.8621 15.2127 12.8803 14.8821 11.7181 13.8115C10.8128 12.977 10.2052 11.9536 10.0257 11.6387C9.72701 11.1076 10.352 11.032 10.9209 9.92356C11.0228 9.70314 10.9708 9.52995 10.8954 9.37355C10.8189 9.2161 10.2103 7.67312 9.95538 7.05802C9.7107 6.44503 9.45888 6.5227 9.27027 6.5227C8.68304 6.47022 8.25382 6.47862 7.87559 6.88378C6.2301 8.74586 6.64504 10.6667 8.05298 12.7093C10.8199 16.4377 12.2941 17.1242 14.9897 18.0772C15.7176 18.3155 16.3813 18.2819 16.9064 18.2042C17.4916 18.1087 18.7079 17.4474 18.9617 16.7074C19.2217 15.9674 19.2217 15.3534 19.1452 15.2117C19.0698 15.07 18.87 14.9913 18.5641 14.8496Z" fill="white" />
              <path d="M22.23 3.95742C13.9003 -3.90313 0.114833 1.79796 0.109417 12.8871C0.109417 15.1037 0.704167 17.2653 1.83733 19.1741L0 25.6905L6.86292 23.9435C15.4267 28.4591 25.9957 22.463 26 12.8935C26 9.53478 24.6567 6.37385 22.2137 3.99866L22.23 3.95742ZM23.8355 12.8586C23.829 20.9306 14.7518 25.9718 7.5725 21.8517L7.1825 21.6254L3.12 22.6565L4.20875 18.8018L3.94983 18.4053C-0.517834 11.4626 4.615 2.38911 13.078 2.38911C15.9532 2.38911 18.6518 3.48365 20.6841 5.4665C22.7153 7.43243 23.8355 10.0667 23.8355 12.8586Z" fill="white" />
            </svg></a>
            <a href="mailto:fahad@quecko.com"  target='blank'> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M19.834 4.0835H8.16732C4.66732 4.0835 2.33398 5.8335 2.33398 9.91683V18.0835C2.33398 22.1668 4.66732 23.9168 8.16732 23.9168H19.834C23.334 23.9168 25.6673 22.1668 25.6673 18.0835V9.91683C25.6673 5.8335 23.334 4.0835 19.834 4.0835ZM20.3823 11.1885L16.7307 14.1052C15.9607 14.7235 14.9807 15.0268 14.0007 15.0268C13.0207 15.0268 12.029 14.7235 11.2707 14.1052L7.61898 11.1885C7.24565 10.8852 7.18732 10.3252 7.47898 9.95183C7.78232 9.5785 8.33065 9.5085 8.70398 9.81183L12.3557 12.7285C13.2423 13.4402 14.7473 13.4402 15.634 12.7285L19.2857 9.81183C19.659 9.5085 20.219 9.56683 20.5107 9.95183C20.814 10.3252 20.7557 10.8852 20.3823 11.1885Z" fill="white" />
            </svg></a>
            <a href="https://www.quecko.com/"  target='blank'> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.876984 6.79036C2.09985 3.99524 4.50208 1.83224 7.45295 0.932102C7.30422 1.13346 7.1597 1.35025 7.02148 1.58178C6.24062 2.89164 5.62042 4.69472 5.25981 6.79036H0.876984ZM13.5947 0.932102C16.5455 1.83224 18.9478 3.99524 20.1706 6.79036H15.7878C15.4272 4.69472 14.807 2.89164 14.0261 1.58178C13.8879 1.35025 13.7434 1.13346 13.5947 0.932102ZM20.1706 15.2094C18.9478 18.0045 16.5455 20.1675 13.5947 21.0677C13.7434 20.8663 13.8879 20.6495 14.0261 20.418C14.807 19.1081 15.4272 17.305 15.7878 15.2094H20.1706ZM7.45295 21.0677C4.50208 20.1675 2.09985 18.0045 0.876984 15.2094H5.25981C5.62042 17.305 6.24062 19.1081 7.02148 20.418C7.1597 20.6495 7.30422 20.8663 7.45295 21.0677ZM10.5238 0.476074C11.4022 0.476074 12.162 1.1973 12.8208 2.3009C13.5013 3.44168 14.0374 4.99149 14.3664 6.79036H6.68122C7.01027 4.99149 7.54628 3.44168 8.22682 2.3009C8.88561 1.1973 9.64542 0.476074 10.5238 0.476074ZM10.5238 21.5237C9.64542 21.5237 8.88561 20.8025 8.22682 19.6989C7.54628 18.5581 7.01027 17.0083 6.68122 15.2094H14.3664C14.0374 17.0083 13.5013 18.5581 12.8208 19.6989C12.162 20.8025 11.4022 21.5237 10.5238 21.5237ZM20.6688 8.19353C20.9157 9.08736 21.0476 10.0282 21.0476 10.9999C21.0476 11.9716 20.9157 12.9124 20.6688 13.8062H15.985C16.0839 12.9075 16.1365 11.9674 16.1365 10.9999C16.1365 10.0324 16.0839 9.09227 15.985 8.19353H20.6688ZM0.378863 13.8062C0.131904 12.9124 0 11.9716 0 10.9999C0 10.0282 0.131904 9.08736 0.378863 8.19353H5.06266C4.96373 9.09227 4.91111 10.0324 4.91111 10.9999C4.91111 11.9674 4.96373 12.9075 5.06266 13.8062H0.378863ZM14.5748 13.8062H6.47285C6.36902 12.911 6.31429 11.9702 6.31429 10.9999C6.31429 10.0296 6.36902 9.08876 6.47285 8.19353H14.5748C14.6786 9.08876 14.7333 10.0296 14.7333 10.9999C14.7333 11.9702 14.6786 12.911 14.5748 13.8062Z" fill="white" />
            </svg></a>
          </div>
          <Link href="/contact"  target='blank'>
          <button className='buttonbottomgfahadcard'>Let’s Work Together</button>

          </Link>
          </div>
        </div>

      </section>
    </>
  )
}

export default fahad
