import { FaGlobe, FaThumbsUp } from "react-icons/fa";

export default function ConsultationSection() {
  return (
    <section className="relative pt-16 md:pt-24 pb-6 bg-white overflow-hidden">

      {/* Subtle background graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] md:[background-size:48px_48px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">

        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center h-full w-full mb-10 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            alt="Technical solar PV inspection and engineering"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-60 sm:h-72 md:h-96 lg:h-[560px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center w-full">

          {/* Label */}
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-4 text-sm sm:text-base">
            Solar PV Power Projects
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
            Integrated Engineering, Inspection & Project Assurance
          </h2>

          {/* Description/Overview */}
          <div className="mb-8 sm:mb-12">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Solar energy is a cornerstone of global energy transition. With rising demand for dependable, clean power, the success of every solar PV project relies on meticulous planning, technical excellence, and trusted inspection at each stage.<br /><br />
              We deliver end-to-end support for developers, EPCs, and investors: from feasibility and engineering, thorough inspections, to project management consultancy. Our 10+ GW international track record covers module and cell inspection, substation design, transformer & switchgear audits, and energy yield analysis.<br /><br />
              Every project, from pre-bid to asset commissioning, is optimized for bankability, reliability, and maximum performance—empowering you to build resilient, sustainable solar portfolios.
            </p>
          </div> 
        </div>
      </div>
      
      {/* Commitment Cards / Offerings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-12 mt-12 sm:mt-16 p-4 sm:p-8">
          {/* Our Capabilities */}
          <InfoCard
            icon={<FaGlobe />}
            title="Our Capabilities"
            desc={
              <>
                <span className="font-semibold">We deliver solar project support through five core pillars:</span>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <b>Engineering &amp; Design:</b> Feasibility Studies (PFR), DPR, Bankable DPR, Energy Yield Assessments, Detailed Plant &amp; Substation Design.
                  </li>
                  <li>
                    <b>Inspection &amp; Quality Assurance:</b> Module/Cell Inspection (India, China, Vietnam, Malaysia, Cambodia), Raw Material Validation, Factory/Supplier Audit, In-Process Inspection, Specialized Audits.
                  </li>
                  <li>
                    <b>Project Management Consultancy (PMC):</b> Field Quality Monitoring, Construction Supervision, Acceptance Tests (PR, CUF, PLF), O&amp;M Planning, HOTO.
                  </li>
                  <li>
                    <b>Owner’s &amp; Lender’s Engineering:</b> Performance Validation, Design Review, Risk Assessment, Bankable Reporting.
                  </li>
                  <li>
                    <b>Sustainability &amp; Carbon Integration:</b> Net Zero &amp; RE100 Advisory, Carbon Audits, Sustainability Consulting.
                  </li>
                </ul>
              </>
            }
          />

          {/* Our Offerings */}
          <InfoCard
            icon={<FaThumbsUp />}
            title="Our Inspection-Centric Offerings"
            desc={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <b>Technical Audits &amp; Inspections:</b> Module, cell, wafer, battery, and electrolyser inspections across Asia; Factory Acceptance Testing, reliability witnessing, and QAP finalization.
                  </li>
                  <li>
                    <b>Engineering Design &amp; Documentation:</b> GA Drawings, GTPs, SLDs, Load Flow Studies, and grid compliance plans.
                  </li>
                  <li>
                    <b>Yield &amp; Performance Assessment:</b> PVSyst simulations, EYA reports, PR/CUF benchmarking, optimization audits.
                  </li>
                  <li>
                    <b>Project Feasibility &amp; Risk Advisory:</b> Technical Due Diligence, bankable DPRs for financing, Lender’s Independent Engineering services.
                  </li>
                  <li>
                    <b>Consultancy Services:</b> Project management, carbon audits, Net Zero transition, and energy transition strategies.
                  </li>
                </ul>
                <br />
                <span className="font-medium">
                  To know more about our services, connect with us.
                </span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* Info Card */
function InfoCard({ icon, title, desc }) {
  return (
    <div className="border border-gray-200 bg-white p-6 sm:p-8 rounded-lg shadow-sm flex flex-col h-full">
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-lg sm:text-xl mb-4 sm:mb-6 shrink-0">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h4>

      {/* Text */}
      <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {desc}
      </div>
    </div>
  );
}
