"use client";
import React from "react";
// grid grid-cols-2 lg:grid-cols-3
const Contactus = () => {
  return (
    <div className="px-5 md:px-20  mt-12 " id="contact">
      <div className=" flex items-center justify-center   gap-2">
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
        <h1 className=" md:text-[50px] text-center text-[30px] before:bg-main-blue before:content-[''] before:py-2 text-main-black ">
          CONTACT US
        </h1>
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
      </div>
      <div className="map mt-8">
        <h5 className="text-center text-main-darker text-lg">
          find our location here{" "}
        </h5>
        <div className=" hidden sm:flex justify-center items-center mx-auto w-full">
          <div className="gmap_canvas w-full">
            <iframe
            className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.888801558852!2d3.253420574779832!3d6.535725193457044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b857d2ae26dfd%3A0x3d37b1c506d5c93e!2s20%20Foursquare%20St%2C%20LGA%2C%20off%20Ijegun%20Road%2C%20IKOTUN%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699884735705!5m2!1sen!2sng"
              width="1200"
              height="600"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <a href="https://fmovies-online.net"></a> */}
            <br />
          </div>
        </div>
        <div className=" sm:hidden flex justify-center items-center mx-auto w-full">
          <div className="gmap_canvas w-full">
            <iframe
            className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.888801558852!2d3.253420574779832!3d6.535725193457044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b857d2ae26dfd%3A0x3d37b1c506d5c93e!2s20%20Foursquare%20St%2C%20LGA%2C%20off%20Ijegun%20Road%2C%20IKOTUN%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699888686707!5m2!1sen!2sng"
              width="400"
              height="300"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <a href="https://fmovies-online.net"></a> */}
            <br />
          </div>
        </div>
      </div>

      <div
        className="
    flex flex-col lg:flex-row flex-wrap
       mt-16 gap-16"
      >
        <div className="flex flex-col gap-6 col-span-1  lg:w-[40%] text-main-black ">
          <div className="flex items-center gap-4 ">
            <i className="bx bx-phone-call text-[2rem] bg-main-blue p-2 rounded-[50%] text-white"></i>
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
                <p className="text-main-black flex gap-2 ">
                  theounitedthermalinsulation @gmail.com
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
                <p className="text-main-black flex gap-2 flex-wrap ">
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
              <div className="flex flex-col md:flex-row  gap-4">
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
              <div className=" ">
                <label htmlFor="" className="mb-2 text-main-black">
                  Your Email
                </label>
                <input
                  type="email"
                  className="border border-main-gray-light-- w-full py-1 px-3 rounded-md  outline-none"
                />
              </div>
              <div className="">
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
