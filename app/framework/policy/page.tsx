import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Policy & Standards — AI Governance Framework",
  description: "Establish clear policies, ethical guidelines, and technical standards for responsible AI use across your organization.",
};

export default function PolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-brand-accent font-bold text-sm mb-2">PILLAR 02</div>
            <h1 className="text-5xl font-bold text-white mb-6">Policy & Standards</h1>
            <p className="text-xl text-gray-300">
              Define clear rules and guidelines for responsible AI use
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">The Foundation of AI Governance</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Policies and standards provide the foundation for consistent, responsible AI use across your organization. Without clear
                policies, AI governance becomes ad-hoc and reactive, with each team making independent decisions about acceptable use,
                risk tolerance, and ethical boundaries. Well-crafted policies create shared understanding, enable consistent
                decision-making, and provide the basis for accountability when issues arise.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Effective AI policies balance multiple objectives. They must be comprehensive enough to address real risks, yet practical
                enough that people can actually follow them. They need to be specific enough to guide decisions, but flexible enough
                to accommodate the rapid pace of AI innovation. They should protect the organization while enabling teams to leverage
                AI's benefits. Achieving this balance requires thoughtful policy design informed by both technical understanding and
                business context.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Policy development is not a one-time exercise. As AI technology evolves, regulations change, and your organization's
                AI maturity grows, policies must evolve too. Establish processes for regular policy review and updates. Create feedback
                mechanisms so teams can raise concerns or suggest improvements. Treat policies as living documents that adapt to
                changing circumstances while maintaining core principles.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Essential AI Policies</h2>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Acceptable Use Policy</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                An AI acceptable use policy defines what employees can and cannot do with AI tools. It should address which AI tools
                are approved for use, what types of data can be processed by AI systems, what use cases are permitted or prohibited,
                and what approval is required for different types of AI usage. Common prohibitions include processing highly sensitive
                data through public AI services, using AI for decisions that could discriminate, and deploying AI without appropriate
                testing and validation.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Make your acceptable use policy practical and understandable. Avoid purely legalistic language. Use concrete examples
                of acceptable and unacceptable uses. Explain the rationale behind restrictions—when people understand why a rule exists,
                they're more likely to follow it. Include guidance on what to do when situations arise that aren't explicitly covered
                by policy. Create escalation paths for questions and exceptions.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Ethical AI Principles</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ethical principles articulate your organization's values and commitments around AI use. While acceptable use policies
                focus on specific behaviors, ethical principles provide broader guidance for decision-making. Common principles include
                commitments to fairness and non-discrimination, transparency and explainability, privacy and data protection, human
                oversight and accountability, safety and reliability, and beneficial use aligned with societal values.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Effective ethical principles are more than aspirational statements. They must be operationalized into concrete practices.
                For each principle, define what it means in practice, how compliance will be assessed, and who is responsible for
                upholding it. For example, a commitment to fairness should translate into specific requirements for bias testing,
                demographic data analysis, and fairness metrics. Make ethics actionable, not just inspirational.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Technical Standards</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Technical standards define how AI systems should be developed, deployed, and maintained. These standards cover areas
                like model development practices, testing and validation requirements, documentation standards, security controls,
                performance monitoring, and change management processes. Technical standards ensure consistency and quality across
                AI initiatives while incorporating security and risk management best practices.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Align your technical standards with established frameworks where possible. Reference standards like NIST AI Risk
                Management Framework, ISO/IEC 42001, or industry-specific guidelines. This alignment provides several benefits:
                it leverages proven practices developed by experts, makes it easier to demonstrate compliance with regulations
                and customer requirements, and provides a foundation that can evolve as standards mature. Adapt these frameworks
                to your specific context rather than adopting them wholesale.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Roles and Responsibilities</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Clear definition of roles and responsibilities is essential for effective AI governance. Who approves new AI systems?
                Who conducts risk assessments? Who monitors for compliance? Who handles incidents? Without clear accountability,
                governance activities fall through cracks or create confusion and delays. Define roles for AI system owners, data
                stewards, risk assessors, compliance officers, and governance committee members.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Consider creating specialized AI governance roles or committees. Many organizations establish an AI Ethics Committee
                or AI Governance Board responsible for reviewing high-risk AI systems, approving exceptions to policy, and providing
                guidance on complex ethical questions. For larger organizations, dedicated AI risk or compliance roles may be warranted.
                Start with existing roles and governance structures, adding specialized functions as your AI program matures.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Policy Development Process</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Develop AI policies through a collaborative process involving diverse stakeholders. Include representatives from legal,
                compliance, information security, privacy, IT, data science, and key business units. This cross-functional approach
                ensures policies address real risks while remaining practical for implementation. It also builds buy-in across the
                organization, increasing the likelihood of successful adoption.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Start with a policy framework rather than trying to create comprehensive policies immediately. Identify the key policy
                areas you need to address based on your organization's AI usage, risk profile, and regulatory obligations. Prioritize
                the most critical policies first. For example, if your organization is heavily using generative AI for content creation,
                an acceptable use policy for generative AI should be a priority. If you're developing AI models for customer-facing
                decisions, ethical principles and technical standards for fairness testing are critical.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Once policies are drafted, don't just publish them and assume compliance. Implement a comprehensive communication and
                training program. Help employees understand what the policies mean for their day-to-day work. Provide examples and
                scenarios. Create job aids and quick reference guides. Make it easy to do the right thing. Monitor for compliance
                and gather feedback. Be prepared to clarify, adjust, and refine policies based on real-world experience. The best
                policies evolve through continuous learning and improvement.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Making Policies Effective</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The value of policies lies not in their existence but in their effectiveness. Ineffective policies that nobody follows
                or understands provide no protection and may create false confidence. To make policies effective, they must be clearly
                written, broadly communicated, properly trained, consistently enforced, and regularly updated. They must be integrated
                into existing workflows rather than existing as separate compliance exercises.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Measure policy effectiveness through both leading and lagging indicators. Leading indicators include training completion
                rates, policy awareness levels, and questions or clarifications requested. Lagging indicators include policy violations,
                security incidents, audit findings, and regulatory issues. Use these metrics to identify areas where policies need
                clarification, where additional training is needed, or where practical implementation challenges exist.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-brand-purple-light rounded-xl p-8 mt-12 border border-brand-accent/30">
              <h3 className="text-2xl font-bold text-white mb-6">Policy & Standards Checklist</h3>
              <div className="space-y-3">
                {[
                  "Develop AI acceptable use policy",
                  "Define ethical AI principles",
                  "Establish technical standards for AI development",
                  "Create AI governance roles and responsibilities",
                  "Form AI ethics or governance committee",
                  "Align policies with regulatory requirements",
                  "Create policy communication and training plan",
                  "Establish policy review and update process",
                  "Develop exception and escalation procedures",
                  "Integrate policies into existing workflows",
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
              <Link href="/framework/discovery" className="text-brand-accent hover:text-purple-400 font-semibold">
                ← Previous: Discovery & Inventory
              </Link>
              <Link href="/framework/risk" className="text-brand-accent hover:text-purple-400 font-semibold">
                Next: Risk Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
