export default function Progress() {
    const milestones = [
        {
            title: "Proje Başlangıcı",
            date: "Ocak 2024",
            description: "ABRA takımı kuruldu ve ilk toplantılar gerçekleştirildi.",
            status: "completed",
        },
        {
            title: "Tasarım Aşaması",
            date: "Şubat 2024",
            description: "İnsansız su altı aracının detaylı tasarımı tamamlandı.",
            status: "completed",
        },
        {
            title: "Prototip Geliştirme",
            date: "Mart 2024",
            description: "İlk prototip üretimi başladı ve test süreçleri devam ediyor.",
            status: "current",
        },
        {
            title: "Test ve Optimizasyon",
            date: "Nisan 2024",
            description: "Prototip testleri ve performans optimizasyonu yapılacak.",
            status: "upcoming",
        },
        {
            title: "Yarışma Hazırlıkları",
            date: "Mayıs 2024",
            description: "Uluslararası yarışma için son hazırlıklar ve testler.",
            status: "upcoming",
        },
    ];

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Proje İlerlemesi</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        ABRA&apos;nın gelişim sürecini ve başarılarını takip edin.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                                        {milestone.status === "completed" ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : milestone.status === "current" ? (
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                                        ) : (
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                        )}
                                    </div>
                                    <div className="ml-12">
                                        <div className="flex items-center mb-2">
                                            <h3 className="text-xl font-semibold">{milestone.title}</h3>
                                            <span className="ml-4 text-sm text-gray-500">{milestone.date}</span>
                                        </div>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Başarılarımız</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-4">1</div>
                            <h3 className="text-xl font-semibold mb-2">Uluslararası Yarışma</h3>
                            <p className="text-gray-600">2024 yılında katılacağımız ilk uluslararası yarışma</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-4">6+</div>
                            <h3 className="text-xl font-semibold mb-2">Takım Üyesi</h3>
                            <p className="text-gray-600">Farklı disiplinlerden uzman ekip üyeleri</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-4">100+</div>
                            <h3 className="text-xl font-semibold mb-2">Çalışma Saati</h3>
                            <p className="text-gray-600">Proje üzerinde harcanan toplam süre</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Sıradaki Adımlar</h2>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8">
                            Prototip testlerimiz devam ediyor ve yakında ilk su altı denemelerimizi
                            gerçekleştireceğiz. Gelişmelerimizi sosyal medya hesaplarımızdan takip
                            edebilirsiniz.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all">
                                Instagram
                            </button>
                            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all">
                                LinkedIn
                            </button>
                            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all">
                                Twitter
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 