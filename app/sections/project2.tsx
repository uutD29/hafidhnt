export default function Project2() {
  return (
    <section
      id="project-2"
      className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brown">
            Bazun Cell Project
          </h2>
        </div>
      </div>

      {/* Role */}
      <h3 className="text-xl font-bold text-primary mb-10 tracking-tight">
        Sales Executive (2020 - 2024)
      </h3>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-2xl font-bold text-black mb-2">Company</h4>
            <p className="text-base text-black/80 font-medium">
              Bazun Cellular & Services
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-black mb-2">Goal</h4>
            <p className="text-base text-black/80 leading-relaxed font-medium">
              Drive sustainable revenue growth through integrated sales and marketing strategies
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-[#BC894C]/50 self-stretch"></div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8 w-full">
          <div>
            <h4 className="text-2xl font-bold text-black mb-2">Role</h4>
            <p className="text-base text-black/80 leading-relaxed font-medium">
              Engaged walk-in and social media customers, applying sales techniques from product pitching to consultative selling for students, college communities, and local customers.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-black mb-2">Outcome</h4>
            <p className="text-base text-black/80 leading-relaxed font-medium">
              Drove a 20% revenue increase by implementing structured consultative selling that boosted transaction value and customer trust. Maintained consistent traffic and achieved a 95% satisfaction rate.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}