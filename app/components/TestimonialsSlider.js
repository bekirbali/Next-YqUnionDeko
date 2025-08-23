"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TestimonialsSlider = () => {
  const { t } = useTranslation();
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
      name: "A*** Y***",
      text: t("testimonials.testimonial_1"),
      rating: 5,
    },
    {
      id: 2,
      name: "F*** D***",
      text: t("testimonials.testimonial_2"),
      rating: 5,
    },
    {
      id: 3,
      name: "M*** K***",
      text: t("testimonials.testimonial_3"),
      rating: 5,
    },
    {
      id: 4,
      name: "Z*** Ö***",
      text: t("testimonials.testimonial_4"),
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
            {t("homePage.testimonialsSectionTitle")}
          </h2>
          <p className="text-center sm:text-lg max-w-sm md:max-w-2xl mx-auto text-gray-600">
            {t("homePage.testimonialsSectionText")}
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
