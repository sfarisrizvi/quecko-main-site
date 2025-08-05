import VideoWithFallback from '@/hooks/videowitfallback';
import React from 'react';

const Collabration = () => {
  return (
    <>
      <section className='collab' id="work">
        <div className='inner_collab'>
          <VideoWithFallback
            videoSrc="https://media.quecko.com/videos/stonesvideo.mp4"
            thumbnail="/Assets/thumbnails/circles.webp"
            height={{
              default: '639px',
              responsive: '581px'
            }}
          />
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
