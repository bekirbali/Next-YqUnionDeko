export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "Yeni İhracat Hizmetlerimiz",
      content:
        "Şirketimiz artık 15 ülkeye daha ihracat hizmeti vermektedir. Detaylı bilgi için iletişime geçiniz.",
      date: "2024-01-15",
      category: "Hizmet",
      priority: "high",
    },
    {
      id: 2,
      title: "Ofis Saatleri Güncellemesi",
      content:
        "Yaz ayları boyunca çalışma saatlerimiz Pazartesi-Cuma 08:00-17:00 olarak güncellenmiştir.",
      date: "2024-01-10",
      category: "Genel",
      priority: "medium",
    },
    {
      id: 3,
      title: "Yeni Tedarik Zinciiri Ortaklıkları",
      content:
        "Avrupa'da yeni tedarik zinciiri ortaklıkları kurarak hizmet kalitemizi artırmaya devam ediyoruz.",
      date: "2024-01-05",
      category: "İş Ortaklığı",
      priority: "high",
    },
    {
      id: 4,
      title: "Müşteri Hizmetleri Geliştirmeleri",
      content:
        "24/7 müşteri hizmetleri hattımız artık 5 farklı dilde hizmet vermektedir.",
      date: "2024-01-01",
      category: "Hizmet",
      priority: "medium",
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("tr-TR", options);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Hizmet":
        return "bg-blue-100 text-blue-800";
      case "Genel":
        return "bg-purple-100 text-purple-800";
      case "İş Ortaklığı":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Duyurular</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              YQ Union ile ilgili en güncel haberler, duyurular ve gelişmeler
              hakkında bilgi alın
            </p>
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-1">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {announcement.title}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        announcement.category
                      )}`}
                    >
                      {announcement.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(
                        announcement.priority
                      )}`}
                    >
                      {announcement.priority === "high"
                        ? "Yüksek Öncelik"
                        : announcement.priority === "medium"
                        ? "Orta Öncelik"
                        : "Düşük Öncelik"}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center text-gray-500 mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">
                    {formatDate(announcement.date)}
                  </span>
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {announcement.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for Future */}
        {announcements.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Henüz duyuru bulunmuyor
            </h3>
            <p className="text-gray-500">
              Yeni duyurular eklendiğinde burada görünecektir.
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Daha Fazla Bilgi İçin
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Duyurularla ilgili sorularınız veya daha detaylı bilgi almak için
            bizimle iletişime geçin
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            İletişime Geç
          </button>
        </div>
      </div>
    </main>
  );
}
