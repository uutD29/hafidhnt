export default function Stats() {
  const stats = [
    {
      title: "Total Leads Generated",
      value: "1000+",
      subtitle: "~91% SQL",
    },
    {
      title: "Qualified Meetings",
      value: "4 – 8",
      subtitle: "Per Month",
    },
    {
      title: "Pipeline Contribution",
      value: "$1M",
      subtitle: "Generated GMV",
    },
  ];

  return (
    <section id="stats" className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light">
      <div>
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-[44px] font-extrabold text-black mb-4">
            Performance Highlights
          </h2>
          <div className="w-16 h-[3px] bg-[#BC894C] mb-8" />

          <p className="text-xl font-bold text-[#D35A24] mb-4">
            Top performer recognition: Highest number of meetings booked
          </p>

          <p className="text-lg text-black/80 font-medium leading-relaxed max-w-3xl">
            Achieved the highest number of meetings booked, demonstrating strong
            prospecting skills and consistent performance converting outreach
            into qualified opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 text-center shadow-sm 
    transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-sm font-bold tracking-wide text-black/60 mb-4 transition-colors duration-300 group-hover:text-[#D35A24]">
                {stat.title}
              </p>

              <p className="text-5xl md:text-6xl font-extrabold text-[#D35A24] mb-3 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </p>

              <p className="text-black/80 font-bold transition-colors duration-300">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
