import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "hair salon ÉLISE | 髪をいたわり、心がほどけるひととき",
  description:
    "日常にやさしさを添える、あなただけのサロン時間。Webからいつでも簡単にご予約いただけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
