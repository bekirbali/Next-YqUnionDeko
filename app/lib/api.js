// 🔧 Geliştirme ayarı: true = mock data, false = localhost backend
const USE_MOCK_DATA = true;

const API_BASE_URL = "http://localhost:8000/api";

// Mock data for development
const MOCK_ANNOUNCEMENTS = {
  results: [
    {
      id: 1,
      title: "YQ Union Olarak Katıldığımız Fuarlar",
      slug: "katildigimiz-fuarlar",
      content:
        "<p>Dünyanın dört bir yanındaki prestijli fuarlarda yer alarak sektördeki lider konumumuzu bir kez daha pekiştirdik.Katıldığımız fuarlarda, en son teknolojik çözümlerimizi, yenilikçi ürünlerimizi ve sürdürülebilirlik odaklı projelerimizi siz değerli iş ortaklarımız ve ziyaretçilerimizle buluşturduk.</p>",
      content_preview:
        "Dünyanın dört bir yanındaki prestijli fuarlarda yer alarak sektördeki lider konumumuzu bir kez daha pekiştirdik...",
      main_image: "/assets/fair.jpg",
      additional_images: [
        {
          id: 1,
          image: "/assets/exhibition/sergi1.png",
          caption: "Dünya ticareti",
          order: 1,
        },
        {
          id: 1,
          image: "/assets/exhibition/sergi2.png",
          caption: "Dünya ticareti",
          order: 1,
        },
        {
          id: 1,
          image: "/assets/exhibition/sergi3.png",
          caption: "Dünya ticareti",
          order: 1,
        },
        {
          id: 1,
          image: "/assets/exhibition/sergi4.png",
          caption: "Dünya ticareti",
          order: 1,
        },
        {
          id: 1,
          image: "/assets/exhibition/sergi5.png",
          caption: "Dünya ticareti",
          order: 1,
        },
      ],
      additional_images_count: 1,
      created_at: "2025-01-15T10:30:00Z",
      is_active: true,
    },
    {
      id: 2,
      title: "Güvenli Ticaret Hizmetlerimiz",
      slug: "guvenli-ticaret-hizmetlerimiz",
      content:
        "<p>Uluslararası ticarette güvenlik en önemli faktörlerden biridir. YQ Union olarak tüm işlemlerinizde maksimum güvenlik sağlamak için gelişmiş sistemler kullanıyoruz.</p>",
      content_preview:
        "Uluslararası ticarette güvenlik en önemli faktörlerden biridir. YQ Union olarak tüm işlemlerinizde maksimum güvenlik sağlamak için...",
      main_image: "/assets/exportimport.jpg",
      additional_images: [],
      additional_images_count: 0,
      created_at: "2024-01-10T14:20:00Z",
      is_active: true,
    },
    {
      id: 3,
      title: "2025 Yılı Hedeflerimiz",
      slug: "2025-yili-hedeflerimiz",
      content:
        "<p>2025 yılında daha fazla ülkeye hizmet vermeyi ve müşteri memnuniyetini en üst seviyeye çıkarmayı hedefliyoruz. Yeni iş ortaklıkları ve teknolojik yeniliklerle size daha iyi hizmet vermeye devam edeceğiz.</p> <p>2025 yılında, küresel çapta daha fazla bölgeye ulaşarak hizmet ağımızı genişletmeyi ve müşteri odaklı yaklaşımımızı güçlendirmeyi planlıyoruz. Yenilikçi teknolojiler ve stratejik iş birlikleriyle, kullanıcı deneyimini daha da iyileştirecek çözümler sunmayı taahhüt ediyoruz. Siz değerli müşterilerimizin ihtiyaçlarına en uygun, güvenilir ve hızlı hizmetleri sağlamak için durmaksızın çalışmaya devam edeceğiz.</p>",
      content_preview:
        "2025 yılında daha fazla ülkeye hizmet vermeyi ve müşteri memnuniyetini en üst seviyeye çıkarmayı hedefliyoruz...",
      main_image: "/assets/electiriccarheroslider.jpg", // Resim olmayan test için
      additional_images: [],
      additional_images_count: 0,
      created_at: "2024-01-05T09:15:00Z",
      is_active: true,
    },
  ],
};

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}, language = "tr") {
    // Dil parametresini URL'e ekle
    const separator = endpoint.includes("?") ? "&" : "?";
    const url = `${this.baseURL}${endpoint}${separator}lang=${language}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": language,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Announcement API methods
  async getAnnouncements(language = "tr") {
    if (USE_MOCK_DATA) {
      console.log("📋 Mock data kullanılıyor");
      return MOCK_ANNOUNCEMENTS;
    }
    return this.request("/announcements/", {}, language);
  }

  async getActiveAnnouncements(language = "tr") {
    if (USE_MOCK_DATA) {
      console.log("📋 Mock data kullanılıyor");
      return MOCK_ANNOUNCEMENTS;
    }
    return this.request("/announcements/active/", {}, language);
  }

  async getLatestAnnouncements(language = "tr") {
    if (USE_MOCK_DATA) {
      console.log("📋 Mock data kullanılıyor");
      return MOCK_ANNOUNCEMENTS;
    }
    return this.request("/announcements/latest/", {}, language);
  }

  async getAnnouncement(id, language = "tr") {
    if (USE_MOCK_DATA) {
      console.log("📋 Mock data kullanılıyor");
      const announcement = MOCK_ANNOUNCEMENTS.results.find(
        (a) => a.id === parseInt(id)
      );
      return announcement || null;
    }
    return this.request(`/announcements/${id}/`, {}, language);
  }
}

export const apiService = new ApiService();

// Image URL utility function
export const getImageUrl = (imagePath) => {
  if (!imagePath) return "/assets/placeholder-news.svg";
  if (imagePath.startsWith("http")) return imagePath;
  // Frontend assets'leri olduğu gibi bırak
  if (imagePath.startsWith("/assets/")) return imagePath;
  // Backend media dosyaları için URL ekle
  const fullUrl = `http://localhost:8000${imagePath}`;
  return fullUrl;
};

// Utility functions for slug handling
export const createSlug = (title) => {
  if (!title) return "";

  const turkishChars = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "c",
    Ğ: "g",
    I: "i",
    İ: "i",
    Ö: "o",
    Ş: "s",
    Ü: "u",
  };

  return title
    .replace(/[çğıöşüÇĞIİÖŞÜ]/g, (char) => turkishChars[char] || char)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Özel karakterleri kaldır
    .replace(/\s+/g, "-") // Boşlukları tire ile değiştir
    .replace(/-+/g, "-") // Çoklu tireleri tek tire yap
    .replace(/^-|-$/g, ""); // Başta ve sonda tire varsa kaldır
};

export const findAnnouncementBySlug = async (slug, language = "tr") => {
  if (USE_MOCK_DATA) {
    console.log("📋 Mock data kullanılıyor - slug arama");
    const announcement = MOCK_ANNOUNCEMENTS.results.find(
      (a) => a.slug === slug
    );
    return announcement || null;
  }

  try {
    // Doğrudan slug ile backend'den getir
    return await apiService.request(
      `/announcements/by-slug/${slug}/`,
      {},
      language
    );
  } catch (error) {
    console.error("Error finding announcement by slug:", error);
    return null;
  }
};

export default apiService;
