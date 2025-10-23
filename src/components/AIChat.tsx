/* COMPONENT: AI Chat Widget
 * Floating chat widget for AI assistant
 * PLACEHOLDER: Connects to /api/ai-assistant (needs backend setup)
 */

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your Gym Point AI assistant. Ask me about memberships, classes, trainers, or booking!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // PLACEHOLDER: Replace with actual API call to /api/ai-assistant
    // TODO: Set OPENAI_API_KEY environment variable
    // Example:
    // const response = await fetch('/api/ai-assistant', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: input })
    // });
    // const data = await response.json();

    // Mock response for now
    setTimeout(() => {
      const botMessage: Message = {
        role: "assistant",
        content: "Thanks for your question! The AI assistant is currently being set up. Please contact us directly for immediate assistance.",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl bg-primary text-secondary hover:bg-primary/90"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-primary p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-bold text-secondary text-lg">Gym Point AI</h3>
              <p className="text-xs text-secondary/80">Always here to help</p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="text-secondary hover:bg-secondary/20"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-primary text-secondary"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2">
                  <p className="text-sm">Typing...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything..."
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              size="icon"
              className="bg-primary text-secondary hover:bg-primary/90"
            >
              <Send size={20} />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChat;
