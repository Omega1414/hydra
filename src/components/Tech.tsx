"use client"
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Tech = () => {
  const techLogos = [
    { src: "/tech1.svg", alt: "Tech 1", width: 176, height: 176, className: "w-32 h-32 md:w-44 md:h-44" },
    { src: "/tech3.svg", alt: "Tech 3", width: 252, height: 252, className: "w-40 h-40 md:w-60 md:h-60" },
    { src: "/tech2.svg", alt: "Tech 2", width: 263, height: 263, className: "w-40 h-40 md:w-64 md:h-64" },
    { src: "/tech4.svg", alt: "Tech 4", width: 282, height: 282, className: "w-44 h-44 md:w-72 md:h-72" },
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const handleNext = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % techLogos.length);
  };

  const handlePrev = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex - 1 + techLogos.length) % techLogos.length);
  };

  return (
 <div
  className="relative w-full h-full xl:h-screen  
  px-4 md:px-[84px] pt-10 xxs:pt-[100px] xl:pt-0
  flex flex-col items-center justify-center xl:justify-start gap-6 md:gap-[20px] lg:gap-10 xl:gap-25 2xl:gap-12
  max-w-[1440px] mx-auto"  id="technologies">
      {/* Image container */}
      <div className="relative w-full h-[200px] xl:w-[1000px] 2xl:w-[1240px] 2xl:h-[250px] max-w-[1240px] mx-auto mt-10 xl:mt-15 ">
        <Image
          src="/rod.svg"
          alt="Hydra Background"
          width={1240}
          height={460}
          className="w-full h-full object-cover rounded-[160px]"
        />

        {/* Texts on top of image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            TECHNOLOGIES & HARDWARE
          </h2>
          <p className="font-montserrat font-light text-xl md:text-2xl lg:text-3xl text-white">
            USED BY HYDRA VR.
          </p>
        </div>

        {/* Down arrow button at bottom center of image (desktop only) */}
        <div className="hidden 2xl:flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10 w-[100px] h-[100px] rounded-full bg-[rgba(14,14,14,0.32)] items-center justify-center">
          <button className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform">
            <BsChevronDown className="text-black text-2xl" />
          </button>
        </div>
      </div>

      {/* Tech logos below the image */}
      <div className="flex flex-col 2xl:flex-row 2xl:flex-wrap justify-center items-center gap-8  2xl:gap-14 mt-2 xl:mt-0 2xl:mt-10 px-4">
        {/* Mobile view: single logo with navigation buttons */}
        <div className="2xl:hidden flex items-center justify-between w-[300px] lg:w-[410px] xl:w-[450px] 2xl:w-[500px]  z-10 h-[100px] gap-4 ">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform"
          >
            <BsChevronLeft className="text-black text-xl" />
          </button>
          <div className={techLogos[currentLogoIndex].className}>
            <Image
              src={techLogos[currentLogoIndex].src}
              alt={techLogos[currentLogoIndex].alt}
              width={techLogos[currentLogoIndex].width}
              height={techLogos[currentLogoIndex].height}
            />
          </div>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform"
          >
            <BsChevronRight className="text-black text-xl" />
          </button>
        </div>

        {/* Desktop view: all logos */}
        <div className="hidden 2xl:flex flex-wrap justify-center items-center gap-10 2xl:gap-14">
          {techLogos.map((logo, index) => (
            <div key={index} className={logo.className}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;