import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-50 via-white to-white text-gray-800 font-sans min-h-screen">
      {/* Hero/Overview Section */}
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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif text-gray-900 leading-tight mb-6 drop-shadow-sm">
              Excellence in Solar PV Inspection & Project Assurance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-normal mb-6 md:mb-8">
              Trusted global partner for solar PV inspection, quality assurance, and technical due diligence. <br className="hidden md:inline" />
              We support developers, EPCs, and investors with independent engineering, plant audits, and performance validation—ensuring your projects are efficient, reliable, and bankable.
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
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
                alt="Rows of Solar Panels in a Field"
                className="h-96 w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative fade */}
            <div className="hidden md:block absolute right-0 bottom-0 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* What We Do/Overview */}
      <section className="max-w-6xl mx-auto px-10 pt-16 md:pt-24 pb-20 md:pb-32 bg-orange-100/70 md:rounded-3xl relative z-20 overflow-hidden">
        {/* Decorative Accent */}
        <div className="absolute -top-10 -left-10 w-44 h-44 bg-orange-100 rounded-full blur-2xl opacity-40 z-0 pointer-events-none" />
        <div className="absolute -bottom-12 right-0 w-52 h-52 bg-blue-100 rounded-full blur-2xl opacity-40 z-0 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-10">
          <span className="block h-2 w-10 rounded bg-orange-800 mt-1 md:mt-2 shrink-0"></span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-900 tracking-tight">
            What <span className="text-orange-500">We Do</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start z-10 relative">
          {/* Left: Overview + Key Stats */}
          <div className="space-y-8 text-base md:text-lg text-gray-700">
            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-orange-900 bg-orange-200/80 rounded py-2 mb-4 font-medium text-lg shadow-sm">
              “Transforming solar project quality with rigorous inspection, comprehensive audits, and strategic engineering—from PV modules to complete plant performance.”
            </blockquote>
            <div className="space-y-3">
              <p>
                <strong className="text-orange-600">Integrated Inspection & Assurance:</strong> We provide module/cell inspection (India/China/Vietnam/Asia), transformer & switchgear audits, pre-shipment & in-process factory due-diligence, technical audits, and independent engineering.
              </p>
              <p>
                <strong className="text-orange-600">Performance & Bankability:</strong> Our yield assessments, root cause analyses, and acceptance testing support global lenders, investors and developers at every project lifecycle stage.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 mt-7">
              <div className="bg-white rounded-2xl px-7 py-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600">10+ GW</div>
                <div className="text-xs mt-1 uppercase tracking-wider text-gray-500">Experience</div>
              </div>
              <div className="bg-white rounded-2xl px-7 py-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-xs mt-1 uppercase tracking-wider text-gray-500">Projects</div>
              </div>
              <div className="bg-white rounded-2xl px-7 py-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-xs mt-1 uppercase tracking-wider text-gray-500">Global Clients</div>
              </div>
              <div className="bg-white rounded-2xl px-7 py-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-xs mt-1 uppercase tracking-wider text-gray-500">Success Rate</div>
              </div>
            </div>
          </div>
          {/* Right: Capabilities Pillars */}
          <div className="space-y-5 mt-10 md:mt-0">
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-orange-400 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.18"/>
                <path d="M7 14l3 3 7-7" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-orange-800 text-lg font-serif">Inspection & Quality Assurance</h4>
                <p>
                  PV module/cell inspections, material validation, pre-shipment and in-process audit, transformer & switchgear inspection, factory and supplier audits.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-blue-300 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.20"/>
                <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#38bdf8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-blue-800 text-lg font-serif">
                  Engineering & Due Diligence
                </h4>
                <p>
                  Feasibility, detailed engineering, lender's independent engineering, technical due diligence and risk assessment for project bankability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-green-200 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.20"/>
                <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-green-800 text-lg font-serif">Yield & Performance Assessment</h4>
                <p>
                  PVSyst-based simulation reports, acceptance testing, plant performance benchmarking & root-cause audits.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-gray-300 shrink-0">
                <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.13"/>
                <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#757575" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-bold text-gray-800 text-lg font-serif">Sustainability & Carbon Advisory</h4>
                <p>
                  Carbon audits, Net Zero strategies and process optimization for a sustainable energy transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* If needed, more content and CTA (like 'Contact Us' or 'Reach Us') can be added here */}
    </div>
  );
};

export default About;