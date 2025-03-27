import Image from "next/image";

export default function About() {
    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/under-water.jpg"
                        alt="About Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-900/70" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Hakkımızda</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
                        ABRA olarak, milli teknolojiler geliştirerek suyun olduğu her alanda Türkiye&apos;nin gücünü ve mühendislik kabiliyetini dünyaya göstermeyi hedefliyoruz.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Hikayemiz</h2>
                        <div className="space-y-6 text-gray-600">
                            <p>
                                İsmini Türk mitolojisinden alan takım Abra, Türkiye&apos;nin mühendislik gücünü ve milli
                                teknolojilerini suyun derinliklerinden gökyüzüne kadar taşımak amacıyla 2025
                                yılında İzmir Ekonomi Üniversitesi&apos;nde kuruldu.
                            </p>
                            <p>
                                Takım kaptanı ve tüm takım üyelerinin milli teknoloji hamlesine olan inancı ve su altı
                                dünyasına olan tutkusu, Abra&apos;yı kurma yolunda ilk adımı attı. Takım, &quot;Mavi Vatan&quot;
                                bilinciyle hareket ederek su altı teknolojilerinde Türkiye&apos;nin bağımsızlığını ve
                                gücünü artırmayı hedefledi.
                            </p>
                            <p>
                                Abra, yerli yazılım ve donanımlarla geliştirdiği insansız su altı sistemi ile
                                su altı dünyasında güvenli ve etkin keşifler yapmayı amaçladı. Takım, sadece su altı
                                teknolojileriyle yetinmeyip, İnsansız Deniz Araçları ve Su Altı Roketleri gibi
                                projelerle Türkiye&apos;nin gücünü denizlerin üstünde ve gökyüzünde de göstermeyi hedefledi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
                            <p className="text-gray-600">
                                Yerli ve milli mühendislik çözümleriyle su teknolojileri alanında, vatan sevgisiyle
                                inovasyon yaparak Türkiye&apos;nin adını uluslararası platformlarda duyurmak.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
                            <p className="text-gray-600">
                                İnsansız su altı araçlarından deniz araçlarına ve su altı roketlerine kadar uzanan
                                geniş bir yelpazede öncü çözümler üreterek, Türkiye&apos;yi su teknolojilerinde küresel lider
                                yapmak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Milli Teknoloji</h3>
                            <p className="text-gray-600">Yerli ve milli çözümler üretiyoruz.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Vatan Sevgisi</h3>
                            <p className="text-gray-600">Mavi Vatan bilinciyle çalışıyoruz.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">İnovasyon</h3>
                            <p className="text-gray-600">Sürekli gelişim ve yenilik peşindeyiz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teknofest Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Teknofest Yolculuğumuz</h2>
                        <p className="text-gray-600">
                            Abra, milli mühendislik çözümleriyle Teknofest&apos;te sadece su altı kategorilerinde değil,
                            suyun olduğu tüm kategorilerde takım çıkartmayı ve ülkemize yetkili ve donanımlı
                            mühendisler ve projeler kazandırmayı hedefledi. Türkiye&apos;nin milli mühendislik gücünü
                            suyun olduğu her alana taşıyarak sadece bir teknoloji takımı değil, vatan sevgisiyle
                            hareket eden bir öncü olmak istiyoruz.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
} 