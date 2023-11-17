"use client";
import React, { useState } from "react";
// import { imagePaths } from "../../../src/image-context";
// console.log(imagePaths);
import Image from "next/image";
import { imagesData } from "@/Data/image-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
const Page = () => {
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(0);

  const close = () => {
    setSelect(100);
    setShow(false);
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="px-5 md:px-20 mt-[1rem] " id="gallery">
          <div className=" flex items-center justify-center mt-[1rem]   gap-2">
            <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
            <h1 className=" text-[3rem] sm:text-[6rem] before:bg-main-blue before:content-[''] before:py-2   bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
              GALLERY
            </h1>
            <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
          </div>

          <div className="flex gallery gap-4 flex-wrap">
            {imagesData.map((image, i) => (
              <div key={i} className=" grow">
                <Image
                  className="h-full w-full object-cover"
                  src={image}
                  alt={`image${i}`}
                  width="150"
                  height="150"
                  onClick={() => {
                    setSelect(i);
                    setShow(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
      {show && (
        <div className="fixed top-[50%] left-0 w-full  p-4">
          <div className=" top-0 left-0 w-full h-full z-50 bg-[#00000099] fixed backdrop-blur-[10px]"></div>
          <div className="absolute top-[50%] shadow-4xl rounded-[10px] z-[100] w-[80%] lg:w-[30%]  left-[50%] p-8 translate-x-[-50%] translate-y-[-50%]">
            <div
              className="text-[20px] text-white font-bold float-right cursor-pointer "
              onClick={close}
            >
              X
            </div>
            <div className="flex justify-center items-center">
              {
                <Image
                  src={imagesData[select]}
                  className="w-[100%] h-full lg:h-[400px] object-cover lg:object-contain"
                  alt="imageclicked"
                  width={200}
                  height={200}
                />
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

// {select !== 0 && (
//   <div className="fixed top-[50%] left-0 w-full  p-8">
//     <div className="top-0 left-0 w-full h-full bg-[#00000099] fixed backdrop-blur-[1px]"></div>
//     <div className="absolute top-[50%] w-[80%] bg-slate-500 left-[50%] p-8 translate-x-[-50%] translate-y-[-50%]">
//       <div
//         className="text-[20px] text-white font-bold float-right cursor-pointer "
//         onClick={close}
//       >
//         X
//       </div>
//       <Slider
//         infinite={true}
//         slidesToShow={1} // Adjust the number of slides shown
//         slidesToScroll={1}
//       >

//         {imagesData.map((image, i) => (
//           <div key={i} className="slide-item flex justify-center items-center">
//             <Image
//               src={image}
//               className=" flex justify-center items-center h-full object-cover"
//               alt={`imageclicked${i}`}
//               width={200}
//               height={200}
//             />
//           </div>
//         ))}
//       </Slider>

//     </div>
//   </div>
// )}
