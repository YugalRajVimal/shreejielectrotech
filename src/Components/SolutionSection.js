import { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaCheckCircle,
  FaFlagCheckered,
  FaUsers,
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
  // Updated stats for inspection-centric narrative
  const projects = useCountUp(34000);
  const clients = useCountUp(500);
  const globalClients = useCountUp(100);
  const successRate = useCountUp(100);

  return (
    <section className="bg-black text-white">

      {/* Top Section */}
      <div className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
          Excellence in Solar PV Inspection & Project Assurance
        </h2>
        {/* <div className="max-w-5xl mx-auto text-center mb-12 text-lg text-gray-300 font-light leading-relaxed">
          <p className="mb-4">
            Integrated inspection, engineering, and project management solutions—driving reliable and sustainable power generation for modern solar PV power projects.
          </p>
          <p className="mb-4">
            Our multidisciplinary team provides end-to-end support for developers, EPCs, and investors,
            ensuring every stage—from supply chain to asset commissioning—is optimized for performance, compliance, and bankability.
          </p>
          <p>
            With over 10+ GW of global experience and rigorous technical work across Asia and beyond, SHREEJI ELECTROTECH SOLUTIONS transforms complex sustainability and quality challenges into measurable, bankable results.
          </p>
        </div> */}

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Service Cards - aligned with "Our Offerings" */}
          <ServiceCard
            img="https://images.unsplash.com/photo-1464983953574-0892a716854b"
            title="Technical Audits & Quality Inspection"
            desc={
              <>
                <ul className="text-left text-gray-400 text-sm font-normal list-disc pl-5 mb-0 space-y-2">
                  <li>PV module & cell inspection (India, China, Vietnam, Malaysia, Cambodia)</li>
                  <li>Transformer & switchgear audits</li>
                  <li>Factory/supplier audit & technical due diligence</li>
                  <li>In-process inspection: FAT, PSI/PDI, CLC/CLM</li>
                  <li>Pre-shipment & reliability testing</li>
                </ul>
              </>
            }
          />
          <ServiceCard
            img="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            title="Engineering, Design & Documentation"
            desc={
              <>
                <ul className="text-left text-gray-400 text-sm font-normal list-disc pl-5 mb-0 space-y-2">
                  <li>Feasibility Studies (PFR), DPR & Bankable DPR</li>
                  <li>PVsyst-based Energy Yield Assessments</li>
                  <li>Detailed Design (GA Drawings, GTPs, SLDs, SCADA, BoS, substations)</li>
                  <li>Grid compliance, load flow studies</li>
                  <li>Hybrid plant design – Solar, Wind, BESS</li>
                </ul>
              </>
            }
          />
          <ServiceCard
            img="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            title="Project Management, Advisory & Sustainability"
            desc={
              <>
                <ul className="text-left text-gray-400 text-sm font-normal list-disc pl-5 mb-0 space-y-2">
                  <li>Field quality monitoring & acceptance testing</li>
                  <li>Root cause analysis, performance benchmarking</li>
                  <li>Bankable reporting, risk advisory & owner's/lender's engineering</li>
                  <li>Net Zero, RE100, Carbon audit & strategy</li>
                  <li>Integration of solar into corporate sustainability frameworks</li>
                </ul>
              </>
            }
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 md:gap-12 text-center items-center justify-center">

          <Stat
            icon={<FaClipboardList />}
            value={projects}
            label="GW Renewable Projects Audited"
          />

          <Divider />

          <Stat
            icon={<FaUsers />}
            value={clients}
            label="Successful Project Audits"
          />

          <Divider />

          <Stat
            icon={<FaCheckCircle />}
            value={globalClients}
            label="Global Clients Served"
          />

          <Divider />

          <Stat
            icon={<FaFlagCheckered />}
            value={successRate}
            label="Project Success Rate"
            isPercent={true}
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

        <div className="text-gray-400 text-sm leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  );
}

/* Stat Item */
function Stat({ icon, value, label, isPercent }) {
  return (
    <div className="flex flex-col items-center gap-3">

      <div className="text-orange-500 text-3xl">
        {icon}
      </div>

      <h3 className="text-4xl font-bold">
        {value}
        <span className="text-orange-500">{isPercent ? "%" : "+"}</span>
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
    <div className="hidden md:block w-px bg-gray-700 mx-auto h-16" />
  );
}
