"use client";

import Image from "next/image";

export default function KeyEnergyExteriors() {
  const items = [
    {
      title: "Double & Triple Pane Windows",
      desc: "Multi-pane glass sealed with argon gas dramatically reduces heat transfer — keeping your home cooler in summer and warmer in winter.",
      img: "/images/DTPW.png",
    },
    {
      title: "Low-E Glass Coatings",
      desc: "Microscopically thin metallic coatings reflect infrared heat while allowing natural light — cutting energy transfer year-round without sacrificing brightness.",
      img: "/images/LGC.png",
    },
    {
      title: "Reflective ''Cool'' Roofing Materials",
      desc: "Reflect solar heat instead of absorbing it — modern reflective shingles lower roof surface temperatures and reduce cooling costs significantly.",
      img: "/images/RCRM.png",
    },
    {
      title: "Air Sealing & Window Frames",
      desc: "Vinyl and fiberglass frames eliminate thermal bridging. Proper sealing removes drafts — one of the fastest ways to cut energy bills immediately.",
      img: "/images/AWF.png",
    },
    {
      title: "Roof Ventilation Systems",
      desc: "Proper ridge and soffit venting regulates attic temperature and moisture — extending shingle life and preventing structural damage.",
      img: "/images/RVS.png",
    },
    {
      title: "Solar + Battery Storage",
      desc: (
  <>
    Pair solar panels with battery storage for a self-powered home. Full solar solutions available at{" "}
    <a
      href="https://sparx.solar"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FEDD45] underline font-medium"
    >
      sparx.solar
    </a>
  </>
),
      img: "/images/SBS.png",
    },
  ];

  return (
    <section className="w-[95%] max-w-[1600px] m-auto rounded-[20px] py-20 flex justify-center bg-[#15273d] mt-24 lg:mt-32">
      {/* FIXED WIDTH CONTAINER (95%) */}
      <div className="w-[85%]">
        {/* Heading */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-2xl md:text-4xl text-white text-left sm:text-center">
            Key Energy Efficiency
            <br className="hidden sm:block"/>{" "}
            Concepts We Work With
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[15px] overflow-hidden group h-[450px]"
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
                <h3 className="text-md font-[500]">{item.title}</h3>
                <p className="text-xs text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
