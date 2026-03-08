import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, Activity, BarChart3, Settings } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import howitworksBackground from "@/assets/howitworks-background.jpg";

const HowItWorks = () => {
  const steps = [
    { number: "01", icon: Settings, title: "Connect Your Agents", description: "Register via API or UI, fetch tool definitions automatically. Import from multiple sources including Swagger, OpenAPI, or manual configuration.", details: ["API endpoint registration", "Tool definition extraction", "Dependency mapping", "Schema validation"] },
    { number: "02", icon: CheckCircle, title: "Configure & Validate", description: "Fill environment keys, run schema linting, simulate flows. Comprehensive pre-flight checks ensure your agents work correctly before deployment.", details: ["Environment setup", "Schema linting", "Flow simulation", "Dependency checks"] },
    { number: "03", icon: Play, title: "Execute & Orchestrate", description: "Trigger workflows, parallel runs, loop controls. Advanced orchestration with real-time execution management and dynamic scaling.", details: ["Workflow triggers", "Parallel execution", "Loop controls", "Dynamic scaling"] },
    { number: "04", icon: Activity, title: "Monitor & Trace", description: "Real-time context, logs, Jaeger spans, pause/edit mid-run. Complete visibility into execution with interactive debugging capabilities.", details: ["Real-time monitoring", "Distributed tracing", "Interactive debugging", "Mid-run modifications"] },
    { number: "05", icon: BarChart3, title: "Analyze & Optimize", description: "View analytics, spot bottlenecks, auto-tune patterns. Data-driven insights help you optimize performance and reduce costs.", details: ["Performance analytics", "Bottleneck detection", "Pattern optimization", "Cost analysis"] }
  ];

  const codeExample = `import agentruntime

# Initialize the runtime client
client = agentruntime.Client(api_key="your_api_key")

# Start a new workflow run
run = client.workflows.start(
    workflow_id="customer-support-v2",
    inputs={
        "customer_query": "Need help with billing",
        "priority": "high"
    },
    context={
        "session_id": "sess_123",
        "user_id": "user_456"
    }
)

# Monitor execution
print(f"Run started: {run.id}")
print(f"Status: {run.status}")

# Get real-time updates
for event in client.runs.stream(run.id):
    print(f"Event: {event.type} - {event.data}")`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ backgroundImage: `url(${howitworksBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How AgentRuntime<span className="text-gradient block">Works</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple 5-step process to orchestrate your AI agents with confidence. From registration to optimization, we've got you covered.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Steps with connecting line */}
        <div className="relative space-y-16 mb-20">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={step.number} variant={isEven ? "fade-left" : "fade-right"}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-lg px-4 py-2 font-mono bg-primary/5 text-primary border-primary/20">{step.number}</Badge>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><IconComponent className="h-6 w-6 text-primary" /></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span className="text-sm text-muted-foreground">{detail}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="card-gradient hover-lift transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-full h-48 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                          <IconComponent className="h-16 w-16 text-primary/30" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Simple API Integration</h2>
              <p className="text-lg text-muted-foreground mb-6">Get started with just a few lines of code. Our Python SDK makes it easy to integrate AgentRuntime into your existing workflows.</p>
              <ul className="space-y-3">
                {["RESTful API with comprehensive documentation", "Python, Go, and JavaScript SDKs available", "WebSocket support for real-time updates"].map((item) => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span className="text-foreground">{item}</span></li>
                ))}
              </ul>
            </div>
            <Card className="card-gradient">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto rounded-lg bg-secondary/50 p-4 border border-border"><code className="text-muted-foreground font-mono">{codeExample}</code></pre>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale-in">
          <div className="text-center">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to see it in action?</h2>
              <p className="text-muted-foreground mb-6">Try our interactive sandbox and see how easy it is to orchestrate AI agents.</p>
              <Button variant="hero" size="lg" className="gap-2"><Play className="h-5 w-5" />See Live Demo</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default HowItWorks;
