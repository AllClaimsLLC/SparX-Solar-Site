"use client";

import Image from "next/image";
import { IoArrowDownOutline, IoArrowUp } from "react-icons/io5";

export default function HomeImprovementsExteriors() {
  return (
    <section className="w-full flex justify-center mt-24 lg:mt-32">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px]">
        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-24 items-center mb-10">
          {/* LEFT HEADING */}
          <div>
            <h2 className="text-2xl md:text-4xl text-[#303F52] text-left">
              Home Improvements,
              <br className="hidden sm:block" />{" "}
              Are An Investment,
              <br className="hidden sm:block" />{" "}
              Not Just An Expense
            </h2>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              The right upgrades increase property value, lower your cost of
              living, and improve long-term comfort and performance.
            </p>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="w-full h-[2px] bg-[#fb8c3b] mb-12"></div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-32 items-center mb-20">
          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/images/home-improvements-left.png"
              alt="Installation"
              width={600}
              height={500}
              className="w-full h-auto rounded-[15px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-xl sm:text-3xl leading-[1.2]">
              How Windows Impact Your Home's Temperature
            </h2>

            {/* Text */}
            <p className="text-gray-600 text-base sm:text-lg">
              Windows are one of the most significant sources of energy loss in
              any home. Old or single-pane windows allow heat to escape in
              winter and pour in during summer — forcing your HVAC to work
              harder and driving up energy bills. Upgrading to modern double or
              triple-pane windows with Low-E coatings creates a thermal barrier
              that keeps conditioned air exactly where it belongs: inside your
              home.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-[#fff6ef] rounded-[20px] p-4 text-center space-y-2">
                <h4 className="text-[16px] sm:text-[25px]">25 - 30%</h4>
                <p className="text-xs text-gray-600">
                  Of home energy lost through windows
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fff8db] rounded-[20px] p-4 text-center space-y-2">
                <IoArrowDownOutline className="mx-auto" size={30} />
                <p className="text-xs text-gray-600">Heating & cooling costs</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#fff6ef] rounded-[20px] p-4 text-center space-y-2">
                <IoArrowUp className="mx-auto" size={30} />
                <p className="text-xs text-gray-600">Year-round comfort</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-32 items-center">
          {/* LEFT CONTENT (FLIPPED) */}
          <div className="space-y-6 lg:order-1 order-2">
            {/* Heading */}
            <h2 className="text-xl sm:text-3xl leading-[1.2]">
              Roofing &<br className="hidden sm:block" /> Windows Upgrades
            </h2>

            {/* Text */}
            <p className="text-gray-600 text-base sm:text-lg">
              New roofing and energy-efficient windows work together to
              strengthen your home's thermal envelope. A reflective cool roof
              reduces surface temperatures significantly, lowering your cooling
              load. Paired with upgraded windows, these improvements deliver
              measurable energy savings every single month — and increase your
              property's resale value.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-[#fff6ef] rounded-[20px] p-4 text-center space-y-2">
                <h4 className="text-[16px] sm:text-[25px]">25 - 30%</h4>
                <p className="text-xs text-gray-600">
                  Potential Energy Reduction
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fff8db] rounded-[20px] p-4 text-center space-y-2">
                <IoArrowDownOutline className="mx-auto" size={30} />
                <p className="text-xs text-gray-600">Property Value Increase</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#fff6ef] rounded-[20px] p-4 text-center space-y-2">
                <IoArrowUp className="mx-auto" size={30} />
                <p className="text-xs text-gray-600">Energy Bills</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (FLIPPED) */}
          <div className="lg:order-2 order-1">
            <Image
              src="/images/home-improvements-right.png"
              alt="Installation"
              width={600}
              height={500}
              className="w-full h-auto rounded-[15px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
