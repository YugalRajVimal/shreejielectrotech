export default function InfrastructureSection() {
    const projects = [
      {
        title: "About Us",
        desc: "We are committed to contributing in the area of green energy, supporting sustainable development by providing solutions that help save our earth.",
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276", // solar panels, clean energy
      },
      {
        title: "Our Commitment",
        desc: "Our commitment is to fully meet customer requirements through fast product development cycles and reliable, quality engineering products at reasonable prices.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b", // teamwork, commitment visuals
      },
      {
        title: "Our Products",
        desc: "We offer a wide range of quality junction boxes, switchgears, lighting poles, cable trays, and solar equipment, ensuring international standards at local prices.",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", // products, electrical components
      },
    ];
    return (
      <section className="bg-black text-white py-28">
  
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Infrastructure & Construction
        </h2>
  
        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
  
          {projects.map((item, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] rounded-xl p-6 shadow-xl hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-lg mb-6"
              />
  
              {/* Title */}
              <h4 className="text-xl font-bold mb-3">
                {item.title}
              </h4>
  
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
  
        </div>
      </section>
    );
  }
  