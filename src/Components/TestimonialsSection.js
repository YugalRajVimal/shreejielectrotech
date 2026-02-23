import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  // Inspection-centric testimonials reflecting SHREEJI ELECTROTECH SOLUTIONS's offerings
  const testimonials = [
    {
      text: "With SHREEJI ELECTROTECH SOLUTIONS, our GW-scale solar PV project achieved uncompromising quality—comprehensive module and cell inspections in Asia saved us from critical failures and ensured seamless commissioning. True partners for reliability.",
      name: "Amit Suresh",
      role: "Utility Solar Project Director",
    },
    {
      text: "SHREEJI ELECTROTECH SOLUTIONS’s engineering and technical due diligence were pivotal for our lender approvals. Their approach to pre-bid design and bankable DPRs gave our investors total confidence. Highly recommended for project assurance.",
      name: "Reena Fernandes",
      role: "Renewable Energy Investment Lead",
    },
    {
      text: "From substation design to performance validation, SHREEJI ELECTROTECH SOLUTIONS’s expertise covered every detail. Independent technical audits flagged issues early—optimizing our plant’s energy yield and bankability.",
      name: "Liang Zhou",
      role: "Solar EPC Technical Head",
    },
    {
      text: "Their in-process and pre-shipment inspections identified supply chain issues before they reached site. Thanks to SHREEJI ELECTROTECH SOLUTIONS, our solar assets are performing above projections, and audits stand up to global standards.",
      name: "Priya Menon",
      role: "Solar Asset Manager",
    },
    {
      text: "Engaging SHREEJI ELECTROTECH SOLUTIONS for Net Zero planning and carbon audits transformed our sustainability strategy. Their team blends deep domain knowledge with practical insights, driving measurable results.",
      name: "Martin Lund",
      role: "Corporate Sustainability Officer",
    },
  ];

  return (
    <section className="pt-28 bg-white pb-64">

      {/* Heading (Inspection-Focused) */}
      <div className="text-center mb-16 px-6">

        <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
          | Project Impact & Client Success
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
          Transforming Renewable Project Outcomes
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
          Trusted by global solar leaders for technical audits, independent engineering, and robust inspections—delivering measurable success across every renewable energy project stage.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
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

/* Testimonial Card - Inspection Narrative */
function TestimonialCard({ text, name, role }) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm h-full flex flex-col justify-between border border-orange-100 hover:shadow-md transition">

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
