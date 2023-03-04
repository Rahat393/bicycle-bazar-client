import React from 'react';
import logo from '../../assets/reshot-icon-track-bike-6MEXQZ5D2S.svg'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiOutlineCopyrightCircle  } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='bg-secondary'>
      <footer className="footer p-10   text-base-content">
  <div>
    <img className='w-24 h-24' src={logo} alt="" />
     <p className='text-xl'>bicycle Bazar Ltd.<br/>Providing reliable tech since 2023</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Follow Us</span> 
     <div className='flex  mb-4 '>
     <BsFacebook className='mr-6 text-2xl'></BsFacebook>
     <BsYoutube className='mr-6 text-2xl'></BsYoutube>
     <BsTwitter className='mr-6 text-2xl  '></BsTwitter>
     </div>
     <div className='flex'>
      <BsInstagram className='mr-6 text-2xl'></BsInstagram>
      <BsPinterest className='mr-6 text-2xl'></BsPinterest>
       
     </div>
    
  </div>
</footer>
<div className=' text-center mx-auto'>
<div className='flex  justify-center text-white  pb-10'> <AiOutlineCopyrightCircle className='mt-1 mr-2'></AiOutlineCopyrightCircle> bicycle Bazar 2023</div>

</div>
    </div>
  );
};

export default Footer;