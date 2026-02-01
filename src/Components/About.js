export default function AboutSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

        {/* Left Content */}
        <div className=" col-span-2">

          {/* Label */}
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-4">
            | About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            We Are Committed To Green Energy & Sustainable Development
          </h2>

          {/* Introduction */}
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            We are committed to contribute in the area of green energy which saves our earth and supports sustainable development.
          </p>

          {/* Commitment Section */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-8">
            Our Commitment
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            Our commitment is to fulfill the entire customer requirement and have a fast product development cycle to increase the capacity of production. With the strength of a respective past, the perfect present and the prospective future, we have strongly moved a long way – growing along with our clients.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            The good quality engineering products have always been in demand for good users and we are dedicated to provide such good quality products at reasonable price that suit your applications.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            We offer wide range of good quality junction boxes, high/medium/low voltage switchgears, lighting poles, cable trays, cable glands and other solar equipments. You can buy our products through our online shop.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            Junction boxes provide electrical interconnections between the solar modules and protect the solar cells from damage.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-2">
            We provide junction boxes having high life time, resistant to adverse environmental effects, and wide range of temperatures and humidity conditions of operation, achieved by better design, good quality of materials and skilled technical team.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
            alt="Solar Engineer"
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}