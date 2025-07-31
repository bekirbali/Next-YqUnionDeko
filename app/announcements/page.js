"use client";

import { useState, useEffect } from "react";
import { apiService } from "../lib/api";
import Link from "next/link";

// Backend URL configuration
const BACKEND_URL = "http://localhost:8000";

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const data = await apiService.getActiveAnnouncements();
        // Django REST Framework pagination response'undan results array'ini çıkar
        setAnnouncements(data.results || data);
        setError(null);
      } catch (err) {
        setError("Haberler yüklenirken bir hata oluştu.");
        console.error("Error fetching announcements:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("tr-TR", options);
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/assets/placeholder-news.svg";
    if (imagePath.startsWith("http")) return imagePath;
    // Frontend assets'leri olduğu gibi bırak
    if (imagePath.startsWith("/assets/")) return imagePath;
    // Backend media dosyaları için URL ekle
    const fullUrl = `${BACKEND_URL}${imagePath}`;
    return fullUrl;
  };

  // Loading state
  if (loading) {
    return (
      <div className="font-sans min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Haberler
          </h1>
          <div className="text-center mb-10">
            <p className="text-lg text-gray-600">
              YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
              hakkında bilgi alın.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 animate-pulse min-h-[400px]"
              >
                <img
                  src={getImageUrl(null)}
                  alt="Yükleniyor..."
                  className="w-full h-48 object-cover rounded mb-4 animate-pulse"
                />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="font-sans min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Haberler
          </h1>
          <div className="text-center mb-10">
            <p className="text-lg text-gray-600">
              YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
              hakkında bilgi alın.
            </p>
          </div>
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto text-red-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Bir hata oluştu
            </h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Haberler
        </h1>
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600">
            YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
            hakkında bilgi alın.
          </p>
        </div>

        {/* Announcements Grid */}
        {announcements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-lg shadow p-6 flex flex-col justify-between h-full min-h-[420px] hover:shadow-xl transition-shadow duration-300"
              >
                {/* Ana Resim */}
                <img
                  src={getImageUrl(announcement.main_image)}
                  alt={announcement.title}
                  className="w-full h-48 object-cover rounded mb-4"
                  onError={(e) => {
                    e.target.src = "/assets/placeholder-news.svg";
                  }}
                />

                <div className="flex-1">
                  {/* <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {announcement.additional_images_count > 0
                        ? "Haber"
                        : "Duyuru"}
                    </span>
                    {announcement.is_active && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                        Aktif
                      </span>
                    )}
                  </div> */}

                  <h2 className="text-xl font-semibold mb-3 text-gray-800">
                    {announcement.title}
                  </h2>

                  <div className="flex items-center text-gray-500 mb-4">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">
                      {formatDate(announcement.created_at)}
                    </span>
                  </div>

                  <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        announcement.content_preview || "İçerik mevcut değil",
                    }}
                  />

                  {/* Ek resim sayısı göstergesi */}
                  {announcement.additional_images_count > 0 && (
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      +{announcement.additional_images_count} ek resim
                    </div>
                  )}
                </div>

                <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center">
                  Devamını Oku
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Henüz haber bulunmuyor
            </h3>
            <p className="text-gray-500">
              Yeni haberler eklendiğinde burada görünecektir.
            </p>
          </div>
        )}

        {/* Contact CTA - Sayfanın altında */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Daha Fazla Bilgi İçin
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Haberlerle ilgili sorularınız veya daha detaylı bilgi almak için
            bizimle iletişime geçin
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
