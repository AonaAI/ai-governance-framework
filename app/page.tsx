import Link from 'next/link';

export default function Home() {
  const pillars = [
    {
      number: "01",
      title: "Discovery & Inventory",
      description: "Identify and catalog all AI systems, tools, and applications across your organization.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Policy & Standards",
      description: "Define clear acceptable use policies, ethical guidelines, and operational standards.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Risk Assessment",
      description: "Evaluate AI systems for potential risks, biases, and compliance requirements.",
      icon: "⚠️",
    },
    {
      number: "04",
      title: "Controls & Guardrails",
      description: "Implement technical and procedural protections to ensure safe AI deployment.",
      icon: "🛡️",
    },
    {
      number: "05",
      title: "Monitoring & Compliance",
      description: "Maintain ongoing oversight, auditing, and continuous improvement processes.",
      icon: "📊",
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
              The Open AI Governance <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #6412A6 0%, #a855f7 100%)'}}>Framework</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              A practical, step-by-step playbook for enterprise AI governance.
              Built on industry best practices, designed for real-world implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
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
                <div className="text-5xl mb-4">{pillar.icon}</div>
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
              className="group bg-gradient-to-br from-brand-accent to-purple-600 rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl lg:col-span-1"
            >
              <div className="text-5xl mb-4">📈</div>
              <div className="text-purple-200 font-bold text-sm mb-2">
                ASSESSMENT TOOL
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Maturity Model
              </h3>
              <p className="text-purple-100 leading-relaxed">
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
                className="px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
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
