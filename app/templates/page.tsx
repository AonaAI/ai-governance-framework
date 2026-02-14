import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Templates & Checklists — AI Governance Framework",
  description: "Download free AI governance templates including policy templates, risk assessment checklists, and implementation guides.",
};

export default function TemplatesPage() {
  const templates = [
    {
      title: "AI Acceptable Use Policy Template",
      description: "Comprehensive policy template defining acceptable AI usage, prohibited activities, data handling requirements, and approval processes. Includes sections for generative AI, model development, and third-party AI services.",
      icon: "📋",
      category: "Policy",
      pages: "12 pages",
      format: "DOCX, PDF",
    },
    {
      title: "AI Risk Assessment Checklist",
      description: "Structured checklist for evaluating AI systems across fairness, security, privacy, compliance, and operational risk dimensions. Includes risk scoring methodology and mitigation planning templates.",
      icon: "⚠️",
      category: "Risk Management",
      pages: "8 pages",
      format: "XLSX, PDF",
    },
    {
      title: "AI Tool Evaluation Scorecard",
      description: "Decision framework for evaluating and selecting AI tools and vendors. Covers functionality, security, privacy, compliance, vendor viability, and total cost of ownership considerations.",
      icon: "✓",
      category: "Procurement",
      pages: "6 pages",
      format: "XLSX, PDF",
    },
    {
      title: "AI Incident Response Plan",
      description: "Comprehensive incident response playbook for AI-related incidents including bias issues, security breaches, privacy violations, and performance failures. Includes escalation procedures and communication templates.",
      icon: "🚨",
      category: "Operations",
      pages: "15 pages",
      format: "DOCX, PDF",
    },
    {
      title: "AI Governance Committee Charter",
      description: "Template charter for establishing AI governance or ethics committees. Defines purpose, scope, membership, responsibilities, decision-making processes, and operating procedures.",
      icon: "👥",
      category: "Governance",
      pages: "10 pages",
      format: "DOCX, PDF",
    },
    {
      title: "AI System Inventory Template",
      description: "Spreadsheet template for cataloging AI systems with fields for system details, use case, data sources, stakeholders, risk classification, and compliance status. Includes pivot tables for analysis.",
      icon: "📊",
      category: "Discovery",
      pages: "Template",
      format: "XLSX",
    },
    {
      title: "Bias Testing and Fairness Guide",
      description: "Practical guide to testing AI systems for bias and fairness issues. Covers fairness metrics, testing methodologies, demographic data collection, and remediation strategies.",
      icon: "⚖️",
      category: "Risk Management",
      pages: "20 pages",
      format: "PDF",
    },
    {
      title: "AI Vendor Contract Clauses",
      description: "Pre-drafted contract language for AI vendor agreements covering data usage, model ownership, security requirements, compliance obligations, audit rights, and liability provisions.",
      icon: "📝",
      category: "Legal",
      pages: "14 pages",
      format: "DOCX",
    },
    {
      title: "Model Documentation Template",
      description: "Structured template for documenting AI models covering intended use, training data, performance metrics, limitations, bias testing results, and monitoring requirements. Based on model cards framework.",
      icon: "📑",
      category: "Documentation",
      pages: "Template",
      format: "DOCX, XLSX",
    },
    {
      title: "AI Governance Maturity Assessment",
      description: "Detailed self-assessment tool for evaluating governance maturity across the five pillars. Includes scoring rubric, gap analysis, and prioritized improvement roadmap template.",
      icon: "📈",
      category: "Assessment",
      pages: "18 pages",
      format: "XLSX, PDF",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Templates & Checklists
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Accelerate your AI governance program with ready-to-use templates, checklists, and implementation guides.
              All resources are free and customizable to your organization's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Practical Resources for Implementation</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI governance can seem daunting, especially when starting from scratch. These templates and checklists provide
                concrete starting points, reducing the time and effort required to build your governance program. Rather than
                creating policies and processes from a blank page, you can adapt proven frameworks to your specific context.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                All templates are designed to be practical and actionable, not just theoretical frameworks. They're based on
                real-world implementation experience across diverse organizations and industries. They incorporate best practices
                from established standards like NIST AI RMF and ISO 42001 while remaining accessible and adaptable. They're
                provided in editable formats so you can customize them to match your organization's terminology, processes,
                and risk tolerance.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                These resources are completely free and openly available. Use them, modify them, share them. Our goal is
                advancing AI governance practices industry-wide, not gatekeeping behind paywalls. If you find these templates
                valuable, consider contributing improvements back to the community or sharing your implementation experiences
                to help others on their AI governance journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="bg-brand-purple-light rounded-xl border border-brand-accent/30 p-8 hover:border-brand-accent/50 transition-all"
                >
                  <div className="text-5xl mb-4">{template.icon}</div>
                  <div className="text-brand-accent text-sm font-semibold mb-2">
                    {template.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {template.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {template.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span>{template.pages}</span>
                    <span>•</span>
                    <span>{template.format}</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-brand-accent hover:bg-purple-600 text-white rounded-lg transition-all font-semibold">
                    Download Template
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Download the Complete Template Package
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get all templates, checklists, and guides in a single download. Includes implementation
                guidance and example usage scenarios.
              </p>
            </div>

            <div className="bg-brand-purple-light rounded-xl border-2 border-brand-accent/50 p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Complete AI Governance Toolkit
                  </h3>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-1">✓</span>
                      <span>All 10 templates and checklists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-1">✓</span>
                      <span>Implementation guides and examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-1">✓</span>
                      <span>Customizable in DOCX and XLSX formats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-1">✓</span>
                      <span>Regular updates with new resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-1">✓</span>
                      <span>100% free, no registration required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="bg-brand-dark rounded-lg p-6 mb-6">
                    <div className="text-sm text-gray-400 mb-2">Package Size</div>
                    <div className="text-3xl font-bold text-white mb-4">~15 MB</div>
                    <div className="text-sm text-gray-400 mb-2">Last Updated</div>
                    <div className="text-lg text-white">February 2026</div>
                  </div>
                  <button className="w-full px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105">
                    Download Complete Package
                  </button>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    No email required • Instant download
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              How to Use These Templates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-xl font-bold text-white mb-3">Review and Customize</h3>
                <p className="text-gray-300">
                  Review each template to understand its structure and content. Customize terminology, processes,
                  and requirements to match your organization's context.
                </p>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-xl font-bold text-white mb-3">Gather Stakeholder Input</h3>
                <p className="text-gray-300">
                  Involve relevant stakeholders in reviewing and refining templates. Gather input from legal,
                  compliance, security, and business teams.
                </p>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-xl font-bold text-white mb-3">Implement and Iterate</h3>
                <p className="text-gray-300">
                  Deploy templates in practice and gather feedback. Refine based on real-world usage and evolving
                  needs. Templates are starting points, not final solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Link */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need More Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our comprehensive framework for detailed guidance on implementing each aspect of AI governance.
            </p>
            <Link
              href="/framework"
              className="inline-block px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
