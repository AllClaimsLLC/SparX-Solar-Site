"use client";

export default function About() {
  return (
    <section className="w-full flex justify-center mt-24 lg:mt-0 lg:pt-28 bg-white">
      <div className="w-[90%] lg:w-[80%] max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mb-12 text-[#303F52]">
          About Sparx Solar
        </h2>

        {/* About Paragraph Box */}
        <div className="bg-[#FA8C3D] rounded-[20px] p-6 sm:p-8 lg:p-10 text-white">
          <p className="text-left leading-relaxed text-base sm:text-lg md:text-xl">
            At Sparx Solar, we help homeowners transition to clean, reliable
            energy with a focus on simplicity, transparency, and lasting
            results. Guided by a people-first culture and a commitment to
            innovation, we deliver high-quality solar installations, premium
            equipment, and seamless support from the first consultation through
            system activation. Our vision is to empower customers to save on
            energy costs, increase home value, and contribute to a sustainable
            future, while building next-generation energy systems that integrate
            smart infrastructure and intelligent monitoring. With a structured,
            customer-focused process and a dedication to measurable outcomes,
            Sparx Solar is shaping the future of energy—making solar
            straightforward, trustworthy, and impactful for every home.
          </p>
        </div>
      </div>
    </section>
  );
}
