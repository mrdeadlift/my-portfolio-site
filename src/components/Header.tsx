import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-playfair font-medium">
            <Link href="/" className="flex flex-col">
              <span className="text-gray-900">暮らしとデザイン</span>
              <span className="text-sm text-gray-500">byWATARU OTSUKA</span>
            </Link>
          </h1>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors uppercase text-sm tracking-wide">Home</Link></li>
              <li><Link href="/journal" className="text-gray-500 hover:text-gray-900 transition-colors uppercase text-sm tracking-wide">Journal</Link></li>
              <li><Link href="/works" className="text-gray-500 hover:text-gray-900 transition-colors uppercase text-sm tracking-wide">Works</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors uppercase text-sm tracking-wide">About</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors uppercase text-sm tracking-wide">Contact</Link></li>
            </ul>
          </nav>
          
          <button className="md:hidden text-gray-800">
            <span className="block text-sm uppercase tracking-wide">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
} 