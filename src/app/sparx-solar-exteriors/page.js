import ContactExteriors from "@/components/ContactExteriors";
import FooterExteriors from "@/components/FooterExteriors";
import HeroSectionExteriors from "@/components/HeroSectionExteriors";
import HomeImprovementsExteriors from "@/components/HomeImprovementsExteriors";
import KeyEnergyExteriors from "@/components/KeyEnergyExteriors";
import NavbarExteriors from "@/components/NavbarExteriors";
import OurProcessExteriors from "@/components/OurProcessExteriors";
import ProjectsExteriors from "@/components/ProjectsExteriors";
import ServicesExteriors from "@/components/ServicesExteriors";
import WhyChooseExteriors from "@/components/WhyChooseExteriors";
import React from "react";

export default function SparxSolarExteriorsPage() {
  return (
    <>
      <NavbarExteriors />
      <HeroSectionExteriors />;
      <ServicesExteriors />
      <WhyChooseExteriors />
      <HomeImprovementsExteriors />
      <KeyEnergyExteriors />
      <OurProcessExteriors />
      <ProjectsExteriors />
      <ContactExteriors />
      <FooterExteriors />
    </>
  );
}
