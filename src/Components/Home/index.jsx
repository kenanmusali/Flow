import React, { useState, useEffect } from 'react';
import './style.css';
import Image1 from '../../../public/Image/image1.jpg'
import Image2 from '../../../public/Image/image2.jpg'

function HomeSection() {
  const [bgIndex, setBgIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex === 2 ? 1 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const divHomeSection = document.querySelector('.divHomeSection');
      divHomeSection.classList.add('change-bg');
      divHomeSection.classList.remove(`bg${bgIndex === 1 ? 2 : bgIndex - 1}`);
      divHomeSection.classList.add(`bg${bgIndex}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [bgIndex]);

  return (
    <div className='Home'>
      <div className={`divHomeSection bg${bgIndex}`}>
      </div>
      <div className="divProductsSection">
        <p className='ProductsWaterName'>PRODUCTS</p>
        <div className="divHomeProduct">
          <div className="divProducAbout">
            <video className='video' muted loop>
              <source src="/Video/video3.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterName'>Flow Water</p>
              <p className='WaterMl'>330 ML</p>
            </div>
            <button className='button' type="button">Details</button>
            <button className='button1' type="button">Add To Basket</button>
          </div>
          <div className="divProducAbout">
            <video className='video' muted loop>
              <source src="/Video/video2.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterName'>Flow Water</p>
              <p className='WaterMl'>330 ML</p>
            </div>
            <button className='button' type="button">Details</button>
            <button className='button1' type="button">Add To Basket</button>
          </div>
          <div className="divProducAbout">
            <video className='video' muted loop>
              <source src="/Video/video1.mp4" type="video/mp4" />
            </video>
            <div className="divDataProducts">
              <p className='WaterName'>Flow Water</p>
              <p className='WaterMl'>330 ML</p>
            </div>
            <button className='button' type="button">Details</button>
            <button className='button1' type="button">Add To Basket</button>
          </div>
        </div>
      </div>
      <div className="divAboutProduct">
        <p>A Flow® plastic has a 18% lower climate impact throughout its entire lifecycle compared to a typical plastic bottle made from 100% recycled plastic.[1]</p>
        <img className='Image1' src={Image1} />
      </div>
      <div className="divAboutProduct1">
        <p>[1] The life cycle assessment of Postevand was conducted by Anthesis, the world's largest group of dedicated sustainability experts. The assessment report has undergone third-party review and was performed in compliance with ISO standards 14040 and 14044</p>
      </div>
      <div className="divAboutProduct2">
        <img className='Image2' src={Image2} />
        <p>Lifecycle study results: Proven better</p>
      </div>
    </div>
  );
}

export default HomeSection;
