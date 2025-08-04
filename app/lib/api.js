// 🔧 Geliştirme ayarı: true = mock data, false = localhost backend
const USE_MOCK_DATA = true;

const API_BASE_URL = "http://localhost:8000/api";

// Mock data for development
const MOCK_ANNOUNCEMENTS = {
  results: [
    {
      id: 1,
      title: "YQ Union Hizmetlerimiz Hakkında",
      content:
        "<p>YQ Union olarak ithalat ve ihracat alanında uzman ekibimizle size en kaliteli hizmeti sunmaya devam ediyoruz. Dünya genelindeki iş ortaklarımızla birlikte güvenli ticaret yapmanız için çalışıyoruz.</p>",
      content_preview:
        "YQ Union olarak ithalat ve ihracat alanında uzman ekibimizle size en kaliteli hizmeti sunmaya devam ediyoruz...",
      main_image: "/assets/heroImage.jpg",
      additional_images: [
        {
          id: 1,
          image: "/assets/world.png",
          caption: "Dünya ticareti",
          order: 1,
        },
      ],
      additional_images_count: 1,
      created_at: "2024-01-15T10:30:00Z",
      is_active: true,
    },
    {
      id: 2,
      title: "Güvenli Ticaret Hizmetlerimiz",
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
      title: "2024 Yılı Hedeflerimiz",
      content:
        "<p>2024 yılında daha fazla ülkeye hizmet vermeyi ve müşteri memnuniyetini en üst seviyeye çıkarmayı hedefliyoruz. Yeni iş ortaklıkları ve teknolojik yeniliklerle size daha iyi hizmet vermeye devam edeceğiz.</p>",
      content_preview:
        "2024 yılında daha fazla ülkeye hizmet vermeyi ve müşteri memnuniyetini en üst seviyeye çıkarmayı hedefliyoruz...",
      main_image: null, // Resim olmayan test için
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
