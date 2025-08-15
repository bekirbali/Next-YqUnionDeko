"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SafeTradeSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: t("homePage.safeTradeSection_Mission"),
      content: t("homePage.safeTradeSection_MissionText"),
    },
    vision: {
      title: t("homePage.safeTradeSection_Vision"),
      content: t("homePage.safeTradeSection_VisionText"),
    },
    values: {
      title: t("homePage.safeTradeSection_Values"),
      content: t("homePage.safeTradeSection_ValuesText"),
    },
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - İçerik */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {t("homePage.safeTradeSection_Title_1")}{" "}
                <span className="secondary-text">
                  {t("homePage.safeTradeSection_Title_2")}
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t("homePage.safeTradeSection_Text")}
            </p>

            {/* Tab Menüsü */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {Object.entries(tabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-3 px-1 border-b-2 font-medium transition-colors duration-200 ${
                      activeTab === key
                        ? "border-secondary-color secondary-text"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab İçeriği */}
            <div className="pt-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>

          {/* Sağ taraf - Görsel */}
          <div className="relative">
            <div className="relative h-96 lg:h-[550px] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/importexport.jpg"
                alt="Güvenli Ticaret"
                fill
                className="object-contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
