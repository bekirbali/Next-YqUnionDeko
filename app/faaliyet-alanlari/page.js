"use client";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import {
  FaCog,
  FaBolt,
  FaWrench,
  FaChargingStation,
  FaPlug,
  FaBuilding,
  FaSolarPanel,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaCubes,
  FaServer,
  FaTachometerAlt,
  FaPowerOff,
} from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function FaaliyetAlanlariPage() {
  const { t } = useTranslation();

  const faaliyetAlanlari = [
    {
      title: t("activityAreas.activityAreasCard_1_title"),
      description: t("activityAreas.activityAreasCard_1_text"),
      icon: <FaPlug />,
      color: "from-red-500 to-red-600",
      cardbg: "from-red-50 to-red-100",
      details: [
        t("activityAreas.activityAreasCard_1_product_1"),
        t("activityAreas.activityAreasCard_1_product_2"),
        t("activityAreas.activityAreasCard_1_product_3"),
        t("activityAreas.activityAreasCard_1_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_2_title"),
      description: t("activityAreas.activityAreasCard_2_text"),
      icon: <FaCog />,
      color: "from-blue-500 to-blue-600",
      cardbg: "from-blue-50 to-blue-100",
      details: [
        t("activityAreas.activityAreasCard_2_product_1"),
        t("activityAreas.activityAreasCard_2_product_2"),
        t("activityAreas.activityAreasCard_2_product_3"),
        t("activityAreas.activityAreasCard_2_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_3_title"),
      description: t("activityAreas.activityAreasCard_3_text"),
      icon: <FaChargingStation />,
      color: "from-purple-500 to-purple-600",
      cardbg: "from-purple-50 to-purple-100",
      details: [
        t("activityAreas.activityAreasCard_3_product_1"),
        t("activityAreas.activityAreasCard_3_product_2"),
        t("activityAreas.activityAreasCard_3_product_3"),
        t("activityAreas.activityAreasCard_3_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_4_title"),
      description: t("activityAreas.activityAreasCard_4_text"),
      icon: <FaSolarPanel />,
      color: "from-amber-500 to-amber-600",
      cardbg: "from-amber-50 to-amber-100",
      details: [
        t("activityAreas.activityAreasCard_4_product_1"),
        t("activityAreas.activityAreasCard_4_product_2"),
        t("activityAreas.activityAreasCard_4_product_3"),
        t("activityAreas.activityAreasCard_4_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_5_title"),
      description: t("activityAreas.activityAreasCard_5_text"),
      icon: <FaBuilding />,
      color: "from-gray-500 to-gray-600",
      cardbg: "from-teal-50 to-teal-100",
      details: [
        t("activityAreas.activityAreasCard_5_product_1"),
        t("activityAreas.activityAreasCard_5_product_2"),
        t("activityAreas.activityAreasCard_5_product_3"),
        t("activityAreas.activityAreasCard_5_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_6_title"),
      description: t("activityAreas.activityAreasCard_6_text"),
      icon: <FaIndustry />,
      color: "from-indigo-500 to-indigo-600",
      cardbg: "from-indigo-50 to-indigo-100",
      details: [
        t("activityAreas.activityAreasCard_6_product_1"),
        t("activityAreas.activityAreasCard_6_product_2"),
        t("activityAreas.activityAreasCard_6_product_3"),
        t("activityAreas.activityAreasCard_6_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_7_title"),
      description: t("activityAreas.activityAreasCard_7_text"),
      icon: <FaCogs />,
      color: "from-cyan-500 to-cyan-600",
      cardbg: "from-cyan-50 to-cyan-100",
      details: [
        t("activityAreas.activityAreasCard_7_product_1"),
        t("activityAreas.activityAreasCard_7_product_2"),
        t("activityAreas.activityAreasCard_7_product_3"),
        t("activityAreas.activityAreasCard_7_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_8_title"),
      description: t("activityAreas.activityAreasCard_8_text"),
      icon: <FaLightbulb />,
      color: "from-yellow-400 to-yellow-500",
      cardbg: "from-yellow-50 to-yellow-100",
      details: [
        t("activityAreas.activityAreasCard_8_product_1"),
        t("activityAreas.activityAreasCard_8_product_2"),
        t("activityAreas.activityAreasCard_8_product_3"),
        t("activityAreas.activityAreasCard_8_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_9_title"),
      description: t("activityAreas.activityAreasCard_9_text"),
      icon: <FaCubes />,
      color: "from-slate-500 to-slate-600",
      cardbg: "from-slate-50 to-slate-100",
      details: [
        t("activityAreas.activityAreasCard_9_product_1"),
        t("activityAreas.activityAreasCard_9_product_2"),
        t("activityAreas.activityAreasCard_9_product_3"),
        t("activityAreas.activityAreasCard_9_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_10_title"),
      description: t("activityAreas.activityAreasCard_10_text"),
      icon: <FaServer />,
      color: "from-emerald-500 to-emerald-600",
      cardbg: "from-emerald-50 to-emerald-100",
      details: [
        t("activityAreas.activityAreasCard_10_product_1"),
        t("activityAreas.activityAreasCard_10_product_2"),
        t("activityAreas.activityAreasCard_10_product_3"),
        t("activityAreas.activityAreasCard_10_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_11_title"),
      description: t("activityAreas.activityAreasCard_11_text"),
      icon: <FaTachometerAlt />,
      color: "from-rose-500 to-rose-600",
      cardbg: "from-rose-50 to-rose-100",
      details: [
        t("activityAreas.activityAreasCard_11_product_1"),
        t("activityAreas.activityAreasCard_11_product_2"),
        t("activityAreas.activityAreasCard_11_product_3"),
        t("activityAreas.activityAreasCard_11_product_4"),
      ],
    },
    {
      title: t("activityAreas.activityAreasCard_12_title"),
      description: t("activityAreas.activityAreasCard_12_text"),
      icon: <FaPowerOff />,
      color: "from-violet-500 to-violet-600",
      cardbg: "from-violet-50 to-violet-100",
      details: [
        t("activityAreas.activityAreasCard_12_product_1"),
        t("activityAreas.activityAreasCard_12_product_2"),
        t("activityAreas.activityAreasCard_12_product_3"),
        t("activityAreas.activityAreasCard_12_product_4"),
      ],
    },
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeInUp">
        <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="flex items-center gap-2 sm:gap-4">
                <Image
                  src="/assets/yqunionlogo.png"
                  alt="YqUnion Logo"
                  width={250}
                  height={105}
                  className="object-contain w-32 h-16 sm:w-32 sm:h-16 lg:w-[250px] lg:h-[105px]"
                />
                {t("activityAreas.heroTitle")}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              {t("activityAreas.heroText")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">
                  ✓ {t("activityAreas.heroSubtext_1")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">
                  ✓ {t("activityAreas.heroSubtext_2")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">
                  ✓ {t("activityAreas.heroSubtext_3")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Faaliyet Alanları Grid */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="secondary-text">
                  {t("activityAreas.activityAreasTitle_1")}{" "}
                </span>
                {t("activityAreas.activityAreasTitle_2")}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("activityAreas.activityAreasText")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faaliyetAlanlari.map((alan, index) => {
                // İlk 3 kartı animasyon olmadan göster
                if (index < 3) {
                  return (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${alan.cardbg} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${alan.color} flex items-center justify-center text-white text-2xl mb-6 mx-auto`}
                      >
                        {alan.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        {alan.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                        {alan.description}
                      </p>

                      {/* Detay Listesi */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-700 mb-3">
                          {t("activityAreas.activityAreasCard_GeneralSubTitle")}
                          :
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                          {alan.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }

                // Kalan kartları animasyonlu göster
                return (
                  <AnimatedSection
                    key={index}
                    animationType="scaleIn"
                    delay={0.1}
                    className="h-full"
                  >
                    <div
                      className={`bg-gradient-to-br ${alan.cardbg} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${alan.color} flex items-center justify-center text-white text-2xl mb-6 mx-auto`}
                      >
                        {alan.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        {alan.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                        {alan.description}
                      </p>

                      {/* Detay Listesi */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-700 mb-3">
                          {t("activityAreas.activityAreasCard_GeneralSubTitle")}
                          :
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                          {alan.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tanıtım Videosu Section */}
      <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="secondary-text">YqUnion</span> ile Nasıl
                Çalışıyoruz?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Türkiye-Çin dış ticaret süreçlerimizi ve kaliteli hizmet
                anlayışımızı videomuzda keşfedin
              </p>
            </div> */}

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                {/* Video Container */}
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/N7ySbuZW5uk"
                    title="DEKO Electrics - The Rising Star of Turkey in LV Industry"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Bilgi - YouTube için overlay yerine alt kısım */}
                <div className="bg-gray-50 p-6 rounded-b-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t("activityAreas.activityAreasVideoTitle")}
                    </h3>
                    <p className="text-gray-600">
                      {t("activityAreas.activityAreasVideoText")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Alt Bilgi */}
              {/* <div className="text-center mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-2">
                      20+
                    </div>
                    <div className="text-gray-600">Yıllık Deneyim</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-2">
                      1000+
                    </div>
                    <div className="text-gray-600">Başarılı Proje</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-2">
                      7/24
                    </div>
                    <div className="text-gray-600">Müşteri Desteği</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim Call to Action */}
      <AnimatedSection animationType="scaleIn" delay={0.3}>
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t("activityAreas.activityAreasSubCardTitle")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("activityAreas.activityAreasSubCardText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                {t("activityAreas.activityAreasSubCardButton_Left")}
              </Link>
              <Link
                href="/whyus"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
              >
                {t("activityAreas.activityAreasSubCardButton_Right")}
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
