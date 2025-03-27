export default function About() {
    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Hakkımızda</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        ABRA olarak, insansız su altı sistemleri alanında yenilikçi çözümler üretmeyi hedefliyoruz.
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
                                ABRA, 2024 yılında bir grup genç mühendis ve teknoloji tutkunu tarafından kuruldu.
                                Amacımız, su altı teknolojilerinde yeni bir sayfa açmak ve ülkemizi bu alanda
                                uluslararası platformda temsil etmek.
                            </p>
                            <p>
                                Takımımız, farklı disiplinlerden gelen üyeleriyle birlikte, insansız su altı
                                araçlarının tasarımı, üretimi ve test edilmesi konularında çalışmalar yapıyor.
                                Her projemizde en son teknolojileri kullanarak, verimli ve sürdürülebilir
                                çözümler üretmeyi hedefliyoruz.
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
                                İnsansız su altı sistemleri alanında yenilikçi çözümler üreterek, deniz ve
                                okyanus araştırmalarında öncü olmak ve bu teknolojileri toplumun faydasına
                                sunmak.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
                            <p className="text-gray-600">
                                Su altı teknolojilerinde global bir marka olmak ve bu alanda dünya standartlarında
                                ürünler geliştirerek, geleceğin su altı araştırmalarına yön vermek.
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
                            <h3 className="text-xl font-semibold mb-2">Yenilikçilik</h3>
                            <p className="text-gray-600">Sürekli gelişim ve yenilik peşindeyiz.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">İşbirliği</h3>
                            <p className="text-gray-600">Takım çalışmasına inanıyoruz.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Güvenilirlik</h3>
                            <p className="text-gray-600">Güvenilir ve sürdürülebilir çözümler üretiyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 