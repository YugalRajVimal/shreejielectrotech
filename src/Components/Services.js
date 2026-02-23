import {
  FaClipboardList,
  FaBuilding,
  FaLeaf,
} from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";

export default function Services() {
  // Five core pillars with headings (front) and service lists as descriptions (back)
  const pillars = [
    {
      heading: "Engineering & Design",
      icon: <MdEngineering className="text-3xl" />,
      services: [
        "Feasibility Studies (PFR), DPR, Bankable DPR",
        "PVsyst-based Energy Yield Assessment (EYA)",
        "Pre-bid and Detailed Design & Engineering",
        "Substation design up to 765kV (AIS/GIS)",
        "Hybrid plant design (Solar + Wind + BESS)"
      ]
    },
    {
      heading: "Inspection & Quality Assurance",
      icon: <FaLeaf className="text-3xl" />,
      services: [
        "PV Module Inspection  (India, China, Vietnam, Malaysia, Cambodia)",
        "PV Cell Inspection & Raw Material Validation",
        "In-Process Inspection, PSI/PDI, CLC/CLM",
        "Factory/Supplier Audit & Technical Due Diligence",
        "Specialized inspections: Transformer, HT Panels, HV/EHV Switchgear, Cables, Structures"
      ]
    },
    {
      heading: "Project Management Consultancy (PMC)",
      icon: <FaClipboardList className="text-3xl" />,
      services: [
        "Field Quality Monitoring & Construction Supervision",
        "Plant Acceptance Tests (PR, CUF, PLF)",
        "HOTO, O&M Planning & Asset Lifecycle Management",
        "Bid Management, Tender & RFQ Documentation"
      ]
    },
    {
      heading: "Owner’s & Lender’s Engineering",
      icon: <FaBuilding className="text-3xl" />,
      services: [
        "Performance validation planning",
        "Independent Engineering Services",
        "Design Review & Risk Assessment",
        "Project Monitoring for Bankable Reporting",
        "Support for Financial Closure & Debt Tranche Disbursement"
      ]
    },
    {
      heading: "Sustainability & Carbon Integration",
      icon: <FaLeaf className="text-3xl" />,
      services: [
        "Process optimization services",
        "Net Zero & RE100 Advisory",
        "Carbon Audits, Reporting & Offset Strategy",
        "Integration of solar into corporate sustainability frameworks"
      ]
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
          | Our Capabilities
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 max-w-4xl mx-auto mb-6 leading-tight">
          We deliver solar project support through five core pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {pillars.map((pillar, idx) => (
            <CapabilityCard
              key={idx}
              icon={pillar.icon}
              heading={pillar.heading}
              services={pillar.services}
            />
          ))}
        </div>
      </div>
      <style>{`
        .flip-card {
          perspective: 1200px;
        }
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(.42,0,.2,1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner, .flip-card:focus-within .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-front {
          z-index: 2;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

// The front only displays the heading (and icon). The back shows the description/list.
function CapabilityCard({ icon, heading, services }) {
  return (
    <div
      className="flip-card group w-full min-w-[300px] h-[350px] sm:h-[370px] flex flex-col  cursor-pointer focus:outline-none"
      tabIndex={0}
    >
      <div className="flip-card-inner relative w-full h-full duration-700">
        {/* Front: Only Heading and Icon */}
        <div className="flip-card-front absolute w-full h-full bg-white border rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 py-6 px-3 transition-all group-hover:shadow-2xl">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-orange-400 bg-white text-orange-500 shadow-md text-3xl mb-1.5">
            {icon}
          </span>
          <h4 className="text-xl font-bold font-serif text-gray-900 text-center mb-2">
            {heading}
          </h4>
        </div>
        {/* Back: Description/List */}
        <div className="flip-card-back absolute w-full h-full bg-orange-50 border border-orange-200 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-orange-400 bg-white text-orange-500 shadow text-3xl mb-2">
            {icon}
          </span>
          <h4 className="text-lg font-bold font-serif text-orange-700 text-center mb-2">{heading}</h4>
          <ul className="text-gray-800 text-sm font-semibold text-left mt-4 space-y-2 px-2">
            {services.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block mt-1 mr-2 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
