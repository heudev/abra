import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/sea-water.jpg"
          alt="Su altı araçları"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ABRA</h1>
          <p className="text-xl md:text-2xl mb-8">İnsansız Su Altı Sistemleri Takımı</p>
          <Link
            href="/about"
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all"
          >
            Bizimle Tanışın
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <Image
          src="/images/features-bg.jpg"
          alt="Özellikler arka plan"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Neler Yapıyoruz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">İnsansız Su Altı Araçları</h3>
              <p className="text-gray-600">Modern teknolojilerle donatılmış su altı araçları geliştiriyoruz.</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Yenilikçi Çözümler</h3>
              <p className="text-gray-600">Su altı teknolojilerinde öncü çözümler üretiyoruz.</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Uluslararası Yarışmalar</h3>
              <p className="text-gray-600">Dünya çapında yarışmalarda ülkemizi temsil ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <Image
          src="/images/team.jpg"
          alt="Ekip arka plan"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team members will be added here */}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all"
            >
              Tüm Ekibi Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 relative">
        <Image
          src="/images/under-water.jpg"
          alt="İlerleme arka plan"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Proje Aşamaları</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Tasarım ve Planlama</h3>
                  <p className="text-gray-600">Projemizin ilk aşamasında detaylı tasarım ve planlama çalışmaları yapıyoruz.</p>
                </div>
              </div>
              <div className="flex items-start bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Geliştirme</h3>
                  <p className="text-gray-600">Modern teknolojiler kullanarak su altı araçlarımızı geliştiriyoruz.</p>
                </div>
              </div>
              <div className="flex items-start bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Test ve Optimizasyon</h3>
                  <p className="text-gray-600">Geliştirdiğimiz araçları test edip, performanslarını optimize ediyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
