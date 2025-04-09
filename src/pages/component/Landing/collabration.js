import React from 'react';

const Collabration = () => {
  return (
    <>
      <section className='collab'id="work">
        <div className='inner_collab'>
          <video className='main-banner-video'
            muted
            playsInline
            autoPlay
            loop
            width="100%"
            id="myVideo">
            <source src="https://res.cloudinary.com/drt6vurtt/video/upload/v1742330995/queckosite%20%28new%29/videos/stonesvideo_gqzerz.webm" type="video/webm" />
          </video>
          {/* <span className='ourstory'>Our story</span> */}
          <div className='top_middle'>
            <div className='middle_colab'>
              <h2>Let&apos;s build a decentralized world together.</h2>
              <p>From a team of four to 100+ Web3 enthusiasts, Quecko has built products with a combined market cap of over $500 million and a user base of 2 million+. Our projects have been ranked among the top 100 on CoinMarketCap.</p>
            </div>
          </div> {/* Closing div for top_middle */}
        </div> {/* Closing div for inner_collab */}
      </section>
    </>
  );
}

export default Collabration;
