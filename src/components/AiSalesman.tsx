import React, { useState, useRef, useEffect } from "react";
import {
  FiSend,
  FiX,
  FiMessageSquare,
  FiArrowRight,
  FiDollarSign,
  FiClock,
  FiCode,
  FiBriefcase,
  FiUserPlus,
} from "react-icons/fi";
import {
  askGeminiSalesman,
  createWhatsAppLeadUrl,
  ChatMessage,
  LeadData,
} from "../services/geminiService";
import "./styles/AiSalesman.css";

const QUICK_ACTIONS = [
  {
    label: "Experience",
    icon: <FiBriefcase />,
    query: "Tumhara experience kya hai? IGS Health Care aur DeveloperHub me kya kaam kiya hai?",
  },
  {
    label: "Services & Stack",
    icon: <FiCode />,
    query: "Tum kon kon si services provide kartay ho aur tech stack kya hai?",
  },
  {
    label: "Pricing Idea",
    icon: <FiDollarSign />,
    query: "Website ya web app banwanay ka kitna kharcha / price idea hoga?",
  },
  {
    label: "Delivery Time",
    icon: <FiClock />,
    query: "Website bananay me kitna time lagta hai?",
  },
  {
    label: "Hire / Quote",
    icon: <FiUserPlus />,
    query: "Mujhay Hassaan ko hire karna hai aur project quote chahiay.",
    isLeadPrompt: true,
  },
];

