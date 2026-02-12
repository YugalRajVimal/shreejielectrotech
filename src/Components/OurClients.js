import React from 'react'

// Place your client logos in the public/clients folder or update the paths accordingly
const clients = [
  {
    name: 'Adani',
    img: '/client1.png'
  },
  {
    name: 'Tata Power',
    img: '/client2.png'
  },
  {
    name: 'Acme',
    img: '/client3.png'
  },
  {
    name: 'ReNew Power',
    img: '/client4.png'
  },
  // Add or adjust logos as needed
]

// Duplicate list to create seamless infinite loop effect
const scrollingClients = [...clients, ...clients, ...clients];

const OurClients = () => {
  return (
    <section className="py-10">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: calc(200%); /* wide enough for 2x client list */
          animation: scroll-left 25s linear infinite;
        }
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center font-serif">
          Our <span className="text-orange-500">Clients</span>
        </h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {scrollingClients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex flex-col items-center mx-8"
                style={{ minWidth: 160, maxWidth: 180 }}
              >
                <div className="p-4 flex items-center justify-center mb-2  transition">
                  <img
                    src={client.img}
                    alt={client.name}
                    className=" h-48  object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClients;