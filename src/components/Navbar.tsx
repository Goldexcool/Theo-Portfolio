import React from 'react';

const Navbar = () => {
  return (
    <header className='flex items-center justify-center max-w-full'>
      <nav className='flex items-center w-full justify-between px-[20px] py-[20px]'>
        <h1 className='text-[30px] text-main-black '>Theo United</h1>
        <div className="flex items-center justify-center gap-4 text-main-black">
          <a href="/">Home</a>
          <a href="/create">About Us</a>
          <a href="/create">Services</a>
          <a href="/create">Gallery</a>
          <a href="/create">Contact Us</a>
        </div>
        <i className='bx bx-moon text-main-black'></i>
        <div>
        <i className='bx bx-phone text-main-black'></i>
        <h1>08070583707</h1>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
