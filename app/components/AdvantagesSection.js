"use client";
import { FaTrophy, FaBolt, FaBullseye, FaThumbsUp } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AdvantagesSection() {
  const { t } = useTranslation();
  const advantages = [
    {
      title: t("homePage.whyUsSection_Card_1_Title"),
      description: t("homePage.whyUsSection_Card_1_Text"),
      icon: <FaTrophy />,
    },
    {
      title: t("homePage.whyUsSection_Card_2_Title"),
      description: t("homePage.whyUsSection_Card_2_Text"),
      icon: <FaBolt />,
    },
    {
      title: t("homePage.whyUsSection_Card_3_Title"),
      description: t("homePage.whyUsSection_Card_3_Text"),
      icon: <FaBullseye />,
    },
    {
      title: t("homePage.whyUsSection_Card_4_Title"),
      description: t("homePage.whyUsSection_Card_4_Text"),
      icon: <FaThumbsUp />,
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            {t("homePage.whyUsSection_Title")}{" "}
            <Image
              src="/assets/yqunionlogo.png"
              alt="YqUnion Logo"
              width={170}
              height={40}
              className="inline-block invert"
            />
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("homePage.whyUsSection_Text")}
          </p>
        </div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-primary mb-4 flex justify-center">
                <span className="text-5xl">{advantage.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Alt Vurgu */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t("homePage.whyUsSectionSubCardTitle")}
            </h3>
            <p className="text-lg opacity-90">
              {t("homePage.whyUsSectionSubCardText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
