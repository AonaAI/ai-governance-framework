import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-brand-purple-light bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            AI Governance <span className="text-brand-accent">Framework</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/framework" className="text-gray-300 hover:text-white transition-colors">
              Framework
            </Link>
            <Link href="/maturity" className="text-gray-300 hover:text-white transition-colors">
              Maturity Model
            </Link>
            <Link href="/templates" className="text-gray-300 hover:text-white transition-colors">
              Templates
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Visit Aona AI
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
