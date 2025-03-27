import Image from "next/image";

export default function Team() {
    const teamStructure = {
        advisor: {
            name: "Prof. Dr. Yusuf Murat Erten",
            role: "Danışman",
        },
        captain: {
            name: "Denizhan İzdal",
            role: "Takım Kaptanı",
        },
        departments: {
            mechanical: {
                leader: {
                    name: "Ulaş Gülbaharlı",
                    role: "Mekanik Ekip Lideri",
                },
                members: [
                    {
                        name: "Emir Öz",
                        role: "Mekanik Ekip Üyesi",
                    },
                    {
                        name: "Furkan Savan",
                        role: "Mekanik Ekip Üyesi",
                    },
                    {
                        name: "Mehmet Çallı",
                        role: "Mekanik Ekip Üyesi",
                    },
                    {
                        name: "Furkan Gözkara",
                        role: "Mekanik Ekip Üyesi",
                    },
                    {
                        name: "Zeynep Dipçin",
                        role: "Mekanik Ekip Üyesi",
                    },
                ],
            },
            electronic: {
                leader: {
                    name: "Kıvanç Akdoğan",
                    role: "Elektronik Ekip Lideri",
                },
                members: [
                    {
                        name: "Doruk Akdoğan",
                        role: "Elektronik Ekip Üyesi",
                    },
                    {
                        name: "Doruk Yaşar",
                        role: "Elektronik Ekip Üyesi",
                    },
                ],
            },
            software: {
                leader: {
                    name: "Emine Kocabaş",
                    role: "Yazılım Ekip Lideri",
                },
                members: [
                    {
                        name: "Burak Şanlılar",
                        role: "Yazılım Ekip Üyesi",
                    },
                    {
                        name: "Kenan Şahin",
                        role: "Yazılım Ekip Üyesi",
                    },
                    {
                        name: "Ahmet Alp Samur",
                        role: "Yazılım Ekip Üyesi",
                    },
                ],
            },
        },
    };

    return (
        <main className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-[0.50] pointer-events-none"></div>
            <section className="relative h-[300px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/under-water.jpg"
                        alt="Team Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-900/70" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-tight text-white">
                        Takım Yönetimi
                    </h1>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center space-y-12">
                        {/* Danışman */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-xl p-6 mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="font-semibold text-xl">{teamStructure.advisor.name}</h3>
                                <p className="text-blue-200 mt-1">{teamStructure.advisor.role}</p>
                            </div>
                            <div className="h-12 w-1 bg-gradient-to-b from-blue-900 to-transparent mx-auto"></div>
                        </div>

                        {/* Takım Kaptanı */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl p-6 mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="font-semibold text-xl">{teamStructure.captain.name}</h3>
                                <p className="text-blue-200 mt-1">{teamStructure.captain.role}</p>
                            </div>
                            <div className="h-12 w-1 bg-gradient-to-b from-blue-800 to-transparent mx-auto"></div>
                        </div>

                        {/* Departmanlar */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {/* Mekanik Ekip */}
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="font-semibold text-lg">{teamStructure.departments.mechanical.leader.name}</h3>
                                    <p className="text-blue-200 mt-1">{teamStructure.departments.mechanical.leader.role}</p>
                                </div>
                                {teamStructure.departments.mechanical.members.map((member, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-semibold">{member.name}</h3>
                                        <p className="text-blue-200 text-sm mt-1">{member.role}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Elektronik Ekip */}
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="font-semibold text-lg">{teamStructure.departments.electronic.leader.name}</h3>
                                    <p className="text-blue-200 mt-1">{teamStructure.departments.electronic.leader.role}</p>
                                </div>
                                {teamStructure.departments.electronic.members.map((member, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-semibold">{member.name}</h3>
                                        <p className="text-blue-200 text-sm mt-1">{member.role}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Yazılım Ekip */}
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="font-semibold text-lg">{teamStructure.departments.software.leader.name}</h3>
                                    <p className="text-blue-200 mt-1">{teamStructure.departments.software.leader.role}</p>
                                </div>
                                {teamStructure.departments.software.members.map((member, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-semibold">{member.name}</h3>
                                        <p className="text-blue-200 text-sm mt-1">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 