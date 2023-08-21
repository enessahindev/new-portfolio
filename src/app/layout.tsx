import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Tasarımında İleri Düzey Çözümler | Enes Şahin Yazılım Hizmetleri",
  description:
    'Merhaba, ben Enes Şahin! Web geliştirme ve tasarım konusunda tutkulu bir profesyonelim. enessahin.dev, dijital dünyada benim yaratıcı yolculuğumu yansıtan bir platformdur. Modern ve etkileyici web projeleri oluşturmak için kodlama ve tasarımın birleşimini kullanıyorum. Siz de benimle birlikte estetik, kullanılabilirlik ve işlevselliği bir araya getiren dijital deneyimlere adım atmak için keşfe çıkın. Web`in gücünü keşfederken benimle iletişime geçmekten çekinmeyin!"',
  keywords: [
    "Web Geliştirme",
    "Web Tasarımı",
    "Frontend Geliştirme",
    "UI/UX Tasarım",
    "Kreatif Web Projeleri",
    "Dijital Deneyimler",
    "Kodlama ve Tasarım",
    "Kullanıcı Merkezli Tasarım",
    "Mobil Uyumlu Web Siteleri",
    "SEO Optimizasyonu",
    "Modern Web Geliştirme",
    "İnteraktif Web Çözümleri",
    "Görsel Estetik",
  ],
  creator: "Muhammet Enes Şahin",
  authors: [
    { name: "Muhammet Enes" },
    { name: "Şahin", url: "https://enessahin.dev" },
  ],
};

import { Metadata } from "next";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
