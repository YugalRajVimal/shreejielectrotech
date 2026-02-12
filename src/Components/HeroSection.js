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
    <section
      className="relative h-[92vh] min-h-[450px] pt-24 bg-gradient-to-tr from-[#f1f5f9] via-white to-blue-50 flex items-center overflow-hidden"
      style={{ maxHeight: "92vh" }}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-24 left-0 w-96 h-96 z-0 pointer-events-none opacity-20 blur-2xl hidden sm:block overflow-hidden">
        <svg width="100%" height="100%">
          <ellipse cx="160" cy="120" rx="180" ry="100" fill="#38BDF8"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-80 h-80 opacity-20 pointer-events-none z-0 blur-2xl hidden xl:block overflow-hidden">
        <svg width="100%" height="100%">
          <ellipse cx="140" cy="100" rx="120" ry="80" fill="#fb923c"/>
        </svg>
      </div>
      {/* Swiper */}
      <div className="w-full h-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} !mx-1 !w-2.5 !h-2.5 !bg-gray-300 !opacity-80" style="border-radius:7px"></span>`,
          }}
          className="h-full w-full "
        >
          {/* Slide 1 -- Solar Panels Field */}
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative overflow-hidden "
              style={{
                height: "92vh",
                maxHeight: "92vh",
                backgroundImage:
                  "linear-gradient(to bottom right,rgba(31,41,55,0.55) 10%,rgba(59,130,246,0.33) 95%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-700/25 to-blue-300/5" />
              <div className="relative z-20 flex items-center h-full min-h-[52vh]">
                <div className="max-w-7xl mx-auto px-6 w-full ">
                  <div className="max-w-2xl bg-white/70 p-10  rounded-3xl shadow-2xl backdrop-blur-lg border border-blue-100 drop-shadow-md animate-fadeinup">
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="inline-block bg-orange-100 text-orange-600 font-bold uppercase tracking-widest rounded-full px-3 py-1 text-xs shadow shadow-orange-100">
                        renewable
                      </span>
                      <span className="hidden sm:inline text-blue-700 font-semibold text-xs tracking-wide uppercase">
                        Modern Solar Innovation
                      </span>
                    </div>
                    <h1 className="text-gray-900 font-extrabold leading-tight mb-4 drop-shadow-sm font-serif">
                      <span className="block text-3xl md:text-5xl lg:text-6xl">
                        Empowering a Greener World
                      </span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 font-normal">
                      Transforming energy for tomorrow—sustainable, reliable, and expertly engineered solar solutions on a global scale.
                    </p>
                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:bg-orange-600 transition uppercase tracking-wide text-base mt-2"
                    >
                      Learn More About Us
                      <svg height="18" width="18" fill="none" viewBox="0 0 24 24">
                        <path d="M6 12h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 -- Rooftop Solar Panels */}
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative overflow-hidden"
              style={{
                height: "92vh",
                maxHeight: "92vh",
                backgroundImage:
                  "linear-gradient(to bottom right,rgba(15,23,42,0.47) 7%,rgba(251,146,60,0.13) 98%), url('https://images.unsplash.com/photo-1460109447785-2cd2c1e50c70?auto=format&fit=crop&w=1500&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-orange-200/60 via-blue-50/20 to-blue-200/5" />
              <div className="relative z-20 flex items-center h-full min-h-[52vh]">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="max-w-2xl bg-white/85 p-10 rounded-3xl shadow-xl backdrop-blur-lg border border-orange-100 animate-fadeinup">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="inline-block bg-blue-100 text-blue-700 font-bold uppercase tracking-widest rounded-full px-3 py-1 text-xs shadow shadow-blue-100">
                        sustainable
                      </span>
                      <span className="hidden sm:inline text-orange-600 font-semibold text-xs tracking-wide uppercase">
                        Clean Energy for All
                      </span>
                    </div>
                    <h2 className="text-gray-900 font-extrabold leading-tight mb-4 text-3xl md:text-5xl lg:text-6xl drop-shadow font-serif">
                      Powering Sustainable Growth
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 font-normal">
                      Shaping a future where every project, every solution, and every community thrives with responsible energy.
                    </p>
                    <a
                      href="/products"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-800 transition uppercase tracking-wide text-base mt-2"
                    >
                      View Our Products
                      <svg height="18" width="18" fill="none" viewBox="0 0 24 24">
                        <path d="M6 12h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Social Bar */}
      <div className="absolute right-5 top-[54%] -translate-y-1/2 z-30 hidden md:flex flex-col gap-3 drop-shadow-lg">
        <SocialIcon label="Facebook" href="https://facebook.com">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon label="Instagram" href="https://instagram.com">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon label="LinkedIn" href="https://linkedin.com">
          <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon label="X (Twitter)" href="https://twitter.com">
          <FaXTwitter />
        </SocialIcon>
      </div>

      {/* Bottom Info Cards */}
      <div className="absolute bottom-0 left-0 w-full z-20 hidden xl:block pointer-events-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/90 bg-clip-padding backdrop-blur-sm border border-gray-200/60 grid grid-cols-2 max-w-xl shadow-xl rounded-t-2xl overflow-hidden pointer-events-auto animate-fadeinup2">
            {/* About Us Card */}
            <div className="flex items-center gap-4 p-6 border-r border-slate-200 hover:bg-slate-50 transition duration-200">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=200&q=80"
                className="w-14 h-14 rounded-xl object-cover border-2 border-orange-400 shadow-inner"
                alt="About Us"
              />
              <div>
                <h4 className="font-bold text-gray-800 text-lg">About Us</h4>
                <p className="text-gray-600 text-sm mt-0.5">
                  Committed to Green Energy &amp; Sustainability
                </p>
              </div>
            </div>
            {/* Commitment Card */}
            <div className="flex items-center gap-4 p-6 hover:bg-slate-50 transition duration-200">
              <img
                src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=200&q=80"
                className="w-14 h-14 rounded-xl object-cover border-2 border-blue-400 shadow-inner"
                alt="Our Commitment"
              />
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Our Commitment</h4>
                <p className="text-gray-600 text-sm mt-0.5">
                  Quality Engineering &amp; Rapid Product Cycles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes fadeinup {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeinup {
          animation: fadeinup .98s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fadeinup2 {
          animation: fadeinup .89s cubic-bezier(.4,0,.2,1) 0.1s both;
        }
      `}</style>
    </section>
  );
}

/* Social Icon */
function SocialIcon({ children, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 bg-white/95 flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white hover:scale-110 transition shadow-lg rounded-full border border-orange-50"
      style={{
        boxShadow: "0 4px 15px 0 rgba(251,146,60,0.07), 0 1.5px 4px 0 rgba(64,138,206,0.04)"
      }}
    >
      {children}
    </a>
  );
}
