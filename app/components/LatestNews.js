"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { apiService, getImageUrl } from "../lib/api";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const LatestNews = () => {
  const { i18n } = useTranslation();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestAnnouncements = async () => {
      try {
        setLoading(true);
        const currentLanguage = i18n.language || "tr";
        const data = await apiService.getLatestAnnouncements(currentLanguage);
        // Django REST Framework pagination response'undan results array'ini çıkar
        setAnnouncements(data.results || data);
      } catch (err) {
        console.error("Error fetching latest announcements:", err);
        // Hata durumunda boş array bırak
        setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestAnnouncements();
  }, [i18n.language]);

  const settings = {
    dots: true,
    infinite: announcements.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: announcements.length > 2,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  const formatDate = (dateString) => {
    const currentLanguage = i18n.language || "tr";
    const locale = currentLanguage === "en" ? "en-US" : "tr-TR";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Loading state
  if (loading) {
    return (
      <div className="latest-news-container w-full py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-text mb-4">
              {i18n.language === "en" ? "Latest News" : "Son Haberler"}
            </h2>
            <p className="text-center sm:text-lg max-w-sm md:max-w-2xl mx-auto text-gray-600">
              {i18n.language === "en"
                ? "Stay updated with our latest announcements and developments"
                : "En güncel duyuru ve gelişmelerden haberdar olun"}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg p-4 animate-pulse"
              >
                <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
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

  // Eğer haber yoksa bileşeni gizle
  if (!announcements.length) {
    return null;
  }

  return (
    <div className="latest-news-container w-full py-8 sm:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-text mb-4">
            {i18n.language === "en" ? "Latest News" : "Son Haberler"}
          </h2>
          <p className="text-center sm:text-lg max-w-sm md:max-w-2xl mx-auto text-gray-600">
            {i18n.language === "en"
              ? "Stay updated with our latest announcements and developments"
              : "En güncel duyuru ve gelişmelerden haberdar olun"}
          </p>
        </motion.div>

        <div className="news-slider-wrapper">
          <Slider {...settings}>
            {announcements.map((announcement, index) => (
              <div key={announcement.id} className="px-2 sm:px-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[400px] flex flex-col"
                >
                  {/* Resim */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getImageUrl(announcement.main_image)}
                      alt={announcement.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/assets/placeholder-news.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* İçerik */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg leading-tight line-clamp-2">
                        {announcement.title}
                      </h3>

                      <div className="flex items-center text-gray-500 mb-3">
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
                        className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-1 rich-text-content"
                        dangerouslySetInnerHTML={{
                          __html:
                            announcement.content_preview ||
                            announcement.content ||
                            (i18n.language === "en"
                              ? "Content not available"
                              : "İçerik mevcut değil"),
                        }}
                      />
                    </div>

                    <Link
                      href={`/announcements/${announcement.slug}`}
                      className="inline-block text-center px-3 py-1.5 primary-bg text-white rounded text-sm font-medium hover:primary-light-bg transition-colors duration-200 w-fit"
                    >
                      {i18n.language === "en" ? "Read More" : "Devamını Oku"}
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Tüm Haberleri Görüntüle Butonu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/announcements"
            className="inline-block px-6 py-3 secondary-bg text-white rounded-lg hover:secondary-light-bg transition-colors duration-200 font-medium"
          >
            {i18n.language === "en"
              ? "View All News"
              : "Tüm Haberleri Görüntüle"}
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .rich-text-content p {
          margin: 0;
          line-height: 1.5;
        }
        .rich-text-content strong {
          font-weight: 600;
          color: #374151;
        }
        .rich-text-content em {
          font-style: italic;
        }
        .rich-text-content ul,
        .rich-text-content ol {
          margin: 0;
          padding-left: 1rem;
        }
        .rich-text-content li {
          margin: 0;
        }
        .rich-text-content br {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default LatestNews;
