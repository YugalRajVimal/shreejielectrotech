export default function SolarProducts() {
  const products = [
    {
      title: "2T Terminal Box",
      desc: "Electrolytic copper/ Brass, Tin plated",
      img: "/11.jpg",
      learnMore: "#", // You can update to real link if available
    },
    {
      title: "2T-50 Terminal Box",
      desc: "Compounded ABS for high UV resistance",
      img: "/22.png",
      learnMore: "#",
    },
    {
      title: "3T Terminal Box",
      desc: "Electrolytic copper/ Brass, Tin plated",
      img: "/33.png",
      learnMore: "#",
    },
  ];

  return (
    <section className="bg-black text-white py-28">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Our Products
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
        We ensure International Quality &amp; support at Local price.
      </p>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-[#0f0f0f] rounded-xl p-6 shadow-xl hover:shadow-2xl transition flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover rounded-lg mb-6"
            />

            {/* Title */}
            <h4 className="text-xl font-bold mb-3 text-center">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed text-center mb-6">
              {item.desc}
            </p>
            {/* <a
              href={item.learnMore}
              className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white rounded px-6 py-2 font-semibold transition"
            >
              Learn More
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}