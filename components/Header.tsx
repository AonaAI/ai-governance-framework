"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-brand-purple-light bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-white shrink-0">
            <Image src="/logo.png" alt="AI Governance Framework" width={40} height={40} className="h-8 sm:h-10 w-auto" />
            <span className="hidden sm:inline">AI Governance</span>
            <span className="sm:hidden">AI Gov</span>
            {' '}<span className="text-brand-accent">Framework</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/framework" className="text-gray-300 hover:text-white transition-colors">Framework</Link>
            <Link href="/maturity" className="text-gray-300 hover:text-white transition-colors">Maturity Model</Link>
            <Link href="/templates" className="text-gray-300 hover:text-white transition-colors">Templates</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              Visit Aona AI
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-gray-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-purple-light pt-4 flex flex-col gap-3">
            <Link href="/framework" className="text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>Framework</Link>
            <Link href="/maturity" className="text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>Maturity Model</Link>
            <Link href="/templates" className="text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>Templates</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>About</Link>
            <a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-center">
              Visit Aona AI
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
