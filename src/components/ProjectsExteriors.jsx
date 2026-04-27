"use client";

import Image from "next/image";

export default function ProjectsExteriors() {
  const cards = [
    {
      title: "Residential Solar Installation",
      desc: "Phoenix, AZ — 8.4 kW custom system",
      link: "SOLAR",
      img: "/images/RSI.png",
    },
    {
      title: "Full Roof Replacement",
      desc: "Rancho Cucamonga, CA — CertainTeed Landmark",
      link: "ROOFING",
      img: "/images/FRR.png",
    },
    {
      title: "Full Siding Installation",
      desc: "Phoenix, AZ — LP SmartSide vinyl",
      link: "SIDING",
      img: "/images/FSI.png",
    },
  ];

  return (
    <section className="w-full bg-[#f8f8f8] py-20 flex justify-center">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px]">

        {/* Heading */}
        <div className="max-w-[800px] m-auto space-y-4 mb-14">
          <h2 className="text-2xl md:text-4xl text-[#303F52] text-left sm:text-center">
            Projects & Results
          </h2>

          <p className="text-gray-600 text-base sm:text-lg text-left sm:text-center">
            Real homes, real transformations. See the Sparx Exteriors difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.06)] flex flex-col"
            >

              {/* IMAGE */}
              <div className="w-full h-[200px] overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">

                <h3 className="text-lg font-[500] text-[#303F52] mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {card.desc}
                </p>

                {/* LINK */}
                <div className="mt-14">
                  <a
                    href="#"
                    className="text-sm font-[500] text-[#303f52] hover:underline"
                  >
                    {card.link}
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}