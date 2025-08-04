"use client";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";

export default function I18nProvider({ children }) {
  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("yqunion-language");
    if (savedLanguage && (savedLanguage === "tr" || savedLanguage === "en")) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
