import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Code2, 
  Settings, 
  Play, 
  Star,
  Quote,
  Users,
  Building,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agent-harmony.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import workflowImage from "@/assets/workflow-assistance.jpg";
import supportImage from "@/assets/customer-support.jpg";

const Index = () => {
  const features = [
    {
      icon: Code2,
      title: "Register in Seconds",
      description: "Import or connect agents via API, Swagger, or uploads. Automatic schema extraction and dependency mapping."
    },
    {
      icon: Settings,
      title: "Simulate & Compile",
      description: "Validate flows pre-deploy with dependency checks. Comprehensive testing before production deployment."
    },
    {
      icon: Play,
      title: "Run & Monitor",
      description: "Trigger, pause, parallelize, and trace runs in real time. Complete visibility and control over execution."
    }
  ];

  const useCases = [
    "Customer-support bots that intelligently route and resolve issues",
    "IoT automation that coordinates devices and responds to conditions", 
    "Data-processing pipelines that transform and validate information",
    "AI-driven workflows that make decisions and adapt to context"
  ];

  const testimonials = [
    {
      quote: "AgentRuntime transformed how we handle customer support. We've reduced response times by 75% while improving satisfaction scores.",
      author: "Sarah Chen",
      role: "Engineering Lead",
      company: "TechFlow"
    },
    {
      quote: "The platform's reliability and monitoring capabilities gave us confidence to deploy AI agents in production. Absolutely game-changing.",
      author: "Marcus Rodriguez", 
      role: "CTO",
      company: "DataStream"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden dark:space-grid">
        {/* Futuristic background elements for dark mode */}
        <div className="absolute inset-0 dark:opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full dark:pulse-glow"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full dark:float-particle"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-primary/50 rounded-full dark:pulse-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-accent rounded-full dark:float-particle" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge variant="outline" className="mb-6 bg-white/10 text-primary border-primary/20 backdrop-blur-sm">
                API-First Agent Orchestration
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 fade-in-up">
                Orchestrate AI Agents
                <span className="text-gradient block">at Scale</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 mb-8 fade-in-up">
                API-first runtime for importing, testing, and running your agents and tools—no frontend needed. 
                Build production-ready agent workflows with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 fade-in-up">
                <Button variant="hero" size="xl" className="gap-2" asChild>
                  <Link to="/pricing">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="gap-2" asChild>
                  <Link to="/docs">
                    See Docs
                    <Code2 className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative fade-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Friendly AI agent working harmoniously with human developer in a beautiful sky environment"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-sky opacity-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background dark:space-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Dark mode floating elements */}
          <div className="absolute inset-0 dark:opacity-30 pointer-events-none">
            <div className="absolute top-10 right-20 w-1 h-1 bg-accent rounded-full dark:float-particle"></div>
            <div className="absolute bottom-20 left-10 w-2 h-2 bg-primary/50 rounded-full dark:pulse-glow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="card-gradient hover-lift transition-all duration-300 border-0 light-beam dark:border-primary/20"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20 dark:shadow-glow">
                      <IconComponent className="h-8 w-8 text-primary dark:glow-text" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground dark:glow-text">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Real-World Use Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From customer support to IoT automation, AgentRuntime powers intelligent workflows across industries.
            </p>
          </div>
          
          {/* Use Cases Grid with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Customer Support Showcase */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={supportImage} 
                  alt="Friendly AI agent providing customer support assistance"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    Customer Support
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {useCases.slice(0, 2).map((useCase, index) => (
                  <Card 
                    key={index}
                    className="card-gradient hover-lift transition-all duration-300 border-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-foreground font-medium">{useCase}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Workflow Management Showcase */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={workflowImage} 
                  alt="AI agent assisting with workflow orchestration and data management"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    Workflow Automation
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {useCases.slice(2, 4).map((useCase, index) => (
                  <Card 
                    key={index + 2}
                    className="card-gradient hover-lift transition-all duration-300 border-0"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-foreground font-medium">{useCase}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/use-cases">
                Explore All Use Cases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="Multiple friendly AI agents collaborating with diverse humans in a cloud workspace"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              {/* Floating collaboration indicators */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="space-y-6 fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Human-AI
                <span className="text-gradient block">Collaboration</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our friendly AI agents are designed to work alongside humans, not replace them. 
                Experience seamless collaboration where agents enhance human capabilities 
                and provide intelligent assistance without friction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Intuitive interfaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Transparent decisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Human oversight</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Adaptive learning</span>
                </div>
              </div>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link to="/features">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Engineering Teams
            </h2>
            <p className="text-xl text-muted-foreground">
              See what leaders are saying about AgentRuntime
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="card-gradient hover-lift transition-all duration-300 border-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero dark:space-grid relative overflow-hidden">
        {/* Futuristic space particles for dark mode */}
        <div className="absolute inset-0 dark:opacity-40 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-accent rounded-full dark:float-particle"></div>
          <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary/50 rounded-full dark:pulse-glow"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-accent rounded-full dark:float-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-primary/30 rounded-full dark:pulse-glow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:bg-background/20 dark:border-primary/30 light-beam">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6 dark:glow-text dark:pulse-glow" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 dark:glow-text">
              Start Your Free Trial
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using AgentRuntime to orchestrate their AI agents. 
              Get started in minutes with our comprehensive documentation and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="gap-2 dark:shadow-glow" asChild>
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="gap-2 dark:border-primary/50 dark:hover:bg-primary/10" asChild>
                <Link to="/contact">
                  Contact Sales
                  <Building className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 5 agents included • Community support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
