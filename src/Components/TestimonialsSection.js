import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "SHREEJI ELECTROTECH SOLUTIONS delivered extremely high-quality junction boxes and switchgears for our solar installation. The product quality and their dedicated support were outstanding. Highly recommend for industrial needs!",
      name: "Vikram Mehta",
      role: "Industrial Client",
    },
    {
      text: "Their technical team guided us expertly through product selection. We purchased lighting poles and cable trays online and received prompt delivery with great after-sales service.",
      name: "Sunita Gupta",
      role: "Commercial Buyer",
    },
    {
      text: "Appreciated the reliability and performance of their cable glands and solar equipment. Everything was engineered to perfection, and it was clear they cared about sustainable development.",
      name: "Ramesh Nair",
      role: "PV Project Manager",
    },
    {
      text: "We chose SHREEJI ELECTROTECH SOLUTIONS for our junction boxes due to longevity and quality under harsh weather. The team’s expertise was evident at every step – highly recommended for all solar requirements.",
      name: "Priyanka Chatterjee",
      role: "Energy Consultant",
    },
  ];

  return (
    <section className="py-28 bg-white">

      {/* Heading */}
      <div className="text-center mb-16 px-6">

        <p className="text-green-500 font-semibold uppercase tracking-widest mb-3">
          | Testimonial
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Shining Success Stories
        </h2>

      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop
          className="pb-12"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>

              <TestimonialCard {...item} />

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

/* Card */
function TestimonialCard({ text, name, role }) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm h-full flex flex-col justify-between">

      {/* Quote */}
      <FaQuoteLeft className="text-orange-500 text-3xl mb-6" />

      {/* Text */}
      <p className="text-gray-700 leading-relaxed mb-8">
        {text}
      </p>

      {/* Author */}
      <div>
        <h4 className="font-bold text-lg text-gray-900">
          {name}
        </h4>

        <p className="text-gray-500 text-sm">
          {role}
        </p>
      </div>

    </div>
  );
}
