import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 font-montserrat relative overflow-hidden" id="footer">
      {/* Background Vectors */}
      <div className="absolute top-[-220px] left-0 w-full h-auto">
        <Image
          src="/vector/19.svg"
          alt="Background Vector 19"
          width={0}
          height={0}
          className="w-full h-auto"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="absolute bottom-[150px] left-0 w-full h-auto">
        <Image
          src="/vector/18.svg"
          alt="Background Vector 18"
          width={0}
          height={0}
          className="w-full h-auto"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        {/* Mobile view */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Hydra Logo"
              width={140}
              height={180}
              className="drop-shadow-lg"
            />
          </div>

          {/* Social heading */}
          <h4 className="font-bold text-base">SOCIALIZE WITH HYDRA</h4>

          {/* Social icons */}
          <div className="flex flex-wrap gap-4 justify-center text-[#343045]">
            {[
              <FaFacebookF key="fb" />,
              <FaTwitter key="tw" />,
              <FaLinkedinIn key="li" />,
              <FaInstagram key="ig" />,
              <FaYoutube key="yt" />,
              <FaPinterestP key="pt" />,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C0B7E8]"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045] font-bold text-[12px] hover:scale-105 transition-transform">
            BUILD YOUR WORLD
          </button>

          {/* Divider (Vector 17) */}
          <div className="w-full mt-8">
            <Image
              src="/vector/17.svg"
              alt="divider"
              width={1269}
              height={2}
              className="w-full h-auto"
            />
          </div>

          {/* Copyright Text */}
          <p className="text-center mt-8 text-xs tracking-wider font-bold">
            © 2025 · Built by Vasif Babazade · All rights reserved
          </p>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex flex-col">
          {/* Top Section */}
          <div className="flex flex-row items-start justify-between gap-12 md:gap-16 lg:gap-20">
            {/* Logo */}
            <div className="flex justify-start">
              <Image
                src="/logo.svg"
                alt="Hydra Logo"
                width={140}
                height={180}
                className="drop-shadow-lg"
              />
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div
                style={{
                  width: '6px',
                  height: '200px',
                  background: 'linear-gradient(to bottom, #343035 0%, #C0B7E8 35%, #8176AF 69%, #343045 99%)',
                }}
              />
            </div>

            {/* Links Column 1 */}
            <div className="flex flex-col items-start space-y-5">
              <h4 className="font-bold text-base">ABOUT</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
                <li>JOIN HYDRA</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div
                style={{
                  width: '6px',
                  height: '200px',
                  background: 'linear-gradient(to bottom, #343035 0%, #C0B7E8 35%, #8176AF 69%, #343045 99%)',
                }}
              />
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col items-start space-y-5">
              <h4 className="font-bold text-base">F.A.Q</h4>
              <ul className="space-y-4 text-sm font-bold leading-5">
                <li>SITEMAP</li>
                <li>CONDITIONS</li>
                <li>LICENSES</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div
                style={{
                  width: '6px',
                  height: '200px',
                  background: 'linear-gradient(to bottom, #343035 0%, #C0B7E8 35%, #8176AF 69%, #343045 99%)',
                }}
              />
            </div>

            {/* Social + CTA */}
            <div className="flex flex-col items-start space-y-8">
              <h4 className="font-bold text-base">SOCIALIZE WITH HYDRA</h4>

              {/* Social icons */}
              <div className="flex flex-wrap gap-4 text-[#343045]">
                {[
                  <FaFacebookF key="fb" />,
                  <FaTwitter key="tw" />,
                  <FaLinkedinIn key="li" />,
                  <FaInstagram key="ig" />,
                  <FaYoutube key="yt" />,
                  <FaPinterestP key="pt" />,
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C0B7E8]"
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045] font-bold text-[12px] hover:scale-105 transition-transform">
                BUILD YOUR WORLD
              </button>
            </div>
          </div>

          {/* Divider (Vector 17) */}
          <div className="w-full mt-14">
            <Image
              src="/vector/17.svg"
              alt="divider"
              width={1269}
              height={2}
              className="w-full h-auto"
            />
          </div>

          {/* Bottom Text */}
          <p className="text-center mt-8 text-sm tracking-wider font-bold">
            © 2025 · Built by Vasif Babazade · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}