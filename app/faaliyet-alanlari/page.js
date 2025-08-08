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
} from "react-icons/fa";

export default function FaaliyetAlanlariPage() {
  const faaliyetAlanlari = [
    {
      title: "Makineler",
      description:
        "Endüstriyel makineler, üretim ekipmanları ve otomasyonel sistemler. Yüksek kaliteli Çin üretimi makinelerle üretim verimliliğinizi artırın.",
      icon: <FaCog />,
      color: "from-blue-500 to-blue-600",
      details: [
        "CNC Makineleri",
        "Paketleme Makineleri",
        "Tekstil Makineleri",
        "Gıda İşleme Makineleri",
      ],
    },
    {
      title: "Elektrik - Elektronik Ürünler",
      description:
        "Modern elektrik ve elektronik sistemleri, kontrol panelleri ve otomasyon çözümleri. Teknolojinin son hali ile işlerinizi modernleştirin.",
      icon: <FaBolt />,
      color: "from-yellow-500 to-yellow-600",
      details: [
        "Kontrol Panelleri",
        "PLC Sistemleri",
        "Elektronik Kartlar",
        "Sensör Teknolojileri",
      ],
    },
    {
      title: "Yedek Parçalar",
      description:
        "Makine ve ekipmanlarınız için orijinal ve kaliteli yedek parçalar. Kesintisiz üretim için güvenilir yedek parça tedariki.",
      icon: <FaWrench />,
      color: "from-green-500 to-green-600",
      details: [
        "Makine Yedek Parçaları",
        "Elektronik Bileşenler",
        "Motor ve Dişli Sistemleri",
        "Filtre ve Consumables",
      ],
    },
    {
      title: "Araç Şarj İstasyonları",
      description:
        "Elektrikli araçlar için modern şarj çözümleri. Hızlı, güvenli ve verimli şarj istasyonları ile geleceğin mobilite çözümlerini sunuyoruz.",
      icon: <FaChargingStation />,
      color: "from-purple-500 to-purple-600",
      details: [
        "AC Şarj İstasyonları",
        "DC Hızlı Şarj Ünitleri",
        "Akıllı Şarj Sistemleri",
        "Ev Tipi Şarj Çözümleri",
      ],
    },
    {
      title: "Alçak-Orta-Yüksek Gerilim Devre Kesiciler",
      description:
        "Güvenli elektrik dağıtımı için profesyonel devre kesici sistemleri. Endüstriyel ve ticari tesisler için güvenlik odaklı çözümler.",
      icon: <FaPlug />,
      color: "from-red-500 to-red-600",
      details: [
        "Alçak Gerilim Devre Kesiciler",
        "Orta Gerilim Sistemleri",
        "Yüksek Gerilim Çözümleri",
        "Koruma ve Kontrol Sistemleri",
      ],
    },
    {
      title: "Yapısal Malzemeler",
      description:
        "İnşaat ve endüstriyel projeler için dayanıklı yapısal malzemeler. Kaliteli çelik, beton ve kompozit malzemelerle projelerinizi güçlendirin.",
      icon: <FaBuilding />,
      color: "from-gray-500 to-gray-600",
      details: [
        "Çelik Konstrüksiyon",
        "Prefabrik Sistemler",
        "İzolasyon Malzemeleri",
        "Kompozit Yapı Elemanları",
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
                Faaliyet Alanlarımız
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Çin'den Türkiye'ye geniş ürün yelpazesi ile sizlere hizmet
              veriyoruz. Endüstriyel çözümlerden modern teknolojilere kadar her
              alanda güvenilir ortağınızız.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ Geniş Ürün Yelpazesi</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ Kaliteli Tedarik</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="font-semibold">✓ Uzman Danışmanlık</span>
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
                <span className="secondary-text">Hizmet Verdiğimiz</span>{" "}
                Alanlar
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Endüstriyel ihtiyaçlarınızdan modern teknoloji çözümlerine kadar
                geniş bir yelpazede kaliteli ürünler sunuyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faaliyetAlanlari.map((alan, index) => (
                <AnimatedSection
                  key={index}
                  animationType="scaleIn"
                  delay={0.1 * index}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
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
                        Başlıca Ürünler:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
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
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim Call to Action */}
      <AnimatedSection animationType="scaleIn" delay={0.5}>
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Aradığınız Ürünü Bulamadınız mı?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Geniş tedarikçi ağımız ve deneyimli ekibimizle ihtiyacınız olan
              her türlü ürünü Çin'den tedarik edebiliriz. Özel talepleriniz için
              bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Özel Teklif İsteyin
              </a>
              <a
                href="/whyus"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
              >
                Neden YqUnion?
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
