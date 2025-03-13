import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wide">Site Map</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/journal" className="text-gray-500 hover:text-gray-900 transition-colors">Journal</Link></li>
              <li><Link href="/works" className="text-gray-500 hover:text-gray-900 transition-colors">Works</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wide">Social</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wide">From</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Graphika inc.</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <div className="mb-6">
            <h2 className="text-xl font-medium">暮らしとデザイン</h2>
            <p className="text-sm text-gray-500">byWATARU OTSUKA</p>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} – {new Date().getFullYear() + 1} Wataru Otsuka.</p>
        </div>
      </div>
    </footer>
  );
} 