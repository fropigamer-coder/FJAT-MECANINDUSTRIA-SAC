"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import ProjectGallery from "@/components/ProjectGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <ProjectGallery />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
