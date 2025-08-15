"use client";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function ContactFormPage() {
  const { t } = useTranslation();
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
              {t("contact.contactForm_Title")}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t("contact.contactForm_Text")}
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
                <h3 className="font-bold text-white mb-1 text-sm">
                  {t("contact.phone")}
                </h3>
                <p className="text-xs text-white/80">
                  {t("contact.heroQuickMenuCard_1_text")}
                </p>
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
                <h3 className="font-bold text-white mb-1 text-sm">
                  {t("contact.email")}
                </h3>
                <p className="text-xs text-white/80">
                  {t("contact.heroQuickMenuCard_2_text")}
                </p>
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
                <h3 className="font-bold text-white mb-1 text-sm">
                  {t("contact.heroQuickMenuCard_3_title")}
                </h3>
                <p className="text-xs text-white/80">
                  {t("contact.heroQuickMenuCard_3_text")}
                </p>
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
                  {t("contact.heroQuickMenuCard_4_title")}
                </h3>
                <p className="text-xs text-white/80">
                  {t("contact.heroQuickMenuCard_4_text")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* İletişim Formu */}
      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <section className="py-16 primary-lighter-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold primary-text mb-8 text-center">
                {t("contact.formTitle")}
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                {t("contact.formSubTitle")}
              </p>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-medium text-gray-700 mb-2"
                      >
                        {t("contact.name")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder={t("contact.name")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-medium text-gray-700 mb-2"
                      >
                        {t("contact.email")} *
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
                        className="block font-medium text-gray-700 mb-2"
                      >
                        {t("contact.phone")}
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
                        className="block font-medium text-gray-700 mb-2"
                      >
                        {t("contact.company")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder={t("contact.company")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      {t("contact.subject")} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all text-gray-900"
                    >
                      <option value="">{t("contact.selectSubject")}</option>
                      <option value="ithalat">{t("contact.subject_1")}</option>
                      <option value="ihracat">{t("contact.subject_2")}</option>
                      <option value="kalite-kontrol">
                        {t("contact.subject_3")}
                      </option>
                      <option value="danışmanlık">
                        {t("contact.subject_4")}
                      </option>
                      <option value="lojistik">{t("contact.subject_5")}</option>
                      <option value="diğer">{t("contact.subject_6")}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      {t("contact.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder-gray-500"
                      placeholder={t("contact.messagePlaceholder")}
                    ></textarea>
                  </div>

                  {/* Resim Yükleme Alanı */}
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      {t("contact.productImages")}
                      <span className="text-gray-500 text-sm ml-2">
                        {t("contact.imagesOptional")}
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
                              {t("contact.selectFile_1")}
                            </span>{" "}
                            {t("contact.selectFile_2")}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t("contact.fileSize")}
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Yüklenen Resim Preview'ları */}
                    {formData.images.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-3">
                          {t("contact.selectedFiles")} ({formData.images.length}
                          )
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
                      {t("contact.sendMessageButton")}
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
                  <h3 className="font-bold primary-text mb-2">
                    {t("contact.contactFormSubCard_1_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("contact.contactFormSubCard_1_text")}
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
                  <h3 className="font-bold primary-text mb-2">
                    {t("contact.contactFormSubCard_2_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("contact.contactFormSubCard_2_text")}
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
                    {t("contact.contactFormSubCard_3_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("contact.contactFormSubCard_3_text")}
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
