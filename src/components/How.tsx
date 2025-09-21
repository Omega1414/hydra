"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const How = () => {
  const items = [
    {
      id: "01",
      titles: ["3D Conception", "& Design"],
      icon: "/arrow.svg",
    },
    {
      id: "02",
      titles: ["Interaction", "Design"],
      icon: "/arrow.svg",
    },
    {
      id: "03",
      titles: ["VR World", "User Testing"],
      icon: "/arrow.svg",
    },
    {
      id: "04",
      titles: ["Hydra VR", "Deploy"],
      icon: "/arrow.svg",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
 <div
  className="relative w-full h-full xl:h-screen  
  px-4 md:px-[84px] pt-10 xxs:pt-[100px] xl:pt-[40px] 2xl:pt-[40px]
  flex flex-col items-center justify-center gap-6 md:gap-[20px] 2xl:gap-15
  max-w-[1440px] mx-auto" 
  id="howTo">
   <div className="hidden xl:flex absolute top-1/2 xl:mt-5 2xl:mt-10 left-0 w-full -translate-y-1/2 z-0">
  <Image src="/vector/15.svg" alt="15" width={1920} height={100} className="w-full" />
</div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col xl:flex-row justify-center items-center xl:justify-between w-full gap-6 md:gap-[100px]">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="w-[350px] h-[44px] font-montserrat font-bold text-[36px] leading-[44px] text-white text-center md:text-left">
            HOW WE BUILD
          </h1>
          <div className="flex flex-row gap-[30px]">
            <h2 className="w-[350px] h-[44px] font-montserrat font-light text-[36px] leading-[44px] text-white text-center md:text-left">
              WITH HYDRA VR?
            </h2>
            <div className="hidden xl:flex flex-row items-center w-[150px]">
              <div className="border-t-[3px] border-[#C0B7E8] flex-1"></div>
              <Image src="/shape.svg" alt="shape" width={44} height={34} className="-ml-[1px]" />
            </div>
          </div>
        </div>

       <div className="hidden xl:flex w-[670px] ">
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-white">
            At Hydra VR, we craft immersive virtual experiences that blend innovation with user-centered design. 
            From initial conception to full deployment, every stage focuses on interactivity, realism, and seamless navigation. 
            

          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full h-full items-center gap-6 md:gap-[100px] 2xl:gap-[200px] pt-10 xl:pt-0 mb-5 2xl:mb-10">
        <div className="container mx-auto px-4">
          {/* Mobile view: single item with navigation buttons around title */}
          <div className="md:hidden flex flex-col items-center">
            <div className="relative w-48 h-48">
              <div
                className="absolute inset-0 w-full h-full rounded-full"
                style={{ backgroundColor: "rgba(13, 13, 13, 0.4)" }}
              ></div>
              <div className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-full bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]"></div>
              <span className="absolute inset-0 flex items-center justify-center text-[#343045] font-montserrat font-bold text-6xl">
                {items[currentItemIndex].id}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between w-full max-w-[300px]">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform"
              >
                <BsChevronLeft className="text-black text-xl" />
              </button>
              <div className="flex flex-col justify-start items-center">
                {items[currentItemIndex].titles.map((title, i) => (
                  <h3
                    key={i}
                    className="mt-2 text-white font-montserrat font-bold text-xl"
                  >
                    {title}
                  </h3>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform"
              >
                <BsChevronRight className="text-black text-xl" />
              </button>
            </div>
          </div>

          {/* Desktop view: grid of all items */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-48 h-48 sm:w-36 sm:h-36 lg:w-48 lg:h-48">
                  <div
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{ backgroundColor: "rgba(13, 13, 13, 0.4)" }}
                  ></div>
                  <div className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-full bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-[#343045] font-montserrat font-bold text-6xl">
                    {item.id}
                  </span>
                </div>
                <div className="mt-4 flex flex-row gap-4 mr-6">
                  <Image
                    src={item.icon}
                    alt="Arrow"
                    width={64}
                    height={64}
                    className="w-8 h-8 mt-2"
                  />
                  <div className="flex flex-col justify-start items-start">
                    {item.titles.map((title, i) => (
                      <h3
                        key={i}
                        className="mt-2 text-white font-montserrat font-bold text-xl"
                      >
                        {title}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default How