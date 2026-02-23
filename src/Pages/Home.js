import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../Components/NavBar";
import HeroSlider from "../Components/HeroSection";
import Services from "../Components/Services";
import AboutSection from "../Components/About";
import SolutionsSection from "../Components/SolutionSection";
import ConsultationSection from "../Components/ConsultationSection";
import InfrastructureSection from "../Components/InfrastructureSection";
import SolarProducts from "../Components/SolarProducts";
import InnovatorsSection from "../Components/InnovatorSection";
import GallerySection from "../Components/GallerySection";
import TestimonialsSection from "../Components/TestimonialsSection";
import Footer from "../Components/Footer";
import OurClients from "../Components/OurClients";
import OurOfferings from "../Components/OurOfferings";
import ReachUsForm from "../Components/ReachUsForm";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">



      <HeroSlider />
      <AboutSection/>
      <Services />
      <OurClients />
      <OurOfferings/>
      <SolutionsSection />
      <ConsultationSection />
      <InnovatorsSection />
      <TestimonialsSection />
      <ReachUsForm/>


     
    </div>
  );
}
