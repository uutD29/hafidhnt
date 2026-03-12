export default function Project() {
  const outcomes = [
    {
      text: "1000+ leads generated",
      bgClass: "bg-[#FFE866]",
    },
    {
      text: "91% ~ SQL conversion",
      bgClass: "bg-[#FF7326]",
    },
    {
      text: "5–8 meetings per month",
      bgClass: "bg-[#80E666]",
    },
    {
      text: "Over USD 500,000 in\ncumulative GMV",
      bgClass: "bg-[#4DB8FF]",
    },
  ];

  return (
    <section
      id="project"
      className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brown">
            Zinit Indonesia Project
          </h2>
        </div>
      </div>

      {/* Role */}
      <h3 className="text-xl font-bold text-primary mb-10 tracking-tight">
        Sales Development Representative (January 2025 - Present)
      </h3>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-[1fr_auto_1.2fr] gap-10 items-start">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-xl font-bold text-black mb-1">Company</h4>
            <p className="text-base text-black/80 font-medium">
              Zinit Indonesia
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-black mb-1">
              Key Performance Indicator
            </h4>
            <p className="text-base text-black/80 leading-relaxed font-medium">
              Generate 4–6 meetings per month through strategic outreach
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-black mb-1">
              Best Achievement
            </h4>
            <p className="text-base text-black/80 leading-relaxed font-medium relative inline-block">
              Top 2 performer in total meeting
              <br />
              bookings & lead generation
              <span className="absolute -bottom-2 left-0 w-[110%] h-1 bg-red-500 rounded-full rotate-[-1deg]" />
              <span className="absolute -bottom-4 left-[10%] w-[90%] h-[2px] bg-red-500 rounded-full rotate-[0.5deg]" />
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-[#BC894C]/40 self-stretch"></div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center w-full">
          <h4 className="text-xl font-bold text-black mb-8">Outcome</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-xl">
            {outcomes.map((item, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className={`w-full py-3 px-4 flex items-center justify-center ${item.bgClass}`}
                  style={{
                    borderRadius:
                      "20px 8px 24px 12px / 12px 24px 8px 20px",
                  }}
                >
                  <p className="text-black font-semibold text-sm text-center leading-snug whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}