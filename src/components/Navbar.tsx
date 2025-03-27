'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-16 h-16 overflow-hidden rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">
                            <Image
                                src="/images/abra-logo.jpg"
                                alt="ABRA Logo"
                                fill
                                priority
                                sizes="(max-width: 768px) 40px, 64px"
                                className="object-cover transition-transform duration-500 group-hover:rotate-3"
                            />
                        </div>
                        <div className="ml-3 flex flex-col">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent transform transition-all duration-500 group-hover:scale-105">
                                ABRA
                            </span>
                            <span className="text-xs text-gray-500 font-medium tracking-wider transform transition-all duration-500 group-hover:text-blue-600">
                                TEAM
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        {[
                            { href: "/", text: "Ana Sayfa" },
                            { href: "/about", text: "Hakkımızda" },
                            { href: "/team", text: "Ekip" },
                            { href: "/progress", text: "İlerleme" }
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-gray-700 hover:text-blue-900 transition-colors duration-300 group py-2"
                            >
                                {link.text}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    <button
                        className="md:hidden relative w-10 h-10 focus:outline-none group"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menü"
                    >
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                                }`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                                }`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                                }`}></span>
                        </div>
                    </button>
                </div>

                <div className={`md:hidden fixed left-0 right-0 transition-all duration-300 ease-in-out transform ${isMenuOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-10 invisible"
                    }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg mt-2 mx-4">
                        {[
                            { href: "/", text: "Ana Sayfa" },
                            { href: "/about", text: "Hakkımızda" },
                            { href: "/team", text: "Ekip" },
                            { href: "/progress", text: "İlerleme" }
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 