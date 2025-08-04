# i18n (Internationalization) Kullanım Kılavuzu

## Kurulum Tamamlandı ✅

YqUnion projesinde 2 dilli (Türkçe - İngilizce) destek altyapısı hazır!

## Mevcut Özellikler

- **Ana Dil**: Türkçe (tr)
- **İkinci Dil**: İngilizce (en)
- **Navbar**: Tamamen çeviri destekli
- **Dil Değiştirici**: Desktop ve mobil menülerde mevcut
- **Yerel Depolama**: Kullanıcının dil tercihi hatırlanıyor

## Dosya Yapısı

```
/app/
  ├── lib/i18n.js         # i18n konfigürasyonu (çeviriler dahil)
  ├── components/
  │   ├── I18nProvider.js # Provider component
  │   └── LanguageSwitcher.js # Dil değiştirici
  └── hooks/
      └── useTranslation.js # Kolay kullanım hook'u
```

## Component'lerde Kullanım

### 1. Hook Import Et

```javascript
"use client";
import { useTranslation } from "react-i18next";
// veya kendi hook'umuzu kullan:
// import useTranslation from '../hooks/useTranslation';

export default function MyComponent() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("navigation.home")}</h1>
      <p>{t("common.loading")}</p>
    </div>
  );
}
```

### 2. Mevcut Çeviriler

```javascript
// Navigation
t("navigation.home"); // Ana Sayfa / Home
t("navigation.about"); // Hakkımızda / About Us
t("navigation.contact"); // İletişim / Contact

// Common
t("common.loading"); // Yükleniyor... / Loading...
t("common.success"); // İşlem başarılı / Operation successful
t("common.readMore"); // Devamını Oku / Read More
```

## Yeni Çeviri Ekleme

### 1. app/lib/i18n.js dosyasını düzenle:

Türkçe çeviriler için:

```javascript
tr: {
  common: {
    // ... mevcut çeviriler
    hero: {
      title: "YqUnion'a Hoş Geldiniz",
      subtitle: "Türkiye-Çin dış ticaret uzmanı"
    }
  }
}
```

İngilizce çeviriler için:

```javascript
en: {
  common: {
    // ... mevcut çeviriler
    hero: {
      title: "Welcome to YqUnion",
      subtitle: "Turkey-China foreign trade specialist"
    }
  }
}
```

### 3. Component'te kullan:

```javascript
const { t } = useTranslation("common");

return (
  <div>
    <h1>{t("hero.title")}</h1>
    <p>{t("hero.subtitle")}</p>
  </div>
);
```

## Yeni Namespace Ekleme

### 1. app/lib/i18n.js'ye yeni namespace ekle:

```javascript
const resources = {
  tr: {
    common: {
      /* mevcut çeviriler */
    },
    pages: {
      // Yeni namespace
      home: {
        title: "Ana Sayfa Başlığı",
        description: "Ana sayfa açıklaması",
      },
    },
  },
  en: {
    common: {
      /* mevcut çeviriler */
    },
    pages: {
      // Yeni namespace
      home: {
        title: "Homepage Title",
        description: "Homepage description",
      },
    },
  },
};
```

### 2. i18n.js'de ns listesini güncelle:

```javascript
i18n.use(initReactI18next).init({
  // ...
  defaultNS: "common",
  ns: ["common", "pages"], // Yeni namespace'i ekle
  // ...
});
```

### 3. Component'te kullan:

```javascript
const { t } = useTranslation("pages");
```

## Sonraki Adımlar

1. **Paket Kurulumu**: `npm install` çalıştırın
2. **Sayfa Çevirileri**: Her sayfa için çeviri dosyaları ekleyin
3. **İçerik Çevirileri**: API'den gelen içerikler için çeviri stratejisi belirleyin
4. **SEO**: Metadata'lar için dil desteği ekleyin

## Test Etme

1. Sunucuyu başlatın: `npm run dev`
2. Navbar'daki dil değiştirici butonunu test edin
3. Sayfayı yeniden yüklediğinizde dil tercihinin korunduğunu kontrol edin

Altyapı hazır! İhtiyacınız olduğunda kolayca genişletebilirsiniz. 🚀
