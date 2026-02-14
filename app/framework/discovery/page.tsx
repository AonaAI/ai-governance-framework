import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Discovery & Inventory — AI Governance Framework",
  description: "Learn how to establish comprehensive visibility into AI usage across your organization through systematic discovery and inventory practices.",
};

export default function DiscoveryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-brand-accent font-bold text-sm mb-2">PILLAR 01</div>
            <h1 className="text-5xl font-bold text-white mb-6">Discovery & Inventory</h1>
            <p className="text-xl text-gray-300">
              Establish comprehensive visibility into AI usage across your organization
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Why Discovery Matters</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                You cannot govern what you cannot see. Discovery and inventory form the critical foundation of any AI governance program.
                In today's rapidly evolving AI landscape, organizations often have AI systems scattered across departments, business units,
                and shadow IT environments. Without systematic discovery, you're flying blind—unable to assess risks, enforce policies,
                or ensure compliance.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The proliferation of AI tools has accelerated dramatically. Employees are using ChatGPT, Copilot, Midjourney, and
                hundreds of other AI-powered applications—often without IT knowledge or approval. Development teams are embedding
                AI capabilities into products. Data science teams are training custom models. Third-party vendors are incorporating
                AI into their solutions. Each of these represents a potential governance gap.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Effective discovery goes beyond simply listing AI tools. It requires understanding how AI is being used, who is using it,
                what data it processes, what decisions it influences, and what risks it may introduce. This comprehensive view enables
                informed decision-making about which AI systems require heightened scrutiny and controls.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Key Discovery Activities</h2>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. AI System Inventory</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Create a centralized registry of all AI systems, tools, and applications in use across your organization. This inventory
                should capture both sanctioned enterprise AI solutions and shadow AI being used by individual teams or employees.
                For each system, document its purpose, technical architecture, data sources, stakeholders, and business impact.
                Include everything from simple automation tools to sophisticated machine learning models and generative AI applications.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Your inventory should differentiate between AI systems you build internally, commercial AI tools you procure,
                and AI capabilities embedded in third-party products. Each category presents different governance challenges.
                Internal models require oversight of development practices. Commercial tools need vendor assessment. Embedded AI
                requires contractual protections and visibility into how vendors use AI on your behalf.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Shadow AI Discovery</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Shadow AI—unauthorized or unknown AI usage—represents one of the most significant governance challenges today.
                Employees can sign up for powerful AI tools in minutes, often bypassing procurement, security review, and data
                protection processes. Implement systematic approaches to identify shadow AI, including network traffic analysis,
                SaaS management platform monitoring, expense report review, and employee surveys.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Rather than viewing shadow AI purely as a compliance violation, treat it as valuable intelligence about business needs.
                When employees seek out AI tools independently, they're often solving real problems that your approved technology stack
                doesn't address. Use discovery as an opportunity to understand these needs and provide governed alternatives that
                enable innovation while maintaining appropriate controls.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Use Case Documentation</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                For each AI system identified, document the specific use cases and applications. What business problems does it solve?
                What processes does it automate? What decisions does it inform or make? Understanding the use case is essential for
                risk assessment—an AI tool used for creative brainstorming presents very different risks than one making hiring decisions
                or approving financial transactions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Use case documentation should include the workflow context: how does AI fit into broader business processes? What happens
                before and after the AI interaction? Who reviews AI-generated outputs? What human oversight exists? This process context
                is often more important than the AI technology itself for understanding actual risk exposure.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Risk Classification</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Not all AI systems present equal risk. Develop a classification scheme to categorize AI systems by risk level based on
                factors like the sensitivity of data processed, the significance of decisions made, the degree of automation, potential
                for bias or discrimination, regulatory applicability, and potential business impact if the system fails or produces
                incorrect results.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Common classification schemes include high-risk (affecting legal rights, safety, or critical business operations),
                medium-risk (significant business impact but with human oversight), and low-risk (minimal impact or high human control).
                This classification drives subsequent governance activities—high-risk systems warrant comprehensive risk assessment,
                strict controls, and ongoing monitoring, while low-risk systems may require only basic policy compliance.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Implementation Approach</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Start your discovery process with a combination of top-down and bottom-up approaches. Top-down involves working with IT,
                procurement, and business unit leaders to identify known AI systems and initiatives. Bottom-up means surveying employees,
                analyzing tool usage data, and monitoring for AI-related spending. Both perspectives are necessary for comprehensive coverage.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Make discovery an ongoing process, not a one-time project. New AI tools emerge constantly, and business needs evolve.
                Establish processes for continuous discovery, including mandatory registration of new AI systems, regular discovery sweeps,
                and automated monitoring where possible. Integrate AI discovery into existing processes like vendor onboarding, software
                procurement, and project initiation.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Finally, ensure your discovery process is pragmatic and doesn't create excessive burden. Use templates and automation
                to streamline data collection. Focus on gathering information that will actually inform governance decisions. Build
                relationships with business stakeholders so discovery feels collaborative rather than policing. The goal is visibility
                and partnership, not bureaucracy.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-brand-purple-light rounded-xl p-8 mt-12 border border-brand-accent/30">
              <h3 className="text-2xl font-bold text-white mb-6">Discovery & Inventory Checklist</h3>
              <div className="space-y-3">
                {[
                  "Create centralized AI system inventory",
                  "Implement shadow AI discovery processes",
                  "Document use cases for each AI system",
                  "Classify AI systems by risk level",
                  "Identify system owners and stakeholders",
                  "Map data flows and integrations",
                  "Establish continuous discovery processes",
                  "Integrate AI registration into procurement",
                  "Survey employees about AI tool usage",
                  "Review vendor contracts for embedded AI",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" className="mt-1 rounded border-brand-accent text-brand-accent focus:ring-brand-accent" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-16 pt-8 border-t border-brand-purple-light">
              <Link href="/framework" className="text-brand-accent hover:text-purple-400 font-semibold">
                ← Back to Framework
              </Link>
              <Link href="/framework/policy" className="text-brand-accent hover:text-purple-400 font-semibold">
                Next: Policy & Standards →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
