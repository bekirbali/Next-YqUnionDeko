"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

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
    setIsMobileContactOpen(false); // Mobil menü açılırken iletişim dropdown'ını kapat
  };

  const toggleMobileContact = () => {
    setIsMobileContactOpen(!isMobileContactOpen);
  };

  const handleContactMouseEnter = () => {
    setIsContactDropdownOpen(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactDropdownOpen(false);
  };

  return (
    <nav
      className={`text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A2562]/90" : "bg-[#0A2562]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src="/assets/yqunionlogo.png"
              alt="YqUnion Logo"
              width={180}
              height={90}
              className="object-contain"
              priority={true}
            />
          </Link>
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

          {/* İletişim Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleContactMouseEnter}
            onMouseLeave={handleContactMouseLeave}
          >
            <Link
              href="/contact"
              className="text-white hover:text-red-300 transition-colors duration-200 font-medium flex items-center"
            >
              İletişim
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {isContactDropdownOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-48 z-50">
                <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
                  <Link
                    href="/office-locations"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Ofis Lokasyonları
                  </Link>
                  <Link
                    href="/contact-form"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    İletişim Formu
                  </Link>
                </div>
              </div>
            )}
          </div>
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

            {/* Mobile İletişim Dropdown */}
            <div>
              <button
                onClick={toggleMobileContact}
                className="text-white hover:text-red-300 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between"
              >
                İletişim
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileContactOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileContactOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/contact"
                    className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    İletişim
                  </Link>
                  <Link
                    href="/office-locations"
                    className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ofis Lokasyonları
                  </Link>
                  <Link
                    href="/contact-form"
                    className="text-white hover:text-red-300 block px-3 py-2 rounded-md text-base transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    İletişim Formu
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
