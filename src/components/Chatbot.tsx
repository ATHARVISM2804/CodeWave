import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';


const BOT_NAME = "CodeWaveBot";
const WELCOME_MESSAGE = "Hi! 👋 How can I help you today?";

interface Message {
  sender: "user" | "bot";
  text: string;
}

// Dummy data for context and API key placeholder
const apiKey = "AIzaSyAdjZkoratnRgTHAloK0PYhp2eOicSRIJI";
const codeWaveContext = `You are CodeWaveBot, a friendly and professional chatbot for Codewave.it — an Intelligence Studio. You help visitors understand our services, book consultations, and provide detailed information about our capabilities.

## About Codewave.it
We're an Intelligence Studio that builds AI-powered digital solutions for startups, businesses, enterprises, and governments worldwide. We combine clean engineering and AI to create smart, secure, and scalable digital products.

## Core Services
1. **Web Development** - Fast, SEO-optimized, AI-friendly websites and portals
2. **Custom Software** - Tailored dashboards, internal tools, and business applications
3. **AI Automation** - Chatbots, document summarizers, smart workflows, and AI assistants
4. **GovTech Applications** - Secure complaint portals, case management, and citizen tools
5. **Mobile App Development** - Cross-platform and native apps with real-time features
6. **UI/UX Design** - User-centered design, wireframes, prototypes, and design systems
7. **API Integration & Data** - System integrations, dashboards, and data intelligence
8. **Digital Marketing** - SEO, content marketing, paid campaigns, and AI-driven growth

## Key Differentiators
- **AI at the Core:** Every solution leverages AI for smarter automation and decision-making
- **Security by Design:** Built-in encryption, compliance, and audit-ready architecture
- **Scale Without Fear:** From MVP to enterprise-scale, our solutions grow with you
- **Government Ready:** Trusted for GovTech with compliance and security standards

## Contact Information
- Email: hello@codewave.it
- WhatsApp: Available via website
- Consultation: Free discovery calls available

## Response Guidelines
- Be conversational yet professional
- Use emojis sparingly but effectively
- Offer relevant CTAs like [Launch My Website], [Automate My Workflow], [Book a Call]
- For complex queries, suggest scheduling a call
- Always format responses with markdown for readability
- Include specific service benefits and outcomes
- Mention relevant case studies or capabilities when appropriate

When users ask about specific services, provide detailed information about capabilities, benefits, and next steps. Always offer to connect them with the team for deeper discussions.`;

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: WELCOME_MESSAGE }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setIsThinking(true);

    try {
      // Convert existing chat history to the format required by the API
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: codeWaveContext }]
          },
          contents: [
            ...history,
            { role: 'user', parts: [{ text: input }] }
          ]
        }),
      });

      let botText = "Sorry, I couldn't get a response from the server.";
      if (response.ok) {
        const data = await response.json();
        botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I am unable to respond at the moment.';
      }

      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: botText
        }
      ]);
    } catch (err) {
      console.error("Error fetching from Gemini API:", err);
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: "Sorry, there was a problem connecting to the server."
        }
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        aria-label="Open chat"
        className="fixed bottom-20 md:bottom-6 right-6 z-50 rounded-full shadow-2xl w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        style={{
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          color: 'var(--text-primary)',
          boxShadow: '0 8px 30px rgba(var(--accent-primary-rgb))'
        }}
        onClick={() => setOpen((v) => !v)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="10" x2="14" y1="10" y2="10" /><line x1="10" x2="14" y1="14" y2="14" /></svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[95vw] h-[550px] rounded-xl shadow-2xl border flex flex-col overflow-hidden animate-fade-in-up"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            color: 'var(--text-primary)'
          }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex items-center justify-between shadow-md"
            style={{
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
              color: 'var(--text-primary)'
            }}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-bold text-lg">{BOT_NAME}</span>
            </div>
            <button
              aria-label="Close chat"
              className="text-white hover:text-gray-200 text-2xl transition-colors"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3"
            style={{ background: 'var(--glass-bg)' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[80%] drop-shadow-sm ${msg.sender === "user"
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                    }`}
                  style={{
                    background: msg.sender === 'user' ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' : 'var(--card-bg)',
                    color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--card-border)'
                  }}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl text-sm max-w-[80%] flex items-center gap-2 rounded-bl-none"
                  style={{
                    background: 'var(--card-bg)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--accent-primary)' }}></span>
                  <span className="inline-block w-2 h-2 rounded-full animate-pulse delay-150" style={{ background: 'var(--accent-secondary)' }}></span>
                  <span className="inline-block w-2 h-2 rounded-full animate-pulse delay-300" style={{ background: 'var(--accent-primary)' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            className="flex border-t p-2"
            style={{
              background: 'var(--card-bg)',
              borderTop: '1px solid var(--card-border)'
            }}
            onSubmit={handleSend}
            auto-complete="off"
          >
            <input
              className="flex-1 px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
              style={{
                color: 'var(--text-primary)',
                background: 'var(--glass-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'none',
                fontFamily: 'inherit'
              }}
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) handleSend(); }}
              aria-label="Type your message"
              disabled={isThinking}
            />
            <button
              type="submit"
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-1`}
              style={{
                background: input.trim() && !isThinking
                  ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                  : 'var(--card-bg)',
                color: input.trim() && !isThinking
                  ? 'white'
                  : 'var(--text-muted)',
                cursor: !input.trim() || isThinking ? 'not-allowed' : 'pointer',
                border: '1px solid var(--card-border)'
              }}
              disabled={!input.trim() || isThinking}
            >
              Send
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" /></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
