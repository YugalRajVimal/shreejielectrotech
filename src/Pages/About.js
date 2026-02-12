import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-50 via-white to-white text-gray-800 font-sans min-h-screen ">
      {/* Hero Section */}
      <section className="relative w-full pt-44 md:pt-56 pb-20 px-4 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <circle cx="200" cy="200" r="180" fill="#fb923c" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-80 h-80 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <circle cx="160" cy="160" r="140" fill="#b8e3fc" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 font-semibold uppercase tracking-widest rounded-full px-4 py-1 mb-5 shadow-sm shadow-orange-100">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif text-gray-900 leading-tight mb-6 drop-shadow-sm">
              Committed to Green Energy &amp; Sustainable Development
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-normal mb-6 md:mb-8">
              We are committed to contributing in the area of green energy, helping to preserve our planet and support sustainable development.<br className="hidden md:inline" />
              Through innovation, expertise, and passion, our team delivers engineering solutions and products that empower renewable energy projects across the globe.
            </p>
            <a
              href="mailto:info@shreejielectrotech.com"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
            >
              <svg height="20" width="20" fill="none" viewBox="0 0 24 24">
                <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="m3.5 7 8.25 6.25c.46.35 1.09.34 1.54 0L20.5 7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Contact Us
            </a>
          </div>
          <div className="flex justify-center md:justify-end relative">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-orange-200/40 ring-offset-4 ring-offset-white w-full max-w-lg transform hover:scale-105 transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
                alt="Solar Panels and Modern Technology"
                className="h-96 w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative fade */}
            <div className="hidden md:block absolute right-0 bottom-0 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-6xl mx-auto px-10 pt-16 md:pt-24 pb-20 md:pb-32 bg-orange-100/70 md:rounded-3xl  relative z-20 overflow-hidden">
        {/* Decorative Accent */}
        <div className="absolute -top-10 -left-10 w-44 h-44 bg-orange-100 rounded-full blur-2xl opacity-40 z-0 pointer-events-none" />
        <div className="absolute -bottom-12 right-0 w-52 h-52 bg-blue-100 rounded-full blur-2xl opacity-40 z-0 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-10">
          <span className="block h-2 w-10 rounded bg-orange-800 mt-1 md:mt-2 shrink-0"></span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-900 tracking-tight">
            Our <span className="text-orange-500">Commitment</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 md:gap-14 items-start z-10">
          <div className="space-y-7 text-base md:text-lg text-gray-700">
            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-orange-900 bg-orange-200/80 rounded py-2 mb-4 font-medium text-lg shadow-sm">
              “Driven by innovation, engineering excellence, and sustainability, we forge relationships that last and products that empower.”
            </blockquote>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong className="text-orange-600">Swift & Responsive:</strong> 
                We fulfill every customer requirement with a fast product development cycle, constantly advancing our production capacity.
              </li>
              <li>
                <strong className="text-orange-600">Legacy Meets Vision:</strong>
                Guided by a rich legacy and a keen eye to the future, we have grown alongside our clients and partners.
              </li>
              <li>
                <strong className="text-orange-600">Best Value:</strong>
                Our high-quality engineering products come at fair and honest prices, customized to your application's needs.
              </li>
            </ul>
          </div>

          <div className="space-y-5 mt-10 md:mt-0 pb-64">
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-orange-400 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.18"/>
                <path d="M7 14l3 3 7-7" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-orange-800 text-lg font-serif">Complete Product Range</h4>
                <p>Junction boxes, switchgears (all voltages), lighting poles, cable trays, cable glands, and more—available for you online.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-blue-300 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.20"/>
                <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#38bdf8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-blue-800 text-lg font-serif">Reliability & Protection</h4>
                <p>
                  Our junction boxes ensure safe electrical interconnections between solar modules and robust protection for your valuable solar cells.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-green-200 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.20"/>
                <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-green-800 text-lg font-serif">Built to Last</h4>
                <p>
                  Engineered for longevity and resistance to harsh conditions—delivering durability through smart design, top-grade materials, and expert craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;