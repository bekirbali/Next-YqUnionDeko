"use client";
import AnimatedSection from "../components/AnimatedSection";

export default function OfficeLocationsPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeInUp" delay={0.1}>
        <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ofis Lokasyonlarımız
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Türkiye ve Çin'deki ofislerimiz ile size daha yakınız
            </p>
            {/* Hızlı İletişim Kartları */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <a
                href="tel:+905324734897"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all border border-white/20 group"
              >
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">Telefon</h3>
                <p className="text-xs text-white/80">Anında bağlantı</p>
              </a>

              <a
                href="mailto:info@yqunion.com"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all border border-white/20 group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">E-posta</h3>
                <p className="text-xs text-white/80">24 saat içinde yanıt</p>
              </a>

              <a
                href="https://wa.me/905324734897"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all border border-white/20 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">WhatsApp</h3>
                <p className="text-xs text-white/80">Hızlı mesajlaşma</p>
              </a>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">
                  Çalışma Saatleri
                </h3>
                <p className="text-xs text-white/80">Pzt-Cum: 09:00-17:00</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ofis Bilgileri */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Türkiye Ofisi */}
                <div className="bg-white rounded-lg shadow-lg border-l-4 border-secondary-color overflow-hidden">
                  {/* Fotoğraf Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/assets/trofis.png"
                      alt="Türkiye Ofisi - YQ Union"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img
                          src="/assets/turkbayrak.png"
                          alt="Türkiye Bayrağı"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        Türkiye Ofisi
                      </h3>
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 secondary-text mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">Adres:</p>
                          <p className="text-gray-600">
                            Finanskent Mah. Finans Cad. Sarphan Finans Park
                            Sitesi
                            <br />
                            B / Blok No:5/B İç Kapı No:353
                            <br />
                            Ümraniye / İstanbul
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 secondary-text mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <div className="flex-grow">
                          <p className="font-semibold text-gray-800">
                            Telefon:
                          </p>
                          <p className="text-gray-600">+90 532 473 48 97</p>
                          <p className="text-gray-600">+90 216 771 49 11</p>
                        </div>
                        <img
                          src="/assets/barkod.jpg"
                          alt="Türkiye Ofisi Telefon Numarası Karekod"
                          className="w-10 h-10 rounded-md object-cover ml-4"
                        />
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 secondary-text mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">
                            E-posta:
                          </p>
                          <p className="text-gray-600">
                            suat.kucuk@yqunion.com.tr
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 secondary-text mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Çalışma Saatleri:
                          </p>
                          <p className="text-gray-600">
                            Pazartesi - Cuma: 09:00 - 17:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Çin Ofisi */}
                <div className="bg-white rounded-lg shadow-lg border-l-4 border-primary-color overflow-hidden">
                  {/* Fotoğraf Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/assets/cinofis.png"
                      alt="Çin Ofisi - YQ Union"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img
                          src="/assets/cinbayrak.png"
                          alt="Çin Bayrağı"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        Çin Ofisi
                      </h3>
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 primary-text mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">Adres:</p>
                          <p className="text-gray-600">
                            No.241-245 Longxianger RD North Baixiang
                            <br />
                            Yueqing, Zhejiang, China
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 primary-text mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Telefon:
                          </p>
                          <p className="text-gray-600">
                            +86 577 627 16066 / 62867666
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 primary-text mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">
                            E-posta:
                          </p>
                          <p className="text-gray-600">union@unionele.com</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 primary-text mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Çalışma Saatleri:
                          </p>
                          <p className="text-gray-600">
                            Pazartesi - Cuma: 09:00 - 17:00
                            <br />
                            (Beijing Saati GMT+8)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Harita Bölümü */}
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                Harita Üzerinde Konumumuz
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold primary-text mb-4">
                    Türkiye Ofisi
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.7341347570353!2d29.105906689957838!3d41.00476218441647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac89078137489%3A0x4c3dc10e47e92814!2sSarphan%20Finanspark!5e0!3m2!1sen!2str!4v1754747992038!5m2!1sen!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="İstanbul Türkiye Ofisi Harita"
                    ></iframe>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold primary-text mb-4">
                    Çin Ofisi
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27830.155812848036!2d120.08499860560364!3d29.318437000574825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344953f0a25e0877%3A0x10237b6dfb7f6d47!2sChe%20Zhan%20Lu%2C%20Zhe%20Jiang%20Sheng%2C%20China!5e0!3m2!1sen!2sus!4v1754747780625!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pekin Çin Ofisi Harita"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
