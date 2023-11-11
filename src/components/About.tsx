"use client"
import React from 'react';
import Image from 'next/image';
import about from '../../public/WhatsApp Image 2023-10-31 at 23.46.34 (1).jpeg'
import about2 from '../../public/WhatsApp Image 2023-10-31 at 23.54.05.jpeg'
import checkdouble from '../../public/bx-check-double.svg'
import rocket from '../../public/bx-rocket.svg'
import groups from '../../public/bx-group.svg'
import bulb from '../../public/bx-bulb.svg'
import about3 from '../../public/WhatsApp Image 2023-10-31 at 23.46.34.jpeg'
import { useState, useEffect } from 'react';

const About = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <section className='flex items-center justify-center px-5 md:px-20  mt-[5rem]'>
        <div>
          <div className='flex justify-center items-center flex-col gap-3 mb-4 sm:mb-[3rem] '>
          <div className='flex justify-center items-center gap-3 mb-[1rem] text-center'>
            <hr className='w-[100px] h-[3px] bg-main-blue '/>
            <h2 className='lg:text-[50px] text-[40px] text-main-black'>About <span className='text-main-blue'> Us</span></h2>
            <hr className='w-[100px] h-[3px] bg-main-blue ' />
          </div>
            <h3 className='text-[15px] text-center sm:mb-5 md:text-[20px] text-main-black'>Our Team: The Architects of Insulation Innovation</h3>
          </div>
          <article className=' gap-4 lg:gap-[0rem] justify-center items-center lg:flex-row flex-wrap lg:justify-between lg:w-full w-full flex-col flex text-main-black  md:gap-[0px]'>
            <div className='flex items-center flex-col lg:w-1/2 w-full gap-3 mb-3'>
              <h1 className='md:text-[24px] font-[500] mb-3 text-[17px] lg:text-start text-center'>Crafting Excellence in Thermal Insulation: Our Story, Your Solution</h1>
              <h2 className='md:text-[19px] text-[15px] md:text-left text-center'> At <span className='text-main-blue text-[17px] '>THEO UNITED</span> we are committed to providing exceptional thermal insulation services. Our team brings together over 12 years of individual experience, each member having worked at management levels in various establishments. </h2>
              <h3 className='mt-3 mb-4 md:text-[19px] text-[15px] md:text-left text-center'>Our collective expertise is now united under a single corporate body to ensure our prospective clients&apos; satisfaction with our services.</h3>
              <h4 className='md:text-[19px] text-[15px] md:text-left text-center'>
                We believe in making a difference through the power of insulation. Together with our clients, we are creating a world that&apos;s not only more energy-efficient but also environmentally responsible. Join us on this journey towards a brighter, better-insulated future.
              </h4>
            </div>

            <div className='md:block flex justify-center items-center'>
              <Image src={about} alt="" width={500} height={200} className='h-[500px] rounded-[30px] mb-4 w-[500px]' />
            </div>

            {/* <div className='flex flex-col gap-3'>
            <h1 className='text-[27px] text-bold'>Our Mission</h1>
            <h2 className='text-[17px]'> Our mission is straightforward: to provide our clients with the best thermal insulation services available. We are committed to delivering the highest quality of service to our clients, and we are dedicated to ensuring that our clients are satisfied with our services.
            </h2>
            <Image src={about2} alt='' width={700} height={300} className='h-[600px] rounded-[30px]'/>
          </div> */}
          </article>
        </div>
      </section>


      <section className='flex items-center justify-center md:px-20 mt-[5rem] px-5'>
        <div className=''>
          <div className='flex justify-center items-center  gap-[2px] md:gap-3 mb-[3rem] text-center' >
            <hr className='w-[100px] h-[3px] bg-main-blue '/>
            <h2 className='lg:text-[50px] text-[30px] text-main-black'>Why Choose <span className='text-main-blue'> THEO UNITED</span></h2>
            <hr className='w-[100px] h-[3px] bg-main-blue ' />
          </div>

          <article className=' flex flex-wrap items-center justify-center lg:justify-between lg:w-full lg:flex-row flex-col-reverse gap-4 md:gap-[0px] text-main-black'>
            <div className='lg:block flex justify-center mt-4 lg:mt-0 items-center'>
              <Image src={about} alt="about"width={500} className='h-[500px] rounded-[20px]'/>
            </div>
            <div className='flex flex-col lg:w-1/2 gap-8'>
              <div className='flex gap-3'>
                <i className='bx bx-bulb text-main-black lg:text-[50px] text-[30px]'></i>
                <div className='flex flex-col gap-2'>
                  <span className='text-[19px]'>Innovation</span>
                  <h1 className='text-[15px]'> Our continuous pursuit of innovation ensures that you receive the latest and most efficient insulation solutions.</h1>
                </div>
              </div>

              <div className='flex gap-3 '>
                <i className='bx bx-check-double text-main-black lg:text-[50px] text-[30px]'></i>
                <div className='flex flex-col gap-2'>
                  <span className='text-[20px]'>Quality Assurance</span>
                  <h1 className='text-[15px]'> Our commitment to quality is unwavering. Every project we undertake is executed with precision and attention to detail, guaranteeing exceptional results.</h1>
                </div>
              </div>

              <div className='flex gap-3 '>
                <i className='bx bx-group text-main-black lg:text-[50px] text-[30px]'></i>
                <div className='flex flex-col gap-2'>
                  <span className='text-[19px]'>Collaborative Spirit</span>
                  <h1 className='text-[15px]'> Our collaborative spirit ensures that we work closely with you to understand your needs and deliver customized solutions that meet your unique requirements.</h1>
                </div>
              </div>

              <div className='flex gap-3  '>
                <i className='bx bx-rocket text-main-black lg:text-[50px] text-[30px]'></i>
                <div className='flex flex-col gap-2'>
                  <span className='text-[19px]'>Experience</span>
                  <h1 className='text-[15px]'> With over 12 years of experience, our team has honed their skills to perfection. We bring an extensive background in thermal insulation and an understanding of the industry that sets us apart.</h1>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      
      {showScrollToTop && (
        <div
          className="fixed bottom-8 right-8 bg-main-blue p-3 rounded-[10px] cursor-pointer"
          onClick={scrollToTop}
        >
          <i className="bx bxs-up-arrow-alt text-white text-3xl"></i>
        </div>
      )}

    </main>
  );
}

export default About;
