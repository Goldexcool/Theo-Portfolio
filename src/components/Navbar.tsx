"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
const handleItemClick = () => {
  setIsOpen(false);
};
  return (
    <header className='flex items-center justify-center max-w-full position-fixed mt-4'>
      <nav className='flex items-center w-full justify-between px-[3rem]  md:[6rem]'>
        <h1 className='text-[30px] text-red-500 '>Theo United</h1>
        <div className="flex items-center justify-center gap-4 text-main-black text-[20px] hidden md:inline-flex"  >
          <a href="/">Home</a>
          <a href="/create">About Us</a>
          <a href="/create">Services</a>
          <a href="/create">Gallery</a>
          <a href="/create">Contact Us</a>
        </div>
        <div className='flex items-center justify-center gap-2 cursor-pointer text-[17px] hidden md:inline-flex '>
          <i className='bx bx-phone text-main-black text-[20px]'></i>
          <h1 className='text--main-black'>08070583707</h1>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <i className='bx bx-moon text-main-black text-[20px] cursor-pointer'></i>
        <div className='md:hidden'>
        <i className='bx bx-grid-alt text-[20px] cursor-pointer blc md:hidden' onClick={toggleMenu}></i>
        </div>
        </div>
      </nav>
      <div className={`hamburger-menu fixed top-0 right-0 h-full w-full bg-white transform transition-transform ease-in-out duration-300 justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="close-button p-4 cursor-pointer absolute top-0 right-0" onClick={toggleMenu}>
        <i className="bx bx-x text-gray-800 text-3xl"></i>
      </div>
      <div className="menu flex flex-col gap-[20px] items-center justify-center p-6 h-[100vh] ">
        <ul className="text-[30px] text-center mt-10">
          <a href='#' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Home</li></a>
          <a href='#about' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">About Us</li></a>
          <a href='#skill' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Services</li></a>
          <a href='#portfolio' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Gallery</li></a>
          <a href='#contact' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Contact Us</li></a>
          
        </ul>
      </div>
    </div>
      
    </header>
  );
}

export default Navbar;
