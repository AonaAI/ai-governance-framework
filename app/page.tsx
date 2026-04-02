import Link from 'next/link';

export default function Home() {
  const pillars = [
    {
      number: "01",
      title: "Discovery & Inventory",
      description: "Identify and catalog all AI systems, tools, and applications across your organization.",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/20">
          <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
        </div>
      ),
    },
    {
      number: "02",
      title: "Policy & Standards",
      description: "Define clear acceptable use policies, ethical guidelines, and operational standards.",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/20">
          <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>
        </div>
      ),
    },
    {
      number: "03",
      title: "Risk Assessment",
      description: "Evaluate AI systems for potential risks, biases, and compliance requirements.",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/20">
          <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
        </div>
      ),
    },
    {
      number: "04",
      title: "Controls & Guardrails",
      description: "Implement technical and procedural protections to ensure safe AI deployment.",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/20">
          <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
        </div>
      ),
    },
    {
      number: "05",
      title: "Monitoring & Compliance",
      description: "Maintain ongoing oversight, auditing, and continuous improvement processes.",
      icon: (
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent/20">
          <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-dark to-brand-dark opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(100, 18, 166, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(100, 18, 166, 0.2) 0%, transparent 50%)'
        }}></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-sm font-semibold">
              Open Source Framework
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Open AI Governance <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}>Framework</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              A practical, step-by-step playbook for enterprise AI governance.
              Built on industry best practices, designed for real-world implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Explore the Framework
              </Link>
              <Link
                href="/templates"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg transition-all border border-white/20"
              >
                Download Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Pillars */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Five Pillars of AI Governance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive framework covering every aspect of AI governance,
              from initial discovery to ongoing compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillars.map((pillar, index) => (
              <Link
                key={index}
                href={`/framework/${pillar.title.toLowerCase().split(' ')[0]}`}
                className="group bg-brand-purple-light hover:bg-brand-accent/20 border border-brand-accent/30 rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4">{pillar.icon}</div>
                <div className="text-brand-accent font-bold text-sm mb-2">
                  PILLAR {pillar.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </Link>
            ))}

            {/* Maturity Model Card */}
            <Link
              href="/maturity"
              className="group bg-gradient-to-br from-brand-accent to-blue-600 rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl lg:col-span-1"
            >
              <div className="text-5xl mb-4">📈</div>
              <div className="text-blue-200 font-bold text-sm mb-2">
                ASSESSMENT TOOL
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Maturity Model
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Assess your organization's AI governance maturity across five progressive levels.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Why AI Governance Matters Now
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-300">
                  Navigate evolving regulations like the EU AI Act, GDPR, and industry-specific requirements with a structured governance approach.
                </p>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Risk Management</h3>
                <p className="text-gray-300">
                  Identify and mitigate AI-related risks including bias, security vulnerabilities, and operational failures before they impact your business.
                </p>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Strategic Enablement</h3>
                <p className="text-gray-300">
                  Build trust and accelerate AI adoption with clear guardrails that enable innovation while protecting your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your AI Governance Program?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with our comprehensive framework, templates, and maturity assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg transition-all border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-16 border-t border-brand-purple-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">Maintained and Sponsored by</p>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <h3 className="text-3xl font-bold text-white group-hover:text-brand-accent transition-colors">
                Aona AI
              </h3>
            </a>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Aona AI provides enterprise AI governance and risk management solutions.
              This framework represents our commitment to advancing AI safety and governance practices across the industry.
            </p>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-brand-accent/20 hover:bg-brand-accent text-brand-accent hover:text-white border border-brand-accent rounded-lg transition-all font-semibold"
            >
              Visit Aona AI Platform →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
