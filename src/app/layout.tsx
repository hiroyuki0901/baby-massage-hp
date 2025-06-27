import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { GoogleAnalytics, GoogleTagManager } from "@/components/GoogleAnalytics";
import { AnalyticsTracking } from "@/components/AnalyticsTracking";
import { Suspense } from 'react';

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "はぐたっち - 清瀬駅徒歩1分のベビーマッサージ教室",
    template: "%s | はぐたっち"
  },
  description: "清瀬駅北口徒歩1分「スタジオラビット」で開催するベビーマッサージ教室。RTA認定講師による丁寧なレッスン。妊娠期から通える安心の教室です。",
  keywords: "ベビーマッサージ,清瀬,体験レッスン,RTA認定,妊娠期,産後,親子,ふれあい,スタジオラビット,はぐたっち",
  authors: [{ name: "Sayu（長野 小由奈）" }],
  creator: "Sayu（長野 小由奈）",
  publisher: "はぐたっち",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hugtouch-sayu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hugtouch-sayu.com',
    siteName: 'はぐたっち',
    title: 'はぐたっち - 清瀬駅徒歩1分のベビーマッサージ教室',
    description: '清瀬駅北口徒歩1分「スタジオラビット」で開催するベビーマッサージ教室。RTA認定講師による丁寧なレッスン。',
    images: [
      {
        url: '/hero-baby-massage.jpg',
        width: 1200,
        height: 630,
        alt: 'ベビーマッサージ教室はぐたっち',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'はぐたっち - 清瀬駅徒歩1分のベビーマッサージ教室',
    description: '清瀬駅北口徒歩1分「スタジオラビット」で開催するベビーマッサージ教室。',
    images: ['/hero-baby-massage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleTagManager />
      </head>
      <body className={`${notoSansJp.variable} font-sans`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          <AnalyticsTracking />
        </Suspense>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
