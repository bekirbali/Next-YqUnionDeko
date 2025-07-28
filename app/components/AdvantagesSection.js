"use client";
import { FaTrophy, FaBolt, FaBullseye, FaThumbsUp } from "react-icons/fa";

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Güvenilir Marka",
      description:
        "Sektörde güvenilir ve saygın konumumuzla müşterilerimize kaliteli hizmet sunuyoruz. Uzun yıllardır sürdürdüğümüz başarılı işbirlikleri güvencemizdir.",
      icon: <FaTrophy />,
    },
    {
      title: "Verimlilik",
      description:
        "Etkin süreç yönetimi ve teknoloji kullanımıyla hızlı, verimli çözümler sunuyoruz. Zamanınızı ve kaynaklarınızı en doğru şekilde değerlendiriyoruz.",
      icon: <FaBolt />,
    },
    {
      title: "Danışmanlık",
      description:
        "Uzman danışman kadromuzla her aşamada yanınızdayız. Sektörel deneyimimizi sizinle paylaşarak en doğru kararları almanızı sağlıyoruz.",
      icon: <FaBullseye />,
    },
    {
      title: "Müşteri Memnuniyeti",
      description:
        "Müşterilerimizden aldığımız olumlu geri bildirimler ve referanslar, kaliteli hizmetimizin en büyük kanıtıdır. Memnuniyet önceliğimizdir.",
      icon: <FaThumbsUp />,
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Neden <span className="secondary-text">YqUnion</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dış ticaret süreçlerinizde size değer katacak avantajlarımızı
            keşfedin
          </p>
        </div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-primary mb-4 flex justify-center">
                <span className="text-5xl">{advantage.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Alt Vurgu */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bizimle Çalışmanın Avantajını Yaşayın
            </h3>
            <p className="text-lg opacity-90">
              Profesyonel ekibimiz ve kanıtlanmış deneyimimizle dış ticaret
              hedeflerinize ulaşın
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
