"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import SkewedButton from "./SkewedButton";
import Image from "next/image";

export default function HeroSectionExteriors() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalendly = () => {
    window.open(
      "https://calendly.com/ryanp-sparx/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="
        hero-wrapper
        relative w-full min-h-screen
        bg-cover bg-center bg-no-repeat
        bg-[url('/images/mobilebg.png')]
        sm:bg-[url('/images/hero-bg.jpg')]
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#26384e]/90 to-black/30"></div>

      {/* Content Wrapper */}
      <div className="relative w-[90%] mx-auto max-w-[1400px] pt-24 md:pt-28 lg:pt-32 pb-16">
        
        {/* GRID 2 COL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-[44px] custom-lh">
              Quality Solar Installation.
              <br className="hidden sm:block" />
              We're Using Sunlight to Keep The Lights On
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-[300]">
              Sparx Solar helps homeowners switch to clean energy with trusted
              installation, transparent pricing, and a seamless experience from
              start to finish.
            </p>

            <div className="flex flex-row gap-4 sm:gap-8 pt-4">
              <SkewedButton
                text="Free Quote"
                color="#FA8C3D"
                textColor="#fff"
                size="small sm:medium"
                icon={<MdKeyboardArrowRight size={22} />}
                onClick={scrollToContact}
              />

              <SkewedButton
                text="Request a Call Back"
                color="white"
                textColor="#303F52"
                size="small sm:medium"
                icon={<MdKeyboardArrowRight size={22} />}
                onClick={openCalendly}
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/testimonials.png"
              alt="Testimonials"
              width={500}
              height={500}
              className="w-full max-w-[500px] object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}