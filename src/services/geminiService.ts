/**
 * Hassaan Khan - 24/7 Elite AI Sales Representative Service
 * Powered by Google Gemini API with Native Roman Urdu & Deep Conversational Intelligence
 */

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  isLeadCard?: boolean;
}

export interface LeadData {
  name: string;
  contact: string;
  projectDetails: string;
  budget?: string;
}

// Resilient pool of Gemini models in priority order
const CANDIDATE_MODELS = [
  "gemini-flash-lite-latest",
  "gemini-flash-latest",
  "gemini-pro-latest",
];

// Master System Instruction for Hassaan's 24/7 AI Sales Representative
const SYSTEM_INSTRUCTION = `
You are the 24/7 Executive AI Sales Assistant representing Hassaan Khan, a Senior Full Stack Developer & Software Engineer.

YOUR MISSION & PERSONA:
You are not an ordinary AI bot. You are Hassaan's sharp, confident, friendly, and persuasive Pakistani Sales Partner.
Your goal is to handle EVERY kind of customer enquiry—whether direct, indirect, bargaining, slang, skeptical, joking, or technical—and convince them to hire Hassaan or share their project details.

PROFILE OF HASSAAN KHAN:
- Name: Hassaan Khan
- Role: Senior Full Stack Developer & Software Engineer (2+ years of hardcore industry experience).
- Education: BS in Computer Science (BSCS) from NUML Islamabad (2022–2025).
- Past & Current Experience:
  1. IGS Health Care (Senior Full Stack Developer): Built high-traffic healthcare web platforms, HIPAA-compliant patient management portals, scalable Next.js/React frontends, state management, and reliable microservices.
  2. DeveloperHub (Full Stack Developer): Developed custom client enterprise solutions, complex RESTful APIs, and modern web architectures.
  3. Freelance & Remote: Delivered full-stack SaaS, e-commerce stores, custom dashboards, and high-converting landing pages for international & local clients.
- Tech Stack:
  - Frontend: React.js, Next.js, TypeScript, Tailwind CSS, GSAP smooth animations, Responsive UI/UX.
  - Backend: Node.js, NestJS, Express.js, Microservices, RESTful APIs, Authentication (JWT/OAuth).
  - Databases: MongoDB, PostgreSQL, MySQL.
  - DevOps/Cloud: Docker, Vercel, Netlify, Git/GitHub, CI/CD, Technical SEO & PageSpeed 95+.
- Delivery Timelines:
  - Fast Landing Page / Portfolio: 3 to 5 business days (din).
  - Custom Full-Stack Web App / SaaS MVP / E-Commerce Store: 2 to 3 weeks (hafte).
  - Complex Enterprise System: 4 to 8 weeks (sprint-wise milestones).
- Pricing Guidelines:
  - Landing Page / Portfolio: Starts around $150 – $350 (or equivalent in PKR / local currency).
  - Custom Web App / SaaS / E-commerce: Starts around $500 – $1,500+ depending on features.
  - Always emphasize: "Exact price project ke features aur scope par depend karti hai. Hassaan 24 ghante ke andar transparent, custom quote deta hai!"
- Contact Details:
  - Email: hassaan19620@gmail.com / hassaankhan.dev@gmail.com
  - WhatsApp: +92 327 6530094
  - LinkedIn: https://www.linkedin.com/in/iamhassaankhan/
  - GitHub: https://github.com/Hassaan2835
  - Instagram: https://www.instagram.com/hassaankhan7400
  - Location: Rawalpindi / Islamabad, Pakistan (Available for Global Remote Work).

CRITICAL SALES RULES:
1. LANGUAGE:
   - If the user talks in Roman Urdu, Hindi, or conversational Pakistani slang (e.g. "kya haal hai", "website banwani hy", "kitna kharcha aega", "boss kya scene hai", "tumhe coding aati bhi hy?"), YOU MUST ALWAYS REPLY IN CONVINCING, NATURAL ROMAN URDU!
   - If the user talks in pure English, reply in professional English.
2. HANDLING ROUNDABOUT / TRICKY QUESTIONS:
   - Skeptical customer ("Saboot kya hai? Fake to nahi?"): Proudly mention IGS Health Care, DeveloperHub, live production apps, NUML degree, and invite them to check GitHub or hop on a 5-minute WhatsApp call.
   - Low budget / Bargaining ("Sirf 20-30 hazar hain / budget kam hai"): Be respectful, propose a phased MVP (Minimum Viable Product) or basic version first, and offer to discuss flexible packages.
   - Non-technical customer ("Dukan ke kapre bechne hain / sales barhani hain"): Explain in simple business terms how an e-commerce website with fast WhatsApp ordering and payment integration will increase their sales.
   - Timeline urgency ("Mujhe kal ya 2 din mein chahiye"): Explain fast landing page options (3 days) or express sprint possibilities.
3. LEAD CAPTURE (MOST IMPORTANT):
   - At the end of every answer about pricing, quotes, or services, always politely invite the customer to share their Name and WhatsApp number / Email so Hassaan can connect with them directly.
`;

