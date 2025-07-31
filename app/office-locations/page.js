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
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary-color">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold primary-text">
                      Türkiye Ofisi
                    </h3>
                  </div>

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
                          Atatürk Mahallesi, Dış Ticaret Sokak No:15
                          <br />
                          Kadıköy, İstanbul 34740
                          <br />
                          Türkiye
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
                      <div>
                        <p className="font-semibold text-gray-800">Telefon:</p>
                        <p className="text-gray-600">+90 555 123 45 67</p>
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-800">E-posta:</p>
                        <p className="text-gray-600">turkiye@yqunion.com</p>
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

                {/* Çin Ofisi */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-color">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 primary-bg rounded-full flex items-center justify-center mr-4">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold primary-text">
                      Çin Ofisi
                    </h3>
                  </div>

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
                          Room 1502, Block A, International Trade Center
                          <br />
                          No. 688 Zhongshan Road, Futian District
                          <br />
                          Shenzhen 518000, China
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
                        <p className="font-semibold text-gray-800">Telefon:</p>
                        <p className="text-gray-600">+86 755 8888 9999</p>
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
                        <p className="font-semibold text-gray-800">E-posta:</p>
                        <p className="text-gray-600">china@yqunion.com</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d28.68252363281246!3d41.005370121435614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1640000000000!5m2!1sen!2str"
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193601.54952313138!2d116.23278367881984!3d39.90419989999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2str!4v1640000000001!5m2!1sen!2str"
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
