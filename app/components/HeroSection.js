import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[600px] flex flex-col items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/assets/heroImage.jpg"
        alt="Liman ve Kargo Gemileri"
        fill
        className="object-cover object-center"
        style={{
          width: "100%",
          height: "100%",
        }}
        priority
        quality={90}
        sizes="100vw"
      />

      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 37, 98, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-4 py-20">
        <h1 className="text-4xl sm:text-6xl font-bold text-white max-w-4xl drop-shadow-lg">
          Türkiye-Çin Dış Ticaretinde Güvenilir Ortağınız
        </h1>
        <p className="max-w-2xl text-xl text-white mt-6 leading-relaxed drop-shadow-md opacity-90">
          Modern, hızlı ve güvenilir dış ticaret çözümleriyle işinizi büyütün.
          Türkiye ve Çin arasında köprü kuruyoruz.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="secondary-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-xl transform hover:scale-105">
            Hemen Başla
          </button>
          <button className="bg-white primary-text px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl transform hover:scale-105">
            Daha Fazla Bilgi
          </button>
        </div>
      </div>
    </section>
  );
}
