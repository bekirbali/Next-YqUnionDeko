import AnimatedSection from "../components/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      {/* <AnimatedSection animationType="fadeInUp" delay={0.1}>
        <section className="relative primary-bg text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Türkiye-Çin dış ticaretinde güvenilir çözüm ortağınız
            </p>
          </div>
        </section>
      </AnimatedSection> */}

      {/* Şirket Hikayesi */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                Şirket Hikayemiz
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-justify">
                <div>
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Firmamız, Çin ile Türkiye arasında dış ticaret faaliyetleri
                    yürütmek amacıyla kurulmuş, güvenilir ve çözüm odaklı bir
                    ithalat–ihracat şirketidir. Hem Türkiye'de hem de Çin'de
                    aktif olarak faaliyet gösteren, eğitimli ve profesyonel
                    ekiplerimiz ile her iki ülkede de ofislerimiz bulunmaktadır.
                  </p>
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Ayrıca Türkiye'de yatırımlara sahip güçlü bir ortaklık
                    yapımız vardır. Bu ortaklıkların başında Deko Otomasyon
                    Elektrik ve Elektronik Sanayi ve Ticaret A.Ş. gelmektedir.
                    Deko Elk.te Alçak gerilim devre kesilerin üretimi yapılmakta
                    ve Türkiye ve dünyaya pazarlanmaktadır.
                  </p>
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Amacımız; Çin'den yüksek kaliteye sahip ürünleri rekabetçi
                    fiyatlarla temin ederek Türk pazarına değer katmak, aynı
                    zamanda yerli üretimlerimizi dünya pazarına taşıyarak
                    ihracatta sürdürülebilir büyüme sağlamaktır.
                  </p>
                </div>
                <div>
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Gelişen küresel ticaret dinamiklerine hızla uyum sağlayan
                    yapımız sayesinde; tedarik, kalite kontrol, lojistik ve
                    gümrük işlemleri dahil olmak üzere tüm süreçlerde iş
                    ortaklarımıza uçtan uca profesyonel hizmet sunuyoruz.
                    Çin'deki güçlü üretici ağımız ve yerel iş birliklerimiz ile
                    güvenli, hızlı ve verimli tedarik zinciri çözümleri
                    oluşturuyoruz.
                  </p>
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Müşteri memnuniyetini temel prensip olarak benimseyerek,
                    şeffaflık, dürüstlük ve süreklilik ilkeleri doğrultusunda
                    hareket ediyoruz. Hedefimiz; iş ortaklarımızla uzun vadeli
                    ve güvene dayalı ilişkiler kurmak, Çin ile yapılan ticarette
                    karşılaşılan riskleri minimize ederek onlara rekabet
                    avantajı sağlamaktır.
                  </p>
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Çin'den ithalat veya ihracat yapmak isteyen tüm firmalara,
                    doğru yönlendirme ve sorunsuz operasyon süreçleriyle
                    güvenilir çözüm ortağı olmayı taahhüt ediyoruz.
                  </p>
                </div>
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
                Tanıtım Videomuz
              </h2>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  // poster="/assets/heroImage.jpg"
                >
                  <source src="/assets/yqunionvideo.MP4" type="video/mp4" />
                  Tarayıcınız video elementini desteklemiyor.
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
                      Misyonumuz
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Çin'den ithalat yapmak isteyen girişimciler ve firmalara,
                    ürün araştırmasından kalite kontrolüne, fiyat pazarlığından
                    lojistiğe kadar her aşamada profesyonel destek sunmak.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Güvenilir üreticilere doğrudan erişim sağlayarak, iş
                    ortaklarımızın hem yurtiçinde hem de yurtdışında rekabet
                    gücünü artırmalarına katkı sağlıyoruz.
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
                      Vizyonumuz
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Türkiye'deki ithalatçıların Çin'den ürün tedarik ederken
                    zaman kaybetmeden, güvenle ve en uygun şartlarla işlem
                    yapabildiği bir sistemin parçası olmak.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Çin pazarındaki bilgi birikimimiz ve geniş üretici ağımızla,
                    ithalatı herkes için kolay ve sürdürülebilir hale getirmeyi
                    hedefliyoruz.
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
                Değerlerimiz
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
                Güvenilirlik, şeffaflık, müşteri odaklılık ve sürekli gelişim
                temel değerlerimizdir. Bu değerler, her projede yol göstericimiz
                olur ve iş ortaklarımızla kurduğumuz güçlü ilişkilerin temelini
                oluşturur. Sektördeki tüm faaliyetlerimizde bu ilkelerle hareket
                ederek, kaliteli ve güvenilir hizmet sunmayı hedefliyoruz.
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
                      Sürekli Gelişim
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Değişen pazar koşullarına uyum sağlayarak, sürekli öğrenme
                    ve gelişme anlayışıyla hizmet kalitemizi artırıyoruz.
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
                    <h3 className="text-lg font-bold primary-text">Cesaret</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Yeni fırsatları değerlendirme konusunda cesur davranarak,
                    müşterilerimiz için en iyi çözümleri buluyoruz.
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
                      Sorumluluk
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Verdiğimiz taahhütleri yerine getirmekte kararlıyız ve tüm
                    süreçlerde tam sorumluluk alıyoruz.
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
                      Kapsayıcılık
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Farklı görüşlere saygı göstererek, çeşitliliği destekleyen
                    ve herkesi kucaklayan bir yaklaşım sergiliyoruz.
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
                    <h3 className="text-lg font-bold primary-text">Güven</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Şeffaflık ve dürüstlük ilkesiyle hareket ederek,
                    müşterilerimizle uzun vadeli güven ilişkileri kuruyoruz.
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
                      İş Birliği
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ortak hedefler doğrultusunda iş ortaklarımızla güçlü
                    işbirlikleri kurarak başarıyı birlikte yakalıyoruz.
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
                Rakamlarla YqUnion
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    500+
                  </div>
                  <p className="text-gray-600">Başarılı Proje</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    50+
                  </div>
                  <p className="text-gray-600">Mutlu Müşteri</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    20
                  </div>
                  <p className="text-gray-600">Yıl Deneyim</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold secondary-text mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">Müşteri Desteği</p>
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
                Hizmet Alanlarımız
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
                    İthalat ve Gümrük Hizmetleri
                  </h3>
                  <p className="text-gray-600">
                    Çin'den Türkiye'ye güvenli ve hızlı ithalat çözümleri
                    sunuyoruz.
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
                    Kalite Kontrol
                  </h3>
                  <p className="text-gray-600">
                    Ürünlerinizin kalitesini garanti altına alan profesyonel
                    kontrol süreçleri.
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
                    Danışmanlık
                  </h3>
                  <p className="text-gray-600">
                    Dış ticaret süreçlerinde uzman danışmanlık ve rehberlik
                    hizmetleri.
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
                    Ürün Tedariği
                  </h3>
                  <p className="text-gray-600">
                    İhtiyacınıza uygun ürünleri güvenilir tedarikçilerden temin
                    ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim CTA */}
      <AnimatedSection animationType="fadeInUp" delay={0.6}>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-6">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Dış ticaret ihtiyaçlarınız için profesyonel çözümler sunmaya
                hazırız
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 secondary-bg text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  İletişim Bilgileri
                </a>
                <a
                  href="/whyus"
                  className="px-8 py-4 border-2 border-primary-color primary-text rounded-lg font-semibold hover:primary-bg hover:text-white transition-all"
                >
                  Neden Bizimle Çalışmalısınız?
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
