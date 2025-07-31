"use client";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { toast } from "react-toastify";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Telefon alanı için regex kontrolü
    if (name === "phone") {
      // Sadece rakam, boşluk, +, -, ( ) karakterlerine izin ver
      const phoneRegex = /^[\d\s\+\-\(\)]*$/;
      if (!phoneRegex.test(value)) {
        toast.warning(
          "Telefon alanında sadece rakam ve telefon formatı karakterleri (+, -, (, ), boşluk) kullanılabilir."
        );
        return; // Geçersiz karakteri kabul etme
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const maxFiles = 5;
    const maxSize = 5 * 1024 * 1024; // 5MB per file

    if (files.length > maxFiles) {
      toast.error(`En fazla ${maxFiles} dosya yükleyebilirsiniz.`);
      return;
    }

    const validFiles = files.filter((file) => {
      if (file.size > maxSize) {
        toast.error(`${file.name} dosyası çok büyük. En fazla 5MB olmalıdır.`);
        return false;
      }
      if (!file.type.startsWith("image/")) {
        toast.error(`${file.name} geçerli bir resim dosyası değil.`);
        return false;
      }
      return true;
    });

    setFormData({
      ...formData,
      images: validFiles,
    });
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      images: newImages,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // FormData oluştur (resimler için gerekli)
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("company", formData.company);
      submitData.append("subject", formData.subject);
      submitData.append("message", formData.message);

      // Resimleri ekle
      formData.images.forEach((file) => {
        submitData.append("images", file);
      });

      // API'ye gönder
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        body: submitData, // FormData kullanıyoruz, Content-Type header'ı otomatik
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Mesajınız başarıyla gönderildi!");

        // Formu temizle
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          images: [],
        });

        // File input'u da temizle
        const fileInput = document.getElementById("images");
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(result.error || "Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      toast.error("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeInUp" delay={0.1}>
        <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              İletişim Formu
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Size nasıl yardımcı olabileceğimizi bize anlatın
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim Formu */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-16 primary-lighter-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                Bize Mesaj Gönderin
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Dış ticaret ihtiyaçlarınız hakkında bilgi almak için formu
                doldurun. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder-gray-500"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  {/* Resim Yükleme Alanı */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ürün Resimleri
                      <span className="text-gray-500 text-xs ml-2">
                        (Opsiyonel, en fazla 5 dosya)
                      </span>
                    </label>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-color transition-colors">
                      <input
                        type="file"
                        id="images"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label htmlFor="images" className="cursor-pointer">
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-12 h-12 text-gray-400 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <p className="text-gray-600 mb-2">
                            <span className="font-semibold text-primary-color">
                              Dosya seç
                            </span>{" "}
                            veya sürükle bırak
                          </p>
                          <p className="text-sm text-gray-500">
                            PNG, JPG, JPEG (maks. 5MB)
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Yüklenen Resim Preview'ları */}
                    {formData.images.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-3">
                          Seçilen Dosyalar ({formData.images.length})
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {formData.images.map((file, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={`Preview ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              </button>
                              <p className="text-xs text-gray-600 mt-2 truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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

      {/* Form Bilgilendirme */}
      <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="font-bold primary-text mb-2">Hızlı Yanıt</h3>
                  <p className="text-sm text-gray-600">
                    Mesajınıza 24 saat içinde dönüş yapıyoruz
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 primary-bg rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-bold primary-text mb-2">Uzman Destek</h3>
                  <p className="text-sm text-gray-600">
                    Alanında uzman ekibimizden profesyonel destek
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-bold primary-text mb-2">
                    Güvenli İletişim
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bilgileriniz SSL ile korunmaktadır
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
