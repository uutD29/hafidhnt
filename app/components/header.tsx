"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiTarget, FiTrendingUp } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Plan", href: "#plan" },
    { name: "Experience", href: "#project" },
    { name: "Future", href: "#future" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between max-w-[1400px]">
        
        {/* Logo / Name */}
        <Link href="/" className="text-3xl font-extrabold font-ephesis text-brown tracking-tight hover:opacity-80 transition-opacity">
          Hafidh N. T.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-black/80 hover:text-[#D35A24] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:hafidhnurhaqqit@gmail.com"
            className="ml-4 px-6 py-2.5 bg-[#D35A24] text-white text-sm font-bold rounded-full hover:bg-[#BC894C] transition-colors shadow-sm"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brown hover:text-[#D35A24] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center py-6 gap-6 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-black/80 hover:text-[#D35A24] transition-colors w-full text-center py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:hafidhnurhaqqit@gmail.com"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-8 py-3 bg-[#D35A24] text-white text-lg font-bold rounded-full hover:bg-[#BC894C] transition-colors shadow-sm"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
}
