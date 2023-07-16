import React from 'react';
import img from '../assets/404/DALL·E 2023-03-19 00.04.28 - 404.png'

const Notfound = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-center mt-8 mb-5'>Page Not Found</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Notfound;