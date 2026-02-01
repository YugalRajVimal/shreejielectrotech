import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function GallerySection() {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
  ];

  return (
    <section className="pb-28 bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16 px-6">

        <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
          | Our Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Solar Project Gallery
        </h2>

      </div>

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

    </section>
  );
}
