import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';


const BOT_NAME = "CodeWaveBot";
const WELCOME_MESSAGE = "Hi! 👋 How can I help you today?";

interface Message {
  sender: "user" | "bot";
  text: string;
}

// Dummy data for context and API key placeholder
const apiKey = "AIzaSyDTLSjJI3aidiuqY5MY5KCOAXOcM8L-KQQ";
const codeWaveContext = `You are CodeWaveBot, a friendly and professional chatbot for the CodeWave Intelligence Studio website. You act as a digital guide, providing information about the company's services, mission, and philosophy.

Here is the key information about CodeWave:

Company Name: CodeWave Intelligence Studio

Mission: To solve the hardest problems with smart engineering and AI, turning complexity into clarity and making technology think for our clients.

Services:
- Custom ERP & CRM Development
- AI-Powered SaaS Applications
- API-First & Microservices Architecture
- MVP Development For Startups
- Generative AI Integration
- Legacy System Maintenance & Modernization

Key Strengths:
- **AI at the Core:** We use AI to guide our design and development process, building solutions that learn, adapt, and evolve.
- **Security by Design:** Every layer is engineered with encryption, compliance, and resilience in mind.
- **Scale Without Fear:** Our architecture is built to grow, serving everything from lean startups to large government platforms.
- **Trusted in High-Stakes:** We are trusted by government contractors, high-growth startups, and mission-critical organizations.
- **Real Impact, Measured:** We focus on measurable outcomes and provide real numbers on performance.

Client Base: Startups, enterprises, and government teams globally.

Tech Stack: AI, microservices, and modern web technologies.

Tone and Persona: Be fluent in code and professional, yet friendly and encouraging. When a user asks about the company, its services, or its philosophy, use this context to provide concise and accurate answers. Format your responses with markdown, including **bold text** and lists to make them easy to read.
`;

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

    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setIsThinking(true);

    try {
      // Convert existing chat history to the format required by the API
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`, {
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
        // The Gemini API response is slightly different.
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
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-indigo-500 to-sky-500 text-white rounded-full shadow-2xl w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        onClick={() => setOpen((v) => !v)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="10" x2="14" y1="10" y2="10"/><line x1="10" x2="14" y1="14" y2="14"/></svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[95vw] h-[550px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-4 py-3 flex items-center justify-between shadow-md">
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
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[80%] drop-shadow-sm ${
                    msg.sender === "user"
                      ? "bg-indigo-500 text-white rounded-br-none"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl text-sm max-w-[80%] bg-white border border-gray-200 text-gray-800 flex items-center gap-2 rounded-bl-none">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse delay-150"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-300 animate-pulse delay-300"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            className="flex border-t border-gray-200 bg-white p-2"
            onSubmit={handleSend}
            auto-complete="off"
          >
            <input
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 placeholder-gray-400 transition-all duration-200"
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
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 ${
                input.trim() && !isThinking
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!input.trim() || isThinking}
            >
              Send
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
