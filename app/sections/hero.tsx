export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-background px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full">
          Personal Portfolio
        </span>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-brown leading-tight mb-6">
          Hafidh Nurhaqqi Tarbani
        </h1>

        {/* Role */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto">
          Sales Development Representative • Business Development
        </p>

      </div>
    </section>
  );
}