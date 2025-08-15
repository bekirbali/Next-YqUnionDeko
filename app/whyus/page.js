"use client";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import {
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function WhyUsPage() {
  const { t } = useTranslation();
  const mainAdvantages = [
    {
      title: t("whyUs.mainAdvantagesCard_1_title"),
      description: t("whyUs.mainAdvantagesCard_1_text"),
      icon: <FaGlobe />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: t("whyUs.mainAdvantagesCard_2_title"),
      description: t("whyUs.mainAdvantagesCard_2_text"),
      icon: <FaShieldAlt />,
      color: "from-green-500 to-green-600",
    },
    {
      title: t("whyUs.mainAdvantagesCard_3_title"),
      description: t("whyUs.mainAdvantagesCard_3_text"),
      icon: <FaHandshake />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: t("whyUs.mainAdvantagesCard_4_title"),
      description: t("whyUs.mainAdvantagesCard_4_text"),
      icon: <FaClock />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const detailedBenefits = [
    {
      category: t("whyUs.offeredValuesCard_1_CardTitle"),
      items: [
        {
          title: t("whyUs.offeredValuesCard_1_subtitle_1"),
          description: t("whyUs.offeredValuesCard_1_text_1"),
        },
        {
          title: t("whyUs.offeredValuesCard_1_subtitle_2"),
          description: t("whyUs.offeredValuesCard_1_text_2"),
        },
        {
          title: t("whyUs.offeredValuesCard_1_subtitle_3"),
          description: t("whyUs.offeredValuesCard_1_text_3"),
        },
      ],
    },
    // {
    //   category: "Lojistik & Operasyon",
    //   items: [
    //     {
    //       title: "Kapıdan Kapıya Hizmet",
    //       description: "Tam entegre lojistik çözümleri",
    //     },
    //     {
    //       title: "Hızlı Kargo Seçenekleri",
    //       description: "Express ve ekonomik kargo alternatifleri",
    //     },
    //   ],
    // },
    {
      category: t("whyUs.offeredValuesCard_2_CardTitle"),
      items: [
        {
          title: t("whyUs.offeredValuesCard_2_subtitle_1"),
          description: t("whyUs.offeredValuesCard_2_text_1"),
        },
        {
          title: t("whyUs.offeredValuesCard_2_subtitle_2"),
          description: t("whyUs.offeredValuesCard_2_text_2"),
        },
        {
          title: t("whyUs.offeredValuesCard_2_subtitle_3"),
          description: t("whyUs.offeredValuesCard_2_text_3"),
        },
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
                {t("whyUs.heroTitle")}
                <Image
                  src="/assets/yqunionlogo.png"
                  alt="YqUnion Logo"
                  width={250}
                  height={105}
                  className="object-contain w-32 h-16 sm:w-32 sm:h-16 lg:w-[250px] lg:h-[105px]"
                />
                ?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              {t("whyUs.heroSubText")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ {t("whyUs.heroButton")}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">
                  ✓ {t("whyUs.heroButton2")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">
                  ✓ {t("whyUs.heroButton3")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İş Akışı - Adım Adım Süreç */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <span className="flex items-center gap-2 sm:gap-4">
                  <Image
                    src="/assets/yqunionlogo.png"
                    alt="YqUnion Logo"
                    width={210}
                    height={80}
                    className="inline-block invert"
                  />
                  {t("whyUs.importProcess")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("whyUs.importProcessText")}
              </p>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 1. Ürün Tespiti ve Numune */}
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_1_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_1_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_1_text_2")}</li>
                      <li>• {t("whyUs.importProcessCard_1_text_3")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 2. Fiyatlandırma ve Teklif */}
                <AnimatedSection animationType="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_2_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_2_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_2_text_2")}</li>
                      <li>• {t("whyUs.importProcessCard_2_text_3")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 3. Numune Onayı */}
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_3_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_3_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_3_text_2")}</li>
                      <li>• {t("whyUs.importProcessCard_3_text_3")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 4. Üretim Takibi */}
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_4_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_4_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_4_text_2")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 5. Özel Marka */}
                <AnimatedSection animationType="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_5_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_5_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_5_text_2")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 6. Nakliye */}
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      6
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_6_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_6_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_6_text_2")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 7. Gümrük */}
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      7
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_7_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_7_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_7_text_2")}</li>
                      <li>• {t("whyUs.importProcessCard_7_text_3")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 8. Satış Sonrası */}
                <AnimatedSection animationType="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      8
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_8_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_8_text_1")}</li>
                      <li>• {t("whyUs.importProcessCard_8_text_2")}</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 9. Yüz Yüze Görüşme */}
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      9
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {t("whyUs.importProcessCard_9_title")}
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-[16px]">
                      <li>• {t("whyUs.importProcessCard_9_text_1")}</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Alt Metin */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {t("whyUs.importProcessSubTextTitle")}
                  </h3>
                  <p className="text-lg opacity-90">
                    {t("whyUs.importProcessSubTextText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ana Avantajlar */}
      <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("whyUs.mainAdvantagesTitle_Left")}{" "}
                <span className="secondary-text">
                  {t("whyUs.mainAdvantagesTitle_Right")}
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("whyUs.mainAdvantagesText")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainAdvantages.map((advantage, index) => (
                <AnimatedSection
                  key={index}
                  animationType="scaleIn"
                  delay={0.1 * index}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${advantage.color} flex items-center justify-center text-white text-2xl mb-6 mx-auto`}
                    >
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed flex-grow">
                      {advantage.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Detaylı Faydalar */}
      <AnimatedSection animationType="fadeInUp" delay={0.4}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("whyUs.offeredValuesTitle_Left")}{" "}
                <span className="secondary-text">
                  {t("whyUs.offeredValuesTitle_Right")}
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("whyUs.offeredValuesText")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {detailedBenefits.map((benefit, categoryIndex) => (
                <AnimatedSection
                  key={categoryIndex}
                  animationType="fadeInUp"
                  delay={0.1 * categoryIndex}
                >
                  <div className="bg-gray-50 rounded-xl p-8 h-full">
                    <h3 className="text-2xl font-bold primary-text mb-6">
                      {benefit.category}
                    </h3>
                    <div className="space-y-4">
                      {benefit.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animationType="scaleIn" delay={0.5}>
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t("whyUs.SuccessfullTradeBottomCardTitle")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("whyUs.SuccessfullTradeBottomCardText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                {t("whyUs.SuccessfullTradeBottomCardButtonLeft")}
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
              >
                {t("whyUs.SuccessfullTradeBottomCardButtonRight")}
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer - Bu sayfada gösterilmeyecek çünkü layout'ta navbar var */}
    </div>
  );
}
