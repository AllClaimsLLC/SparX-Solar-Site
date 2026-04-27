"use client";

import Image from "next/image";

export default function KeyEnergyExteriors() {
  const items = [
    { title: "Insulation", desc: "Energy saving", img: "/images/ourcommitment-bg.jpg" },
    { title: "Ventilation", desc: "Air flow", img: "/images/ourcommitment-bg.jpg" },
    { title: "Solar Panels", desc: "Clean energy", img: "/images/ourcommitment-bg.jpg" },
    { title: "Roofing", desc: "Heat control", img: "/images/ourcommitment-bg.jpg" },
    { title: "Windows", desc: "Temperature balance", img: "/images/ourcommitment-bg.jpg" },
    { title: "Sealing", desc: "Air tightness", img: "/images/ourcommitment-bg.jpg" },
  ];

  return (
    <section className="w-[95%] max-w-[1600px] m-auto rounded-[20px] py-20 flex justify-center bg-[#15273d] mt-24 lg:mt-32">

      {/* FIXED WIDTH CONTAINER (95%) */}
      <div className="w-[85%]">

        {/* Heading */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl text-white text-left sm:text-center">
            Key Energy Efficiency
            <br />
            Concepts We Work With
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[15px] overflow-hidden group h-[300px]"
            >

              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />

              {/* LIGHTER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15273d]/70 via-[#15273d]/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}