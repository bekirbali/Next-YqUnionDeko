"use client";
import AnimatedSection from "../components/AnimatedSection";
import {
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaClock,
  FaUsers,
  FaChartLine,
  FaAward,
  FaHeadset,
  FaTruck,
  FaLanguage,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhyUsPage() {
  const mainAdvantages = [
    {
      title: "Uluslararası Deneyim",
      description:
        "15+ yıllık Türkiye-Çin dış ticaret deneyimi ile güvenilir ortaklık. Kültürel köprü kurarak işlerinizi kolaylaştırıyoruz.",
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
    {
      category: "Lojistik & Operasyon",
      items: [
        {
          title: "Kapıdan Kapıya Hizmet",
          description: "Tam entegre lojistik çözümleri",
        },
        {
          title: "Hızlı Kargo Seçenekleri",
          description: "Express ve ekonomik kargo alternatifleri",
        },
        {
          title: "Gümrük İşlemleri",
          description: "Tüm gümrük formaliteleri bizden",
        },
      ],
    },
    {
      category: "Destek & Hizmet",
      items: [
        {
          title: "Dil Desteği",
          description: "Türkçe, İngilizce ve Çince profesyonel iletişim",
        },
        {
          title: "Müşteri Temsilcisi",
          description: "Özel müşteri temsilciniz her zaman yanınızda",
        },
        {
          title: "After-Sales Destek",
          description: "Satış sonrası sürekli destek ve takip",
        },
      ],
    },
  ];

  const statistics = [
    { number: "1500+", label: "Başarılı Proje", icon: <FaAward /> },
    { number: "500+", label: "Mutlu Müşteri", icon: <FaUsers /> },
    { number: "15+", label: "Yıl Deneyim", icon: <FaChartLine /> },
    { number: "7/24", label: "Destek Hizmeti", icon: <FaHeadset /> },
  ];

  const whyChooseUs = [
    "15+ yıllık sektör deneyimi",
    "Çin ve Türkiye'de yerel ofisler",
    "ISO 9001 kalite sertifikası",
    "24/7 müşteri destek hizmeti",
    "Şeffaf fiyatlandırma politikası",
    "Hızlı ve güvenli ödeme sistemleri",
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeInUp">
        <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Neden <span className="text-yellow-300">YqUnion</span>?
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

      {/* Ana Avantajlar */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
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

      {/* İstatistikler */}
      {/* <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <section className="py-16 primary-bg text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center"
                >
                  <div className="text-4xl mb-3 text-yellow-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection> */}

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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {detailedBenefits.map((benefit, categoryIndex) => (
                <AnimatedSection
                  key={categoryIndex}
                  animationType="fadeInUp"
                  delay={0.1 * categoryIndex}
                >
                  <div className="bg-gray-50 rounded-xl p-8">
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

      {/* Neden Bizi Seçmelisiniz */}
      <AnimatedSection animationType="fadeInUp" delay={0.5}>
        <section className="py-20 secondary-lighter-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Neden <span className="secondary-text">YqUnion</span>{" "}
                  Seçmelisiniz?
                </h2>
                <p className="text-lg text-gray-600">
                  Sektördeki konumumuzu sağlamlaştıran özelliklerimiz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <AnimatedSection
                    key={index}
                    animationType="fadeInLeft"
                    delay={0.1 * index}
                  >
                    <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm">
                      <div className="w-8 h-8 secondary-bg rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-gray-800 font-medium">
                        {reason}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animationType="scaleIn" delay={0.6}>
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
