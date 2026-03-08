import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, MapPin, Users, Target, Lightbulb, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import aboutBackground from "@/assets/about-background.jpg";

const About = () => {
  const team = [
    { name: "Sarah Chen", role: "CEO & Co-Founder", bio: "Former VP of Engineering at Stripe. Expert in distributed systems and developer tools with 15+ years experience." },
    { name: "Marcus Rodriguez", role: "CTO & Co-Founder", bio: "Ex-Principal Engineer at Google. Specialist in AI/ML infrastructure and scalable agent orchestration platforms." },
    { name: "Dr. Emily Watson", role: "VP of Product", bio: "Former Product Lead at Microsoft Azure. PhD in Computer Science with focus on human-AI interaction design." },
    { name: "David Kim", role: "Head of Engineering", bio: "Previously Senior Staff Engineer at Uber. Builds developer platforms that scale to millions of operations daily." }
  ];

  const values = [
    { icon: Target, title: "Openness", description: "We believe in transparent development, open APIs, and fostering a collaborative ecosystem that benefits everyone." },
    { icon: Shield, title: "Reliability", description: "Our platform is built with enterprise-grade reliability, ensuring your agents run smoothly in production environments." },
    { icon: Lightbulb, title: "Innovation", description: "We continuously push the boundaries of what's possible in AI agent orchestration and developer experience." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative py-32 overflow-hidden"
        style={{ backgroundImage: `url(${aboutBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About<span className="text-gradient block">AgentRuntime</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to empower developers to orchestrate AI agents with confidence and scale. Founded by experienced engineers who understand the challenges of building production AI systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal variant="fade-up">
          <div className="mb-20">
            <Card className="card-gradient">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  "Empower developers to orchestrate AI agents with confidence and scale. We believe that powerful AI agent workflows should be accessible to every developer, not just those with massive infrastructure teams."
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fade-left">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>AgentRuntime was born from frustration. Our founders spent years building and scaling AI systems at major tech companies, repeatedly encountering the same challenges: complex agent coordination, unreliable execution, and lack of proper tooling.</p>
                  <p>In 2023, we decided to solve this once and for all. We envisioned a platform where developers could focus on building intelligent agents rather than wrestling with infrastructure, monitoring, and orchestration complexity.</p>
                  <p>Today, AgentRuntime powers thousands of agent workflows for companies ranging from innovative startups to Fortune 500 enterprises, processing millions of agent interactions daily with industry-leading reliability.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-right">
              <Card className="card-gradient">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { val: "2023", label: "Founded" },
                        { val: "500+", label: "Companies" },
                        { val: "1M+", label: "Agent Runs" },
                        { val: "99.9%", label: "Uptime" },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="text-3xl font-bold text-primary">{stat.val}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        <div className="mb-20">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Experienced engineers and researchers from leading tech companies, united by a passion for developer tools and AI innovation.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} variant="fade-up" delay={(index % 4) * 100}>
                <Card className="card-gradient hover-lift transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide our decisions and shape our culture.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <ScrollReveal key={value.title} variant="fade-up" delay={index * 100}>
                  <Card className="card-gradient hover-lift transition-all duration-300 text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal variant="scale-in">
          <div className="mb-20">
            <Card className="card-gradient">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Team</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">We're always looking for talented engineers, designers, and researchers who share our passion for building developer tools that matter.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">View Open Roles</Button>
                  <Button variant="outline" size="lg">Life at AgentRuntime</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <div className="text-center">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">San Francisco, CA</span>
              </div>
              <p className="text-muted-foreground mb-6">Headquarters in the heart of Silicon Valley, with a global remote-first culture.</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon"><Github className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon"><Linkedin className="h-5 w-5" /></Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
