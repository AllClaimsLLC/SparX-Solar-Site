"use client";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import SkewedButton from "./SkewedButton";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function OurProcessExteriors() {
  return (
    <section className="w-full py-24 flex justify-center px-4">
      <div className="w-[98%] md:w-[85%]">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-6">
           <h2 className="text-2xl md:text-4xl text-[#303F52] text-left">
            Our Process
          </h2>

          <p className="text-lg md:text-[14px] text-[#303F52] max-w-lg">
            Simple, transparent, and stress-free from start to finish.
          </p>
        </div>

        {/* Container line */}
        <div className="w-full bg-[#FFD1B133] border-t-2 border-[#FA8C3D] rounded-t-md mt-8"></div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="bg-[#FFD1B133] p-6 md:p-8">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              01
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">
              Request a Free Estimate
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              Reach out online or by phone. No obligation, no pressure — just a
              real conversation about your home and goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FEDD4433] p-6 md:p-8">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              02
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">
              Consultation & Planning
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              We visit your property, assess your needs, and create a customized
              plan with clear, transparent pricing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFD1B133] p-6 md:p-8 border-t-2 border-[#FA8C3D] lg:border-t-0">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              03
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">
              Professional Installation
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              Our certified crew completes the work on schedule, to spec, with
              full cleanup before we leave.
            </p>
          </div>

          {/* Card 4 (NEW) */}
          <div className="bg-[#FFD1B133] p-6 md:p-8 border-t-2 border-[#FA8C3D] lg:border-t-0">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              04
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">
              Final Walkthrough & Satisfaction
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              We walk you through every detail before we leave. Your complete
              satisfaction is our only measure of success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-28 items-center mt-24 lg:mt-32">
          {/* LEFT IMAGE */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/FFA.png"
              alt="Process"
              width={600}
              height={500}
              className="w-full rounded-[15px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 order-1 lg:order-2">
             <h2 className="text-2xl md:text-4xl text-[#303F52] text-left">
              Flexible
              <br className="hidden sm:block" />{" "}
              Financing Available
            </h2>

            <p className="text-gray-600 text-base md:text-lg">
              We offer convenient financing options to make your home
              improvements affordable and stress-free.
            </p>

            {/* Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <GiCheckMark className="text-gray-700 mt-1" />
                <p className="text-sm text-gray-700">
                  $0 down options available
                </p>
              </div>

              <div className="flex items-start gap-2">
                <GiCheckMark className="text-gray-700 mt-1" />
                <p className="text-sm text-gray-700">
                  Flexible monthly payment plans
                </p>
              </div>

              <div className="flex items-start gap-2">
                <GiCheckMark className="text-gray-700 mt-1" />
                <p className="text-sm text-gray-700">Fast approval process</p>
              </div>

              <div className="flex items-start gap-2">
                <GiCheckMark className="text-gray-700 mt-1" />
                <p className="text-sm text-gray-700">
                  Available on all services
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <SkewedButton
                text="Explore Financial Options"
                color="#FA8C3D"
                icon={<MdKeyboardArrowRight size={22} />}
                textColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
