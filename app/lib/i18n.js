import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources as JavaScript objects
const resources = {
  tr: {
    common: {
      navigation: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        whyUs: "Neden Bizimle Çalışmalısınız?",
        announcements: "Duyurular",
        contact: "İletişim",
        officeLocations: "Ofis Lokasyonları",
        contactForm: "İletişim Formu",
      },
      common: {
        loading: "Yükleniyor...",
        error: "Bir hata oluştu",
        success: "İşlem başarılı",
        cancel: "İptal",
        confirm: "Onayla",
        save: "Kaydet",
        edit: "Düzenle",
        delete: "Sil",
        back: "Geri",
        next: "İleri",
        previous: "Önceki",
        submit: "Gönder",
        search: "Ara",
        readMore: "Devamını Oku",
        learnMore: "Daha Fazla Bilgi",
        close: "Kapat",
        open: "Aç",
        yes: "Evet",
        no: "Hayır",
      },
      language: {
        turkish: "Türkçe",
        english: "English",
        changeLanguage: "Dil Değiştir",
      },
      business: {
        import: "İthalat",
        export: "İhracat",
        trading: "Ticaret",
        logistics: "Lojistik",
        consultation: "Danışmanlık",
        services: "Hizmetler",
        experience: "Deneyim",
        quality: "Kalite",
        trust: "Güven",
        partnership: "Ortaklık",
      },
      contact: {
        address: "Adres",
        phone: "Telefon",
        email: "E-posta",
        website: "Web Sitesi",
        followUs: "Bizi Takip Edin",
        getInTouch: "İletişime Geçin",
      },
      time: {
        today: "Bugün",
        yesterday: "Dün",
        tomorrow: "Yarın",
        thisWeek: "Bu Hafta",
        thisMonth: "Bu Ay",
        thisYear: "Bu Yıl",
      },
    },
  },
  en: {
    common: {
      navigation: {
        home: "Home",
        about: "About Us",
        whyUs: "Why Work With Us?",
        announcements: "Announcements",
        contact: "Contact",
        officeLocations: "Office Locations",
        contactForm: "Contact Form",
      },
      common: {
        loading: "Loading...",
        error: "An error occurred",
        success: "Operation successful",
        cancel: "Cancel",
        confirm: "Confirm",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        back: "Back",
        next: "Next",
        previous: "Previous",
        submit: "Submit",
        search: "Search",
        readMore: "Read More",
        learnMore: "Learn More",
        close: "Close",
        open: "Open",
        yes: "Yes",
        no: "No",
      },
      language: {
        turkish: "Türkçe",
        english: "English",
        changeLanguage: "Change Language",
      },
      business: {
        import: "Import",
        export: "Export",
        trading: "Trading",
        logistics: "Logistics",
        consultation: "Consultation",
        services: "Services",
        experience: "Experience",
        quality: "Quality",
        trust: "Trust",
        partnership: "Partnership",
      },
      contact: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        website: "Website",
        followUs: "Follow Us",
        getInTouch: "Get In Touch",
      },
      time: {
        today: "Today",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",
        thisWeek: "This Week",
        thisMonth: "This Month",
        thisYear: "This Year",
      },
    },
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
