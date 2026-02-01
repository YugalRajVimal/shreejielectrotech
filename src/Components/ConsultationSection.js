import { FaGlobe, FaThumbsUp } from "react-icons/fa";

export default function ConsultationSection() {
  return (
    <section className="relative pt-28 pb-6 bg-white overflow-hidden">

      {/* Subtle background graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:48px_48px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center h-full">
          <img
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            alt="Sleek modern solar panels under a vibrant blue sky with clouds, symbolizing clean energy."
            className="w-[420px] h-[560px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Label */}
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-4">
            We do Business Worldwide
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            We ensure quality & support.<br />People love us &amp; we love them
          </h2>

          {/* About Us */}
          <div className="mb-12">
            {/* <h3 className="text-xl font-semibold text-gray-900 mb-3">
              About Us
            </h3> */}
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-6">
              We are dedicated to advancing green energy and sustainable solutions for a better future.
              <br /><br />
              With extensive experience in renewable technologies, our team provides a wide range of engineering and consulting services for solar, infrastructure, and energy projects. We emphasize innovation, quality, and customer satisfaction in every project.
              <br /><br />
              Our goal is to equip businesses and individuals with reliable, eco-friendly energy systems, making a positive impact worldwide. We value partnerships, continuous improvement, and open communication for long-term success.
              <br /><br />
              Using modern technology and best practices, we offer affordable, sustainable energy solutions trusted by clients internationally.
            </p>
          </div>

        

          {/* Reach Us */}
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Reach Us
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mb-2">
              <strong>SHREE JI ELECTRICALS SOLUTIONS</strong>
              <br />
              GF, B-32, KH. NO.45/3, GALI NO.2,<br />
              NEAR KARAN PUBLIC SCHOOL SADATPUR EXTENSION,<br />
              DELHI-110094
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mb-2">
              <strong>Contact Person:</strong> Mr. Badal Singh
              <br />
              <strong>Phone:</strong> +91 9990900041
              <br />
              <strong>Email:</strong> <a href="mailto:info@shreejielectrotech.com" className="text-orange-500 underline">info@shreejielectrotech.com</a>
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Copyright &copy; 2026 shreejielectrotech.com<br />
              Powered by shreejielectrotech.com
            </p>
          </div> */}

        </div>
       
      </div>
         {/* Commitment Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  mb-12 p-10">

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
    </section>
  );
}

/* Info Card */
function InfoCard({ icon, title, desc }) {
  return (
    <div className="border border-gray-200 bg-white p-8">

      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-xl mb-6">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-lg font-bold text-gray-900 mb-3">
        {title}
      </h4>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

    </div>
  );
}
