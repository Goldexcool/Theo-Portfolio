'use client'
import React from "react";
// grid grid-cols-2 lg:grid-cols-3
const Contactus = () => {
  return (
    <div className="px-5 md:px-20">
      <div className=" flex items-center justify-center  mt-12  gap-2">
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
        <h1 className=" md:text-[50px] text-center text-[30px] before:bg-main-blue before:content-[''] before:py-2  ">
          CONTACT US
        </h1>
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
      </div>
      <div
        className="
    flex flex-col lg:flex-row flex-wrap
       mt-16 gap-16"
      >
        <div className="flex flex-col gap-6 col-span-1  lg:w-[40%]">
          <div className="flex items-center gap-4 ">
            <i className="bx bx-phone-call text-[2rem] bg-main-blue p-2 rounded-[50%] text-white"></i>
            <div className="">
              <p className="text-main-darker text-[2rem] "> Call:</p>
              <div className="text-main-gray-light-- flex gap-2 ">
                {" "}
                <p>08070583707</p>
                <p>08138051110</p>
              </div>{" "}
            </div>
          </div>
          <div className="flex items-center gap-4  ">
            <i className="bx bx-envelope text-[2rem] bg-main-blue p-2 rounded-[50%] text-white"></i>
            <div>
              <p className="text-main-darker text-[2rem] ">Email:</p>
              <div>
                {" "}
                <p className="text-main-gray-light-- flex gap-2">
                  theounitedthermalinsulation@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4  ">
            <i className="bx bx-location-plus text-[2rem] bg-main-blue p-2 rounded-[50%] text-white"></i>
            <div className="">
              <p className="text-main-darker text-[2rem] ">Location:</p>
              <div>
                {" "}
                <p className="text-main-gray-light-- flex gap-2">
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
              <div className="flex  flex-row w-full gap-4">
                <div className="w-full">
                  <label htmlFor="" className="mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border border-main-gray-light-- w-full py-1 px-3 rounded-md outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border border-main-gray-light-- w-full py-1 px-3 outline rounded-md outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="border border-main-gray-light-- w-full py-1 px-3 rounded-md  outline-none"
                />
              </div>
              <div>
                <label htmlFor="" className="mb-2">
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
