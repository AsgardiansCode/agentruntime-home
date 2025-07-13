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
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 bg-white/10 text-primary border-primary/20 backdrop-blur-sm">
              API-First Agent Orchestration
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 fade-in-up">
              Orchestrate AI Agents
              <span className="text-gradient block">at Scale</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 fade-in-up">
              API-first runtime for importing, testing, and running your agents and tools—no frontend needed. 
              Build production-ready agent workflows with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up">
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
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-sky opacity-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="card-gradient hover-lift transition-all duration-300 border-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
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
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/use-cases">
                Explore All Use Cases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
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
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Your Free Trial
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using AgentRuntime to orchestrate their AI agents. 
              Get started in minutes with our comprehensive documentation and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="gap-2" asChild>
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="gap-2" asChild>
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
