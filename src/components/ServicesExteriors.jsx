"use client";

import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import SkewedButton from "./SkewedButton";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ServicesExteriors() {
  const cards = [
    {
      title: "Windows",
    },
    {
      title: "Roofing",
    },
    {
      title: "Solar",
    },
  ];

  return (
    <section className="w-full flex justify-center mt-24 lg:mt-28 bg-white">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px]">

        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto space-y-4 mb-14">
          <h2 className="text-3xl md:text-4xl text-[#303F52] text-left sm:text-center">
            Our Services
          </h2>

          <p className="text-gray-600 text-base sm:text-lg text-left sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[15px] p-5 flex flex-col h-full"
            >
              
              {/* Image */}
              <div className="w-full mb-5">
                <Image
                  src="/images/ourcommitment-bg.jpg"
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover rounded-[15px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-left">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut enim ad minim veniam.
              </p>

              {/* Separator */}
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>

              {/* Points */}
              <div className="space-y-6 mb-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <GiCheckMark className="text-gray-700 mt-1" />
                    <p className="text-sm text-gray-700">
                      Lorem ipsum dolor sit amet
                    </p>
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
                  size="small sm:medium"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}