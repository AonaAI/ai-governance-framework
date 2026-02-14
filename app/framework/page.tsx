import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Framework Overview — AI Governance Framework",
  description: "Comprehensive overview of the five pillars of AI governance: Discovery, Policy, Risk Assessment, Controls, and Monitoring.",
};

export default function FrameworkPage() {
  const pillars = [
    {
      id: "discovery",
      number: "01",
      title: "Discovery & Inventory",
      description: "Establish visibility into AI usage across your organization",
      icon: "🔍",
      keyActivities: [
        "Create comprehensive AI inventory",
        "Identify shadow AI and unapproved tools",
        "Document AI use cases and stakeholders",
        "Classify AI systems by risk level",
      ],
      outcomes: [
        "Complete catalog of AI systems",
        "Clear ownership and accountability",
        "Foundation for risk assessment",
      ],
    },
    {
      id: "policy",
      number: "02",
      title: "Policy & Standards",
      description: "Define clear rules and guidelines for responsible AI use",
      icon: "📋",
      keyActivities: [
        "Develop acceptable use policies",
        "Establish ethical AI principles",
        "Create technical standards",
        "Define roles and responsibilities",
      ],
      outcomes: [
        "Clear AI governance policies",
        "Stakeholder alignment",
        "Enforceable standards",
      ],
    },
    {
      id: "risk",
      number: "03",
      title: "Risk Assessment",
      description: "Systematically evaluate and prioritize AI-related risks",
      icon: "⚠️",
      keyActivities: [
        "Conduct risk assessments",
        "Evaluate bias and fairness",
        "Assess security vulnerabilities",
        "Review regulatory compliance",
      ],
      outcomes: [
        "Prioritized risk register",
        "Mitigation strategies",
        "Compliance roadmap",
      ],
    },
    {
      id: "controls",
      number: "04",
      title: "Controls & Guardrails",
      description: "Implement protections to ensure safe AI deployment",
      icon: "🛡️",
      keyActivities: [
        "Deploy technical controls",
        "Implement approval workflows",
        "Establish testing requirements",
        "Create incident response plans",
      ],
      outcomes: [
        "Active protection mechanisms",
        "Controlled AI deployment",
        "Incident readiness",
      ],
    },
    {
      id: "monitoring",
      number: "05",
      title: "Monitoring & Compliance",
      description: "Maintain ongoing oversight and continuous improvement",
      icon: "📊",
      keyActivities: [
        "Monitor AI system performance",
        "Conduct regular audits",
        "Track compliance metrics",
        "Drive continuous improvement",
      ],
      outcomes: [
        "Real-time visibility",
        "Compliance assurance",
        "Governance maturity growth",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Governance Framework
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A comprehensive, five-pillar approach to managing AI systems responsibly.
              Based on industry standards including NIST AI RMF, ISO 42001, and regulatory requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="px-4 py-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent">
                NIST AI RMF Aligned
              </div>
              <div className="px-4 py-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent">
                ISO 42001 Compatible
              </div>
              <div className="px-4 py-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent">
                EU AI Act Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How the Framework Works</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Effective AI governance requires a systematic approach that addresses the entire lifecycle of AI systems.
                Our framework breaks down this complex challenge into five interconnected pillars, each building on the previous one
                to create a robust governance program.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Unlike purely theoretical frameworks, this approach is designed for practical implementation.
                Each pillar includes specific activities, tools, and templates that organizations can adapt to their context.
                Whether you're just starting your AI governance journey or looking to mature existing practices,
                this framework provides clear guidance for every stage.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The pillars work together: you can't effectively assess risk without knowing what AI you have,
                you can't implement controls without understanding the risks, and you can't monitor compliance without
                policies to measure against. This integrated approach ensures comprehensive coverage while remaining
                pragmatic and actionable.
              </p>
            </div>
          </div>

          {/* Pillars Detail */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className="bg-brand-purple-light rounded-xl border border-brand-accent/30 overflow-hidden hover:border-brand-accent/50 transition-all"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{pillar.icon}</div>
                    <div className="flex-1">
                      <div className="text-brand-accent font-bold text-sm mb-2">
                        PILLAR {pillar.number}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-xl text-gray-300 mb-8">
                        {pillar.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="font-semibold text-white mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {pillar.keyActivities.map((activity, i) => (
                              <li key={i} className="text-gray-300 flex items-start gap-2">
                                <span className="text-brand-accent mt-1">•</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-3">Expected Outcomes</h4>
                          <ul className="space-y-2">
                            {pillar.outcomes.map((outcome, i) => (
                              <li key={i} className="text-gray-300 flex items-start gap-2">
                                <span className="text-brand-accent mt-1">✓</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link
                        href={`/framework/${pillar.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent hover:bg-purple-600 text-white rounded-lg transition-all font-semibold"
                      >
                        Learn More About {pillar.title}
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guidance */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Getting Started
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-xl font-bold text-white mb-3">Assess Your Maturity</h3>
                <p className="text-gray-300 mb-4">
                  Use our maturity model to understand where you are today and identify priority areas for improvement.
                </p>
                <Link href="/maturity" className="text-brand-accent hover:text-purple-400 font-semibold">
                  Take Assessment →
                </Link>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-xl font-bold text-white mb-3">Download Templates</h3>
                <p className="text-gray-300 mb-4">
                  Access ready-to-use policy templates, checklists, and assessment tools to accelerate implementation.
                </p>
                <Link href="/templates" className="text-brand-accent hover:text-purple-400 font-semibold">
                  Get Templates →
                </Link>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-xl font-bold text-white mb-3">Implement Incrementally</h3>
                <p className="text-gray-300 mb-4">
                  Focus on one pillar at a time. Start with Discovery to build visibility, then layer on additional governance capabilities.
                </p>
                <Link href="/framework/discovery" className="text-brand-accent hover:text-purple-400 font-semibold">
                  Start with Discovery →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Implementing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Aona AI provides enterprise AI governance solutions to help you implement this framework at scale.
            </p>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Learn About Aona AI Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
