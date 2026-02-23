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
      className="relative h-[92vh] min-h-[450px] pt-24 bg-gradient-to-tr from-[#e0f2fe] via-white to-blue-100 flex items-center overflow-hidden"
      style={{ maxHeight: "92vh" }}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-24 left-0 w-96 h-96 z-0 pointer-events-none opacity-20 blur-2xl hidden sm:block overflow-hidden">
        <svg width="100%" height="100%">
          <ellipse cx="160" cy="120" rx="180" ry="100" fill="#34d399"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-80 h-80 opacity-20 pointer-events-none z-0 blur-2xl hidden xl:block overflow-hidden">
        <svg width="100%" height="100%">
          <ellipse cx="140" cy="100" rx="120" ry="80" fill="#60a5fa"/>
        </svg>
      </div>
      {/* Swiper */}
      <div className="w-full h-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} !mx-1 !w-2.5 !h-2.5 !bg-gray-400 !opacity-80" style="border-radius:7px"></span>`,
          }}
          className="h-full w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative overflow-hidden "
              style={{
                height: "92vh",
                maxHeight: "92vh",
                backgroundImage:
                  "linear-gradient(to bottom right,rgba(30,64,175,0.49) 10%,rgba(96,165,250,0.26) 95%), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/70 via-blue-500/20 to-blue-100/5" />
              <div className="relative z-20 flex items-center h-full min-h-[52vh]">
                <div className="max-w-7xl mx-auto px-6 w-full ">
                  <div className="max-w-2xl bg-white/80 p-10  rounded-3xl shadow-2xl backdrop-blur-lg border border-teal-100 drop-shadow-md animate-fadeinup">
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="inline-block bg-yellow-100 text-yellow-800 font-bold uppercase tracking-widest rounded-full px-3 py-1 text-xs shadow shadow-yellow-100">
                        Solar Asset Inspection
                      </span>
                      <span className="hidden sm:inline text-blue-800 font-semibold text-xs tracking-wide uppercase">
                        Ensure Peak Performance
                      </span>
                    </div>
                    <h1 className="text-gray-900 font-extrabold leading-tight mb-4 drop-shadow-sm font-serif">
                      <span className="block text-3xl md:text-5xl lg:text-6xl">
                        Trusted Solar PV Inspection Experts
                      </span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 font-normal">
                      Comprehensive inspection, diagnostics, and performance assessment for your solar PV assets – maximize uptime, reliability, and energy output through professional solar inspection services.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 transition uppercase tracking-wide text-base mt-2"
                    >
                      Request Inspection
                      <svg height="18" width="18" fill="none" viewBox="0 0 24 24">
                        <path d="M6 12h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative overflow-hidden"
              style={{
                height: "92vh",
                maxHeight: "92vh",
                backgroundImage:
                  "linear-gradient(to bottom right,rgba(16,185,129,0.36) 8%,rgba(59,130,246,0.12) 92%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-200/50 via-blue-50/20 to-white/5" />
              <div className="relative z-20 flex items-center h-full min-h-[52vh]">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="max-w-2xl bg-white/85 p-10 rounded-3xl shadow-xl backdrop-blur-lg border border-green-100 animate-fadeinup">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="inline-block bg-blue-100 text-blue-700 font-bold uppercase tracking-widest rounded-full px-3 py-1 text-xs shadow shadow-blue-100">
                        Why Inspection?
                      </span>
                      <span className="hidden sm:inline text-teal-600 font-semibold text-xs tracking-wide uppercase">
                        SHREEJI ELECTROTECH SOLUTIONS Inspection Advantage
                      </span>
                    </div>
                    <h2 className="text-gray-900 font-extrabold leading-tight mb-4 text-3xl md:text-5xl lg:text-6xl drop-shadow font-serif">
                      500+ MW Inspected Worldwide
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 font-normal">
                      Detect, diagnose, and optimize – we uncover hidden issues in your solar PV systems with cutting-edge inspection techniques, ensuring optimal efficiency, safety, and lifecycle asset value for leading solar clients.
                    </p>
                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 bg-teal-500 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:bg-teal-700 transition uppercase tracking-wide text-base mt-2"
                    >
                      Learn About Our Inspection Process
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
        <SocialIcon label="Facebook" href="https://facebook.com/sunkonnect">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon label="Instagram" href="https://instagram.com/sunkonnect">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon label="LinkedIn" href="https://linkedin.com/company/sunkonnect">
          <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon label="X (Twitter)" href="https://twitter.com/sunkonnect">
          <FaXTwitter />
        </SocialIcon>
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
      className="w-11 h-11 bg-white/95 flex items-center justify-center text-gray-800 hover:bg-teal-500 hover:text-white hover:scale-110 transition shadow-lg rounded-full border border-teal-50"
      style={{
        boxShadow: "0 4px 15px 0 rgba(16,185,129,0.10), 0 1.5px 4px 0 rgba(59,130,246,0.06)"
      }}
    >
      {children}
    </a>
  );
}
