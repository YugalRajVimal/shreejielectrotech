import { FaCheckCircle } from "react-icons/fa";

export default function InnovatorsSection() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="uppercase tracking-widest text-sm font-semibold mb-4">
            | About Us
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 font-serif">
            Committed to Green Energy & Quality Engineering
          </h2>

          <p className="text-white/90 leading-relaxed text-base md:text-lg mb-6">
            We are committed to contribute in the area of green energy which saves our earth and support sustainable development. Our commitment is to fulfill the entire customer requirements and deliver fast product development cycles to increase production capacity.
          </p>
          <p className="text-white/80 leading-relaxed text-base md:text-lg mb-8">
            With strong experience, a progressive present and a promising future, we have always grown together with our clients. We offer a wide range of quality junction boxes, switchgears, lighting poles, cable trays, cable glands and other solar equipment at reasonable prices through our online shop.
          </p>

          <ul className="mb-10 space-y-3">
            <Feature text="International quality & support at local price" />
            <Feature text="Products engineered for demanding users" />
            <Feature text="High life time and reliability under harsh conditions" />
            <Feature text="Skilled technical team and superior materials" />
          </ul>

          {/* <button className="bg-white text-blue-900 px-8 py-4 font-semibold uppercase tracking-wide hover:bg-gray-100 transition">
            Learn More
          </button> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Sleek modern solar panels under a vibrant blue sky with clouds, symbolizing clean energy"
            className="w-full h-[420px] object-cover rounded-xl shadow-2xl border-4 border-white/10"
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
