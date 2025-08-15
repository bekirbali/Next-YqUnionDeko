"use client";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation("common");
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Şirket Hikayesi */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                {t("about.ourStory")}
              </h2>
              <div className="text-justify">
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  {t("about.ourStoryParagraph_1")}
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  {t("about.ourStoryParagraph_2")}
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  {t("about.ourStoryParagraph_3")}
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  {t("about.ourStoryParagraph_4")}
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  {t("about.ourStoryParagraph_5")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Section */}
      <AnimatedSection animationType="fadeInUp" delay={0.25}>
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8">
                {t("about.videoTitle")}
              </h2>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  // poster="/assets/heroImage.jpg"
                >
                  <source src="/assets/yqunionvideo.MP4" type="video/mp4" />
                  {t("about.videoDoesNotSupport")}
                </video>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Misyon Vizyon */}
      <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <section className="py-16 primary-lighter-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 secondary-bg rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold primary-text">
                      {t("about.mission")}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t("about.missionParagraph_1")}
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {t("about.missionParagraph_2")}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 secondary-bg rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold primary-text">
                      {t("about.vision")}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t("about.visionParagraph_1")}
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {t("about.visionParagraph_2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Değerlerimiz */}
      <AnimatedSection animationType="fadeInUp" delay={0.4}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                {t("about.values")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
                {t("about.valuesText")}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Sürekli Gelişim */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary-color">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold primary-text">
                      {t("about.valuesCard_1_title")}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {t("about.valuesCard_1_text")}
                  </p>
                </div>

                {/* Cesaret */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary-color">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold primary-text">
                      {t("about.valuesCard_2_title")}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {t("about.valuesCard_2_text")}
                  </p>
                </div>

                {/* Sorumluluk */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary-color">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold primary-text">
                      {t("about.valuesCard_3_title")}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {t("about.valuesCard_3_text")}
                  </p>
                </div>

                {/* Kapsayıcılık */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary-color">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold primary-text">
                      {t("about.valuesCard_4_title")}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {t("about.valuesCard_4_text")}
                  </p>
                </div>

                {/* Güven */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary-color">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold primary-text">
                      {t("about.valuesCard_5_title")}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {t("about.valuesCard_5_text")}
                  </p>
                </div>

                {/* İş Birliği */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary-color">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold primary-text">
                      {t("about.valuesCard_6_title")}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {t("about.valuesCard_6_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İstatistikler */}
      <AnimatedSection animationType="fadeInUp" delay={0.5}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-12">
                {t("about.statistics")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    500+
                  </div>
                  <p className="text-gray-600">
                    {t("about.statistics_projects")}
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    50+
                  </div>
                  <p className="text-gray-600">
                    {t("about.statistics_customer")}
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    20
                  </div>
                  <p className="text-gray-600">
                    {t("about.statistics_experience")}
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">
                    {t("about.statistics_support")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Hizmet Alanları */}
      <AnimatedSection animationType="fadeInUp" delay={0.5}>
        <section className="py-16 primary-lighter-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-12 text-center">
                {t("about.serviceAreas")}
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold primary-text mb-4">
                    {t("about.serviceAreasCard_1_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.serviceAreasCard_1_text")}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold primary-text mb-4">
                    {t("about.serviceAreasCard_2_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.serviceAreasCard_2_text")}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold primary-text mb-4">
                    {t("about.serviceAreasCard_3_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.serviceAreasCard_3_text")}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold primary-text mb-4">
                    {t("about.serviceAreasCard_4_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.serviceAreasCard_4_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim CTA */}
      <AnimatedSection animationType="fadeInUp" delay={0.6}>
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("about.contactUs")}
              </h2>
              <p className="text-xl mb-8">{t("about.contactUsText")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#dc143c] text-white rounded-lg font-semibold hover:bg-[#ff093e] transition-all duration-300"
                >
                  {t("about.contactUsButtonLeft")}
                </Link>
                <Link
                  href="/whyus"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  {t("about.contactUsButtonRight")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
