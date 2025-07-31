"use client";

import { useState, useEffect } from "react";
import { apiService } from "../lib/api";

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
        setError("Duyurular yüklenirken bir hata oluştu.");
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

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Duyurular
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
                hakkında bilgi alın
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 lg:grid-cols-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
              >
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Duyurular
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
                hakkında bilgi alın
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Duyurular</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
              hakkında bilgi alın
            </p>
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-1">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {announcement.title}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Duyuru
                    </span>
                    {announcement.is_active && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                        Aktif
                      </span>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center text-gray-500 mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
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

                {/* Content */}
                <div className="text-gray-700 text-lg leading-relaxed">
                  <div
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: announcement.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {announcements.length === 0 && !loading && !error && (
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
              Henüz duyuru bulunmuyor
            </h3>
            <p className="text-gray-500">
              Yeni duyurular eklendiğinde burada görünecektir.
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Daha Fazla Bilgi İçin
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Duyurularla ilgili sorularınız veya daha detaylı bilgi almak için
            bizimle iletişime geçin
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            İletişime Geç
          </button>
        </div>
      </div>
    </main>
  );
}
