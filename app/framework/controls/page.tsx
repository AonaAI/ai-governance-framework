import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Controls & Guardrails — AI Governance Framework",
  description: "Implement technical and procedural protections to ensure safe, responsible AI deployment and operation.",
};

export default function ControlsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-brand-accent font-bold text-sm mb-2">PILLAR 04</div>
            <h1 className="text-5xl font-bold text-white mb-6">Controls & Guardrails</h1>
            <p className="text-xl text-gray-300">
              Implement protections to ensure safe AI deployment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">From Risk to Protection</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Risk assessment identifies what could go wrong with AI systems. Controls and guardrails are the protections you implement
                to prevent those risks from materializing. While policies define what should happen and risk assessments identify what
                could happen, controls ensure that policies are actually followed and risks are actually managed. Effective controls
                are the difference between AI governance as aspiration and AI governance as reality.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Controls exist on a spectrum from preventive to detective to corrective. Preventive controls stop problems before they
                occur—for example, blocking sensitive data from being sent to public AI services. Detective controls identify issues
                when they happen—like monitoring for bias in AI outputs. Corrective controls respond to problems after detection—such
                as incident response procedures for AI failures. A comprehensive control framework includes all three types, creating
                defense in depth that doesn't rely on any single protection mechanism.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The challenge with AI controls is balancing protection with enablement. Overly restrictive controls can stifle innovation
                and frustrate teams trying to leverage AI for business value. Insufficient controls leave the organization exposed to
                significant risks. The goal is intelligent controls that are risk-proportionate—stringent for high-risk AI applications,
                lighter-touch for low-risk uses. This risk-based approach focuses resources where they matter most while avoiding
                unnecessary friction for lower-risk AI activities.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Technical Controls</h2>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Data Protection Controls</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Protecting sensitive data is fundamental to AI governance. Implement data classification and handling requirements that
                specify which data can be used with which AI systems. Deploy data loss prevention (DLP) tools to prevent sensitive data
                from being sent to unauthorized AI services. Use encryption for data at rest and in transit. Implement access controls
                to limit who can feed data into AI systems or access AI outputs. For particularly sensitive use cases, consider
                privacy-enhancing technologies like differential privacy, federated learning, or synthetic data generation.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Data controls must address the full AI lifecycle. Training data requires protection during collection, storage, and
                preprocessing. Input data must be validated and sanitized before being processed by AI systems. Output data—which may
                inadvertently reveal sensitive information—needs appropriate handling. For AI systems processing personal data, implement
                controls aligned with privacy regulations including data minimization, purpose limitation, and retention policies.
                Document data flows and maintain data lineage to understand how data moves through AI systems.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Model Security Controls</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI models themselves are valuable assets requiring protection. Implement access controls limiting who can access,
                modify, or deploy models. Use model versioning and change management processes to track model evolution and enable
                rollback if needed. Protect models from extraction attacks through techniques like model watermarking, API rate limiting,
                and output filtering. For high-value proprietary models, consider additional protections like model encryption or
                executing models in secure enclaves.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Defense against adversarial attacks requires specific technical controls. Implement input validation to detect and
                reject malicious inputs designed to manipulate model behavior. Use adversarial training to make models more robust to
                attack. Deploy anomaly detection to identify unusual patterns that might indicate attack attempts. For critical AI
                systems, implement ensemble approaches or consensus mechanisms that make successful attacks harder. Monitor for signs
                of model manipulation or poisoning attacks, especially when models are retrained on new data.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Explainability and Transparency Controls</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                For many AI applications, especially those affecting individual rights or high-stakes decisions, explainability is
                essential. Implement controls that provide appropriate transparency into AI decision-making. This might include
                feature importance scores showing which factors most influenced a decision, counterfactual explanations showing
                what would need to change for a different outcome, confidence scores indicating prediction certainty, or audit trails
                documenting the decision process.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The level of explainability should match the risk and regulatory requirements of the use case. Simple, inherently
                interpretable models may be appropriate for high-stakes decisions where explainability is paramount—even if they
                sacrifice some accuracy. More complex models can be used for lower-stakes applications where performance matters
                more than interpretability. For complex models in higher-risk applications, implement post-hoc explainability
                techniques and ensure explanations are validated for accuracy and usefulness, not just technically generated.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Process Controls</h2>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Approval Workflows</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Implement approval workflows matched to AI system risk levels. High-risk AI systems should require review and approval
                from multiple stakeholders before deployment—potentially including data science leadership, security teams, legal counsel,
                ethics reviewers, and business owners. Medium-risk systems might need approval from AI system owners and risk assessors.
                Low-risk systems could follow streamlined approval processes focused on basic policy compliance.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Approval workflows should be built into development processes, not bolted on afterward. Integrate governance checkpoints
                into your AI development lifecycle. Common checkpoints include use case approval before development begins, data approval
                before model training, model approval before deployment, and post-deployment review. Make approval processes clear and
                efficient—lengthy, unclear approval processes encourage teams to work around governance rather than with it.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Testing and Validation Requirements</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Establish mandatory testing requirements before AI systems can be deployed. Testing should cover both functional
                performance and governance requirements. Functional testing validates that the AI system achieves acceptable accuracy,
                precision, recall, or other performance metrics relevant to the use case. Governance testing evaluates fairness across
                demographic groups, robustness to adversarial examples, privacy protections, explainability quality, and compliance
                with regulatory requirements.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Create standardized testing protocols and acceptance criteria for different types of AI systems. Document testing
                results and maintain testing artifacts for audit purposes. For high-risk systems, consider independent validation
                where testing is performed by someone other than the development team. Implement automated testing where possible to
                ensure consistent evaluation and enable continuous testing as models are updated or retrained. Testing should not
                be a one-time gate but an ongoing practice throughout the AI lifecycle.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Human Oversight and Review</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                For AI systems making or significantly influencing important decisions, human oversight is a critical control. Define
                what decisions require human review, who is qualified to perform that review, what information reviewers need, and
                how reviewer decisions are documented. Human oversight is most effective when reviewers have sufficient context,
                appropriate expertise, enough time to make thoughtful decisions, and the authority to override AI recommendations.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Be aware of automation bias—the tendency for humans to over-rely on AI recommendations without sufficient critical
                evaluation. Combat automation bias through reviewer training, presenting AI outputs in ways that encourage critical
                thinking, providing diverse perspectives or alternative recommendations, and rotating reviewers to prevent complacency.
                Monitor human oversight effectiveness by tracking override rates, measuring decision quality, and gathering feedback
                from reviewers about challenges they face.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Incident Response</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Despite preventive controls, AI incidents will occur. Establish incident response procedures specifically for AI systems.
                Define what constitutes an AI incident—this might include significant bias in outputs, security breaches, privacy
                violations, regulatory violations, significant errors affecting business operations, or reputational issues from
                AI behavior. Create clear escalation paths and response procedures for different incident severities.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI incident response may require capabilities beyond traditional IT incident response. You may need to rapidly assess
                model behavior, analyze training data for contamination, evaluate fairness across demographics, or explain AI decisions
                to regulators or affected individuals. Build relationships between AI governance teams, incident response teams, legal
                counsel, and communications teams before incidents occur. Conduct tabletop exercises to practice AI incident response.
                Learn from incidents through post-incident reviews that identify root causes and drive continuous improvement.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Making Controls Practical</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Controls work only if people actually use them. Design controls to be as frictionless as possible while still providing
                necessary protection. Automate control enforcement where feasible—automated controls are more reliable and less burdensome
                than manual processes. Integrate controls into existing tools and workflows rather than requiring separate compliance
                activities. Provide clear guidance and templates that make it easy to comply with control requirements.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Regularly review control effectiveness. Are controls preventing the risks they're designed to address? Are they creating
                excessive friction or driving workarounds? Are they keeping pace with evolving AI technology and threats? Treat controls
                as living mechanisms that adapt based on experience, not static rules set once and never revisited. The best controls
                strike the right balance between protection and enablement, evolving as your organization's AI capabilities and
                risk landscape mature.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-brand-purple-light rounded-xl p-8 mt-12 border border-brand-accent/30">
              <h3 className="text-2xl font-bold text-white mb-6">Controls & Guardrails Checklist</h3>
              <div className="space-y-3">
                {[
                  "Implement data protection controls for AI systems",
                  "Deploy model security controls and access management",
                  "Establish explainability and transparency requirements",
                  "Create risk-based approval workflows",
                  "Define testing and validation requirements",
                  "Implement human oversight for high-risk decisions",
                  "Develop AI incident response procedures",
                  "Deploy monitoring and alerting for control violations",
                  "Automate control enforcement where possible",
                  "Regularly review and update control effectiveness",
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
              <Link href="/framework/risk" className="text-brand-accent hover:text-purple-400 font-semibold">
                ← Previous: Risk Assessment
              </Link>
              <Link href="/framework/monitoring" className="text-brand-accent hover:text-purple-400 font-semibold">
                Next: Monitoring & Compliance →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
