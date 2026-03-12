export default function Services() {
  const services = [
    { title: "ICP &\nMarket\nResearch", color: "bg-[#C6500F]" },
    { title: "Lead\nGeneration\nStrategy", color: "bg-[#BC894C]" },
    { title: "Multi-\nChannel\nOutreach", color: "bg-[#C6500F]" },
    { title: "High-\nQuality\nScripts", color: "bg-[#BC894C]" },
    { title: "Objection\nHandling\nStrategy", color: "bg-[#C6500F]" },
    { title: "Pipeline &\nDeal\nSupport", color: "bg-[#BC894C]" },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light relative"
    >

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-md">

            <h2 className="text-4xl md:text-5xl font-extrabold text-brown mb-4">
            What I Do
          </h2>

          <p className="text-lg md:text-xl text-black/80 leading-relaxed">
            I help identify and develop business opportunities throughout the
            sales cycle — from lead generation and prospecting to meeting
            bookings and supporting the closing process.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} aspect-square flex items-end p-6 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg`}
            >
              <h3 className="text-white text-lg md:text-xl font-medium leading-snug whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}