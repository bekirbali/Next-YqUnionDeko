"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
  };

  const slides = [
    {
      id: 1,
      title: "Türkiye ve Çin Arasındaki Güven Köprüsü",
      subtitle: "Bizimle Çalışın Güvenli İthalatın Başarısını Yakalayın",
      description:
        "20 yıllık deneyimimizle Türkiye ve Çin arasında güvenli ticaret köprüsü kuruyoruz.",
      image: "/assets/futureexport.jpg",
    },
    {
      id: 2,
      title: "Kaliteli Ürünler, Güvenli Teslimat",
      subtitle: "Güvenilir ve Profesyonel Hizmet",
      description:
        "Her adımda yanınızdayız. Siparişten teslimata kadar tam kontrol.",
      image: "/assets/heroImage.jpg",
    },
  ];

  return (
    <div
      className="hero-slider-container"
      style={{ height: "70vh", position: "relative" }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              style={{
                height: "70vh",
                backgroundImage: `linear-gradient(rgba(10, 37, 98, 0.5), rgba(10, 37, 98, 0.3)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white px-4"
                style={{ maxWidth: "800px" }}
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl md:text-3xl mb-6 text-[#ff4569]"
                >
                  {slide.subtitle}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg md:text-xl mb-8 leading-relaxed"
                >
                  {slide.description}
                </motion.p>
                <Link href="/contact">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Bize Ulaşın
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
