import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Monitoring & Compliance — AI Governance Framework",
  description: "Maintain ongoing oversight, auditing, and continuous improvement of AI governance practices.",
};

export default function MonitoringPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-brand-accent font-bold text-sm mb-2">PILLAR 05</div>
            <h1 className="text-5xl font-bold text-white mb-6">Monitoring & Compliance</h1>
            <p className="text-xl text-gray-300">
              Maintain ongoing oversight and continuous improvement
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Governance as an Ongoing Practice</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI governance is not a set-it-and-forget-it activity. AI systems change over time—they're retrained on new data, updated
                with new features, or deployed to new contexts. The environment around AI systems also changes—regulations evolve, threats
                emerge, business needs shift, and societal expectations develop. Effective AI governance requires continuous monitoring
                to ensure that protections remain effective, compliance is maintained, and governance practices adapt to changing
                circumstances.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Monitoring serves multiple purposes in AI governance. It provides early warning when AI systems begin exhibiting problems,
                enabling intervention before small issues become major incidents. It demonstrates compliance with internal policies and
                external regulations, creating evidence for audits and regulatory inquiries. It generates insights that drive continuous
                improvement, revealing where governance processes work well and where they need enhancement. It builds organizational
                confidence in AI systems through transparency and accountability.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The challenge is implementing monitoring that provides real value without creating overwhelming data or alert fatigue.
                Focus monitoring on meaningful indicators that actually inform decisions or trigger actions. Automate monitoring where
                possible to enable continuous oversight at scale. Create clear accountability for monitoring results—someone must be
                responsible for reviewing metrics, investigating anomalies, and taking corrective action. Monitoring without action
                provides no value and may create false confidence.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">What to Monitor</h2>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. AI System Performance</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Monitor technical performance of AI systems to detect degradation or failures. Track prediction accuracy, precision,
                recall, and other performance metrics relevant to each system's use case. Monitor for model drift—changes in data
                distributions that cause performance degradation over time. Track system availability, response times, and error rates.
                For systems with human-in-the-loop processes, monitor human override rates which may indicate model performance issues.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Establish performance baselines and thresholds that trigger alerts when exceeded. Not every metric fluctuation requires
                immediate response, but significant deviations warrant investigation. Different AI systems may require different monitoring
                cadences—high-stakes or rapidly changing systems need more frequent monitoring than stable, lower-risk applications.
                Automated monitoring enables real-time alerting for critical systems while periodic review may suffice for others.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Fairness and Bias Metrics</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                For AI systems where fairness is a concern, implement ongoing bias monitoring. Track performance metrics disaggregated
                by relevant demographic groups or other protected characteristics. Monitor for disparate impact where seemingly neutral
                AI systems produce significantly different outcomes for different groups. Look for changes in fairness metrics over time—
                systems that were fair when deployed may develop bias as data distributions shift or as the system is used in new contexts.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Fairness monitoring requires thoughtful metric selection. Different fairness definitions are sometimes mathematically
                incompatible, so you must choose metrics appropriate to your use case and stakeholder values. Monitor multiple fairness
                dimensions where relevant—an AI system could be fair in terms of outcome equality but unfair in terms of error rates
                across groups. Complement quantitative fairness metrics with qualitative feedback from affected communities about their
                experiences with AI systems.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Policy Compliance</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Monitor adherence to AI governance policies and standards. Track policy violations such as use of unapproved AI tools,
                processing of sensitive data through unauthorized systems, or deployment of AI without required approvals. Monitor
                completion of mandatory governance activities like risk assessments, testing requirements, or training programs.
                Track exception requests and approvals to identify patterns that might indicate policy issues or training needs.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Automated compliance monitoring is valuable where possible. For example, data loss prevention tools can detect sensitive
                data being sent to unauthorized AI services. SaaS management platforms can identify shadow AI tools. Access logs reveal
                unauthorized use of AI systems. However, not all compliance can be monitored automatically—some requires periodic manual
                review, sampling, or auditing. Balance automated and manual compliance monitoring based on risk and available resources.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Security and Privacy</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Monitor AI systems for security and privacy incidents. Track access patterns to detect unauthorized access attempts or
                unusual behavior that might indicate compromise. Monitor for signs of adversarial attacks including unusual input patterns,
                systematic testing of model boundaries, or attempted extraction attacks. Track data flows to ensure sensitive data is
                handled according to privacy requirements. Monitor for potential privacy violations like unintended disclosure of
                personal information in AI outputs.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Security and privacy monitoring for AI may require specialized capabilities beyond traditional security tools. AI-specific
                attack patterns differ from conventional cyber threats. Privacy violations in AI might involve inference attacks or model
                inversion rather than traditional data breaches. Ensure your security and privacy teams understand AI-specific risks and
                have appropriate detection capabilities. Integrate AI security monitoring into your broader security operations center
                (SOC) rather than treating it as entirely separate.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Audit and Assessment</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Periodic audits provide comprehensive evaluation of AI governance effectiveness beyond ongoing monitoring. Audits examine
                whether governance policies are appropriate, controls are working as intended, risks are being managed effectively, and
                compliance is being achieved. Internal audits by your organization's audit function provide independent assessment and
                assurance. External audits by third parties can provide additional credibility and may be required by regulations or
                customer contracts.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AI governance audits should cover both technical and process dimensions. Technical audits examine AI system design,
                training data quality, model performance and fairness, security controls, and privacy protections. Process audits
                evaluate governance structures, policy compliance, risk assessment processes, approval workflows, monitoring practices,
                and incident response capabilities. Comprehensive audits assess the entire AI governance program, while focused audits
                might examine specific high-risk systems or governance processes.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Treat audit findings as opportunities for improvement, not just compliance exercises. Analyze root causes behind audit
                issues. Are problems due to inadequate policies, ineffective controls, insufficient training, or lack of resources?
                Develop action plans to address findings with clear owners and timelines. Track remediation progress. Use audit insights
                to identify systemic improvements beyond fixing individual issues. Regular audits create a rhythm of continuous
                improvement in your AI governance program.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Continuous Improvement</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Monitoring and audit data only provide value if they drive improvement. Establish processes for reviewing monitoring
                results, analyzing trends, identifying improvement opportunities, and implementing changes. Create forums for discussing
                governance metrics and challenges—regular governance review meetings, retrospectives after AI incidents, or periodic
                strategic planning sessions. Ensure improvement initiatives have clear ownership, resources, and accountability.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Learn from external sources as well as internal experience. Monitor regulatory developments in AI governance and assess
                implications for your program. Follow industry best practices and emerging standards. Learn from publicized AI incidents
                at other organizations—what can you learn to prevent similar issues? Participate in industry groups, working groups, or
                peer forums to exchange governance insights and practices. AI governance is an evolving field where collective learning
                accelerates progress.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Measure your governance program's maturity over time using frameworks like the AI governance maturity model. Regular
                maturity assessments reveal progress and identify areas still needing development. Set goals for maturity advancement—
                moving from ad-hoc to initial, initial to defined, defined to managed, or managed to optimized. Celebrate progress while
                maintaining focus on continuous improvement. AI governance excellence is a journey, not a destination.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Reporting and Transparency</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Effective governance requires transparency and communication. Develop reporting mechanisms that communicate AI governance
                status to different stakeholders. Executive leadership needs high-level summaries of AI risk posture, compliance status,
                and major initiatives. Business unit leaders need insights into how governance affects their AI initiatives and what
                support is available. Technical teams need detailed guidance and feedback on governance requirements. Regulators may
                require specific compliance reporting.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Consider public transparency where appropriate. Some organizations publish AI transparency reports describing their AI
                use cases, governance practices, and fairness metrics. This external transparency can build stakeholder trust, demonstrate
                commitment to responsible AI, and set industry standards. Even if full public transparency isn't appropriate for your
                organization, consider transparency to customers, partners, or other stakeholders affected by your AI systems. Transparency
                doesn't mean revealing proprietary details but being open about governance practices and commitments.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Make governance metrics and reports actionable and accessible. Dashboards that visualize key metrics enable quick
                understanding of governance status. Automated reporting reduces manual effort and ensures consistency. Clear
                communication about what metrics mean and what actions are needed makes reports useful rather than just informative.
                The goal is not just to report on governance but to enable better governance decisions through clear, timely,
                actionable information.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-brand-purple-light rounded-xl p-8 mt-12 border border-brand-accent/30">
              <h3 className="text-2xl font-bold text-white mb-6">Monitoring & Compliance Checklist</h3>
              <div className="space-y-3">
                {[
                  "Implement AI system performance monitoring",
                  "Establish fairness and bias monitoring for relevant systems",
                  "Deploy policy compliance monitoring",
                  "Monitor security and privacy for AI systems",
                  "Conduct regular AI governance audits",
                  "Create governance review and improvement processes",
                  "Develop stakeholder reporting mechanisms",
                  "Track and remediate audit findings",
                  "Measure governance maturity over time",
                  "Establish transparency practices for AI governance",
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
              <Link href="/framework/controls" className="text-brand-accent hover:text-purple-400 font-semibold">
                ← Previous: Controls & Guardrails
              </Link>
              <Link href="/framework" className="text-brand-accent hover:text-purple-400 font-semibold">
                Back to Framework →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
