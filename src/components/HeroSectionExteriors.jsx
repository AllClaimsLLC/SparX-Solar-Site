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
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="home"
      className="
        min-h-auto
        relative w-full min-h-screen
        bg-[#203145]
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#26384e]/90 to-black/30"></div>

      {/* Content Wrapper */}
      <div className="relative w-[90%] mx-auto max-w-[1400px] pt-24 md:pt-28 lg:pt-32 pb-16">
{/* GRID 2 COL */}
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

  {/* RIGHT IMAGE (MOBILE TOP) */}
  <div className="flex justify-center lg:justify-end order-1 lg:order-2">
    <Image
      src="/images/hero-right.png"
      alt="hero-right"
      width={500}
      height={500}
      className="w-full max-w-[800px] object-contain"
      priority
    />
  </div>

  {/* LEFT CONTENT (MOBILE BOTTOM) */}
  <div className="text-white space-y-6 order-2 lg:order-1">
    <h1 className="text-3xl sm:text-4xl md:text-[44px] custom-lh">
      Upgrade Your
      <br className="hidden sm:block" />
      Home with Trusted
      <br className="hidden sm:block" />
      Exterior Solutions
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-[300]">
      Windows, Roofing, Siding, and Solar — professionally installed
      with quality craftsmanship, strong warranties, and flexible
      financing options.
    </p>

    <div className="flex flex-row gap-4 sm:gap-8 pt-4">
      <SkewedButton
        text="Get A Free Estimate"
        color="#FA8C3D"
        textColor="#fff"
        size="small sm:medium"
        icon={<MdKeyboardArrowRight size={22} />}
        onClick={scrollToContact}
      />

      <SkewedButton
        text="Request A Call Back"
        color="white"
        textColor="#303F52"
        size="small sm:medium"
        icon={<MdKeyboardArrowRight size={22} />}
        onClick={openCalendly}
      />
    </div>
  </div>

</div>
      </div>
    </section>
  );
}
