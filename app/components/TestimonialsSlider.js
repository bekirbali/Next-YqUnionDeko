"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      company: "ABC İthalat Ltd.",
      text: "YqUnion ile çalışmaya başladığımızdan beri Çin'den ithalatımız çok daha güvenli ve hızlı hale geldi. Profesyonel yaklaşımları için teşekkürler.",
      rating: 5,
    },
    {
      id: 2,
      name: "Fatma Demir",
      company: "Demir Tekstil",
      text: "15 yıldır dış ticaretle uğraşıyorum, bu kadar güvenilir bir firma ile hiç karşılaşmamıştım. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      company: "Kaya Elektronik",
      text: "Lojistik süreçlerini çok iyi yönetiyorlar. Siparişlerimiz zamanında ve hasarsız ulaşıyor. Mükemmel bir hizmet.",
      rating: 5,
    },
    {
      id: 4,
      name: "Zeynep Öz",
      company: "Öz Makina",
      text: "Dil bariyeri olmadan, kültürler arası ticaret yapmanın ne kadar kolay olabileceğini gösterdiler. Harika bir ekip!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="testimonials-slider-container w-sm md:w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold primary-text mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-center sm:text-lg max-w-sm md:max-w-2xl mx-auto text-gray-600">
            Güvenlerini kazandığımız müşterilerimizin deneyimleri
          </p>
        </motion.div>

        <div className="mx-[-8px] sm:mx-0">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-2 sm:px-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-3 sm:p-6 min-h-[280px] sm:h-64 flex flex-col justify-between border-l-4 border-red-500"
                >
                  <div>
                    <div className="text-yellow-500 text-lg sm:text-xl mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-4 italic leading-relaxed text-sm sm:text-base">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
