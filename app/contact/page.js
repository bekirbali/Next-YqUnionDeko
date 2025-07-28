"use client";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic burada implement edilecek
    console.log("Form submitted:", formData);
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeInUp" delay={0.1}>
        <section className="relative primary-bg text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">İletişim</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Türkiye ve Çin ofislerimizden bizimle iletişime geçin
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905551234567"
                className="px-6 py-3 secondary-bg text-white rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Hemen Ara
              </a>
              <a
                href="mailto:info@yqunion.com"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-color transition-all inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                E-posta Gönder
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ofis Bilgileri */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-12 text-center">
                Ofis Lokasyonlarımız
              </h2>
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
                          Pazartesi - Cuma: 09:00 - 18:00
                          <br />
                          Cumartesi: 09:00 - 14:00
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
                          Pazartesi - Cuma: 09:00 - 18:00
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
        </section>
      </AnimatedSection>

      {/* İletişim Formu */}
      <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <section className="py-16 primary-lighter-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                Bize Mesaj Gönderin
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Dış ticaret ihtiyaçlarınız hakkında bilgi almak için formu
                doldurun
              </p>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                        placeholder="+90 555 123 45 67"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Şirket
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                        placeholder="Şirket adınız"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Konu seçin</option>
                      <option value="ithalat">İthalat Hizmetleri</option>
                      <option value="ihracat">İhracat Hizmetleri</option>
                      <option value="kalite-kontrol">Kalite Kontrol</option>
                      <option value="danışmanlık">
                        Dış Ticaret Danışmanlığı
                      </option>
                      <option value="lojistik">Lojistik Çözümleri</option>
                      <option value="diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-4 secondary-bg text-white rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                      Mesaj Gönder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Hızlı İletişim */}
      <AnimatedSection animationType="fadeInUp" delay={0.4}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-12 text-center">
                Hızlı İletişim
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <a
                  href="tel:+905551234567"
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border-l-4 border-secondary-color group"
                >
                  <div className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-bold primary-text mb-2">Telefon</h3>
                  <p className="text-sm text-gray-600">Anında bağlantı</p>
                </a>

                <a
                  href="mailto:info@yqunion.com"
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border-l-4 border-primary-color group"
                >
                  <div className="w-16 h-16 primary-bg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-bold primary-text mb-2">E-posta</h3>
                  <p className="text-sm text-gray-600">24 saat içinde yanıt</p>
                </a>

                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border-l-4 border-green-500 group"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306" />
                    </svg>
                  </div>
                  <h3 className="font-bold primary-text mb-2">WhatsApp</h3>
                  <p className="text-sm text-gray-600">Hızlı mesajlaşma</p>
                </a>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-yellow-500">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-bold primary-text mb-2">
                    Çalışma Saatleri
                  </h3>
                  <p className="text-sm text-gray-600">Pzt-Cum: 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
