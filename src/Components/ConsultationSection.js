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
            alt="Sleek modern solar panels under a vibrant blue sky with clouds, symbolizing clean energy."
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-60 sm:h-72 md:h-96 lg:h-[560px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center w-full">

          {/* Label */}
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-4 text-sm sm:text-base">
            We do Business Worldwide
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
            We ensure quality & support.<br />
            People love us &amp; we love them
          </h2>

          {/* About Us */}
          <div className="mb-8 sm:mb-12">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We are dedicated to advancing green energy and sustainable solutions for a better future.
              <br /><br />
              With extensive experience in renewable technologies, our team provides a wide range of engineering and consulting services for solar, infrastructure, and energy projects. We emphasize innovation, quality, and customer satisfaction in every project.
              <br /><br />
              Our goal is to equip businesses and individuals with reliable, eco-friendly energy systems, making a positive impact worldwide. We value partnerships, continuous improvement, and open communication for long-term success.
              <br /><br />
              Using modern technology and best practices, we offer affordable, sustainable energy solutions trusted by clients internationally.
            </p>
          </div>
        </div>
      </div>
      
      {/* Commitment Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-12 mt-12 sm:mt-16 p-4 sm:p-8">
          {/* Our Commitment */}
          <InfoCard
            icon={<FaGlobe />}
            title="Our Commitment"
            desc={
              <>
                Our commitment is to fulfill the entire customer requirement and have a fast product development cycle to increase the capacity of production. With the strength of a respective past, the perfect present and the prospective future, we have strongly moved a long way – growing along with our clients.
                <br />
                <br />
                The good quality engineering products has always been in demand for good users and we are dedicated to provide such good quality products at reasonable price that suit your applications.
              </>
            }
          />

          {/* Our Products */}
          <InfoCard
            icon={<FaThumbsUp />}
            title="Our Products"
            desc={
              <>
                We offer wide range of good quality junction boxes, high/medium/low voltage switchgears, lighting poles, cable trays, cable glands and other solar equipments. You can buy our products through our online shop.
                <br />
                <br />
                Junction boxes provide electrical interconnections between the solar modules and protect the solar cells from damage.
                <br />
                <br />
                We provide Junction boxes having high life time, resistant to adverse environmental effects, wide range of temperatures and humidity conditions of operation, achieved by better design, good quality of materials and skilled technical team.
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
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