// Helper: Check if query contains Roman Urdu or Urdu keywords
export function isRomanUrduOrUrdu(text: string): boolean {
  const lower = text.toLowerCase();
  const keywords = [
    "kya", "hai", "hain", "karo", "kare", "karna", "banao", "bana", "batao", "bata",
    "tum", "tumhara", "tumhari", "mera", "meri", "mere", "mujhe", "mujy", "mujhey", "mjhe",
    "chahiye", "chahiay", "chahie", "kitna", "kitne", "kitni", "kese", "kasay", "kaise",
    "kaun", "kon", "kahan", "kaha", "acha", "theek", "baat", "kar", "raha", "rahe", "rahi",
    "ho", "bhi", "nahi", "nai", "yr", "yar", "yaar", "bhai", "bhiya", "bro", "sir", "salam",
    "shukriya", "kharcha", "paise", "rupay", "din", "hafte", "waqt", "lagta", "lagega",
    "rabta", "shuru", "madad", "kaam", "project", "web", "website", "banwani", "banwana",
    "banwayen", "dukan", "shop", "bikri", "saboot", "code", "scene", "paisa", "pesy", "daam"
  ];

  return (
    keywords.some((w) => new RegExp(`(^|\\s)${w}(\\s|\\?|!|\\.|,|$)`, "i").test(lower)) ||
    /[\u0600-\u06FF]/.test(text)
  );
}

