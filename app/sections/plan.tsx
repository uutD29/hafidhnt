export default function Plan() {
  const weeks = [
    {
      week: "WEEK 1",
      title: "Product & ICP\nUnderstanding",
      description: "Learn product value, key\nfeatures, ICP, and\nfamiliarize with CRM\nand sales tools",
      color: "bg-[#451e06]",
    },
    {
      week: "WEEK 2",
      title: "Lead Generation &\nScripts Setup",
      description: "Research potential\nleads and prepare\nscripts for email, calls,\nand LinkedIn outreach",
      color: "bg-[#873809]",
    },
    {
      week: "WEEK 3",
      title: "Initial Outreach\nExecution",
      description: "Start conversations with\nprospects and practice\nhandling common\nobjections",
      color: "bg-[#d35a24]",
    },
    {
      week: "WEEK 4",
      title: "Follow Up &\nMeeting Booking",
      description: "Follow up with engaged\nprospects and convert\ninterest into opportunity\nmeetings",
      color: "bg-[#c2854b]",
    },
  ];

  return (
    <section id="plan" className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brown mb-4">
            My SDR 60-Day Plan:<br />Month 1 - Preparation & Outreach
          </h2>
        </div>
      </div>

      <div className="relative mt-8 pb-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 pt-4">
          {weeks.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* Colored Tab */}
              <div 
                className={`${item.color} text-white text-sm md:text-base tracking-wide font-medium py-3 px-8 w-[80%] rounded-t-3xl text-center pb-8 transition-transform duration-300 group-hover:-translate-y-2`}
              >
                {item.week}
              </div>
              
              {/* White Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col text-center w-full min-h-[280px] -mt-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg md:text-[19px] font-extrabold text-primary mb-4 leading-snug whitespace-pre-line min-h-[56px] flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-black/80 leading-relaxed font-medium whitespace-pre-line">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Timeline Bottom Indicator (Desktop) */}
        <div className="relative mt-12 hidden lg:block">
           <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-0 border-t-[3px] border-dashed border-[#A0A0A0] z-0 -translate-y-1/2"></div>
           
           <div className="grid grid-cols-4 gap-8 relative z-10">
             {weeks.map((item, index) => (
               <div key={index} className="flex justify-center transition-transform duration-300 hover:scale-125">
                 <div className={`w-[20px] h-[20px] rounded-full ${item.color} ring-[8px] ring-primary-light`} />
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
