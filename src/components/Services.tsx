import React from "react";
import Image from "next/image";
import checkdouble from "../../public/icons/bx-check-double.svg";
import cog from "../../public/icons/bx-cog.svg";
import medal from "../../public/icons/bx-medal.svg";
import rocket from "../../public/icons/bx-rocket.svg";
import unite from "../../public/icons/bx-unite.svg";
import wrench from "../../public/icons/bxs-wrench.svg";
const Services = () => {
  const services = [
    {
      image: rocket,
      header: "Cutting-Edge Insulation Solutions",
      about:
        "TheoUnited pioneers the latest advancements in insulation technology to provide cutting-edge solutions. Our team of experts ensures your spaces are efficiently insulated, saving energy and lowering utility costs.",
    },
    {
      image: medal,
      header: "Tailored Insulation Designs",
      about:
        "We believe in one size fits one. TheoUnited crafts personalized insulation designs based on your specific needs and the unique characteristics of your property. No cookie-cutter solutions here!",
    },
    {
      image: unite,
      header: "Cost-effective Solutions",
      about:
        "We understand the value of your investment. TheoUnited delivers cost-effective insulation solutions, ensuring you get the best return on your energy-saving endeavors.",
    },
    {
      image: wrench,
      header: "Customer-Centric Approach",
      about:
        "Your satisfaction is our priority. TheoUnited takes a customer-centric approach, providing ongoing support and maintenance to keep your insulation performing at its best.",
    },
    {
      image: cog,
      header: "Eco-Friendly Insulation Options",
      about:
        "TheoUnited is committed to sustainability. We offer a range of eco-friendly insulation materials that not only enhance your propertys energy efficiency but also contribute to a greener planet",
    },
    {
      image: checkdouble,
      header: "Insulation Upgrades and Retrofits",
      about:
        "Outdated insulation causing problems? TheoUnited specializes in upgrades and retrofits, bringing your property up to modern standards for optimal insulation performance.",
    },
  ];
  return (
    <div className="px-5 md:px-20 mt-[5rem]">
      <div className=" flex items-center  justify-center gap-2">
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
        <h1 className=" text-[0.75rem] sm:text-[1rem] before:bg-main-blue before:content-[''] before:py-2  ">
          SERVICES
        </h1>
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="uppercase text-main-black font-medium sm:text-[2rem] text-[1.5rem]  md:text-[3rem]">
          check our <span className="text-main-blue">services</span>
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
        {services.map((serve, i) => (
          <div
            key={i}
            className="border border-gray-light flex justify-center items-center p-6 sm:p-4 md:p-6 lg:p-8  cursor-pointer hover:border-0 hover:shadow-xl hover:translate-y-[-10px] transition-all "
          >
            <div className="flex flex-col gap-4">
              <div className="bg-main-blue mx-auto flex justify-center items-center w-fit p-6 rounded-[0.5rem]">
                <Image
                  src={serve.image}
                  width="30"
                  height="30"
                  alt={serve.image}
                />
              </div>
              <h1 className="text-center text-[1.2rem] md:text-[1.5rem]  text-main-black">
                {serve.header}
              </h1>
              <p className="text-center text-main-gray-light-- text-[0.75rem] md:text-[1rem]">
                {serve.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
