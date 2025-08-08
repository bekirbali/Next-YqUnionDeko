import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON files directly for better compatibility
import trCommon from "../../public/locales/tr/common.json";
import enCommon from "../../public/locales/en/common.json";

// Translation resources as JavaScript objects
const resources = {
  tr: {
    common: trCommon,
  },
  en: {
    common: enCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr", // default language
  fallbackLng: "tr",
  debug: false,

  // have a common namespace used around the full app
  defaultNS: "common",
  ns: ["common"],

  keySeparator: ".",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