export const AiSalesman: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadContact, setLeadContact] = useState("");
  const [leadProject, setLeadProject] = useState("");
  const [leadBudget, setLeadBudget] = useState("$500 - $1500");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "bot",
      text:
        "👋 **Assalam-o-Alaikum! Main Hassaan Khan ka 24/7 AI Sales Assistant hoon.**\n\n" +
        "Aap mujh se Hassaan ke **experience (IGS Healthcare & DeveloperHub)**, **services, pricing, aur delivery timeline** ke baray me pooch saktay hain ya direct quote le saktay hain.\n\n" +
        "Aap kis type ki website ya web app banwana chahtay hain?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, showLeadForm]);

  const handleSendMessage = async (textToSend?: string, openLeadAfter?: boolean) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsOpen(true);
    setIsTyping(true);

    try {
      const history = messages
        .filter((m) => m.id !== "initial-1")
        .map((m) => ({
          role: (m.sender === "user" ? "user" : "model") as "user" | "model",
          text: m.text,
        }));

      const reply = await askGeminiSalesman(text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // If user is interested in quote or hiring, display lead form
      const lower = text.toLowerCase();
      if (
        openLeadAfter ||
        lower.includes("hire") ||
        lower.includes("quote") ||
        lower.includes("price") ||
        lower.includes("cost") ||
        lower.includes("contact") ||
        lower.includes("project")
      ) {
        setShowLeadForm(true);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "I'm right here! Feel free to leave your contact info below so Hassaan can connect with you directly.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadContact) return;

    const lead: LeadData = {
      name: leadName,
      contact: leadContact,
      projectDetails: leadProject || "Inquired via AI Salesman",
      budget: leadBudget,
    };

    // Save lead locally
    try {
      const existingLeads = JSON.parse(localStorage.getItem("hassaan_leads") || "[]");
      existingLeads.push({ ...lead, date: new Date().toISOString() });
      localStorage.setItem("hassaan_leads", JSON.stringify(existingLeads));
    } catch {
      // ignore
    }

    setShowLeadForm(false);

    // Create WhatsApp link and inform user
    const waUrl = createWhatsAppLeadUrl(lead);

    const confirmationMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "bot",
      text:
        `🎉 **Thank you, ${leadName}!** Your details have been recorded.\n\n` +
        `Hassaan will reach out to you at **${leadContact}** shortly. You can also [click here to open WhatsApp directly](${waUrl}) to chat with Hassaan right away! 🚀`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, confirmationMsg]);

    // Automatically open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);

    // Reset fields
    setLeadName("");
    setLeadContact("");
    setLeadProject("");
  };

  // Simple markdown renderer for links, bold, bullets
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Parse markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noreferrer"
            className="chat-link"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      // Convert **bold**
      const renderedParts = parts.map((part) => {
        if (typeof part !== "string") return part;
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((bp, bIdx) => {
          if (bp.startsWith("**") && bp.endsWith("**")) {
            return <strong key={bIdx}>{bp.slice(2, -2)}</strong>;
          }
          return bp;
        });
      });

      return (
        <span key={idx} className="chat-line">
          {renderedParts}
          {idx < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* 1. Hero Strip Replacement Console */}
      <div className="hero-ai-sales-bar">
        <div className="sales-bar-glow"></div>
        <div className="sales-bar-main">
          {/* Left: Avatar + Live Status */}
          <div className="sales-bot-profile">
            <div className="sales-avatar-wrap">
              <img
                src="/images/hero_portrait.jpg"
                alt="Hassaan AI"
                className="sales-avatar-img"
              />
              <span className="live-pulse-dot" title="Online 24/7"></span>
            </div>
            <div className="sales-profile-meta">
              <div className="sales-bot-tag">
                <span className="sparkle-icon">✨</span>
                <span>24/7 AI Sales Executive</span>
              </div>
              <h3 className="sales-bot-heading">
                Have a project idea? Ask Hassaan's AI Salesman
              </h3>
            </div>
          </div>

          {/* Right: Quick Action Buttons & Chat Launcher */}
          <div className="sales-bar-actions">
            <div className="quick-chips-scroll">
              {QUICK_ACTIONS.map((action, i) => (
                <button
                  key={i}
                  className="quick-chip-btn"
                  onClick={() => handleSendMessage(action.query, action.isLeadPrompt)}
                  data-cursor="disable"
                >
                  <span className="chip-icon">{action.icon}</span>
                  <span className="chip-label">{action.label}</span>
                </button>
              ))}
            </div>

            {/* In-bar prompt input */}
            <form
              className="sales-inline-input-wrap"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                className="sales-inline-input"
                placeholder="Poochhein: budget, delivery time, stack, ya rabta..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                data-cursor="disable"
              />
              <button
                type="submit"
                className="sales-inline-submit-btn"
                title="Send to AI Assistant"
                data-cursor="disable"
              >
                <FiSend />
              </button>
            </form>

            <button
              className="open-full-chat-btn"
              onClick={() => setIsOpen(true)}
              data-cursor="disable"
              title="Open full conversation"
            >
              <FiMessageSquare className="chat-icon" />
              <span>Open Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Floating Persistent Action Trigger (Visible when scrolling) */}
      <button
        className={`floating-ai-trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        data-cursor="disable"
        title="Chat with Hassaan's 24/7 AI Salesman"
      >
        <div className="floating-avatar-container">
          <img
            src="/images/hero_portrait.jpg"
            alt="Hassaan AI Assistant"
            className="floating-avatar-img"
          />
          <span className="floating-pulse-badge"></span>
        </div>
        <div className="floating-trigger-copy">
          <span className="floating-kicker">AI Salesman 24/7</span>
          <span className="floating-title">Ask Hassaan</span>
        </div>
      </button>

      {/* 3. Full Conversational Chat Window */}
      {isOpen && (
        <div className="sales-chat-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="sales-chat-window"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header */}
            <div className="chat-window-header">
              <div className="chat-header-profile">
                <div className="chat-avatar-ring">
                  <img
                    src="/images/hero_portrait.jpg"
                    alt="Hassaan AI"
                    className="chat-header-avatar"
                  />
                  <span className="chat-online-badge"></span>
                </div>
                <div>
                  <h4 className="chat-header-name">
                    Hassaan's AI Sales Agent
                  </h4>
                  <p className="chat-header-sub">
                    Online 24/7 • Trained on IGS, Projects & Pricing
                  </p>
                </div>
              </div>

              <div className="chat-header-controls">
                <button
                  className="chat-ctrl-btn"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  data-cursor="disable"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Quick Action Pills in Header */}
            <div className="chat-quick-strip">
              {QUICK_ACTIONS.map((action, i) => (
                <button
                  key={i}
                  className="chat-pill-btn"
                  onClick={() => handleSendMessage(action.query, action.isLeadPrompt)}
                  data-cursor="disable"
                >
                  {action.icon}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>

            {/* Messages Stream */}
            <div className="chat-messages-scroll">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chat-bubble-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="bubble-bot-avatar">
                      <img src="/favicon-32x32.png" alt="Hassaan" />
                    </div>
                  )}
                  <div
                    className={`chat-bubble-card ${msg.sender === "user" ? "user-card" : "bot-card"}`}
                  >
                    <div className="bubble-text">
                      {renderFormattedText(msg.text)}
                    </div>
                    <span className="bubble-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="chat-bubble-row bot-row">
                  <div className="bubble-bot-avatar">
                    <img src="/favicon-32x32.png" alt="Hassaan" />
                  </div>
                  <div className="chat-bubble-card bot-card typing-card">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}

              {/* Interactive Lead Capture Card */}
              {showLeadForm && (
                <div className="lead-capture-card">
                  <div className="lead-card-header">
                    <span className="lead-card-tag">🚀 FAST QUOTE & CALLBACK</span>
                    <h5>Share your details for an exact quote</h5>
                    <p>
                      Hassaan will personally review your project and get back to you within a few hours.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="lead-form">
                    <div className="lead-input-row">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="lead-field"
                        data-cursor="disable"
                      />
                      <input
                        type="text"
                        placeholder="Email or WhatsApp *"
                        required
                        value={leadContact}
                        onChange={(e) => setLeadContact(e.target.value)}
                        className="lead-field"
                        data-cursor="disable"
                      />
                    </div>

                    <div className="lead-input-row">
                      <select
                        value={leadBudget}
                        onChange={(e) => setLeadBudget(e.target.value)}
                        className="lead-field lead-select"
                        data-cursor="disable"
                      >
                        <option value="$150 - $350">Budget: $150 – $350 (Landing Page)</option>
                        <option value="$500 - $1500">Budget: $500 – $1,500 (Web App / SaaS)</option>
                        <option value="$1500+">Budget: $1,500+ (Full Enterprise)</option>
                        <option value="Flexible">Budget: Flexible / Let's Discuss</option>
                      </select>
                    </div>

                    <textarea
                      placeholder="Brief project details (e.g., e-commerce, portfolio, SaaS)..."
                      value={leadProject}
                      onChange={(e) => setLeadProject(e.target.value)}
                      className="lead-field lead-textarea"
                      rows={2}
                      data-cursor="disable"
                    ></textarea>

                    <div className="lead-form-footer">
                      <button
                        type="submit"
                        className="lead-submit-btn"
                        data-cursor="disable"
                      >
                        <span>Send to Hassaan & Open WhatsApp</span>
                        <FiArrowRight />
                      </button>
                      <button
                        type="button"
                        className="lead-dismiss-btn"
                        onClick={() => setShowLeadForm(false)}
                        data-cursor="disable"
                      >
                        Later
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              className="chat-input-bar"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Poochhein: experience, budget, timeline, pricing..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-text-input"
                data-cursor="disable"
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={!input.trim() || isTyping}
                data-cursor="disable"
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AiSalesman;
