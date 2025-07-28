"use client";
import { useState } from "react";
import Image from "next/image";

export default function SafeTradeSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: "Misyon",
      content:
        "Müşterilerimize yüksek maliyet/fayda oranıyla güvenilir ürünler ve çözümler sunmak misyonumuz. Teknoloji ve ürün kalitesini her gün artırarak bunu başarıyoruz.",
    },
    vision: {
      title: "Vizyon",
      content:
        "Türkiye-Çin dış ticaretinde lider konuma gelmek ve her iki ülke arasında güvenilir ticaret köprüsü olmak vizyonumuz.",
    },
    values: {
      title: "Değerler",
      content:
        "Güvenilirlik, şeffaflık, müşteri odaklılık ve sürekli gelişim temel değerlerimizdir. Her projede bu ilkelerle hareket ederiz.",
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
                Bizim Deneyimimizle{" "}
                <span className="secondary-text">Ticaretiniz Güvende</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sektördeki farklılıkları benimsiyor, uzman kadromuz, ürün ve
              sistem kalitemiz, hızlı teslimat süreleri ve ekonomik
              çözümlerimizle tam müşteri memnuniyeti sağlıyoruz.
            </p>

            {/* Tab Menüsü */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {Object.entries(tabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
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
              <p className="text-gray-700 leading-relaxed">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>

          {/* Sağ taraf - Görsel */}
          <div className="relative">
            <div className="relative h-96 lg:h-[550px] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/world.png"
                alt="Güvenli Ticaret"
                fill
                className="object-contain"
                quality={90}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
