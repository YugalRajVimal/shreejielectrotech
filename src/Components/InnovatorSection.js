import { FaCheckCircle } from "react-icons/fa";

export default function InnovatorsSection() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="uppercase tracking-widest text-sm font-semibold mb-4">
            | Solar PV Power Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif">
            Integrated Solar PV Solutions
          </h2>

          <p className="text-white/90 leading-relaxed text-base md:text-lg mb-6">
            We deliver reliable engineering, inspection, and assurance for solar PV power projects—making solar success simpler for developers, EPCs, and investors.
          </p>

          <ul className="mb-8 space-y-3">
            <Feature text="Feasibility studies, engineering & design" />
            <Feature text="Module inspection & quality audits (Asia)" />
            <Feature text="Project management & performance validation" />
          </ul>

          <p className="text-base md:text-lg mb-4 text-white/80 font-semibold">
            Your partner for trusted solar solutions since 2017.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Modern solar panels"
            className="w-full h-[300px] object-cover rounded-xl shadow-2xl border-4 border-white/10"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <li className="flex items-start gap-3">
      <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
      <span className="text-sm md:text-base">{text}</span>
    </li>
  );
}
