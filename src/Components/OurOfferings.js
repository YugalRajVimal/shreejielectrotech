export default function OurOfferings() {
    const offerings = [
      {
        title: "TECHNICAL AUDITS & QUALITY INSPECTION",
        items: [
          "Module inspection in Asia (India, China, Vietnam, Cambodia, Malaysia)",
          "Cell, wafer, battery, and electrolyser inspection",
          "FAT, reliability test witnessing, and QAP finalization",
        ],
      },
      {
        title: "ENGINEERING DESIGN & DOCUMENTATION",
        items: [
          "GA Drawings, GTPs, SLDs, Load Flow Studies",
          "SCADA & grid compliance planning",
          "Detailed engineering for PV, BoS, and substations",
        ],
      },
      {
        title: "YIELD & PERFORMANCE ASSESSMENT",
        items: [
          "PVSyst simulations & EYA reports",
          "PR/CUF analysis and performance benchmarking",
          "Root Cause Analysis (RCA) and optimization audits",
        ],
      },
      {
        title: "PROJECT FEASIBILITY & RISK ADVISORY",
        items: [
          "Technical Due Diligence",
          "Bankable DPRs for financing",
          "Lender's Independent Engineering Services",
        ],
      },
    ];
  
    return (
      <section className="bg-[#f4b400] py-16 px-6 md:px-12 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-12 ">
          Our Offerings
        </h2>
  
        {/* Timeline container */}
        <div className="relative max-w-3xl">
  
          {/* Vertical dotted line */}
          <div className="absolute left-[7px] top-2 bottom-2 border-l-2 border-dotted border-black"></div>
  
          {/* Timeline items */}
          <div className="flex flex-col gap-12">
  
            {offerings.map((section, index) => (
              <div key={index} className="relative pl-10">
  
                {/* Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-black rounded-full"></div>
  
                {/* Content */}
                <h3 className="font-bold text-black mb-3 text-sm md:text-base tracking-wide">
                  {section.title}
                </h3>
  
                <ul className="text-gray-800 text-sm md:text-base leading-relaxed space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
  
              </div>
            ))}
  
          </div>
        </div>
  
      </section>
    );
  }