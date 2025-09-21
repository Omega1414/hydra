"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const [contactIndex, setContactIndex] = useState(0);

  const contactItems = [
    {
      icon: "/loc.svg",
      title: "Pay Us a Visit",
      text: "Union St, Seattle, WA 98101",
      alt: "location",
    },
    {
      icon: "/phone.svg",
      title: "Give Us a Call",
      text: "(110) 1111-1010",
      alt: "phone",
    },
    {
      icon: "/mail.svg",
      title: "Send Us a Message",
      text: "Contact@HydraVTech.com",
      alt: "mail",
    },
  ];

  const handleNext = () => {
    setContactIndex((prev) => (prev + 1) % contactItems.length);
  };

  const handlePrev = () => {
    setContactIndex((prev) => (prev - 1 + contactItems.length) % contactItems.length);
  };

  return (
    <div className="flex flex-col w-full items-center pt-[70px] xl:pt-[100px] 2xl:pt-[150px] h-screen justify-center gap-5 xxs:gap-15" id="hero">
      {/* Main Content (Text and Image) */}
      {/* Changed md:flex-row to lg:flex-row to switch to side-by-side layout at lg (1024px) */}
    <div className="flex flex-col lg:flex-row 
  w-full max-w-[1440px] mx-auto 
  px-[16px] sm:px-[24px] lg:px-[84px] 2xl:px-[140px] 
  items-center">
        {/* Left Column (Text and Button) */}
        {/* Adjusted ml-0 lg:ml-5 and other responsive classes to align with lg breakpoint */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center ml-0 lg:ml-5 gap-3 sm:gap-4 lg:gap-4 2xl:gap-10 order-2 lg:order-1">
          <div className="relative">
            <Image
              src="/vector/4.svg"
              alt="Vector 4"
              width={450}
              height={200}
              className="absolute w-[120px] sm:w-[140px] lg:w-[200px] 2xl:w-[250px] top-[180px] sm:top-[200px] lg:top-[350px] left-[0px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-100"
            />
            <h1 className="font-montserrat font-extrabold text-[28px] sm:text-[32px] lg:text-[40px] 2xl:text-[46px] leading-[36px] sm:leading-[40px] lg:leading-[50px] text-center lg:text-left">
              <span className="bg-gradient-to-r from-[#C0B7E8] via-[#8176AF] to-[#8176AF] text-transparent bg-clip-text">
                Dive
              </span>{" "}
              Into The Depths <br /> Of{" "}
              <span className="bg-gradient-to-r from-[#C0B7E8] via-[#8176AF] to-[#8176AF] text-transparent bg-clip-text">
                Virtual Reality
              </span>
            </h1>
          </div>

          {/* Changed md:block to lg:block to show description text at lg breakpoint */}
          <div className="hidden lg:block">
            <h1 className="w-full lg:w-[450px] font-montserrat font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] sm:leading-[18px] lg:leading-[20px] text-white text-center lg:text-left">
             Step into the future of digital immersion with Hydra VR. Discover new worlds, unlock limitless creativity, and experience the depths of virtual reality like never before.
            </h1>
          </div>

          {/* Adjusted justify-center lg:justify-start for button alignment */}
          <div className="flex flex-row justify-center lg:justify-start gap-[24px] sm:gap-[32px] mt-4 sm:mt-6">
            <button className="w-[180px] sm:w-[200px] h-[40px] sm:h-[44px] rounded-[40px] text-[#343045] text-[11px] sm:text-[12px] font-montserrat font-bold bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)]">
              BUILD YOUR WORLD
            </button>
            {/* Changed md:block to lg:block for shape image visibility */}
            <Image src="/shape.svg" alt="shape" width={40} height={40} className="hidden lg:block w-[40px] sm:w-[48px]" />
          </div>
        </div>

        {/* Right Column (Image) */}
        {/* Adjusted w-full lg:w-1/2 and order for lg breakpoint */}
        <div className="flex flex-col w-full lg:w-1/2 relative items-center lg:items-end order-1 lg:order-2">
          <div className="relative w-[300px] sm:w-[350px] lg:w-[500px] h-[300px] sm:h-[300px] flex justify-center items-center">
            <Image
              src="/hero.png"
              alt="hero"
              width={350}
              height={426}
              className="relative w-[220px] sm:w-[260px] lg:w-[300px] 2xl:w-[350px] z-10 rounded-[80px_80px_80px_200px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
            <Image
              src="/vector/1.svg"
              alt="Vector 1"
              width={300}
              height={200}
              className="absolute w-[200px] sm:w-[200px] lg:w-[260px] 2xl:w-[300px] top-[160px] sm:top-[150px] lg:top-[170px] 2xl:top-[190px] left-[180px] sm:left-[200px] lg:left-[300px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-80"
            />
            <Image
              src="/vector/2.svg"
              alt="Vector 2"
              width={280}
              height={200}
              className="absolute w-[150px] sm:w-[140px] lg:w-[200px] 2xl:w-[280px] top-1/2 left-[180px] sm:left-[200px] lg:left-[300px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-80"
            />
            <Image
              src="/vector/3.svg"
              alt="Vector 3"
              width={450}
              height={200}
              className="absolute w-[300px] sm:w-[300px] lg:w-[400px] 2xl:w-[550px] top-[200px] sm:top-[200px] lg:top-[250px] left-[180px] sm:left-[180px] lg:left-[280px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
     
      <div className="flex justify-center items-center w-[95%] xl:w-[1100px] 2xl:w-[1200px] lg:mb-8 xl:mb-0">
        <div className="rounded-[60px] px-3 h-[90px] sm:h-[110px] lg:h-[100px] 2xl:h-[120px] flex items-center justify-center gap-4 sm:gap-6 xl:gap-10 2xl:gap-20 bg-[radial-gradient(50%_2900.76%_at_50%_53.89%,rgba(58,52,86,0.95)_0%,#211E2E_100%)] shadow-[0px_4px_4px_rgba(192,183,232,0.01)] w-full">
          {/* Mobile: Carousel with Arrows */}
          {/* Changed md:hidden to xl:hidden to keep carousel until xl (1280px) */}
          <div className="flex items-center justify-between w-full xl:hidden">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 bg-transparent border-3 border-solid border-white rounded-full hover:scale-105 transition-transform"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <div className="flex w-[70%] px-3 items-center gap-2 sm:gap-4 justify-center">
              <img
                src={contactItems[contactIndex].icon}
                alt={contactItems[contactIndex].alt}
                className="w-[24px] sm:w-[28px] h-[32px] sm:h-[36px]"
              />
              <div className="flex flex-col">
                <h3 className="font-montserrat font-bold text-[12px] sm:text-[14px] leading-[14px] sm:leading-[16px] text-white text-center">
                  {contactItems[contactIndex].title}
                </h3>
                <p className="font-montserrat text-[12px] sm:text-[12px] leading-[14px] sm:leading-[15px] text-white text-center">
                  {contactItems[contactIndex].text}
                </p>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 bg-transparent border-3 border-solid border-white rounded-full hover:scale-105 transition-transform"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>

          {/* Desktop: Grid Layout */}
        
          <div className="hidden xl:grid grid-cols-3 w-full   relative ">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col xl:flex-row items-center justify-center gap-4 text-center xl:text-left"
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className={`${
                    index === 0
                      ? "xl:w-[28px] 2xl:w-[30px] xl:h-[36px] 2xl:h-[40px]"
                      : "xl:w-[38px] 2xl:w-[40px] xl:h-[50px] 2xl:h-[60px]"
                  }`}
                />
                <div className="flex flex-col">
                  <h3 className="font-montserrat font-bold xl:text-[20px] 2xl:text-[20px] leading-[29px] text-white">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-[14px] leading-[17px] text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
            {/* Separators */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-px h-[100px] bg-[rgba(192,183,232,0.33)]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-px h-[100px] bg-[rgba(192,183,232,0.33)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;