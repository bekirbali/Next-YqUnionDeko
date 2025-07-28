"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A2562]/90" : "bg-[#0A2562]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/yqunionlogo.png"
            alt="YqUnion Logo"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
          >
            Hakkımızda
          </Link>
          <Link
            href="/whyus"
            className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
          >
            Neden Bizimle Çalışmalısınız?
          </Link>
          <Link
            href="/announcements"
            className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
          >
            Duyurular
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-red-300 transition-colors duration-200 font-medium"
          >
            İletişim
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none focus:text-red-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0A2562]/95">
            <Link
              href="/"
              className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/whyus"
              className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Neden Bizimle Çalışmalısınız?
            </Link>
            <Link
              href="/announcements"
              className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Duyurular
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
