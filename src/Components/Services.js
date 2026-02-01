import { FaBoxOpen, FaBolt, FaLightbulb, FaTools, FaServer, FaCubes, FaPlug, FaSolarPanel } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";

export default function Services() {
  const services = [
    {
      title: "Junction Boxes",
      desc: "We offer a wide range of junction boxes made with electrolytic copper/brass, tin plated or compounded ABS for high UV resistance. Designed for high lifetime and protection in adverse environments.",
      icon: <FaBoxOpen />,
    },
    {
      title: "High/Medium/Low Voltage Switchgears",
      desc: "Quality-engineered switchgears for reliable power distribution across a range of voltages. Designed for durability and safety to suit various applications.",
      icon: <FaBolt />,
    },
    {
      title: "Lighting Poles & Street Lights",
      desc: "Strong, long-life lighting poles and efficient, low-maintenance solar street lights for public and industrial spaces.",
      icon: <FaLightbulb />,
    },
    {
      title: "Cable Trays & Cable Glands",
      desc: "Robust cable trays and high-quality cable glands ensuring secure and organized cable management for solar and industrial projects.",
      icon: <FaServer />,
    },
    {
      title: "Solar Plant EPC & Engineering",
      desc: "Turnkey engineering, procurement, and construction for world-class solar plant installations. From design to execution with skilled technical support.",
      icon: <MdOutlineEngineering />,
    },
    {
      title: "Operation & Maintenance",
      desc: "Complete maintenance support, routine inspections, and technical guidance to keep your solar and electrical systems at peak performance.",
      icon: <FaTools />,
    },
    {
      title: "Product Customization",
      desc: "Fast product development cycle to match customer specifications, ensuring fit-for-purpose solar and electrical products.",
      icon: <FaCubes />,
    },
    {
      title: "Consultation & Support",
      desc: "Expert advice and support for project planning, product selection, and after-sales service, powered by experience and customer-centric commitment.",
      icon: <FaPlug />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Top Label */}
        <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
          | Our Services
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto mb-16 leading-tight">
          Your Trusted Partner for Solar & Electrical Solutions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white px-8 py-10 hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">

                {/* Dotted Circle */}
                <div className="absolute inset-0 rounded-full border border-dashed border-orange-400" />

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-orange-500 text-2xl bg-white z-10">
                  {service.icon}
                </div>

              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Learn More */}
              {/* <button className="text-sm font-semibold text-gray-900 flex items-center justify-center gap-2 mx-auto hover:text-orange-500 transition">
                Learn More
                <span className="text-lg">→</span>
              </button> */}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
