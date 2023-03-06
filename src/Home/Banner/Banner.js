import React from 'react';
import img from '../../assets/bannerImg/pexels-pixabay-207779.jpg'
import './Banner.css'

const Banner = () => {
  // const styles = {
  //   backgroundImage: `url(${img})`,

  //   backgroundSize: ' bannerImg   ',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   /* other styles */
  // };
  const styles = { 
    background: '-webkit-linear-gradient(#83BD75, #FEFBF6)', /* for Safari 5.1 to 6.0 */
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    /* other styles */
  };
  return (
    <div >
     <div className='mt-10' >
     <img className='h-[600px] w-full rounded-lg' src={img} alt="" />
      <h2 style={styles} className='title text-[gradient-to-r from-white to-secondary] text-4xl font-semibold font-[Metamorphous] '>Find the cicycle <br /> <span  >of your choice within</span> <br /> your affordability</h2>
     </div>
    </div>
  );
};

export default Banner;