"use client";
import React, { useState, useEffect, useRef } from "react";
// import fomix from '../../public/images/logo.png'
import Image from "next/image";
import logo from "../../public/Theo_thermal_logo-removebg-preview.png";
import image from "../../public/images/habeeb.svg";
import Preloader from "./Preloader";
const Navbar = () => {
  const themeButton = useRef(null);

  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for the preloader

  useEffect(() => {
    // Simulating a delay to demonstrate the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Update the scrolled state based on the scroll position
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  const iconTheme = "bx-sun"; // Without a specific icon class

  const getCurrentTheme = () => (selectedTheme === "dark" ? "dark" : "light");
  const getCurrentIcon = () =>
    selectedIcon === "bx bx-sun" ? "bx bx-sun" : "bx bx-moon";

  const handleButtonClick = () => {
    setSelectedTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
    setSelectedIcon((currentIcon) =>
      currentIcon === "bx bx-moon" ? "bx bx-sun" : "bx bx-moon"
    );
  };

  useEffect(() => {
    // Check the user's system preference for dark mode
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setSelectedTheme("dark");
      } else {
        setSelectedTheme("light");
      }

      // Disable the preloader once the page is loaded
      window.addEventListener("load", () => {
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && themeButton.current) {
      // Apply the selected theme and icon to the body and themeButton
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      (themeButton.current as HTMLElement)?.classList?.[
        selectedIcon === "bx bx-moon" ? "add" : "remove"
      ](iconTheme);
      // Store the selected theme and icon in local storage
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    }
  }, [selectedTheme, selectedIcon, darkTheme, iconTheme, themeButton]);

  // Return the preloader component while loading is true
  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-hero-pattern">
      <header
        className={`${
          scrolled ? "bg-white shadow-md" : ""
        } fixed top-0 left-0 right-0 z-50 transition-all ease-in-out px-10 duration-300 p-3`}
      >
        <nav className="flex items-center w-full justify-between px-[0rem]  ">
          <h1 className="md:text-4xl font-bold text-[25px]">
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
              THEO UNITED
            </span>
          </h1>
          {/* <Image src={logo} alt="logo" width={100} height={10}  /> */}
          <div className="flex items-center justify-center gap-4 text-[20px] hidden lg:inline-flex">
            <a href="#" className={scrolled ? "text-black" : "text-white"}>
              Home
            </a>
            <a href="#about" className={scrolled ? "text-black" : "text-white"}>
              About Us
            </a>
            <a
              href="#services"
              className={scrolled ? "text-black" : "text-white"}
            >
              Services
            </a>
            <a
              href="#gallery"
              className={scrolled ? "text-black" : "text-white"}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className={scrolled ? "text-black" : "text-white"}
            >
              Contact Us
            </a>
          </div>
          {/* <div className="flex items-center justify-center gap-2 cursor-pointer text-[17px] h lg:inline-flex text-main-gray-light ">
            <i className="bx bx-phone text-main-gray-light  text-[20px]"></i>
            <h1 className="text--main-black">08070583707</h1>
          </div> */}
          <div className="flex justify-center items-center gap-3">
            <i
              className={
                scrolled
                  ? "bx bx-moon text-black text-[20px] cursor-pointer"
                  : "bx bx-moon text-white text-[20px] cursor-pointer"
              }
              ref={themeButton}
              onClick={handleButtonClick}
            ></i>
            <div className="lg:hidden">
              <i
                className={
                  scrolled
                    ? "bx bx-grid-alt text-black text-[20px] cursor-pointer"
                    : "bx bx-grid-alt text-white text-[20px] cursor-pointer"
                }
                onClick={toggleMenu}
              ></i>
            </div>
          </div>
        </nav>
        <div
          className={`hamburger-menu fixed top-0 right-0 h-full w-full bg-white transform transition-transform ease-in-out duration-300 justify-center ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="close-button p-4 cursor-pointer absolute top-0 right-0"
            onClick={toggleMenu}
          >
            <i className="bx bx-x text-gray-800 text-3xl"></i>
          </div>
          <div className="menu flex flex-col gap-[20px] items-center justify-center p-6 h-[100vh] ">
            <ul className="text-[20px] text-center mt-10">
              <a href="#" onClick={handleItemClick}>
                <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">
                  Home
                </li>
              </a>
              <a href="#about" onClick={handleItemClick}>
                <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">
                  About Us
                </li>
              </a>
              <a href="#skill" onClick={handleItemClick}>
                <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">
                  Services
                </li>
              </a>
              <a href="#portfolio" onClick={handleItemClick}>
                <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">
                  Gallery
                </li>
              </a>
              <a href="#contact" onClick={handleItemClick}>
                <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">
                  Contact Us
                </li>
              </a>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
