"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div
      className="relative w-full h-full xl:h-screen 
      px-4 md:px-[84px] pt-10 xxs:pt-[50px] xl:pt-[10px] 2xl:pt-0 
      flex flex-col items-center justify-center gap-6 md:gap-[20px] 2xl:gap-15
      max-w-[1440px] mx-auto"
      id="about"
    >
      {/* 7.svg - background shape */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[200px] left-0 w-full z-10"
      >
        <Image src="/vector/7.svg" alt="7" width={1920} height={150} />
      </motion.div>

      {/* 8.svg - overlay shape */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-[450px] left-0 w-full z-0"
      >
        <Image src="/vector/8.svg" alt="8" width={1920} height={100} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col xl:flex-row xl:justify-between items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="font-montserrat font-bold text-[36px] leading-[44px] text-white text-center md:text-left">
            INTRODUCTION
          </h1>
          <div className="flex flex-row gap-[30px] md:gap-[30px]">
            <h2 className="font-montserrat font-light text-[36px] leading-[44px] text-white text-center md:text-left">
              TO HYDRA VR
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className="hidden xl:flex flex-row items-center w-[150px] origin-left"
            >
              <div className="border-t-[3px] border-[#C0B7E8] flex-1"></div>
              <Image
                src="/shape.svg"
                alt="shape"
                width={44}
                height={34}
                className="-ml-[1px]"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="hidden xl:flex xl:w-[600px] 2xl:w-[670px] 2xl:mt-1"
        >
          <p className="font-montserrat font-normal text-[16px] leading-[26px] text-white">
            Hydra VR redefines the way we connect with digital worlds. Through
            seamless design and cutting-edge interaction, we bring imagination
            to life, making virtual experiences feel natural, engaging, and
            limitless.
          </p>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="flex z-10 flex-col mt-10 xl:mt-0 md:flex-row md:justify-center w-full gap-6 md:gap-[100px] 2xl:gap-[200px] mb-5 2xl:mb-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex w-full md:w-[40%] z-10 justify-center xl:mt-4"
        >
          <Image
            src="/intro.svg"
            alt="intro"
            className="w-[340px] md:w-[300px] 2xl:w-[400px]"
            width={460}
            height={426}
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col w-full md:w-[60%] justify-center items-center md:items-start"
        >
          <h1 className="hidden md:block font-montserrat font-bold text-[36px] leading-[44px] text-white">
            ABOUT
          </h1>
          <h2 className="hidden md:block font-montserrat font-light text-[36px] leading-[44px] text-[rgba(255,255,255,0.95)]">
            HYDRA VR
          </h2>
          <p className="w-full xl:w-[600px] 2xl:w-[650px] font-montserrat font-normal text-[16px] leading-[20px] text-white mt-5 xl:mt-2 2xl:mt-5 px-5 md:px-0 text-justify break-words hyphens-auto">
            Hydra VR was founded on a simple idea: that technology should not
            only connect us, but also inspire us to dream bigger. In an age
            where digital innovation is rapidly reshaping the way we live, work,
            and play, we believe virtual reality has the power to transform
            imagination into reality. Our team is dedicated to building
            experiences that are not just visually stunning, but also deeply
            engaging, intuitive, and purposeful.
            <br />
            <br />
            We combine cutting-edge design with advanced development to create
            immersive worlds where interaction feels natural and discovery feels
            limitless. From concept to deployment, every detail is carefully
            crafted to ensure that users feel not only transported into a
            virtual space, but also emotionally connected to it.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(192, 183, 232, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-[214px] h-[48px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-[40px] mt-5 transition-all duration-300"
          >
            <h3 className="h-[15px] font-montserrat font-bold text-[12px] leading-[15px] text-[#343045]">
              LET’S GET IN TOUCH
            </h3>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
