import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABRA - İnsansız Su Altı Sistemleri",
  description: "ABRA takımı, insansız su altı sistemleri geliştiren yenilikçi bir ekiptir.",
  icons: {
    icon: [
      {
        url: '/images/abra-logo.jpg',
        type: 'image/jpeg',
      }
    ],
    shortcut: ['/images/abra-logo.jpg'],
    apple: [
      {
        url: '/images/abra-logo.jpg',
        sizes: '180x180',
        type: 'image/jpeg',
      }
    ],
  }
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
        <footer className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sea-water.jpg"
              alt="Footer Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/70" />
          </div>
          <div className="relative z-10 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">ABRA</h3>
                  <p className="text-gray-300">İnsansız Su Altı Sistemleri Takımı</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">İletişim</h3>
                  <p className="text-gray-300">Email: info@abra.com</p>
                  <p className="text-gray-300">Tel: +90 XXX XXX XX XX</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Sosyal Medya</h3>
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
              <div className="mt-8 pt-8 text-center text-gray-300">
                <p>&copy; {new Date().getFullYear()} ABRA. Tüm hakları saklıdır.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
