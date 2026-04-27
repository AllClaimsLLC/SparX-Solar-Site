"use client";

import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import SkewedButton from "./SkewedButton";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ServicesExteriors() {
  const cards = [
    {
      title: "Windows",
      img: "/images/windows.png",
      desc: "Energy-efficient replacement windows that lower energy bills, improve comfort, and add lasting value.",
      points: [
        "Energy-Efficient Window Installation",
        "Window Replacement",
        "Modern Styles & Custom Fit",
      ],
    },
    {
      title: "Roofing",
      img: "/images/Roofing.png",
      desc: "Complete roofing solutions built to protect and beautify your home.",
      points: [
        "Roof Replacement & Installation",
        "Leak Repairs & Maintenance",
        "High-Quality Materials & Warranty",
      ],
    },
    {
      title: "Solar",
      img: "/images/Solar.png",
      desc: "Complete solar solutions through our dedicated Sparx Solar division — from design to activation.",
      points: [
        "Custom Solar System Design",
        "Professional Installation",
        "Energy Savings Solutions",
      ],
    },
  ];

  return (
    <section className="w-full flex justify-center mt-24 lg:mt-28 bg-white">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px]">

        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto space-y-4 mb-6">
          <h2 className="text-2xl md:text-4xl text-[#303F52] text-left sm:text-center">
            Our Services
          </h2>

          <p className="text-gray-600 text-base sm:text-lg text-left sm:text-center">
            Everything your home exterior needs — under one trusted brand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[15px] p-5 flex flex-col h-full shadow-sm hover:shadow-md transition"
            >
              
              {/* Image */}
              <div className="w-full mb-5">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover rounded-[15px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-[500] mb-2 text-left text-[#303F52]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 text-left">
                {card.desc}
              </p>

              {/* Separator */}
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>

              {/* Points */}
              <div className="space-y-3 mb-6">
                {card.points.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <GiCheckMark className="text-[#303F52] mt-1" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-auto">
                <SkewedButton
                  text="Learn More"
                  color="#fb8c3b"
                  textColor="#fff"
                  icon={<MdKeyboardArrowRight size={22} />}
                  size="small"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}