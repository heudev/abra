import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABRA - İnsansız Su Altı Sistemleri",
  description: "ABRA takımı, insansız su altı sistemleri geliştiren yenilikçi bir ekiptir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ABRA</h3>
                <p className="text-gray-300">İnsansız Su Altı Sistemleri Takımı</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">İletişim</h3>
                <p className="text-gray-300">Email: info@abra.com</p>
                <p className="text-gray-300">Tel: +90 XXX XXX XX XX</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-800 text-center text-gray-300">
              <p>&copy; 2024 ABRA. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
