import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      title: "Prospecting\nStrategy",
      description: "ICP targeting,\naccount research",
      image: "/skills/prospecting-strategy.png",
    },
    {
      title: "Outbound\nOutreach",
      description: "Cold & warm calling,\nemail, Linkedin,\nWhatsApp",
      image: "/skills/outbound-outreach.png",
    },
    {
      title: "Sales\nConversations",
      description: "Follow-ups,\nobjection handling,\nrelationship building",
      image: "/skills/sales-conversations.png",
    },
    {
      title: "Pipeline\nManagement",
      description: "Updating CRM,\nopportunity tracking,\nmeeting bookings",
      image: "/skills/pipeline-management.png",
    },
    {
      title: "Sales Tools\n& CRM",
      description: "Hubspot, Kommo,\nApollo, SalesQL,\nRocket Reach",
      image: "/skills/sales-tools-crm.png",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light"
    >
      {/* Header */}
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brown mb-4">
          Skills Snapshot
        </h2>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-4 rounded-xl"
          >
            {/* Image */}
            <div className="relative w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.image}
                alt={skill.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold leading-snug whitespace-pre-line mb-4 transition-colors duration-300 group-hover:text-[#D35A24]">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] text-black/80 leading-relaxed whitespace-pre-line">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}