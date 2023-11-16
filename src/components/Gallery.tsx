"use client";
import React from "react";
import GalleryImage from "../../public/WhatsApp Image 2023-10-31 at 23.46.34 (3).jpeg";
import GalleryImage1 from "../../public/WhatsApp Image 2023-10-31 at 23.54.05 (2).jpeg";
import GalleryImage3 from "../../public/WhatsApp Image 2023-10-31 at 23.46.27 (2).jpeg";
import GalleryImage4 from "../../public/WhatsApp Image 2023-10-31 at 23.46.30 (1).jpeg";
import GalleryImage5 from "../../public/WhatsApp Image 2023-10-31 at 23.46.34 (4).jpeg";
import GalleryImage6 from "../../public/WhatsApp Image 2023-10-31 at 23.46.34.jpeg";
import GalleryImage7 from "../../public/WhatsApp Image 2023-10-31 at 23.46.28 .jpeg";
import GalleryImage8 from "../../public/WhatsApp Image 2023-10-31 at 23.46.28 (1).jpeg";
import GalleryImage9 from "../../public/WhatsApp Image 2023-10-31 at 23.26.25 (2).jpeg";
import GalleryImage10 from "../../public/WhatsApp Image 2023-10-31 at 23.26.28 (2).jpeg";
import Image from "next/image";
import Link from 'next/link'

const Gallery = () => {

  return (
    <div className="px-5 md:px-20 mt-[5rem] " id="gallery">
      <div className=" flex items-center justify-center   gap-2">
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
        <h1 className=" text-[0.75rem] sm:text-[1rem] before:bg-main-blue before:content-[''] before:py-2  text-main-black">
          GALLERY
        </h1>
        <hr className="w-[70px] h-[3px] flex mt-4  justify-center items-center bg-main-blue mb-4" />
      </div>
      <div className="flex justify-center items-center">
        <div>
          <h1 className="uppercase text-main-black font-medium sm:text-[2rem] text-[1.5rem]  md:text-[3rem]">
            check our <span className="text-main-blue">Gallery</span>
          </h1>
        </div>
      </div>
      <div className="gallery mt-12">
        <div className="gallery1">
          <div className="overlay">Theo United</div>

          <Image
            className="w-full h-full rounded-lg"
            src={GalleryImage9}
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="gallery2">
          <div className="overlay">Theo United</div>
          <Image
            className="w-full h-full rounded-lg"
            src={GalleryImage8}
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="gallery3">
          <div className="overlay">Theo United</div>
          <Image
            className="w-full h-full rounded-lg"
            src={GalleryImage10}
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="gallery4">
          <div className="overlay">Theo United</div>
          <Image
            className="w-full h-full rounded-lg"
            src={GalleryImage4}
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="gallery5">
          <div className="overlay">Theo United</div>
          <Image
            className="w-full h-full rounded-lg"
            src={GalleryImage5}
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="gallery6">
          <div className="overlay">Theo United</div>
          <Image
            className="w-full h-full rounded-lg"
            src={GalleryImage6}
            alt=""
            width="200"
            height="200"
          />
        </div>
      </div>

      <Link href={'/gotopage'}>
        <div className="flex justify-center items-center">
          <button
            className="border border-main-blue hover:text-white  bg-white w-fit py-4 px-6 mt-8 rounded-[0.5rem] hover:bg-main-blue hover:border-white transition-all"
          >
            See More
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
