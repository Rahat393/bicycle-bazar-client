import React from 'react';
import img from '../../../assets/image/contact/12982910_5124556.jpg'

const Contact = () => {
  return (
    <React.Fragment>
    <h2 className='text-center text-4xl font-bold text-green-700 mt-6'>Contact Us</h2>
    <section className='flex lg:flex-row lg:gap-14 gap-6 flex-col max-w-screen-xl mx-auto mb-10 mt-10'>
      <div className='lg:w-[35%]' data-aos="fade-right">

        <img src={img} alt="" className='w-full rounded-2xl' />
      </div>
      <div className='lg:w-[65%]' data-aos="fade-left">
        <form  >
          <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-2"  required/>
          <input type="text" placeholder="Email" className="input input-bordered w-full mb-2"  required/>
          <textarea className="textarea textarea-bordered w-full h-60" placeholder="Your Message" required></textarea>
          <button className='btn btn-accent normal-case text-white mt-8 lg:mx-0 mx-auto flex items-center gap-2'>
            Send Message
             
          </button>
        </form>
      </div>
    </section>
  </React.Fragment>
  );
};

export default Contact;