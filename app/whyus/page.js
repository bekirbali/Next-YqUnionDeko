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

export default function WhyUsPage() {
  const mainAdvantages = [
    {
      title: "Uluslararası Deneyim",
      description:
        "20+ yıllık Türkiye-Çin dış ticaret deneyimi ile güvenilir ortaklık. Kültürel köprü kurarak işlerinizi kolaylaştırıyoruz.",
      icon: <FaGlobe />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Güvenilir Süreçler",
      description:
        "ISO sertifikalı kalite yönetimi ve şeffaf iş süreçleri. Her adımda güvenli ve kontrollü ticaret deneyimi.",
      icon: <FaShieldAlt />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Uzman Danışmanlık",
      description:
        "Alanında uzman kadro ile 7/24 destek. Dış ticaretin tüm aşamalarında profesyonel rehberlik.",
      icon: <FaHandshake />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Hızlı Çözümler",
      description:
        "Modern teknoloji ve etkili süreç yönetimi ile hızlı sonuç. Zamanınızı en verimli şekilde kullanın.",
      icon: <FaClock />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const detailedBenefits = [
    {
      category: "İş Ortaklığı",
      items: [
        {
          title: "Güvenilir Tedarikçi Ağı",
          description:
            "Çin'de doğrulanmış ve güvenilir tedarikçilerle çalışıyoruz",
        },
        {
          title: "Kalite Kontrol",
          description: "Ürün kalitesi ve standartlarını garanti ediyoruz",
        },
        {
          title: "Rekabetçi Fiyatlar",
          description: "En uygun fiyatlarla kaliteli ürünlere ulaşım",
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
      category: "Destek & Hizmet",
      items: [
        {
          title: "After-Sales Destek",
          description: "Satış sonrası sürekli destek ve takip",
        },
        {
          title: "Gümrük İşlemleri",
          description: "Tüm gümrük formaliteleri bizden",
        },
        {
          title: "Yerel Ofisler",
          description: "Çin ve Türkiyede yerel ofisler",
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
                Neden
                <Image
                  src="/assets/yqunionlogo.png"
                  alt="YqUnion Logo"
                  width={250}
                  height={105}
                  className="object-contain  w-32 h-16 sm:w-32 sm:h-16 lg:w-[250px] lg:h-[105px]"
                />
                ?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Türkiye-Çin dış ticaretinde 20+ yıllık deneyimimiz ve binlerce
              başarılı projeyle sizin de güvenilir çözüm ortağınızız
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ ISO 9001 Sertifikalı</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ 7/24 Destek</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ Güvenli Ticaret</span>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="secondary-text">YqUnion</span> ile İthalat
                Süreciniz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Adım adım yol haritası
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 1. Ürün Tespiti ve Numune */}
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Ürün Tespiti ve Numune
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Ürün numunesini veya teknik verilerini alıyoruz</li>
                      <li>
                        • Çin ofisimizle bağlantıya geçip birebir aynısını
                        buluyoruz
                      </li>
                      <li>
                        • İlk numunenin görselini hazırlatıp onayınıza sunuyoruz
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 2. Fiyatlandırma ve Teklif */}
                <AnimatedSection animationType="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Fiyatlandırma ve Teklif
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Ürün fiyatı, vergiler ve maliyetler netleştiriliyor
                      </li>
                      <li>• İthalat işlemlerini siz yürütün</li>
                      <li>• Ya da tüm ithalatı biz gerçekleştirelim</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 3. Numune Onayı */}
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Numune Onayı ve Revizyon
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Numuneyi inceliyor, onaylıyor veya revize talep
                        ediyorsunuz
                      </li>
                      <li>
                        • Özel istekleriniz doğrultusunda revize hazırlanıyor
                      </li>
                      <li>• Onayınızla üretim süreci başlıyor</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 4. Üretim Takibi */}
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Üretim Süreci Takibi
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Çin'deki ekibimiz üretimin her aşamasını denetler
                      </li>
                      <li>• Fotoğraf ve videolarla sizi bilgilendiririz</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 5. Özel Marka */}
                <AnimatedSection animationType="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Özel Marka ve Ambalaj
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Hacimli siparişlerde kendi markanız kullanılabilir
                      </li>
                      <li>• Etiket, kutu tasarımları hazırlanır</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 6. Nakliye */}
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      6
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Yükleme ve Nakliye
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Güvenilir uluslararası nakliye firmalarıyla yüklenir
                      </li>
                      <li>• Yükleme aşamaları fotoğraf/video ile iletilir</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 7. Gümrük */}
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      7
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Türkiye Gümrük İşlemleri
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Tüm gümrük işlemlerini biz tamamlar, deponuza teslim
                        ederiz
                      </li>
                      <li>• İsterseniz işlemleri siz yürütürsünüz</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 8. Satış Sonrası */}
                <AnimatedSection animationType="fadeInUp" delay={0.2}>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      8
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Satış Sonrası Destek
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>
                        • Her türlü sorun ve şikayetinizde tek muhatabınız biz
                        oluruz
                      </li>
                      <li>• Değişim ve iade işlemlerini biz çözeriz</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* 9. Yüz Yüze Görüşme */}
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      9
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Yüz Yüze Görüşme
                    </h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Tüm ayrıntıları netleştirmek isterseniz</li>
                      <li>• Türkiye veya Çin ofislerimizde ağırlayabiliriz</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Alt Metin */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    YQUnion – Çin'den Türkiye'ye İthalat Projelerinizde
                    Güvenilir Çözüm Ortağınız
                  </h3>
                  <p className="text-lg opacity-90">
                    9 adımda profesyonel süreç yönetimi ile işinizi güvence
                    altına alıyoruz
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
                Temel <span className="secondary-text">Avantajlarımız</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dış ticaret süreçlerinizde size değer katacak temel
                özelliklerimiz
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
                Size Sunduğumuz <span className="secondary-text">Değerler</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Her aşamada yanınızda olarak işlerinizi kolaylaştırıyoruz
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
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
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
              Başarılı Dış Ticaret Deneyimi İçin
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Profesyonel ekibimiz ve kanıtlanmış deneyimimizle dış ticaret
              hedeflerinize güvenle ulaşın. Hemen bizimle iletişime geçin ve
              farkı yaşayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Hemen İletişime Geçin
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
              >
                Hakkımızda
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer - Bu sayfada gösterilmeyecek çünkü layout'ta navbar var */}
    </div>
  );
}
