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

export default function FaaliyetAlanlariPage() {
  const faaliyetAlanlari = [
    {
      title: "Alçak-Orta-Yüksek Gerilim Devre Kesiciler",
      description:
        "Güvenli elektrik dağıtımı için profesyonel devre kesici sistemleri. Endüstriyel ve ticari tesisler için güvenlik odaklı çözümler.",
      icon: <FaPlug />,
      color: "from-red-500 to-red-600",
      cardbg: "from-red-50 to-red-100",
      details: [
        "Alçak Gerilim Devre Kesiciler",
        "Orta Gerilim Sistemleri",
        "Yüksek Gerilim Çözümleri",
        "Koruma ve Kontrol Sistemleri",
      ],
    },
    {
      title: "Makineler",
      description:
        "Endüstriyel makineler, üretim ekipmanları ve otomasyonel sistemler. Yüksek kaliteli Çin üretimi makinelerle üretim verimliliğinizi artırın.",
      icon: <FaCog />,
      color: "from-blue-500 to-blue-600",
      cardbg: "from-blue-50 to-blue-100",
      details: [
        "CNC Makineleri",
        "Paketleme Makineleri",
        "Tekstil Makineleri",
        "Gıda İşleme Makineleri",
      ],
    },
    {
      title: "Elektrikli Araç Şarj Üniteleri",
      description:
        "Elektrikli araçlar için modern şarj çözümleri. Hızlı, güvenli ve verimli şarj istasyonları ile geleceğin mobilite çözümlerini sunuyoruz.",
      icon: <FaChargingStation />,
      color: "from-purple-500 to-purple-600",
      cardbg: "from-purple-50 to-purple-100",
      details: [
        "AC Şarj İstasyonları",
        "DC Hızlı Şarj Ünitleri",
        "Akıllı Şarj Sistemleri",
        "Ev Tipi Şarj Çözümleri",
      ],
    },
    {
      title: "Güneş Enerjisi Sistemleri",
      description:
        "Yenilenebilir enerji çözümleri ile sürdürülebilir gelecek. Yüksek verimli güneş panelleri ve tam entegre sistemler ile enerji maliyetlerinizi düşürün.",
      icon: <FaSolarPanel />,
      color: "from-amber-500 to-amber-600",
      cardbg: "from-amber-50 to-amber-100",
      details: [
        "Güneş Panelleri (Monokristal/Polykristal)",
        "Solar İnverterler",
        "Akü Sistemleri",
        "Montaj ve Kurulum Ekipmanları",
      ],
    },
    {
      title: "Yapısal Malzemeler",
      description:
        "İnşaat ve endüstriyel projeler için dayanıklı yapısal malzemeler. Kaliteli çelik, beton ve kompozit malzemelerle projelerinizi güçlendirin.",
      icon: <FaBuilding />,
      color: "from-gray-500 to-gray-600",
      cardbg: "from-teal-50 to-teal-100",
      details: [
        "Çelik Konstrüksiyon",
        "Prefabrik Sistemler",
        "İzolasyon Malzemeleri",
        "Kompozit Yapı Elemanları",
      ],
    },
    {
      title: "Jeneratörler ve Trafolar",
      description:
        "Güvenilir enerji üretimi ve dağıtımı için profesyonel çözümler. Endüstriyel jeneratörler ve trafo sistemleri ile kesintisiz enerji sağlayın.",
      icon: <FaIndustry />,
      color: "from-indigo-500 to-indigo-600",
      cardbg: "from-indigo-50 to-indigo-100",
      details: [
        "Dizel ve Benzinli Jeneratörler",
        "Güç Trafoları",
        "Dağıtım Trafoları",
        "Jeneratör Yedek Parçaları",
      ],
    },
    {
      title: "Elektrik Motorları",
      description:
        "Endüstriyel uygulamalar için yüksek performanslı elektrik motorları. AC/DC motorlar, servo motorlar ve özel motor çözümleri ile üretim verimliliğinizi artırın.",
      icon: <FaCogs />,
      color: "from-cyan-500 to-cyan-600",
      cardbg: "from-cyan-50 to-cyan-100",
      details: [
        "AC Asenkron Motorlar",
        "DC Motorlar",
        "Servo Motorlar",
        "Motor Kontrol Sistemleri",
      ],
    },
    {
      title: "Aydınlatma Ürünleri",
      description:
        "Modern ve enerji tasarruflu aydınlatma çözümleri. LED teknolojisi ile endüstriyel, ticari ve konut aydınlatma ihtiyaçlarınızı karşılayın.",
      icon: <FaLightbulb />,
      color: "from-yellow-400 to-yellow-500",
      cardbg: "from-yellow-50 to-yellow-100",
      details: [
        "Endüstriyel LED Aydınlatma",
        "Sokak ve Park Aydınlatması",
        "Ticari Aydınlatma Sistemleri",
        "Aydınlatma Kontrol Sistemleri",
      ],
    },
    {
      title: "Demir-Çelik Malzemeleri",
      description:
        "Yapısal ve endüstriyel projeler için kaliteli demir-çelik ürünleri. Çeşitli profiller, saclar ve özel kesim malzemelerle projelerinizi güçlendirin.",
      icon: <FaCubes />,
      color: "from-slate-500 to-slate-600",
      cardbg: "from-slate-50 to-slate-100",
      details: [
        "Çelik Profiller ve Kirişler",
        "Sac ve Levhalar",
        "Çelik Borular",
        "Özel Kesim ve İşleme",
      ],
    },
    {
      title: "Güç Dağıtım Panoları",
      description:
        "Güvenli ve verimli elektrik dağıtımı için profesyonel panel sistemleri. Endüstriyel ve ticari tesisler için özel tasarım güç dağıtım çözümleri.",
      icon: <FaServer />,
      color: "from-emerald-500 to-emerald-600",
      cardbg: "from-emerald-50 to-emerald-100",
      details: [
        "Ana Dağıtım Panoları",
        "Alt Dağıtım Panoları",
        "Güç Faktörü Düzeltici Panolar",
        "Otomasyon Entegrasyonlu Panolar",
      ],
    },
    {
      title: "Elektrik Test Cihazları",
      description:
        "Profesyonel elektrik ölçüm ve test ekipmanları. Güvenlik ve kalite kontrol için gerekli tüm test cihazları ile elektrik sistemlerinizi güvenle test edin.",
      icon: <FaTachometerAlt />,
      color: "from-rose-500 to-rose-600",
      cardbg: "from-rose-50 to-rose-100",
      details: [
        "Multimetreler ve Ampermetreler",
        "Topraklama Test Cihazları",
        "İzolasyon Test Cihazları",
        "Güç Analizörleri",
      ],
    },
    {
      title: "Sanayi Tipi Fişler ve Prizler",
      description:
        "Endüstriyel uygulamalar için güvenli ve dayanıklı elektrik bağlantı elemanları. Yüksek akım kapasiteli fiş-priz sistemleri ile güvenli elektrik bağlantıları kurun.",
      icon: <FaPowerOff />,
      color: "from-violet-500 to-violet-600",
      cardbg: "from-violet-50 to-violet-100",
      details: [
        "Endüstriyel Fiş-Priz Sistemleri",
        "Yüksek Akım Bağlantı Elemanları",
        "Su Geçirmez Fiş-Prizler",
        "Özel Uygulama Bağlantıları",
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
                        Başlıca Ürünler:
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
              ))}
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
                      DEKO Electrics - Türkiye'nin Yükselen Yıldızı
                    </h3>
                    <p className="text-gray-600">
                      Alçak gerilim endüstrisinde 20+ yıllık deneyimimiz ve
                      profesyonel hizmet anlayışımız
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
              Aradığınız Ürünü Bulamadınız mı?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Geniş tedarikçi ağımız ve deneyimli ekibimizle ihtiyacınız olan
              her türlü ürünü Çin'den tedarik edebiliriz. Özel talepleriniz için
              bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Özel Teklif İsteyin
              </Link>
              <Link
                href="/whyus"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
              >
                Neden YqUnion?
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