// Smart Fallback Matcher (handles indirect queries gracefully when offline)
function getSmartFallbackReply(query: string): string {
  const q = query.toLowerCase();
  const romanUrdu = isRomanUrduOrUrdu(query);

  // Skeptical / Proof of skills
  if (
    q.includes("saboot") ||
    q.includes("aati bhi") ||
    q.includes("fake") ||
    q.includes("proof") ||
    q.includes("sach me") ||
    q.includes("batein")
  ) {
    return (
      "Haha bilkul valid sawal hai bhai! Batein karne se kaam nahi chalta, results bolte hain. 🚀\n\n" +
      "1. **IGS Health Care:** Hassaan wahan Senior Full Stack Developer reh chuke hain jahan medical data security, HIPAA compliance aur high-traffic platforms banaye.\n" +
      "2. **DeveloperHub:** Enterprise web applications aur scalable microservices develop kiye.\n" +
      "3. **Tech Grip:** React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB.\n\n" +
      "Aap Hassaan ka GitHub ([github.com/Hassaan2835](https://github.com/Hassaan2835)) check karein ya neechay lead form me apna WhatsApp share karein, Hassaan live demo dikha dega!"
    );
  }

  // Shop / E-commerce / Sales / Business growth
  if (
    q.includes("shop") ||
    q.includes("dukan") ||
    q.includes("store") ||
    q.includes("kapre") ||
    q.includes("sales") ||
    q.includes("bikri") ||
    q.includes("business") ||
    q.includes("e-commerce") ||
    q.includes("ecommerce")
  ) {
    return (
      "Aapke business ke liye ek fast aur modern **Online E-Commerce Store** perfect rahega jahan customer direct products dekh kar order place kar sakein! 🛍️\n\n" +
      "• Mobile-friendly clean design\n" +
      "• 1-Click WhatsApp Ordering & Payment integration\n" +
      "• Fast loading speed (jo direct sales barhaye)\n\n" +
      "Iska kharcha features ke hisab se **$500 – $1,200** (ya equivalent PKR) ke darmiyan hota hai. Neechay apna WhatsApp share karein taake Hassaan aapke business ke mutabiq exact package bata sake!"
    );
  }

  // Experience / Who is Hassaan
  if (
    q.includes("kaun") ||
    q.includes("who") ||
    q.includes("experience") ||
    q.includes("background") ||
    q.includes("igs") ||
    q.includes("developerhub")
  ) {
    if (romanUrdu) {
      return (
        "Main **Hassaan Khan ka 24/7 AI Sales Partner** hoon! 🚀\n\n" +
        "Hassaan **Senior Full Stack Developer & Software Engineer** hain (2+ saal experience). " +
        "Unhon ne **IGS Health Care** me Senior Full Stack Developer ke tor par high-traffic platforms aur patient management systems banaye hain, aur **DeveloperHub** me enterprise software aur microservices par kaam kiya hai. " +
        "Unhon ne **NUML Islamabad** se BS Computer Science kiya hai."
      );
    }
    return (
      "I am **Hassaan Khan's 24/7 AI Sales Assistant**! 🚀\n\n" +
      "Hassaan is a **Senior Full Stack Developer & Software Engineer** with 2+ years of professional experience. " +
      "He worked at **IGS Health Care** building scalable healthcare portals and at **DeveloperHub** engineering enterprise web solutions. " +
      "He graduated with a BS in Computer Science from **NUML Islamabad**."
    );
  }

  // Price / Budget / Bargaining
  if (
    q.includes("price") ||
    q.includes("cost") ||
    q.includes("kitne") ||
    q.includes("kharcha") ||
    q.includes("paisa") ||
    q.includes("pesy") ||
    q.includes("rate") ||
    q.includes("budget") ||
    q.includes("kam")
  ) {
    if (romanUrdu) {
      return (
        "💰 **Pricing & Budget Overview:**\n\n" +
        "• **High-Converting Landing Page / Portfolio:** Starting around **$150 – $350** (3-5 din me delivery).\n" +
        "• **Custom Full Stack Web App / SaaS / Store:** Starting from **$500 – $1,500+** features ke mutabiq.\n\n" +
        "Agar aapka budget limited hai toh fikar na karein! Hum phased MVP (basic version) se shuru kar sakte hain. Neechay lead card me apna WhatsApp share karein taake Hassaan aapse direct discuss kar sake."
      );
    }
    return (
      "💰 **Transparent & Value-Driven Pricing:**\n\n" +
      "• Landing Pages & Portfolios: Starting around **$150 – $350**.\n" +
      "• Full Stack Web Applications & SaaS: Starting from **$500 – $1,500+** depending on features.\n\n" +
      "Share your requirements below and Hassaan will prepare a tailored, transparent quote for you within hours!"
    );
  }

  // Time / Timeline / Urgency
  if (
    q.includes("time") ||
    q.includes("din") ||
    q.includes("hafte") ||
    q.includes("duration") ||
    q.includes("delivery") ||
    q.includes("kab tak")
  ) {
    if (romanUrdu) {
      return (
        "⏱ **Delivery Timelines:**\n\n" +
        "• **Landing Page / Portfolio:** 3 se 5 working din.\n" +
        "• **Custom Full Stack Web App / SaaS MVP:** 2 se 3 hafte.\n" +
        "• **Urgent / Fast Sprint:** Express delivery bhi possible hai.\n\n" +
        "Aapko kab tak project live chahiye? Neechay detail share karein!"
      );
    }
    return (
      "⏱ **Delivery Timelines:**\n\n" +
      "• Landing Page / Portfolio: 3 to 5 business days.\n" +
      "• Custom Web App / SaaS MVP: 2 to 3 weeks.\n\n" +
      "Tell us your deadline and we can plan an express sprint for you!"
    );
  }

  // Contact / Hire / Direct WhatsApp
  if (
    q.includes("contact") ||
    q.includes("rabta") ||
    q.includes("hire") ||
    q.includes("whatsapp") ||
    q.includes("email") ||
    q.includes("number") ||
    q.includes("phone")
  ) {
    return (
      "Aap direct Hassaan se abhi rabta kar saktay hain! 🤝\n\n" +
      "• **WhatsApp:** [+92 327 6530094](https://wa.me/923276530094)\n" +
      "• **Email:** [hassaan19620@gmail.com](mailto:hassaan19620@gmail.com)\n" +
      "• **LinkedIn:** [iamhassaankhan](https://www.linkedin.com/in/iamhassaankhan/)\n" +
      "• **GitHub:** [Hassaan2835](https://github.com/Hassaan2835)\n\n" +
      "Neechay apna name aur WhatsApp number dalein, Hassaan direct aapse connect ho jayega!"
    );
  }

  // Default dynamic conversational answer
  if (romanUrdu) {
    return (
      "Bhai bilkul! Hassaan Khan (Senior Full Stack Developer) har kisam ki custom web development, Next.js / React frontends, Node.js / NestJS backends aur e-commerce systems banate hain. 💼\n\n" +
      "Aap apna project idea thora detail me batayein (ya neechay apna WhatsApp number share karein) taake hum aapko exact estimation aur guide kar sakein!"
    );
  }

  return (
    "Hello! Hassaan Khan is a Senior Full Stack Developer specializing in React, Next.js, Node.js, and scalable web apps. 💼\n\n" +
    "Tell me about your project idea or what you are looking to build, and I will give you an instant timeline and cost breakdown!"
  );
}

