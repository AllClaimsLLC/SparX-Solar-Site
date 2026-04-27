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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-4xl text-[#303F52] text-left">
            Our Process
          </h2>

          <p className="text-lg md:text-[14px] text-[#303F52] max-w-lg">
            At Sparx Solar, we make going solar simple, seamless, and
            stress-free. From the initial assessment to powering your home with
            clean energy, we guide you every step of the way.
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
              Planning & Permitting
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              We begin by thoroughly inspecting your property and designing a
              customized solar plan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FEDD4433] p-6 md:p-8">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              02
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">Installation</h4>
            <p className="text-[#303F52] text-sm md:text-base">
              Our expert team installs high-quality solar panels with precision
              and safety.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFD1B133] p-6 md:p-8 border-t-2 border-[#FA8C3D] lg:border-t-0">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              03
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">
              Approval & Activation
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              After inspection, we activate your system and connect it to the
              grid.
            </p>
          </div>

          {/* Card 4 (NEW) */}
          <div className="bg-[#FFD1B133] p-6 md:p-8 border-t-2 border-[#FA8C3D] lg:border-t-0">
            <h3 className="text-6xl md:text-[8rem] font-[200] text-black pb-6">
              04
            </h3>
            <h4 className="text-lg text-[#303F52] mb-2">
              Maintenance & Support
            </h4>
            <p className="text-[#303F52] text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-28 items-center mt-24 lg:mt-32">
          {/* LEFT IMAGE */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/fast-installation.jpg"
              alt="Process"
              width={600}
              height={500}
              className="w-full rounded-[15px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-xl sm:text-3xl leading-[1.2]">
              Seamless Solar Experience From Start To Finish
            </h2>

            <p className="text-gray-600 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <GiCheckMark className="text-[#FA8C3D] mt-1" />
                <p className="text-sm text-gray-700">
                  Fast and reliable installation process
                </p>
              </div>

              <div className="flex items-start gap-2">
                <GiCheckMark className="text-[#FA8C3D] mt-1" />
                <p className="text-sm text-gray-700">
                  Expert engineering and planning support
                </p>
              </div>

              <div className="flex items-start gap-2">
                <GiCheckMark className="text-[#FA8C3D] mt-1" />
                <p className="text-sm text-gray-700">
                  Transparent pricing with no hidden costs
                </p>
              </div>

              <div className="flex items-start gap-2">
                <GiCheckMark className="text-[#FA8C3D] mt-1" />
                <p className="text-sm text-gray-700">
                  Lifetime customer support assistance
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
