import React from "react";

const Footer = () => {
  const servicesfooter = [
    "Cutting-Edge Insulation Solutions",
    "Tailored Insulation Designs",
    "Cost-effective Solutions",
    "Customer-Centric Approach",
    "Eco-Friendly Insulation Options",
    "Insulation Upgrades and Retrofits",
  ];
  const usefulLinks = [
    "Home",
    "About Us",
    "Services",
    "Terms of service",
    "Privacy Policy",
  ];
  return (
    <div className="footer px-5 md:px-20 mt-16 py-16 flex sm:justify-start max-[500px]:flex-col sm:items-start items-center flex-wrap gap-8 ">
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <h1 className="uppercase text-main-blue  sm:text-left text-center text-[2.5rem]">
            Theo United
          </h1>
        </div>
        <div>
          <p className="text-white flex gap-2 md:w-2/4  sm:text-left text-center ">
            Branch office -4b, Comfort Ugbeoke Close, off Babatunde Street, Golf
            Estate Road, Lakowe Ibeju- Lekki Head office - 20, Foursquare
            Street, off Ijegun Road, Alagbada Bust-stop, Ikotun Lagos
          </p>
        </div>
        <div className="flex gap-4 items-center sm:justify-start sm:items-center  justify-center">
          <div className=" text-[1rem] text-main-blue flex flex-col">
            Phone:
          </div>
          <div className="text-white">
            <p className="">08070583707</p>
            <p className=" ">08138051110</p>
          </div>
        </div>
      </div>
      <div className="sm:block flex justify-center items-center flex-col mx-auto sm:mx-0">
        <h1 className="text-main-blue text-[2rem]  sm:text-left text-center">
          Our services
        </h1>
        <div className="flex flex-col gap-4">
          {servicesfooter.map((serv, i) => (
            <div key={i} className="text-white sm:text-left text-center">
              {serv}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto sm:mx-0">
        <h1 className="text-main-blue text-[2rem]  sm:text-left text-center">
          Useful Links
        </h1>
        <div className="flex flex-col gap-4">
          {usefulLinks.map((link, i) => (
            <div key={i} className="text-white  sm:text-left text-center">
              {link}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center sm:mx-0 mx-auto">
        <div className="cursor-pointer  hover:translate-y-[-10px] transition-all socials hover:bg-main-blue rounded-[100%] p-2 flex justify-center items-center">
          <i className="bx bxl-facebook text-[2rem] hover text-white"></i>
        </div>
        <div className="cursor-pointer  hover:translate-y-[-10px] transition-all socials hover:bg-main-blue rounded-[100%] p-2 flex justify-center items-center">
          <i className="bx bxl-instagram text-[2rem] text-white"></i>
        </div>
        <div className="cursor-pointer  hover:translate-y-[-10px] socials hover:bg-main-blue rounded-[100%] p-2 flex justify-center items-center">
          <i className="bx bxl-twitter text-[2rem] text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
