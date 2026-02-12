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

export default function Home() {
  return (
    <div className="font-sans text-gray-800">


      {/* Hero Slider */}
      {/* <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000 }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-[90vh]"
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
              }}
            >
              <div className="bg-black/60 w-full h-full flex items-center">
                <div className="container mx-auto px-6">
                  <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                    Powered Innovation
                  </h2>
                  <p className="text-gray-200 max-w-xl mb-6">
                    Delivering smart and sustainable solar solutions
                  </p>
                  <button className="bg-orange-500 px-6 py-3 rounded text-white font-semibold">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <HeroSlider />

      {/* Services */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Comprehensive Solar Solutions
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Solar EPC",
              "Water Heating",
              "Street Lights",
              "O&M Services",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500">
                  ⚡
                </div>
                <h4 className="font-bold text-lg mb-3">{item}</h4>
                <p className="text-gray-600 text-sm">
                  High performance solar solutions for modern needs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Empowering Sustainable Future
            </h3>
            <p className="text-gray-600 mb-6">
              We deliver cutting-edge renewable energy systems with maximum
              efficiency and reliability.
            </p>
            <button className="bg-orange-500 px-6 py-3 rounded text-white">
              Learn More
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            className="rounded-xl shadow-lg"
            alt="solar"
          />
        </div>
      </section> */}
      <AboutSection/>
      <Services />

      <OurClients />


      {/* Stats */}
      {/* <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["950+", "Projects"],
            ["850+", "Clients"],
            ["120+", "Engineers"],
            ["15+", "Years"],
          ].map(([num, label]) => (
            <div key={label}>
              <h4 className="text-4xl font-bold text-orange-500">{num}</h4>
              <p className="mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section> */}
      <SolutionsSection />

      <ConsultationSection />
      {/* <InfrastructureSection /> */}

      {/* Gallery */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">
            Solar Project Gallery
          </h3>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={20}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i}>
                <img
                  src={`https://source.unsplash.com/600x400/?solar,plant,${i}`}
                  className="rounded-xl"
                  alt="gallery"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
<GallerySection />

<InnovatorsSection />
      {/* Products */}
      {/* <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Solar Products</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Solar Module",
              "Solar Inverter",
              "Street Light",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
              >
                <img
                  src="https://source.unsplash.com/500x300/?solar,panel"
                  className="rounded mb-4"
                  alt="product"
                />
                <h4 className="font-bold text-lg mb-2">{item}</h4>
                <p className="text-gray-400 text-sm">
                  High quality solar equipment for long term performance
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <SolarProducts/>
      <TestimonialsSection />


      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 Alpha SunTech. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
}
