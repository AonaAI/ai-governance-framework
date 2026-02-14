import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Risk Assessment — AI Governance Framework",
  description: "Learn how to systematically evaluate and prioritize AI-related risks including bias, security, compliance, and operational risks.",
};

export default function RiskPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-brand-accent font-bold text-sm mb-2">PILLAR 03</div>
            <h1 className="text-5xl font-bold text-white mb-6">Risk Assessment</h1>
            <p className="text-xl text-gray-300">
              Systematically evaluate and prioritize AI-related risks
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Understanding AI Risk</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI systems introduce unique risks that traditional IT risk frameworks don't fully address. Unlike conventional software,
                AI systems learn from data, make probabilistic predictions, and can exhibit unexpected behaviors. They may perpetuate or
                amplify biases present in training data. They can be vulnerable to adversarial attacks specifically designed to manipulate
                AI outputs. They raise novel questions about accountability when automated decisions go wrong. Effective AI governance
                requires understanding and managing these distinctive risks.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Risk assessment for AI must be systematic and comprehensive, yet practical enough to scale across your organization's
                AI portfolio. Not every AI system requires exhaustive risk analysis—a content recommendation algorithm presents very
                different risks than an AI system making credit decisions or diagnosing medical conditions. The key is matching the
                rigor of risk assessment to the actual risk level, focusing detailed analysis on high-stakes applications while
                maintaining lighter-touch oversight for lower-risk uses.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Risk assessment is not a one-time gate to pass before deployment. AI systems exist in dynamic environments where
                risks evolve over time. Model performance can degrade as real-world data distributions shift. New attack vectors
                emerge. Regulations change. Social norms and expectations evolve. Effective risk management requires ongoing
                assessment, monitoring for risk indicators, and adaptation to changing circumstances. Build continuous risk
                assessment into your AI lifecycle, not just upfront evaluation.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Key Risk Categories</h2>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Fairness and Bias Risks</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI systems can perpetuate, amplify, or introduce biases that lead to unfair or discriminatory outcomes. These biases
                may stem from training data that reflects historical discrimination, from proxy variables that correlate with protected
                characteristics, from algorithms that optimize for outcomes that happen to disadvantage certain groups, or from
                deployment contexts that affect different populations differently. Bias risks are particularly acute when AI informs
                decisions about employment, lending, housing, education, healthcare, or criminal justice.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Assessing fairness risks requires both technical analysis and contextual understanding. Technical assessments examine
                training data for demographic representation, test model performance across different groups, and measure fairness
                metrics appropriate to the use case. But technical analysis alone is insufficient—you must also understand the social
                context, potential harms, and affected stakeholders. Involve domain experts, affected communities where possible, and
                ethics expertise in fairness assessments. Consider not just statistical fairness measures but actual impact on people.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Security and Privacy Risks</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI systems face both traditional security risks and novel AI-specific threats. Traditional risks include unauthorized
                access to models or training data, data breaches exposing sensitive information used in AI systems, and insider threats
                from those with access to AI systems. AI-specific risks include model extraction attacks where adversaries steal model
                functionality, adversarial attacks that manipulate inputs to cause incorrect predictions, data poisoning where training
                data is deliberately corrupted, and model inversion attacks that extract information about training data.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Privacy risks are particularly significant for AI systems that process personal data. AI models can memorize and
                inadvertently reveal sensitive information from training data. They enable new forms of inference, potentially
                deriving sensitive attributes from seemingly innocuous data. Large language models may be prompted to generate
                private information they've learned. Assess what data your AI systems process, how that data is protected, what
                inferences the system might enable, and whether privacy-enhancing techniques like differential privacy or federated
                learning are appropriate.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Regulatory and Compliance Risks</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The regulatory landscape for AI is evolving rapidly. The EU AI Act creates a comprehensive risk-based regulatory
                framework with strict requirements for high-risk AI systems. GDPR includes provisions affecting automated decision-making.
                Industry-specific regulations increasingly address AI—financial services, healthcare, employment, and other sectors
                have existing regulations that apply to AI systems. Even absent AI-specific regulation, general laws around discrimination,
                consumer protection, and liability apply to AI-enabled decisions and outputs.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Compliance risk assessment must identify which regulations apply to each AI system based on its use case, geographic
                scope, industry sector, and the types of decisions it makes. Map regulatory requirements to technical and operational
                controls. For example, GDPR's right to explanation may require implementing explainability features in AI systems
                affecting EU data subjects. The EU AI Act's requirements for high-risk systems include conformity assessments,
                quality management systems, and ongoing monitoring. Stay informed about regulatory developments and build compliance
                requirements into AI system design, not as an afterthought.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Operational and Performance Risks</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI systems can fail in ways that impact business operations. Models may produce incorrect predictions or outputs,
                leading to bad decisions or customer dissatisfaction. Performance can degrade over time as real-world data distributions
                shift away from training data—a phenomenon known as model drift. Dependencies on external AI services create risks if
                those services become unavailable, change functionality, or increase costs. Integration failures can occur when AI
                systems interact with other business systems in unexpected ways.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Assess operational risks by understanding the business process context. What happens if the AI system provides incorrect
                output? What backup processes exist? How quickly would errors be detected? What is the potential business impact—
                financial loss, reputational damage, operational disruption, customer harm? Consider both the likelihood of failure
                and the magnitude of potential impact. For critical AI applications, ensure robust monitoring, human oversight,
                and contingency plans for AI system failures.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Risk Assessment Process</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A structured risk assessment process ensures consistent, thorough evaluation of AI systems. Start by clearly defining
                the AI system scope and use case. Document the system's purpose, functionality, data sources, decision-making role,
                and stakeholders. Identify the risk categories relevant to this specific system—not all risks apply to all AI applications.
                For example, fairness risks are paramount for hiring algorithms but less relevant for image compression tools.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                For each relevant risk category, assess both likelihood and impact. Use a combination of technical analysis, expert
                judgment, and stakeholder input. Technical analysis might include bias testing, security assessments, or performance
                validation. Expert judgment from data scientists, security professionals, legal counsel, and domain experts provides
                essential context. Stakeholder input—especially from those potentially affected by the AI system—reveals risks that
                technical experts might miss.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Document identified risks in a risk register with clear descriptions, likelihood and impact ratings, risk owners,
                and proposed mitigation strategies. Prioritize risks based on their severity and your organization's risk tolerance.
                High-severity risks require mitigation before deployment. Medium risks may be acceptable with monitoring and
                contingency plans. Low risks might be accepted with minimal additional controls. The risk assessment should culminate
                in a clear recommendation: proceed with deployment, proceed with specified mitigations, or do not proceed until
                risks are addressed.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">From Assessment to Action</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Risk assessment is valuable only if it leads to action. For each identified risk, develop specific mitigation strategies.
                Some risks can be reduced through technical controls like bias testing, adversarial training, or differential privacy.
                Others require process controls like human review, approval workflows, or usage restrictions. Some risks may be transferred
                through insurance or contractual protections with vendors. Residual risks that cannot be eliminated must be explicitly
                accepted by appropriate stakeholders with clear understanding of potential consequences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ensure risk assessment results are communicated to decision-makers in actionable terms. Avoid purely technical risk
                descriptions that business leaders cannot interpret. Translate technical risks into business impacts. Provide clear
                recommendations with options and tradeoffs. Make it easy for leaders to make informed decisions about risk acceptance
                and mitigation investments. The goal is not to eliminate all risk—that would preclude using AI—but to ensure risks
                are understood, managed appropriately, and aligned with organizational risk tolerance.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-brand-purple-light rounded-xl p-8 mt-12 border border-brand-accent/30">
              <h3 className="text-2xl font-bold text-white mb-6">Risk Assessment Checklist</h3>
              <div className="space-y-3">
                {[
                  "Define AI system scope and use case",
                  "Assess fairness and bias risks",
                  "Evaluate security and privacy risks",
                  "Review regulatory compliance requirements",
                  "Analyze operational and performance risks",
                  "Document risks in risk register",
                  "Prioritize risks by severity and likelihood",
                  "Develop mitigation strategies for high-priority risks",
                  "Obtain stakeholder input on risk assessment",
                  "Establish ongoing risk monitoring processes",
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
              <Link href="/framework/policy" className="text-brand-accent hover:text-purple-400 font-semibold">
                ← Previous: Policy & Standards
              </Link>
              <Link href="/framework/controls" className="text-brand-accent hover:text-purple-400 font-semibold">
                Next: Controls & Guardrails →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
