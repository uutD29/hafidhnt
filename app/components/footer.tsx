import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <section id="contact" className="w-full py-24 rounded-xl max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 bg-[#451e06] text-white">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Ready to drive revenue?
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-12">
          Let&apos;s connect and discuss how my outbound strategies and sales cycle expertise can help build your pipeline.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          {/* Email Button */}
          <Link 
            href="mailto:hafidhnurhaqqit@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D35A24] hover:bg-[#BC894C] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            <FiMail/>
            Email Me
          </Link>

          {/* LinkedIn Button */}
          <Link 
            href="https://www.linkedin.com/in/hafidhnt/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#451e06] font-bold text-lg md:text-xl py-4 px-8 rounded-full transition-colors duration-300 shadow-md"
          >
            <FiLinkedin/>
            LinkedIn
          </Link>
        </div>

        <div className="mt-16 text-white/50 text-sm font-medium">
          <p>hafidhnurhaqqit@gmail.com</p>
          <p className="mt-2 text-xs opacity-70">© {new Date().getFullYear()} Hafidh Nurhaqqi Tarbani. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
