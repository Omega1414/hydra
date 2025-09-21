"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // ✅ Ref tipini düzəltdik

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => { // ✅ Event tipini əlavə etdik
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -60; // header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsSidebarOpen(false); // Close sidebar on link click
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`w-full fixed z-20 flex flex-row justify-between px-4 md:px-[42px] py-[10px] h-[100px] transition-all duration-300 ${isScrolled ? 'bg-[#3C3650]/90' : 'bg-transparent'}`}>
      {/* Logo */}
      <div className='flex flex-row justify-center gap-3.5 font-montserrat mt-0 md:ml-5 cursor-pointer' onClick={() => handleScroll("hero")}>
        <Image src="/logo.svg" alt="MyLogo" width={90} height={90} />
        <Image src="/name.svg" alt="MyName" width={60} height={60} />
      </div>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex font-bold text-[12px] items-center font-montserrat flex-row gap-[41px]'>
        <h1 onClick={() => handleScroll("about")} className='cursor-pointer'>ABOUT</h1>
        <h1 onClick={() => handleScroll("services")} className='cursor-pointer'>SERVICES</h1>
        <h1 onClick={() => handleScroll("technologies")} className='cursor-pointer'>TECHNOLOGIES</h1>
        <h1 onClick={() => handleScroll("howTo")} className='cursor-pointer'>HOW TO</h1>
      </div>
      <div className='hidden lg:flex gap-[30px] justify-center items-center'>
        <button className='w-[155px] h-[48px] rounded-[40px] border-2 border-solid border-white text-[12px] font-montserrat font-bold' onClick={() => handleScroll("footer")}>CONTACT US</button>
        <button className='w-[155px] h-[48px] rounded-[40px] text-[#343045] text-[12px] font-montserrat font-bold bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)]' onClick={() => handleScroll("form")}>JOIN HYDRA</button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className='lg:hidden flex items-center'>
        <Image src="/ham.svg" alt="Menu" width={30} height={30} onClick={toggleSidebar} className='cursor-pointer' />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#3C3650]/90  flex flex-col items-start p-6 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden z-30`}
      >
        <IoClose size={30} color="white" onClick={toggleSidebar} className='cursor-pointer mb-6 self-end' />
        <div className='flex flex-col gap-6 font-montserrat text-white text-[14px] font-bold'>
          <h1 onClick={() => handleScroll("about")} className='cursor-pointer'>ABOUT</h1>
          <h1 onClick={() => handleScroll("services")} className='cursor-pointer'>SERVICES</h1>
          <h1 onClick={() => handleScroll("technologies")} className='cursor-pointer'>TECHNOLOGIES</h1>
          <h1 onClick={() => handleScroll("howTo")} className='cursor-pointer'>HOW TO</h1>
          <button className='w-[155px] h-[48px] rounded-[40px] border-2 border-solid border-white text-[12px] font-montserrat font-bold' onClick={() => handleScroll("footer")}>CONTACT US</button>
          <button className='w-[155px] h-[48px] rounded-[40px] text-[#343045] text-[12px] font-montserrat font-bold bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)]' onClick={() => handleScroll("form")}>JOIN HYDRA</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
