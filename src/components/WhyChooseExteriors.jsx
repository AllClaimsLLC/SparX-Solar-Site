"use client";

import Image from "next/image";

export default function WhyChooseExteriors() {
  const boxes = [
    { icon: "/icons/HQW.png", heading: "High-Quality Workmanship" },
    { icon: "/icons/ILW.png", heading: "Industry-Leading Warranties" },
    { icon: "/icons/FFO.png", heading: "Flexible Financing Options" },
    { icon: "/icons/EPT.png", heading: "Experienced & Professional Team" },
    { icon: "/icons/OCFAEN.png", heading: "One Company for All Exterior Needs" },
  ];

  return (
    <section className="flex justify-center mt-24 lg:mt-36">
      <div
        className="w-[90%] rounded-[30px] overflow-hidden relative"
        style={{
          backgroundImage:
            "url('/images/why-choose-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-white p-6 md:pt-80 md:pb-12 md:px-8">
          {/* Heading (LEFT aligned) */}
          <div className="mb-10">
           <h2 className="text-2xl md:text-4xl text-white text-left">
              Why Choose <span className="text-[#fb8c3b]">Sparx Exteriors?</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-[15px] p-2 sm:p-4 flex items-center"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  {/* Icon */}
                  <div className="bg-[#FA8C3D] rounded-[5px] p-1.5 sm:p-2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                    <Image
                      src={box.icon}
                      alt={box.heading}
                      width={18}
                      height={18}
                      className="sm:w-[22px] sm:h-[22px]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs md:text-[13px] font-medium text-[#203145] leading-tight break-words">
                    {box.heading}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
