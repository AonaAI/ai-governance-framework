import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "AI Governance Maturity Model — AI Governance Framework",
  description: "Assess your organization's AI governance maturity across five progressive levels from Ad-hoc to Optimized.",
};

export default function MaturityPage() {
  const levels = [
    {
      level: 1,
      name: "Ad-hoc",
      color: "bg-red-900/30 border-red-700",
      description: "Little to no formal AI governance. AI usage is unmanaged and reactive.",
      characteristics: [
        "No AI inventory or visibility",
        "No formal AI policies or standards",
        "Reactive approach to AI risks",
        "Limited awareness of AI governance needs",
        "Shadow AI widespread",
      ],
      recommendations: [
        "Begin AI discovery and create basic inventory",
        "Identify critical AI use cases requiring immediate attention",
        "Draft initial AI acceptable use policy",
        "Establish AI governance leadership and sponsorship",
      ],
    },
    {
      level: 2,
      name: "Initial",
      color: "bg-orange-900/30 border-orange-700",
      description: "Basic governance practices emerging. Initial policies and processes defined.",
      characteristics: [
        "Partial AI inventory exists",
        "Basic AI policies documented",
        "Some risk assessments conducted",
        "Informal governance processes",
        "Inconsistent policy enforcement",
      ],
      recommendations: [
        "Complete comprehensive AI inventory",
        "Formalize and communicate AI policies",
        "Implement basic approval workflows for AI",
        "Train teams on AI governance requirements",
      ],
    },
    {
      level: 3,
      name: "Defined",
      color: "bg-yellow-900/30 border-yellow-700",
      description: "Documented processes and standards. Governance is systematic but not yet fully mature.",
      characteristics: [
        "Comprehensive AI inventory maintained",
        "Documented policies and standards",
        "Risk assessment processes defined",
        "Clear roles and responsibilities",
        "Basic monitoring and compliance tracking",
      ],
      recommendations: [
        "Automate governance processes where possible",
        "Enhance risk assessment capabilities",
        "Implement comprehensive monitoring",
        "Establish metrics for governance effectiveness",
      ],
    },
    {
      level: 4,
      name: "Managed",
      color: "bg-blue-900/30 border-blue-700",
      description: "Quantitative management and continuous improvement. Governance is measured and optimized.",
      characteristics: [
        "Automated governance processes",
        "Comprehensive monitoring and metrics",
        "Regular audits and assessments",
        "Data-driven governance improvements",
        "Strong compliance and risk management",
      ],
      recommendations: [
        "Benchmark against industry standards",
        "Expand advanced AI governance capabilities",
        "Integrate AI ethics more deeply",
        "Share governance practices industry-wide",
      ],
    },
    {
      level: 5,
      name: "Optimized",
      color: "bg-green-900/30 border-green-700",
      description: "Continuous innovation and optimization. AI governance is a strategic capability.",
      characteristics: [
        "AI governance as strategic advantage",
        "Continuous innovation in governance practices",
        "Industry leadership in responsible AI",
        "Proactive adaptation to emerging risks",
        "Integration across entire organization",
      ],
      recommendations: [
        "Contribute to AI governance standards development",
        "Share best practices with broader community",
        "Anticipate and prepare for emerging AI governance challenges",
        "Maintain and evolve governance leadership position",
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
              AI Governance Maturity Model
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Assess your organization's AI governance capabilities and chart your path to maturity.
              This five-level model helps you understand where you are today and what steps to take next.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Understanding the Maturity Model</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI governance maturity evolves through progressive stages. Organizations don't jump directly from no governance to
                comprehensive programs—they advance through levels, each building on the previous one. This maturity model provides
                a roadmap for that journey, helping you assess your current state and prioritize improvements.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The model recognizes that AI governance excellence looks different for different organizations. A small startup might
                be appropriately mature at Level 3, with defined processes suited to their scale and risk profile. A large financial
                institution handling sensitive data might need Level 4 or 5 capabilities. Use this model as a guide, not a rigid
                prescription. Focus on achieving the maturity level appropriate for your organization's size, industry, risk exposure,
                and strategic objectives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Maturity advancement requires sustained commitment and resources. Moving from one level to the next typically takes
                months or years, not weeks. Don't try to skip levels—each stage builds essential capabilities needed for the next.
                Focus on incremental progress, celebrating advancement while maintaining realistic expectations about the journey ahead.
              </p>
            </div>

            {/* Maturity Levels */}
            <div className="space-y-12">
              {levels.map((level, index) => (
                <div
                  key={level.level}
                  className={`rounded-xl border-2 ${level.color} p-8 lg:p-12`}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl lg:text-6xl font-bold text-white/20">
                      {level.level}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        Level {level.level}: {level.name}
                      </h3>
                      <p className="text-xl text-gray-300">
                        {level.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg">Key Characteristics</h4>
                      <ul className="space-y-2">
                        {level.characteristics.map((char, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-brand-accent mt-1 flex-shrink-0">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg">Advancement Recommendations</h4>
                      <ul className="space-y-2">
                        {level.recommendations.map((rec, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-brand-accent mt-1 flex-shrink-0">→</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-Assessment */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Self-Assessment Questions
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Answer these questions to gauge your organization's current maturity level across the five pillars.
            </p>

            <div className="space-y-8">
              {[
                {
                  pillar: "Discovery & Inventory",
                  questions: [
                    "Do you have a comprehensive inventory of AI systems in use?",
                    "Are new AI systems automatically registered and tracked?",
                    "Can you quickly identify all AI processing sensitive data?",
                    "Do you have visibility into shadow AI usage?",
                    "Are AI systems classified by risk level?",
                  ],
                },
                {
                  pillar: "Policy & Standards",
                  questions: [
                    "Do you have documented AI governance policies?",
                    "Are policies regularly reviewed and updated?",
                    "Do employees understand and follow AI policies?",
                    "Are there clear consequences for policy violations?",
                    "Do policies align with regulatory requirements?",
                  ],
                },
                {
                  pillar: "Risk Assessment",
                  questions: [
                    "Are AI systems assessed for risks before deployment?",
                    "Do you evaluate fairness and bias in AI systems?",
                    "Are high-risk AI systems subject to enhanced review?",
                    "Do you maintain a risk register for AI systems?",
                    "Are risks reassessed as AI systems evolve?",
                  ],
                },
                {
                  pillar: "Controls & Guardrails",
                  questions: [
                    "Are technical controls in place to protect AI systems?",
                    "Do high-risk AI systems require approval workflows?",
                    "Is there human oversight for critical AI decisions?",
                    "Are AI systems tested before deployment?",
                    "Do you have AI incident response procedures?",
                  ],
                },
                {
                  pillar: "Monitoring & Compliance",
                  questions: [
                    "Do you monitor AI system performance continuously?",
                    "Are compliance violations detected and addressed?",
                    "Do you conduct regular AI governance audits?",
                    "Are governance metrics tracked and reported?",
                    "Is there a process for continuous improvement?",
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/30">
                  <h3 className="text-2xl font-bold text-white mb-6">{section.pillar}</h3>
                  <div className="space-y-3">
                    {section.questions.map((question, i) => (
                      <label key={i} className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-brand-accent text-brand-accent focus:ring-brand-accent flex-shrink-0"
                        />
                        <span>{question}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brand-dark rounded-xl p-8 border border-brand-accent/30">
              <h3 className="text-2xl font-bold text-white mb-4">Interpreting Your Results</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold flex-shrink-0">0-20%:</span>
                  <span>Level 1 (Ad-hoc) — Start with basic discovery and policy development</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold flex-shrink-0">21-40%:</span>
                  <span>Level 2 (Initial) — Focus on formalizing and communicating policies</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold flex-shrink-0">41-60%:</span>
                  <span>Level 3 (Defined) — Work on automation and enhanced risk management</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold flex-shrink-0">61-80%:</span>
                  <span>Level 4 (Managed) — Pursue quantitative optimization and benchmarking</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold flex-shrink-0">81-100%:</span>
                  <span>Level 5 (Optimized) — Drive continuous innovation and industry leadership</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Advance Your Maturity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our framework, templates, and guidance to build the capabilities needed for your next maturity level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
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
    </div>
  );
}
