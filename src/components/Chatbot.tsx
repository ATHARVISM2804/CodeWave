import React, { useState, useRef, useEffect } from "react";

const BOT_NAME = "CodeWaveBot";
const WELCOME_MESSAGE = "Hi! 👋 How can I help you today?";
const WEBHOOK_URL = "http://localhost:5000/api/codewavechat"; // Your CodeWave backend endpoint

interface Message {
  sender: "user" | "bot";
  text: string;
}

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
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      let botText = "Sorry, I couldn't get a response from the server.";
      if (res.ok) {
        const data = await res.json();
        // Gemini backend returns { reply }
        botText = data.reply || data.message || data.text || JSON.stringify(data);
      }
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: botText
        }
      ]);
    } catch (err) {
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
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full shadow-2xl w-16 h-16 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform duration-300"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth={2} />
        </svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-lg">{BOT_NAME}</span>
            <button
              aria-label="Close chat"
              className="text-white hover:text-gray-200 text-2xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3" style={{ maxHeight: 320 }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl text-sm max-w-[80%] bg-white border border-gray-200 text-gray-800 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-300 animate-pulse delay-300"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            className="flex border-t border-gray-200 bg-white p-2"
            onSubmit={handleSend}
            autoComplete="off"
          >
            <input
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-400"
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
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                input.trim() && !isThinking
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!input.trim() || isThinking}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
