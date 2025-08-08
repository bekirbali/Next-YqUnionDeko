"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
    localStorage.setItem("yqunion-language", locale);
    setIsOpen(false);
  };

  const getCurrentLanguageLabel = () => {
    return i18n.language === "tr" ? "TR" : "EN";
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center space-x-2 text-white hover:text-red-300 hover:cursor-pointer transition-colors duration-200 font-medium">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{getCurrentLanguageLabel()}</span>
        <svg
          className={`w-4 h-4`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 pt-2 w-32 z-50">
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
            <button
              onClick={() => changeLanguage("tr")}
              className={`w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                i18n.language === "tr" ? "bg-gray-50 font-medium" : ""
              }`}
            >
              🇹🇷 Türkçe
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${
                i18n.language === "en" ? "bg-gray-50 font-medium" : ""
              }`}
            >
              🇺🇸 English
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
