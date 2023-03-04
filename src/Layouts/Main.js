import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import './Main.css'

const Main = () => {
  return (
    <div className='wrapper'>
      <div className='content'>
     <Navbar></Navbar>
     <Outlet className='max-w-screen-xl mx-auto'></Outlet>
      </div>
      <footer className='footerr'>
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;