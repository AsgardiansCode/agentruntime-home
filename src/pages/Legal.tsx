import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const Legal = () => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Legal<span className="text-gradient block">Information</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p className="text-lg text-muted-foreground">
              Last updated: March 1, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Switcher */}
        <ScrollReveal variant="fade-up">
          <div className="flex gap-2 mb-10 p-1 bg-secondary rounded-xl w-fit mx-auto">
            {[
              { id: "privacy" as const, label: "Privacy Policy" },
              { id: "terms" as const, label: "Terms of Service" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Privacy Policy */}
        {activeTab === "privacy" && (
          <ScrollReveal variant="fade-up">
            <Card className="card-gradient">
              <CardContent className="p-8 md:p-12 prose-sm max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      AgentRuntime Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p><strong className="text-foreground">Personal Information:</strong> Name, email address, company name, billing information, and other details you provide when creating an account or contacting us.</p>
                      <p><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our platform, including API calls, agent configurations, run logs, and performance metrics.</p>
                      <p><strong className="text-foreground">Device Information:</strong> Browser type, IP address, operating system, and other technical information collected automatically when you access our services.</p>
                      <p><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Provide, maintain, and improve our platform and services</li>
                      <li>Process transactions and send billing notifications</li>
                      <li>Respond to customer support requests and inquiries</li>
                      <li>Send product updates, security alerts, and administrative messages</li>
                      <li>Analyze usage patterns to improve user experience</li>
                      <li>Detect, prevent, and address technical issues and security threats</li>
                      <li>Comply with legal obligations and enforce our terms</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3. Data Sharing & Disclosure</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">We do not sell your personal information. We may share data with:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist in operating our platform (hosting, analytics, payment processing)</li>
                      <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                      <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong className="text-foreground">With Your Consent:</strong> When you explicitly authorize us to share information</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">4. Data Security</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement industry-standard security measures including encryption at rest and in transit, access controls, regular security audits, and SOC 2 Type II compliance. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">5. Data Retention</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us at privacy@agentruntime.io.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Access, correct, or delete your personal data</li>
                      <li>Object to or restrict processing of your data</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                      <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">7. Contact Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about this Privacy Policy, please contact us at{" "}
                      <a href="mailto:privacy@agentruntime.io" className="text-primary hover:underline">privacy@agentruntime.io</a> or write to AgentRuntime Inc., 123 Innovation Drive, San Francisco, CA 94105.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}

        {/* Terms of Service */}
        {activeTab === "terms" && (
          <ScrollReveal variant="fade-up">
            <Card className="card-gradient">
              <CardContent className="p-8 md:p-12 prose-sm max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Terms of Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms of Service ("Terms") govern your access to and use of AgentRuntime's platform, APIs, and related services. By using our services, you agree to be bound by these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using AgentRuntime, you agree to these Terms and our Privacy Policy. If you are using the service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2. Account Registration</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>You must provide accurate and complete registration information</li>
                      <li>You are responsible for maintaining the security of your account credentials</li>
                      <li>You must notify us immediately of any unauthorized access</li>
                      <li>You must be at least 18 years old to create an account</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3. Acceptable Use</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Use the service for any unlawful purpose or in violation of any laws</li>
                      <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                      <li>Interfere with or disrupt the integrity or performance of the service</li>
                      <li>Reverse engineer, decompile, or disassemble any part of the service</li>
                      <li>Use the service to transmit malware, viruses, or harmful code</li>
                      <li>Exceed rate limits or usage quotas without authorization</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">4. Service Plans & Billing</h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days' notice.</p>
                      <p>If you exceed your plan's usage limits, we may throttle your access or charge overage fees as specified in your plan details.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">5. Intellectual Property</h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p><strong className="text-foreground">Our Property:</strong> The AgentRuntime platform, APIs, documentation, and all related intellectual property remain our exclusive property.</p>
                      <p><strong className="text-foreground">Your Content:</strong> You retain ownership of all data, agent configurations, and content you upload to or create through the platform.</p>
                      <p><strong className="text-foreground">License:</strong> You grant us a limited license to use your content solely to provide and improve the service.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">6. Service Level Agreement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For Team and Enterprise plans, we commit to 99.9% uptime. Downtime exclusions include scheduled maintenance (with 48-hour notice), force majeure events, and issues caused by third-party services. Service credits are available for qualifying downtime events.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">7. Limitation of Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, AgentRuntime shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">8. Termination</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Either party may terminate the agreement at any time. Upon termination, your right to access the service will cease immediately. We will retain your data for 30 days after termination, during which you may export it. After 30 days, data will be permanently deleted.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">9. Governing Law</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-3">10. Contact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms, please contact us at{" "}
                      <a href="mailto:legal@agentruntime.io" className="text-primary hover:underline">legal@agentruntime.io</a> or write to AgentRuntime Inc., 123 Innovation Drive, San Francisco, CA 94105.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};

export default Legal;
