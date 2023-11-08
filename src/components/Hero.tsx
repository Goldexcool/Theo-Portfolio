"use client"
import React, { useState, useEffect, useRef } from 'react';
import fomix from '../../public/images/logo.png'
import Image from 'next/image'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const themeButton = useRef();

  const ref = useRef();


  const isLocalStorageAvailable =
  typeof window !== "undefined" && window.localStorage;
const [selectedTheme, setSelectedTheme] = useState(
  isLocalStorageAvailable
    ? localStorage.getItem("selected-theme") || "light"
    : null
);
const [selectedIcon, setSelectedIcon] = useState(
  isLocalStorageAvailable
    ? localStorage.getItem("selected-icon") || "bx-sun"
    : null
);

const darkTheme = "dark-theme";
const iconTheme = "bx-sun"; // Without specific icon class

const getCurrentTheme = () => (selectedTheme === "dark" ? "dark" : "light");
const getCurrentIcon = () =>
  selectedIcon === "bx bx-moon" ? "bx bx-moon" : "bx bx-sun";

const handleButtonClick = () => {
  setSelectedTheme((currentTheme) =>
    currentTheme === "dark" ? "light" : "dark"
  );
  setSelectedIcon((currentIcon) =>
    currentIcon === "bx bx-moon" ? "bx bx-sun" : "bx bx-moon"
  );
};

useEffect(() => {
  if (typeof window !== "undefined") {
    // Check the user's system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSelectedTheme("dark");
    } else {
      setSelectedTheme("light");
    }
  }
}, []);

useEffect(() => {
  if (typeof window !== "undefined") {
    // Apply the selected theme and icon to the body and themeButton
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.current.classList[
      selectedIcon === "bx bx-moon" ? "add" : "remove"
    ](iconTheme);

    // Store the selected theme and icon in local storage
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  }
}, [selectedTheme, selectedIcon, darkTheme, iconTheme]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };
  return (
    <main className='relative bg-hero-pattern'>
      
      <header className='flex items-center justify-center max-w-full position-fixed '>
        <nav className='flex items-center w-full justify-between px-[0rem]  md:[6rem] mt-3'>
          <Image src={fomix} alt="logo" width={100} height={100} />
          <div className="flex items-center justify-center gap-4 text-main-gray-light text-[20px] hidden md:inline-flex"  >
            <a href="/">Home</a>
            <a href="/create">About Us</a>
            <a href="/create">Services</a>
            <a href="/create">Gallery</a>
            <a href="/create">Contact Us</a>
          </div>
          <div className='flex items-center justify-center gap-2 cursor-pointer text-[17px] hidden md:inline-flex text-main-gray-light '>
            <i className='bx bx-phone text-main-gray-light  text-[20px]'></i>
            <h1 className='text--main-black'>08070583707</h1>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <i className='bx bx-moon text-main-gray-light  text-[20px] cursor-pointer ' ref={themeButton}  onClick={handleButtonClick}></i>
            <div className='md:hidden'>
              <i className='bx bx-grid-alt text-[20px] cursor-pointer blc md:hidden text-main-gray-light ' onClick={toggleMenu}></i>
            </div>
          </div>
        </nav>
        <div className={`hamburger-menu fixed top-0 right-0 h-full w-full bg-white transform transition-transform ease-in-out duration-300 justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="close-button p-4 cursor-pointer absolute top-0 right-0" onClick={toggleMenu}>
            <i className="bx bx-x text-gray-800 text-3xl"></i>
          </div>
          <div className="menu flex flex-col gap-[20px] items-center justify-center p-6 h-[100vh] ">
            <ul className="text-[20px] text-center mt-10">
              <a href='#' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Home</li></a>
              <a href='#about' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">About Us</li></a>
              <a href='#skill' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Services</li></a>
              <a href='#portfolio' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Gallery</li></a>
              <a href='#contact' onClick={handleItemClick}><li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Contact Us</li></a>

            </ul>
          </div>
        </div>
      </header>

      <section className='w-full flex justify-center h-[100vh]'>
        <div className='flex items-center flex-col justify-center h-screen gap-3 px-[0rem] md:px-[6rem]'>
          <p className='md:text-[30px] text-white text-center text-[20px]' >
            <span className='text-[35px]'>Thoe United</span><br /> with over 12 years of expertise, offers tailored thermal insulation solutions that exceed industry standards, ensuring excellence in every project.
          </p>
          <button className='px-[20px] py-[10px] md:text-[20px] text-[17px] bg-main-blue text-white rounded-[10px]'>Contact Us</button>
        </div>
      </section>
    </main >
  );
}

export default Hero;