/**
 * Ask Google Gemini API with automatic candidate model failover & strict alternating history
 */
export async function askGeminiSalesman(
  prompt: string,
  history: Array<{ role: "user" | "model"; text: string }> = []
): Promise<string> {
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || "").trim();
  const romanUrdu = isRomanUrduOrUrdu(prompt);

  // If no API key configured, use the smart local knowledge engine
  if (!apiKey) {
    return getSmartFallbackReply(prompt);
  }

  // Build clean, strictly alternating history for Gemini API
  const cleanContents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

  // Filter and sanitize past turns (Gemini rejects empty texts or non-alternating roles)
  let lastRole: "user" | "model" | null = null;
  for (const item of history) {
    const text = item.text?.trim();
    if (!text) continue;

    // Skip consecutive same-role turns to prevent HTTP 400
    if (item.role === lastRole) continue;

    cleanContents.push({
      role: item.role,
      parts: [{ text }],
    });
    lastRole = item.role;
  }

  // Ensure last turn before new user message was a model turn, or start fresh
  if (lastRole === "user") {
    cleanContents.pop();
  }

  // Append the current user prompt with language nudge
  const finalPrompt = romanUrdu
    ? `${prompt}\n\n[INSTRUCTION: Answer naturally in fluent, conversational Pakistani Roman Urdu as Hassaan's sales executive. Keep it engaging, professional, and convincing.]`
    : prompt;

  cleanContents.push({
    role: "user",
    parts: [{ text: finalPrompt }],
  });

  // Construct request payload with native system_instruction
  const payload = {
    system_instruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }],
    },
    contents: cleanContents,
    generationConfig: {
      temperature: 0.75,
      maxOutputTokens: 400,
      topP: 0.95,
    },
  };

  // Try candidate models in priority order to guarantee 100% uptime
  for (const model of CANDIDATE_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000); // 9s timeout per model

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        console.warn(`Model ${model} returned status ${res.status}, trying next model...`);
        continue;
      }

      const data = await res.json();
      const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (replyText && replyText.trim().length > 0) {
        return replyText.trim();
      }
    } catch (err) {
      console.warn(`Fetch error on model ${model}:`, err);
      // try next candidate model
    }
  }

  // If all live models failed or timed out, invoke smart conversational fallback
  return getSmartFallbackReply(prompt);
}

/**
 * Format a lead capture message for WhatsApp dispatch
 */
export function createWhatsAppLeadUrl(lead: LeadData): string {
  const phone = "923276530094";
  const text =
    `*New Client Lead from Portfolio AI Salesman*\n\n` +
    `👤 *Name:* ${lead.name}\n` +
    `📞 *Contact:* ${lead.contact}\n` +
    `💼 *Project Details:* ${lead.projectDetails}\n` +
    (lead.budget ? `💰 *Budget:* ${lead.budget}\n` : "") +
    `\n_Sent via Hassaan Khan 24/7 AI Assistant_`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
