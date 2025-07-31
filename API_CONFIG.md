# API Konfigürasyonu - Basit Geçiş Sistemi

Bu dosya, frontend uygulamasında backend API'si ile mock data arasında basit geçiş yapmak için gerekli bilgileri içerir.

## Nasıl Çalışır? 🔧

`deko/app/lib/api.js` dosyasının başında tek bir ayar var:

```javascript
// 🔧 Geliştirme ayarı: true = mock data, false = localhost backend
const USE_MOCK_DATA = false;
```

## Kullanım Senaryoları

### 🖥️ Geliştirme Yaparken (Localhost Backend)

```javascript
const USE_MOCK_DATA = false;
```

- Backend'in localhost:8000'de çalıştığından emin ol
- Gerçek API verileri kullanılır
- Geliştirme ve test işlemleri için ideal

### 🚀 GitHub'a Push Etmeden Önce (Mock Data)

```javascript
const USE_MOCK_DATA = true;
```

- Mock veriler kullanılır
- Vercel'de herhangi bir backend problemi olmaz
- Konsolda "📋 Mock data kullanılıyor" mesajı görünür

## Adım Adım Kullanım

### 1. Geliştirme Modunda:

1. `USE_MOCK_DATA = false` yap
2. Backend'i çalıştır (`python manage.py runserver`)
3. Frontend'i çalıştır (`npm run dev`)
4. Gerçek verilerle geliştir

### 2. Deploy Etmeden Önce:

1. `USE_MOCK_DATA = true` yap
2. Değişiklikleri test et
3. GitHub'a push et
4. Vercel otomatik deploy edecek

### 3. Backend Ready Olduğunda:

1. Backend'i production'a deploy et
2. `USE_MOCK_DATA = false` yap
3. `API_BASE_URL`'i production backend URL'inle değiştir
4. GitHub'a push et

## Mock Data İçeriği

Şu anda 3 adet örnek duyuru vardır:

- YQ Union Hizmetlerimiz Hakkında
- Güvenli Ticaret Hizmetlerimiz
- 2024 Yılı Hedeflerimiz

Bu verileri `MOCK_ANNOUNCEMENTS` objesini düzenleyerek değiştirebilirsin.

## Hızlı Komutlar ⚡

**Localhost kullan:**

```bash
# api.js dosyasında USE_MOCK_DATA = false yap
```

**Mock data kullan:**

```bash
# api.js dosyasında USE_MOCK_DATA = true yap
```

Bu kadar basit! 🎉
