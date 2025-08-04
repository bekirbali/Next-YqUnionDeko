"use client";

import { useState, useEffect } from "react";
import { findAnnouncementBySlug } from "../../lib/api";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useParams } from "next/navigation";

// Backend URL configuration
const BACKEND_URL = "http://localhost:8000";

export default function AnnouncementDetailPage() {
  const { i18n } = useTranslation();
  const params = useParams();
  const slug = params.slug;

  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const currentLanguage = i18n.language || "tr";
        const data = await findAnnouncementBySlug(slug, currentLanguage);

        if (data) {
          setAnnouncement(data);
          setError(null);
        } else {
          setError(
            i18n.language === "en"
              ? "Announcement not found."
              : "Duyuru bulunamadı."
          );
        }
      } catch (err) {
        setError(
          i18n.language === "en"
            ? "Error loading announcement."
            : "Duyuru yüklenirken bir hata oluştu."
        );
        console.error("Error fetching announcement:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, [slug, i18n.language]); // i18n.language değiştiğinde yeniden fetch et

  const formatDate = (dateString) => {
    const currentLanguage = i18n.language || "tr";
    const locale = currentLanguage === "en" ? "en-US" : "tr-TR";
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(locale, options);
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
          {/* Breadcrumb placeholder */}
          <div className="mb-6">
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>

          {/* Content placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-8 animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded mb-8 animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            </div>
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
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href="/announcements"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Haberler
            </Link>
          </nav>

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
              Duyuru bulunamadı
            </h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <Link
              href="/announcements"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Haberler Sayfasına Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!announcement) {
    return null;
  }

  return (
    <div className="font-sans min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link
            href="/announcements"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Haberler
          </Link>
        </nav>

        {/* Content */}
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {announcement.title}
            </h1>

            <div className="flex items-center text-gray-500 mb-6">
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
              <span>{formatDate(announcement.created_at)}</span>
            </div>
          </header>

          {/* Main Image */}
          {announcement.main_image && (
            <div className="mb-8">
              <img
                src={getImageUrl(announcement.main_image)}
                alt={announcement.title}
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = "/assets/placeholder-news.svg";
                }}
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />

          {/* Additional Images */}
          {announcement.additional_images &&
            announcement.additional_images.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Ek Görseller
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {announcement.additional_images.map((image) => (
                    <div key={image.id} className="relative">
                      <img
                        src={getImageUrl(image.image)}
                        alt={image.caption || announcement.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        onError={(e) => {
                          e.target.src = "/assets/placeholder-news.svg";
                        }}
                      />
                      {image.caption && (
                        <p className="text-sm text-gray-600 mt-2 text-center">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Back to list */}
          <div className="pt-8 border-t border-gray-200">
            <Link
              href="/announcements"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Tüm Haberler
            </Link>
          </div>
        </article>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Daha Fazla Bilgi İçin
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Bu haber ile ilgili sorularınız veya daha detaylı bilgi almak için
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
