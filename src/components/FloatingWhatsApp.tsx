import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/FloatingWhatsApp.css";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = "923276530094",
  defaultMessage = "Hi Hassaan! I visited your portfolio and would like to discuss a project.",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div
      className="floating-wa-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Badge */}
      <div className={`floating-wa-tooltip ${isHovered ? "visible" : ""}`}>
        <span className="wa-tooltip-status">● Online</span>
        <span className="wa-tooltip-text">Chat with Hassaan</span>
      </div>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat on WhatsApp"
        data-cursor="disable"
      >
        <span className="wa-pulse-ring"></span>
        <span className="wa-pulse-ring delay"></span>
        <FaWhatsapp className="wa-icon" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
