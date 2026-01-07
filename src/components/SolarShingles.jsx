"use client"; 
import { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import SkewedButton from "./SkewedButton";

const images = [
  "/images/SolarShingles1.jpeg",
  "/images/SolarShingles2.jpeg",
];

export default function SolarShingles() {
  const [currentImage, setCurrentImage] = useState(0);
  

  // Image loop with fade every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full flex justify-center mt-24 lg:mt-0 lg:pt-28 bg-white">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl text-[#303F52] mb-4">
            Solar Shingles{" "}
            <span className="text-[#FA8C3D] block mt-2 font-bold text-lg">
              Roof-Integrated Solar Technology
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#303F52B2] text-base sm:text-lg leading-relaxed">
            SparX Solar brings future-ready solar technology to your home with sleek, roof-integrated solar shingles that combine energy production and elegant design. Experience clean energy without compromising your roof aesthetics.
          </p>

          {/* CTA Button */}
          <SkewedButton
            text="Talk to an Expert"
            color="#FA8C3D"
            textColor="#fff"
            size="small sm:medium"
            icon={<MdKeyboardArrowRight size={22} />}
            onClick={scrollToContact}
          />

          {/* Small Note */}
          <p className="text-sm text-[#303F52B2] mt-2">
            Eligibility depends on roof design and location.
          </p>

          {/* Bullet addition for Why Choose Sparx Solar */}
          <ul className="list-disc list-inside text-[#303F52B2]">
            <li>Future-Ready Product Portfolio</li>
          </ul>
        </div>

        {/* RIGHT COLUMN - Animated Images */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[400px] flex justify-center items-center overflow-hidden rounded-[20px] border-[0px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 rounded-[20px] ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Solar Shingle ${index + 1}`}
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
