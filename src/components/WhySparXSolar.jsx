"use client"; 

export default function WhySparXSolar() {
  const boxes = [
    {
      heading: "Direct & Responsive Communication",
      desc: "Our team is always within reach. Customers can connect quickly through scheduled consultations, fast callbacks, and dedicated project coordinators—ensuring clarity at every step of the journey.",
    },
    {
      heading: "Reputation Built on Real Results",
      desc: "Sparx Solar grows through referrals and real-world performance. Our work speaks through completed projects, partner relationships, and measurable energy outcomes—not empty promises.",
    },
    {
      heading: "People-First Company Culture",
      desc: "We invest deeply in our team, processes, and technology. Our focus on growth, learning, and innovation creates better experiences—for employees and customers alike.",
    },
    {
      heading: "Guided Customer Journey",
      desc: "From first contact to system activation, we guide customers through a clear, structured process—educating, supporting, and optimizing decisions every step of the way.",
    },
    {
      heading: "Simple Next Steps",
      desc: "We make it easy to move forward—whether you’re exploring solar options, requesting a consultation, or planning a future upgrade. No pressure. Just clarity.",
    },
    {
      heading: "Focused on Execution, Not Noise",
      desc: "Rather than chasing trends, we focus on building advanced energy systems and next-generation products—including solar shingles and integrated smart infrastructure.",
    },
    {
      heading: "Built for the Future of Energy",
      desc: "Sparx Solar is part of a broader innovation ecosystem—combining solar, smart infrastructure, and intelligent monitoring to deliver long-term value, reliability, and performance.",
    },
  ];

  return (
    <section className="w-full flex justify-center mt-24 lg:mt-0 lg:py-28 bg-white">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mb-12 text-[#303F52]">
          Why Sparx Solar{" "}
          <span className="text-[#FA8C3D] block mt-2 font-bold">
            <span className="text-[#303F52] font-normal"></span> “Solar Made Simple”
          </span>
        </h2>

        {/* Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`p-6 rounded-[20px] min-h-[180px] flex flex-col justify-start ${
                index === 0
                  ? "bg-[#FA8C3D] text-white"
                  : "bg-[#FFF6EF] text-[#303F52B2]"
              }`}
            >
              {box.heading && (
                <h3
                  className={`font-semibold mb-2 text-lg`}
                >
                  {box.heading}
                </h3>
              )}
              <p className={`leading-relaxed text-sm`}>
                {box.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
