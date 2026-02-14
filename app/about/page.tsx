import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About — AI Governance Framework",
  description: "Learn about the AI Governance Framework, why it exists, how to contribute, and how Aona AI supports responsible AI practices.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About the Framework
            </h1>
            <p className="text-xl text-gray-300">
              An open resource for advancing AI governance practices across industries
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-4xl font-bold text-white mb-6">Why This Framework Exists</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI is transforming every industry, creating unprecedented opportunities and equally unprecedented risks. Organizations
                are rapidly adopting AI technologies—from generative AI tools like ChatGPT to sophisticated machine learning models
                powering critical business decisions. Yet many organizations lack structured approaches to governing these powerful
                technologies responsibly.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The regulatory landscape is evolving rapidly. The EU AI Act establishes comprehensive AI regulations. GDPR affects
                automated decision-making. Industry-specific regulations increasingly address AI. Beyond compliance, organizations
                face reputational, operational, and ethical risks from ungoverned AI use. Bias in hiring algorithms, privacy violations
                through AI-powered surveillance, security breaches of AI systems, and operational failures of AI-dependent processes
                have all made headlines, demonstrating the real-world consequences of inadequate AI governance.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Existing AI governance resources tend to be either too theoretical or too proprietary. Academic frameworks provide
                conceptual models but limited practical implementation guidance. Consulting firms offer detailed frameworks but lock
                them behind expensive engagements. Regulatory guidance addresses compliance requirements but often lacks operational
                detail. Organizations needed a practical, actionable, freely available framework that bridges the gap between theory
                and implementation.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This framework was created to fill that gap. It synthesizes best practices from established standards like NIST AI RMF
                and ISO 42001, lessons from real-world AI governance implementations, regulatory requirements from jurisdictions worldwide,
                and insights from the AI ethics and safety communities. It's designed to be immediately useful—providing not just
                principles but specific activities, templates, and checklists that organizations can adapt and deploy.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Most importantly, this framework is open and free. AI governance challenges affect all organizations adopting AI,
                regardless of size or resources. Making governance guidance freely available advances responsible AI practices
                industry-wide, creating positive externalities for everyone. When more organizations govern AI effectively, we all
                benefit from increased trust, reduced harm, and sustainable AI innovation.
              </p>

              <h2 className="text-4xl font-bold text-white mb-6 mt-12">How to Use This Framework</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This framework is designed for practical implementation, not theoretical study. Start by assessing your current AI
                governance maturity using the maturity model. This assessment reveals where you are today and identifies priority
                areas for improvement. Don't try to implement everything at once—focus on progressing one maturity level at a time,
                building sustainable capabilities rather than checking boxes.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The five pillars—Discovery, Policy, Risk Assessment, Controls, and Monitoring—work together as an integrated system.
                However, you don't need to master all pillars simultaneously. Most organizations benefit from starting with Discovery
                to establish visibility into AI usage, then layering on Policy to define acceptable use, followed by Risk Assessment
                to identify and prioritize risks. Controls and Monitoring complete the framework but build on the foundation
                established by earlier pillars.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Adapt the framework to your context. A startup faces different AI governance challenges than a global financial
                institution. A company developing AI products has different needs than one primarily consuming AI services. The
                framework provides structure and guidance, but you must tailor it to your organization's size, industry, risk
                profile, regulatory obligations, and AI maturity. Use what's relevant, adapt what needs modification, and skip
                what doesn't apply.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Leverage the templates and checklists to accelerate implementation. Rather than creating governance artifacts from
                scratch, customize proven templates to your needs. Share this framework with colleagues, stakeholders, and partners.
                The more widely these practices are adopted, the stronger the foundation for responsible AI becomes across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintained by Aona AI */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Maintained by Aona AI</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                This framework is developed and maintained by Aona AI, a leader in enterprise AI governance and risk management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">About Aona AI</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Aona AI provides enterprise AI governance, risk management, and compliance solutions. Our platform helps
                  organizations discover AI usage, assess risks, implement controls, and maintain ongoing compliance with AI
                  regulations and internal policies.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We created this open framework as part of our mission to advance responsible AI practices industry-wide.
                  While our commercial platform provides automated governance capabilities at scale, we believe the fundamental
                  frameworks and practices should be freely available to all organizations working to govern AI responsibly.
                </p>
                <a
                  href="https://aona.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent hover:bg-purple-600 text-white rounded-lg transition-all font-semibold"
                >
                  Visit Aona AI Platform
                  <span>→</span>
                </a>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/30">
                <h4 className="text-xl font-bold text-white mb-4">How Aona AI Can Help</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Automated AI discovery and inventory management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Risk assessment workflows and scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Policy management and compliance monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Continuous monitoring and alerting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Regulatory compliance reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Integration with existing security and compliance tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">How to Contribute</h2>
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This framework benefits from community input and real-world implementation experience. We welcome contributions,
                feedback, and suggestions for improvement. Whether you've implemented parts of this framework and have lessons to
                share, identified gaps or areas needing expansion, or have ideas for new templates or resources, your contributions
                help improve this framework for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Share Feedback</h3>
                <p className="text-gray-300 mb-4">
                  Share your implementation experiences, challenges, and suggestions for framework improvements.
                </p>
                <a
                  href="https://aona.ai/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent hover:text-purple-400 font-semibold"
                >
                  Contact Us →
                </a>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-white mb-3">Contribute Resources</h3>
                <p className="text-gray-300 mb-4">
                  Share templates, case studies, or implementation guides that could benefit the broader community.
                </p>
                <a
                  href="https://aona.ai/contribute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent hover:text-purple-400 font-semibold"
                >
                  Contribute →
                </a>
              </div>
              <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/20">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">Partner With Us</h3>
                <p className="text-gray-300 mb-4">
                  Organizations interested in collaborative research or framework development can partner with Aona AI.
                </p>
                <a
                  href="https://aona.ai/partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent hover:text-purple-400 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License and Usage */}
      <section className="py-20 bg-brand-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">License and Usage</h2>
            <div className="bg-brand-purple-light rounded-xl p-8 border border-brand-accent/30">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                This AI Governance Framework is provided as an open resource under a Creative Commons Attribution 4.0
                International License. You are free to:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Use the framework for any purpose, including commercial use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Modify and adapt the framework to your organization's needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Share the framework and your adaptations with others</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent mt-1">✓</span>
                  <span>Build upon the framework for derivative works</span>
                </li>
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed">
                We ask only that you provide attribution to the AI Governance Framework and Aona AI when sharing or
                publishing work based on this framework. No registration, payment, or permission required—just use it
                and help advance responsible AI practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore the framework, assess your maturity, and begin building your AI governance program today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="px-8 py-4 bg-brand-accent hover:bg-purple-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Explore the Framework
              </Link>
              <Link
                href="/maturity"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg transition-all border border-white/20"
              >
                Assess Your Maturity
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
