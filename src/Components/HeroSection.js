import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[90vh] pt-20 bg-white flex items-center">
      {/* Hero Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        loop
        pagination={{ clickable: true }}
        className="h-[90vh]"
      >
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-blue-600/20" />
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur">
                  {/* Tagline */}
                  <p className="text-orange-500 uppercase tracking-widest text-sm mb-3 font-semibold">
                    Sleek Modern Solar Panels <span className="text-white">Under a Vibrant Blue Sky</span>
                  </p>
                  <h1 className="text-white font-bold leading-tight mb-6">
                    <span className="block text-3xl md:text-5xl lg:text-6xl">
                      We do Business Worldwide
                    </span>
                  </h1>
                  <p className="text-lg text-gray-200 mb-7 font-medium">
                    We ensure quality &amp; support. People love us &amp; we love them.
                  </p>
                  <a
                    href="#about"
                    className="mt-2 bg-orange-500 text-white px-8 py-4 font-semibold uppercase tracking-wide rounded shadow hover:bg-orange-600 transition"
                  >
                    Learn More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add a second slide for clean visual looping, or duplicate with alternate content as needed */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497435334946-c1d9463af91c?auto=format&fit=crop&w=1500&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-700/40 to-blue-500/20" />
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur">
                  <p className="text-orange-500 uppercase tracking-widest text-sm mb-3 font-semibold">
                    Clean Energy Solutions
                  </p>
                  <h2 className="text-white font-bold leading-tight mb-6 text-3xl md:text-5xl lg:text-6xl">
                    Supporting Sustainable Development
                  </h2>
                  <p className="text-lg text-gray-200 mb-7 font-medium">
                    Committed to green energy, empowering customers, and building a future that lasts.
                  </p>
                  <a
                    href="#products"
                    className="mt-2 bg-orange-500 text-white px-8 py-4 font-semibold uppercase tracking-wide rounded shadow hover:bg-orange-600 transition"
                  >
                    View Our Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Social Bar */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        <SocialIcon>
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon>
          <FaInstagram />
        </SocialIcon>
        <SocialIcon>
          <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon>
          <FaXTwitter />
        </SocialIcon>
      </div>

      {/* Bottom Info Cards */}
      <div className="absolute bottom-0 left-0 w-full z-20 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/90 grid grid-cols-2 max-w-xl shadow-xl rounded-t-lg overflow-hidden">
            {/* Card 1: About Us */}
            <div className="flex items-center gap-4 p-6 border-r">
              <img
                src="https://images.unsplash.com/photo-1529244929461-e3f0669430fd?auto=format&fit=crop&w=200&q=80"
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                alt="About Us"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  About Us
                </h4>
                <p className="text-gray-500 text-xs">
                  Committed to Green Energy &amp; Sustainability
                </p>
              </div>
            </div>
            {/* Card 2: Our Commitment */}
            <div className="flex items-center gap-4 p-6">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80"
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                alt="Our Commitment"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Our Commitment
                </h4>
                <p className="text-gray-500 text-xs">
                  Quality Engineering &amp; Fast Product Cycles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Social Icon */
function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 bg-white/90 flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition cursor-pointer shadow rounded-full">
      {children}
    </div>
  );
}
