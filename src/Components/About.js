export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 md:gap-16 items-center">
        {/* Left Content */}
        <div className="col-span-2 order-2 lg:order-1">
          {/* Label */}
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-4 text-sm sm:text-base">
            | About Us
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6 md:mb-8">
            Solar PV Inspection – Excellence at Every Stage
          </h2>

          {/* Brief Introduction */}
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-5">
            With 10+ GW of global experience, SHREEJI ELECTROTECH SOLUTIONS empowers developers, EPCs, and investors to build, operate, and invest in reliable, high-performing solar projects. We provide transparent quality assurance and independent inspection for every stage—ensuring your assets endure and perform.
          </p>

          {/* Commitment Section (Condensed) */}
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mb-2 md:mb-3 mt-6 md:mt-8">
            Our Commitment
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-5">
            Our experienced engineers inspect solar supply chains and field assets—from factory to site—across Asia and beyond. With thorough audits, diligence, and testing, we turn risk into certainty and help you achieve project bankability.
          </p>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Connect with us to unlock robust compliance, top performance, and peace of mind for your solar investments.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            alt="Solar Inspection Engineer"
            className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-full h-60 sm:h-72 md:h-96 lg:h-[420px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}