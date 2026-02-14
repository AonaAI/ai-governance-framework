import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-brand-purple-light bg-brand-purple mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI Governance Framework
            </h3>
            <p className="text-gray-400 text-sm">
              An open framework for enterprise AI governance, maintained by Aona AI.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Framework</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/framework" className="text-gray-400 hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/framework/discovery" className="text-gray-400 hover:text-white transition-colors">Discovery & Inventory</Link></li>
              <li><Link href="/framework/policy" className="text-gray-400 hover:text-white transition-colors">Policy & Standards</Link></li>
              <li><Link href="/framework/risk" className="text-gray-400 hover:text-white transition-colors">Risk Assessment</Link></li>
              <li><Link href="/framework/controls" className="text-gray-400 hover:text-white transition-colors">Controls & Guardrails</Link></li>
              <li><Link href="/framework/monitoring" className="text-gray-400 hover:text-white transition-colors">Monitoring & Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/maturity" className="text-gray-400 hover:text-white transition-colors">Maturity Model</Link></li>
              <li><Link href="/templates" className="text-gray-400 hover:text-white transition-colors">Templates & Checklists</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Aona AI</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Platform</a></li>
              <li><a href="https://aona.ai/contact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-purple-light mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Governance Framework. Maintained by <a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-purple-400">Aona AI</a>. Open source and freely available.</p>
        </div>
      </div>
    </footer>
  );
}
