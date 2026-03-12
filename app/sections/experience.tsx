export default function Experience() {
  const experiences = [
    {
      company: "Zinit Indonesia",
      logo: "Z",
      color: "bg-blue-600",
      roles: [
        {
          title: "Sales Development Representative",
          duration: "Jan 2025 - Present",
          location: "Remote, South Jakarta",
          description:
            "Focusing on quality over quantity B2B outbound sales and lead qualification for SaaS solution",
          active: true,
        },
      ],
    },
    {
      company: "Bazun Cellular and Services",
      logo: "B",
      color: "bg-orange-500",
      roles: [
        {
          title: "Sales Executive",
          duration: "Apr 2020 - Dec 2024",
          location: "Bekasi, Indonesia",
          description:
            "Managed full cycle sales process, inbound sales, and applied both basic and unique sales techniques",
          active: false,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-[44px] font-extrabold text-black mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-[3px] bg-[#BC894C] mb-8" />
          <p className="text-lg text-black/80 font-medium">
            My track record of driving sales, building relationships, and
            delivering results across different roles and industries.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col">
              {/* Logo & Company Name */}
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xl ${exp.color} shadow-sm ring-4 ring-primary-light z-20`}
                >
                  {exp.logo}
                </div>
                <h3 className="text-[22px] font-bold text-black tracking-tight">
                  {exp.company}
                </h3>
              </div>

              {/* Roles Tree */}
              <div className="flex flex-col relative mt-[-16px]">
                {exp.roles.map((role, rIndex) => {
                  const isLast = rIndex === exp.roles.length - 1;
                  const isFirst = rIndex === 0;
                  const lineStyle = role.active
                    ? "border-green-500"
                    : "border-[#BC894C]/30";
                  const bgStyle = role.active ? "bg-green-500" : "bg-[#BC894C]/30";

                  return (
                    <div key={rIndex} className="relative pl-[56px] pt-8 pb-4">
                      {/* Vertical line continuing downwards if there are more roles */}
                      {!isLast && (
                        <div
                          className={`absolute left-[23px] top-[48px] bottom-0 w-[2px] ${bgStyle}`}
                        />
                      )}

                      {/* Branching Curve connecting top (logo or prev role) to the current role */}
                      <div
                        className={`absolute left-[23px] w-[20px] border-l-[2px] border-b-[2px] rounded-bl-xl ${lineStyle}`}
                        style={{
                          top: isFirst ? "16px" : "0px",
                          height: isFirst ? "32px" : "48px",
                        }}
                      />

                      {/* Content Section */}
                      <div className="pl-4">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-[18px] font-bold text-black tracking-tight">
                            {role.title}
                          </h4>
                          {/* Green checklist badge for all verified roles */}
                          <div className="w-[18px] h-[18px] rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 shadow-sm relative top-[1px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="text-black/80 font-medium text-[15px] flex flex-wrap items-center gap-2 mb-3">
                          <span>{role.duration}</span>
                          <span className="text-[10px] opacity-70">•</span>
                          <span>{role.location}</span>
                          <span className="text-[10px] opacity-70">•</span>
                          <span>Full-Time</span>
                        </div>

                        {role.description && (
                          <p className="text-black/80 font-medium leading-relaxed">
                            {role.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
