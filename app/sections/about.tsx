import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 rounded-xl max-w-[1400px] mx-auto my-16 px-6 md:px-12 lg:px-16 bg-primary-light"
    >
      <div>
        <div className="grid lg:grid-cols-2 overflow-hidden gap-8">
          {/* LEFT SIDE */}
          <div className="lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brown mb-4">
              Who I Am
            </h2>
            <p className="text-2xl font-semibold text-primary leading-relaxed mb-6">
              Sales professional with 5+ years driving business growth
            </p>

            <p className="text-lg leading-relaxed max-w-xl">
              Experienced in B2B and B2C sales, managing both inbound and
              outbound opportunities across remote and onsite environments.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* Header */}
            <div className="absolute top-0 right-0 z-10 text-right pt-4">
              <p className="text-xl tracking-wide font-bold text-primary uppercase">
                HAFIDH NURHAQQI TARBANI
              </p>
              <p className="text-xs font-semibold mt-1 uppercase">
                SALES DEVELOPMENT REPRESENTATIVE
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[520px] mt-20">
              <Image
                src="/profile.png"
                alt="profile"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
