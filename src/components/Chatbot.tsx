import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const mockResponses: Record<string, string> = {
  pricing: "We offer three plans:\n\n• **Starter** – Free for up to 3 agents\n• **Pro** – $99/mo with unlimited agents & priority support\n• **Enterprise** – Custom pricing with SLA & dedicated support\n\nWould you like to start a free trial?",
  features: "AgentRuntime offers powerful features including:\n\n• Agent Registration & auto-discovery\n• Runtime API with pause/resume controls\n• Real-time logging & tracing\n• Post-run analytics dashboards\n• Enterprise-grade security\n\nWant me to go deeper on any of these?",
  demo: "I'd love to set up a demo for you! Could you share your **name** and **email**, and I'll have our team reach out to schedule one? 🗓️",
  support: "Our support team is available 24/7 for Enterprise plans. Pro users get priority email support with a 4-hour response time. How can I help you today?",
  default: "Thanks for reaching out! I can help with:\n\n• **Pricing** – Learn about our plans\n• **Features** – Explore what AgentRuntime can do\n• **Demo** – Schedule a personalized walkthrough\n• **Support** – Get help with your account\n\nWhat would you like to know more about?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("plan")) return mockResponses.pricing;
  if (lower.includes("feature") || lower.includes("what can") || lower.includes("capability")) return mockResponses.features;
  if (lower.includes("demo") || lower.includes("trial") || lower.includes("try")) return mockResponses.demo;
  if (lower.includes("support") || lower.includes("help") || lower.includes("issue")) return mockResponses.support;
  return mockResponses.default;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi there! 👋 I'm the AgentRuntime assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMsg.content);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] flex flex-col rounded-2xl shadow-2xl border border-border bg-background overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm leading-tight">AgentRuntime Assistant</p>
              <p className="text-xs opacity-80">Online • Typically replies instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-primary-foreground/20 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex gap-2", msg.role === "user" ? "justify-end" : "justify-start")}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  )}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-muted flex-shrink-0 flex items-center justify-center mt-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {["Pricing", "Features", "Book a Demo", "Get Support"].map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    setInput(label);
                    setTimeout(() => {
                      const userMsg: Message = { id: Date.now().toString(), role: "user", content: label, timestamp: new Date() };
                      setMessages((prev) => [...prev, userMsg]);
                      setInput("");
                      setIsTyping(true);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: getResponse(label), timestamp: new Date() }]);
                        setIsTyping(false);
                      }, 1200);
                    }, 100);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60"
              />
              <Button type="submit" size="icon" variant="default" className="rounded-full h-10 w-10 flex-shrink-0" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
