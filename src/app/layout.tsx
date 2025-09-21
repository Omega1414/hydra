import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-montserrat', 
  display: 'swap', 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hydra",
  description: "BUILD YOUR WORLD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} >
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
