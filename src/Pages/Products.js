import React from "react";
import SolarProducts from "../Components/SolarProducts";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Products = () => {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
  ];

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen pt-32 pb-64">
      {/* Hero Section / Banner */}
      <section className="relative w-full pt-36 md:pt-48 pb-16 px-4 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
            <circle cx="200" cy="200" r="180" fill="#fb923c" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-80 h-80 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <circle cx="160" cy="160" r="140" fill="#b8e3fc" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-block bg-orange-200 text-orange-600 font-semibold uppercase tracking-widest rounded-full px-4 py-1 mb-5 shadow-sm shadow-orange-100">
              PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-7 drop-shadow-sm font-serif">
              Innovative Solar &amp; Electrical Products
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-normal mb-8 md:mb-14">
              At Shreeji Electrotech, we offer industry-leading solar junction boxes, switchgears, premium cable management, and component solutions engineered for high performance, durability, and value. Explore our trusted selection below—each product designed to power tomorrow’s projects today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
            >
              Contact Us
              <svg height="19" width="19" fill="none" viewBox="0 0 24 24">
                <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="m3.5 7 8.25 6.25c.46.35 1.09.34 1.54 0L20.5 7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-orange-200/40 ring-offset-4 ring-offset-white w-full max-w-lg transform hover:scale-105 transition duration-500 bg-white">
              <img
                src="/33.png"
                alt="Innovative Solar Product Showcase"
                className="h-96 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Products Cards */}
      <SolarProducts />

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={0}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide
            key={i}
            className="!w-[420px] md:!w-[520px] lg:!w-[600px]"
          >
            <div className="aspect-square h-[260px] md:h-[300px] lg:h-[340px]">
              <img
                src={img}
                alt={`Solar Project ${i + 1}`}
                className="w-full h-full aspect-square object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;