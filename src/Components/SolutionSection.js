import { useEffect, useState } from "react";

import {
  FaSolarPanel,
  FaUsers,
  FaUserTie,
  FaAward,
} from "react-icons/fa";

/* Counter Hook */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function SolutionsSection() {
  const projects = useCountUp(950);
  const clients = useCountUp(850);
  const engineers = useCountUp(120);
  const years = useCountUp(15);

  return (
    <section className="bg-black text-white">

      {/* Top Section */}
      <div className="py-24">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Renewable Energy Solutions
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About Us Card */}
          <ServiceCard
            img="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            title="About Us"
            desc="We are committed to contributing in the area of green energy to support a sustainable future for our planet. Dedicated to innovative, quality solutions for our clients, we empower progress in renewable energy."
          />

          {/* Our Commitment Card */}
          <ServiceCard
            img="https://images.unsplash.com/photo-1464983953574-0892a716854b"
            title="Our Commitment"
            desc="Our commitment is to fulfill the entire customer requirement and develop products rapidly. We deliver quality engineering products—junction boxes, switchgears, lighting poles, cable trays, and solar equipment—at reasonable prices and customized for your needs."
          />

          {/* Our Products Card */}
          <ServiceCard
            img="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            title="Our Products"
            desc="We ensure international quality & support at local prices. Find high-quality junction boxes and solar components designed for durability and performance, all available through our online shop."
          />

        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-16 flex  gap-12 text-center">

          <Stat
            icon={<FaSolarPanel />}
            value={projects}
            label="Solar Projects Installed"
          />

          <Divider />

          <Stat
            icon={<FaUsers />}
            value={clients}
            label="Satisfied Clients"
          />

          <Divider />

          <Stat
            icon={<FaUserTie />}
            value={engineers}
            label="Skilled Engineers"
          />

          <Divider />

          <Stat
            icon={<FaAward />}
            value={years}
            label="Years of Excellence"
          />

        </div>
      </div>

    </section>
  );
}

/* Service Card */
function ServiceCard({ img, title, desc }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition">

      <img
        src={img}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6 text-center">

        <h4 className="text-xl font-bold mb-3">
          {title}
        </h4>

        <p className="text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>

      </div>
    </div>
  );
}

/* Stat Item */
function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-3">

      <div className="text-orange-500 text-3xl">
        {icon}
      </div>

      <h3 className="text-4xl font-bold">
        {value}
        <span className="text-orange-500">+</span>
      </h3>

      <p className="text-gray-400 text-sm">
        {label}
      </p>

    </div>
  );
}

/* Divider */
function Divider() {
  return (
    <div className="hidden md:block w-px bg-gray-700 mx-auto" />
  );
}
