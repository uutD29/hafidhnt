import Image from "next/image";

export default function Future() {
  return (
    <section
      id="future"
      className="w-full rounded-xl max-w-[1400px] mx-auto my-16 bg-primary-light overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        
        {/* LEFT SIDE: Image & Title Layer */}
        <div className="relative w-full h-[400px] lg:h-full bg-black/10">
          {/* Dummy Image */}
          <Image
            src="/coffee.jpg" // Dummy image, update with real asset
            alt="Workspace"
            fill
            className="object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute top-12 left-8 md:top-16 md:left-16 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Where I&apos;m<br />Going
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="flex flex-col p-8 md:p-16 relative">
          {/* Bullet Points */}
          <div className="flex flex-col justify-center h-full space-y-8">
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="mt-2.5 w-2 h-2 shrink-0 bg-[#333] rounded-full"></span>
                <p className="text-[20px] md:text-[22px] text-black tracking-tight leading-snug">
                  Growing into senior sales and leadership roles through consistent performance
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2.5 w-2 h-2 shrink-0 bg-[#333] rounded-full"></span>
                <p className="text-[20px] md:text-[22px] text-black tracking-tight leading-snug">
                  Joining a high-growth multinational technology company to build a long-term tech sales career
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2.5 w-2 h-2 shrink-0 bg-[#333] rounded-full"></span>
                <p className="text-[20px] md:text-[22px] text-black tracking-tight leading-snug">
                  Looking to build a global career while working with international teams and clients.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2.5 w-2 h-2 shrink-0 bg-[#333] rounded-full"></span>
                <p className="text-[20px] md:text-[22px] text-black tracking-tight leading-snug">
                  Continuously improving expertise in SaaS sales, outbound strategy, and revenue growth
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
