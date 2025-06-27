
'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '講師紹介' },
    { href: '/lessons/pricing', label: '料金・スケジュール' },
    { href: '/reservation', label: '予約・申込', highlight: true },
    { href: '/faq', label: 'よくある質問' },
    { href: '/blog', label: 'ブログ' }
  ];

  return (
    <header className="hugtouch-bg-warm shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">👶💕</div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">はぐたっち</h1>
              <p className="text-xs sm:text-sm text-gray-600">Hug Touch Sayu</p>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  item.highlight
                    ? 'bg-pink-500 text-white hover:bg-pink-600 hugtouch-btn hugtouch-tap-target'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-white/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-pink-600 hover:border-pink-600 hugtouch-tap-target"
            aria-label="メニューを開く"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* モバイルナビゲーション */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-white rounded-lg shadow-lg mt-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hugtouch-tap-target ${
                  item.highlight
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
