"use client"
import Image from "next/image"
import React, { useState } from "react"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { motion } from "framer-motion"

const Why = () => {
  const cards = [
    {
      img: "/sim.png",
      title: "SIMULATION",
      desc: "Through Hydra VR, simulations bring ideas to life. Complex processes are simplified, letting users explore safely, intuitively, and with confidence.",
    },
    {
      img: "/edu.png",
      title: "EDUCATION",
      desc: "Hydra VR redefines how people learn and grow. Immersive experiences unlock creativity, making education engaging, effective, and deeply memorable.",
    },
    {
      img: "/self.png",
      title: "SELF-CARE",
      desc: "Hydra VR promotes balance and focus. Guided environments help users recharge, reduce stress, and build healthier daily habits naturally.",
    },
    {
      img: "/out.png",
      title: "OUTDOOR",
      desc: "With Hydra VR, outdoor adventures feel limitless. Explore vast landscapes, train skills, and discover new challenges in safe immersive worlds.",
    },
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  return (
    <div
      className="relative w-full h-auto
      px-0 md:px-[84px] pt-10 flex flex-col items-center 
      max-w-[1440px] mx-auto z-10"
      id="services"
    >
      {/* 7.svg - background shape */}
      <div className="absolute top-[200px] left-0 w-full z-10">
        <Image src="/vector/14.svg" alt="14" width={1920} height={150} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col  xl:flex-row xl:justify-between items-center w-full gap-6 md:gap-[50px] 2xl:gap-[100px]">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="w-[300px] h-[44px] font-montserrat font-bold text-[36px] leading-[44px] text-white text-center md:text-left">
            WHY BUILD
          </h1>
          <div className="flex flex-row gap-[30px]">
            <h2 className="w-[280px] h-[44px] font-montserrat font-light text-[36px] leading-[44px] text-white text-center md:text-left">
              WITH HYDRA?
            </h2>
            <div className="hidden xl:flex flex-row items-center w-[150px]">
              <div className="border-t-[3px] border-[#C0B7E8] flex-1"></div>
              <Image src="/shape.svg" alt="shape" width={44} height={34} className="-ml-[1px]" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-[670px]">
          <p className="font-montserrat font-normal text-[16px] leading-[26px] text-white">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed
            pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa
            tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in.
          </p>
        </div>
      </div>

      <div className="flex w-full h-full justify-center mt-10 xl:mt-4  py-0 2xl:py-10 relative z-10">
        {/* Mobile view: single card with navigation buttons */}
        <div className="md:hidden flex items-center z-10">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform"
          >
            <BsChevronLeft className="text-black text-xl" />
          </button>
          <motion.div
            key={currentCardIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[40px] p-6 flex flex-col items-center text-center"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)",
            }}
          >
            <div className="relative w-[190px] h-[190px]  flex items-center justify-center mb-2">
              <div className="absolute -inset-2 rounded-full bg-[#0E0E0E]" />
              <Image
                src={cards[currentCardIndex].img}
                alt={cards[currentCardIndex].title}
                width={190}
                height={190}
                className="object-cover rounded-full relative z-10"
              />
            </div>
            <h3 className="text-white font-montserrat font-bold text-[24px] leading-[29px] mb-1">
              {cards[currentCardIndex].title}
            </h3>
            <div className="w-40 border border-[rgba(192,183,232,0.33)] mb-2" />
            <p className="text-white font-montserrat font-normal text-[12px] leading-[15px] w-[200px] mb-6">
              {cards[currentCardIndex].desc}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(192, 183, 232, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-[154px] h-[48px] rounded-[40px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] flex items-center justify-center transition-all duration-300"
            >
              <span className="font-montserrat font-bold text-[12px] leading-[15px] text-[#343045]">
                TRY IT NOW
              </span>
            </motion.button>
          </motion.div>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C0B7E8] to-[#8176AF] rounded-full hover:scale-105 transition-transform"
          >
            <BsChevronRight className="text-black text-xl" />
          </button>
        </div>

        {/* Desktop view: grid of all cards */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(192,183,232,0.3)" }}
              className="rounded-[40px] p-6 xl:p-4 2xl:p-6 flex flex-col items-center text-center cursor-default"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)",
              }}
            >
              <div className="relative w-[190px] xl:w-[140px] h-[190px] xl:h-[140px] 2xl:w-[190px] 2xl:h-[190px] flex items-center justify-center mb-2 2xl:mb-6">
                <div className="absolute -inset-2 rounded-full bg-[#0E0E0E]" />
                <Image
                  src={card.img}
                  alt={card.title}
                  width={190}
                  height={190}
                  className="object-cover rounded-full relative z-10"
                />
              </div>
              <h3 className="text-white font-montserrat font-bold text-[24px] xl:text-[20px] 2xl:text-[24px] leading-[29px] mb-1 2xl:mb-3">
                {card.title}
              </h3>
              <div className="w-40 border border-[rgba(192,183,232,0.33)] mb-2 xl:mb-1 2xl:mb-4" />
              <p className="text-white font-montserrat font-normal text-[12px] leading-[15px] w-[200px] 2xl:w-[250px] mb-6">
                {card.desc}
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(192, 183, 232, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-[154px] h-[48px] rounded-[40px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] flex items-center justify-center transition-all duration-300"
              >
                <span className="font-montserrat font-bold text-[12px] leading-[15px] text-[#343045]">
                  TRY IT NOW
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Why
