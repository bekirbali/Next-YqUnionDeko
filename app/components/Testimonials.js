const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment: "Hızlı ve güvenilir hizmet, kesinlikle tavsiye ederim!",
  },
  {
    name: "Li Wei",
    comment: "İletişim çok iyiydi, tüm süreçte destek aldık.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10 primary-text">
        Müşteri Yorumları
      </h2>
      <div className="flex flex-col sm:flex-row gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="primary-lighter-bg rounded-xl shadow-lg p-8 max-w-sm transform hover:scale-105 transition-transform duration-200"
            style={{
              border: "1px solid var(--primary-color)",
            }}
          >
            <p className="text-gray-800 italic mb-4 text-lg leading-relaxed">
              "{t.comment}"
            </p>
            <div className="secondary-text font-bold text-lg">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
