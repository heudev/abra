'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-2xl font-bold text-blue-900">
                        ABRA
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
                            Hakkımızda
                        </Link>
                        <Link href="/team" className="text-gray-700 hover:text-blue-900 transition-colors">
                            Ekip
                        </Link>
                        <Link href="/progress" className="text-gray-700 hover:text-blue-900 transition-colors">
                            İlerleme
                        </Link>
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menü"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobil Menü */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Ana Sayfa
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            href="/team"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Ekip
                        </Link>
                        <Link
                            href="/progress"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            İlerleme
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 