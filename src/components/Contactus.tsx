'use client'
import React from "react";
// grid grid-cols-2 lg:grid-cols-3
const Contactus = () => {
  return (
    <div className="px-5 md:px-20 " id="contact">
      <div className=" flex items-center justify-center  mt-12  gap-2">
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
        <h1 className=" md:text-[50px] text-center text-[30px] before:bg-main-blue before:content-[''] before:py-2 text-main-black ">
          CONTACT US
        </h1>
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
      </div>
      <div
        className="
    flex flex-col lg:flex-row flex-wrap
       mt-16 gap-16"
      >
        <div className="flex flex-col gap-6 col-span-1  lg:w-[40%] text-main-black ">
          <div className="flex items-center gap-4 ">
            <i className="bx bx-phone-call text-[2rem] bg-main-blue p-2 rounded-[50%] text-main-black"></i>
            <div className="text-main-black">
              <p className="text-main-black text-[2rem] "> Call:</p>
              <div className="text-main-black flex gap-2 ">
                {" "}
                <p>08070583707</p>
                <p>08138051110</p>
              </div>{" "}
            </div>
          </div>
          <div className="flex items-center gap-4 text-main-black ">
            <i className="bx bx-envelope text-[2rem] bg-main-blue p-2 rounded-[50%] text-white"></i>
            <div>
              <p className="text-main-black text-[2rem] ">Email:</p>
              <div>
                {" "}
                <p className="text-main-black flex gap-2 w-[100px] md:w-none">
                  theounitedthermalinsulation<br/>@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4  ">
            <i className="bx bx-location-plus text-[2rem] bg-main-blue p-2 rounded-[50%] text-white"></i>
            <div className="text-main-black">
              <p className="text-main-black text-[2rem] ">Location:</p>
              <div>
                {" "}
                <p className="text-main-black flex gap-2 flex-wrap w-[200px] md:w-none ">
                  Branch office -4b, Comfort Ugbeoke Close, off Babatunde
                  Street, Golf Estate Road, Lakowe Ibeju- Lekki <br />
                  Head office - 20, Foursquare Street, off Ijegun Road, Alagbada
                  Bust-stop, Ikotun Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  lg:col-span-2 lg:w-2/4">
          <form action="" className="">
            <div className="flex gap-2 flex-col">
              <div className="flex flex-col md:flex-row w-5/6 gap-4">
                <div className="w-full">
                  <label htmlFor="" className="mb-2 text-main-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border border-main-gray-light-- w-full py-1 px-3 rounded-md outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="mb-2 text-main-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border border-main-gray-light-- w-full py-1 px-3 outline rounded-md outline-none"
                  />
                </div>
              </div>
              <div className="w-5/6 "> 
                <label htmlFor="" className="mb-2 text-main-black">
                  Your Email
                </label>
                <input
                  type="email"
                  className="border border-main-gray-light-- w-full py-1 px-3 rounded-md  outline-none"
                />
              </div>
              <div className="w-5/6 ">
                <label htmlFor="" className="mb-2 text-main-black">
                  Message
                </label>
                <textarea
                  className="w-full resize-none border border-main-gray-light-- outline-none rounded-md px-3 pt-3"
                  name="email"
                  id="email"
                  cols={100}
                  rows={10}
                ></textarea>
              </div>
            </div>
            <button
              className="bg-main-blue items-start justify-start text-white p-4 rounded-md"
              onClick={(event) => event.preventDefault()}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;