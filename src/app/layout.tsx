import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "にこにこベビーマッサージ｜赤ちゃんとママの心をつなぐ教室",
  description: "ふれあいを通じて、赤ちゃんの心と体の発達を促し、ママの育児への自信と癒やしをサポートするベビーマッサージ教室です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} font-sans`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
