'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import about from "../../public/WhatsApp Image 2023-10-31 at 23.46.34 (1).jpeg";
import about2 from "../../public/WhatsApp Image 2023-10-31 at 23.54.05.jpeg";
import checkdouble from "../../public/bx-check-double.svg";
import rocket from "../../public/bx-rocket.svg";
import groups from "../../public/bx-group.svg";
import bulb from "../../public/bx-bulb.svg";
import about3 from "../../public/WhatsApp Image 2023-10-31 at 23.46.34.jpeg"
import team from '../Data/team'

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
      <section className="flex  items-center justify-center px-5 md:px-20 mt-[5rem]" id="about">
        <div>
          <div className="flex justify-center items-center flex-col gap-3 mb-4 sm:mb-[3rem] ">
            <h2 className="md:text-[50px] text-[30px] text-main-black">
              About <span className="text-main-blue">Us</span>
            </h2>
            <hr className="w-[60px] h-[3px] bg-main-blue mb-4" />
            <h3 className="text-[15px] text-center sm:mb-5 md:text-[20px] text-main-black">
              Our Team: The architect of Industrial Insulation, Engineering services
            </h3>
          </div>
          <article className=" gap-4 lg:gap-[0rem] lg:flex-row lg:justify-between w-full  flex-col flex text-main-black">
            <div className="flex items-center flex-col lg:w-1/2 w-full gap-3 ">
              <h1 className="md:text-[24px] font-[500] mb-3 text-[17px] lg:text-start text-center">
                Crafting Excellence in Thermal Insulation: Our Story, Your
                Solution
              </h1>
              <h2 className="md:text-[19px] text-[15px] md:text-left text-center">
                {" "}
                At{" "}
                <span className="text-main-blue text-[17px] ">
                  THEO UNITED
                </span>{" "}
                Theo united we are committed to providing exceptional Engineering services, industrial Insulation, heating and Air conditioning Engineer
              </h2>
              <h3 className="mt-3 mb-4 md:text-[19px] text-[15px] md:text-left text-center">
                Our collective expertise is now united under a single corporate
                body to ensure our prospective clients&apos; satisfaction with
                our services.
              </h3>
              <h4 className="md:text-[19px] text-[15px] md:text-left text-center">
                We believe in making a difference through the power of
                insulation. Together with our clients, we are creating a world
                that&apos;s not only more energy-efficient but also
                environmentally responsible. Join us on this journey towards a
                brighter, better-insulated future.
              </h4>
            </div>

            <div className="lg:block flex justify-center items-center">
              <Image
                src={about}
                alt=""
                width={500}
                height={200}
                className="h-[500px] rounded-[30px] mb-4 w-[500px]"
              />
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

      <section className="flex items-center justify-center md:px-20 mt-[5rem] px-5">
        <div className="">
          <div className="flex justify-center items-center flex-col gap-3 mb-[3rem] text-center">
            <h2 className="md:text-[50px] text-[30px] text-main-black">
              Why Choose <span className="text-main-blue"> THEO UNITED</span>
            </h2>
            <hr className="w-[60px] h-[3px] bg-main-blue mb-4" />
          </div>

          <article className=" flex lg:justify-between md:w-full lg:flex-row flex-col-reverse gap-4 md:gap-[0px] text-main-black">
            <div className="lg:block flex justify-center items-center">
              <Image
                src={about3}
                alt=""
                width={500}
                height={200}
                className="h-[500px] rounded-[30px] mb-4 w-[500px]"
              />
            </div>
            <div className="flex flex-col lg:w-1/2 gap-8">
              <div className="flex gap-3">
                <i className="bx bx-bulb text-main-black text-[40px] lg:[50px]"></i>
                {/* <Image src={bulb} alt="" height={60} width={60} /> */}
                <div className="flex flex-col gap-2">
                  <span className="text-[19px]">Innovation</span>
                  <h1 className="text-[15px]">
                    {" "}
                    We have put in place a very good strategy to ensure quality delivery of service.
                  </h1>
                </div>
              </div>

              <div className="flex gap-3 ">
                <i className="bx bx-check-double text-main-black text-[40px] md:[50px]"></i>
                {/* <Image src={checkdouble} alt="" height={60} width={60} /> */}
                <div className="flex flex-col gap-2">
                  <span className="text-[20px]">Quality Assurance</span>
                  <h1 className="text-[15px]">
                    {" "}
                    Our continuous pursuit of innovation ensures that you
                    receive the latest and most efficient insulation solutions.
                  </h1>
                </div>
              </div>

              <div className="flex gap-3 ">
                <i className="bx bx-group text-main-black text-[40px] md:[50px]"></i>
                {/* <Image src={groups} alt="" height={60} width={60} /> */}
                <div className="flex flex-col gap-2">
                  <span className="text-[19px]">Collaborative Spirit</span>
                  <h1 className="text-[15px]">
                    {" "}
                    Our quality assurance process is top class as we have established set of requirements for a reliable service delivery.
                  </h1>
                </div>
              </div>

              <div className="flex gap-3  ">
                <i className="bx bx-rocket text-main-black text-[40px] md:[50px]"></i>
                {/* <Image src={rocket} alt="" height={70} width={70} /> */}
                <div className="flex flex-col gap-2">
                  <span className="text-[19px]">Experience</span>
                  <h1 className="text-[15px]">
                    {" "}
                    With over 12 years of experience, our team has honed their
                    skills to perfection. We bring an extensive background in
                    thermal insulation and an understanding of the industry that
                    sets us apart.
                  </h1>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="mt-[6rem]">
        <div className=" flex items-center  justify-center gap-2">
          <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
          <h1 className=" text-[0.75rem] sm:text-[1rem] before:bg-main-blue before:content-[''] before:py-2  text-main-black">
            Team
          </h1>
          <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="uppercase text-main-black font-medium sm:text-[2rem] text-[1.5rem]  md:text-[3rem]">
            check our <span className="text-main-blue">Team</span>
          </h1>
        </div>
        <section className="flex items-start justify-center max-w-full md:px-20 px-5">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[2rem] flex-wrap justify-center">
              {
                team.map((member, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 mt-10 border border-indigo-600 w-fit hover:shadow-xl hover:shadow-indigo-500/40 justify-center md:w-[300px] rounded-b-lg">
                    <div>
                      <Image src={member.image01} alt="" height={300} />
                    </div>
                    <div className="flex flex-col gap-3 p-3 justify-center items-center ">
                      <h1 className="text-[20px] text-main-black">{member.name}</h1>
                      <h2 className="text-[15px] text-main-black">{member.position}</h2>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>



      {showScrollToTop && (
        <div
          className="fixed bottom-6 right-6 cursor-pointer bg-main-blue p-2 rounded-[10px]"
          onClick={scrollToTop}
        >
          <i className="bx bx-chevron-up text-white text-3xl"></i>
        </div>
      )}
    </main>
  );
};

export default About;

