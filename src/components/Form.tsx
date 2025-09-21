import Image from 'next/image';
import React from 'react'

const Form = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-8 " id="form">
      <div
        className="w-full max-w-4xl rounded-[80px] p-6 md:p-8 lg:p-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Header */}
        <div className="text-center text-white mb-6 md:mb-10">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-2xl">
            JOIN HYDRA
          </h2>

          {/* Divider */}
          <div className="flex justify-center mt-3">
            <Image
              src="/vector/16.svg"
              alt="divider"
              width={414}
              height={6}
              className="w-40 md:w-64 lg:w-80 h-auto"
            />
          </div>

          <p className="mt-4 font-montserrat font-light text-base md:text-lg lg:text-2xl">
            Let’s Build Your VR Experience
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-6 py-4 rounded-full border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-6 py-4 rounded-full border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 rounded-full border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-6 py-4 rounded-full border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-6 py-4 rounded-full border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Tell Us Something..."
            rows={4}
            className="w-full px-6 py-3 rounded-2xl border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none resize-none"
          />

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045] font-montserrat font-bold transition-transform hover:scale-105 text-sm md:text-[10px]"
            >
              SEND TO HYDRA
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form
