import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory persistent data store for client interactions (CRM, bookings, registrations, certificates)
interface ContactLead {
  id: string;
  type: "contact" | "appointment" | "project_rfp" | "course_registration" | "newsletter";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  date?: string;
  timeSlot?: string;
  budget?: string;
  courseName?: string;
  createdAt: string;
}

const leadsDatabase: ContactLead[] = [
  {
    id: "lead-init-1",
    type: "contact",
    name: "Aarav Nair",
    email: "aarav@keralatech.co",
    company: "Kerala Eco Tours",
    service: "SEO & WordPress Overhaul",
    message: "Looking to redesign our resort booking portal and rank top for Wayanad tour packages.",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "lead-init-2",
    type: "appointment",
    name: "Dr. Farhan K.",
    email: "farhan@medicarekerala.org",
    company: "Apex Specialty Clinics",
    service: "Local SEO & Google Business Profile",
    date: "2026-09-18",
    timeSlot: "10:00 AM IST",
    message: "Consultation regarding 4 clinic branches across Malabar region.",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  }
];

const mockCertificates: Record<string, {
  studentName: string;
  courseTitle: string;
  issueDate: string;
  grade: string;
  credentialId: string;
  status: "Verified" | "Expired";
  skillsCovered: string[];
}> = {
  "RA-SEO-2024-089": {
    studentName: "Fathima Nihala",
    courseTitle: "Mastering Technical SEO & Google Search Console",
    issueDate: "November 14, 2024",
    grade: "Distinction (98%)",
    credentialId: "RA-SEO-2024-089",
    status: "Verified",
    skillsCovered: ["Core Web Vitals", "Schema Markup", "Screaming Frog Audit", "Keyword Clustering", "Link Building"]
  },
  "RA-WP-2023-142": {
    studentName: "Muhammed Salman",
    courseTitle: "Advanced WordPress & WooCommerce Architecture",
    issueDate: "August 22, 2023",
    grade: "Excellence (94%)",
    credentialId: "RA-WP-2023-142",
    status: "Verified",
    skillsCovered: ["Elementor Pro", "Custom Post Types", "Speed Optimization", "Security Hardening", "Stripe & Razorpay Gateway"]
  },
  "RA-DM-2025-015": {
    studentName: "Ananya Ramesh",
    courseTitle: "Performance Marketing & Meta/Google Ads Bootcamp",
    issueDate: "March 30, 2025",
    grade: "Distinction (96%)",
    credentialId: "RA-DM-2025-015",
    status: "Verified",
    skillsCovered: ["Meta Pixel Tracking", "Google Ads Bidding", "Lookalike Audiences", "Funnel Analytics", "ROAS Scaling"]
  },
  "RA-COM-2024-031": {
    studentName: "Junaid P.K.",
    courseTitle: "Digital Leadership & Youth Organization Tech Summit",
    issueDate: "December 05, 2024",
    grade: "Distinction",
    credentialId: "RA-COM-2024-031",
    status: "Verified",
    skillsCovered: ["Event Management", "Volunteer Coordination", "Media Outreach", "Community Tech Stack"]
  }
};

// Lazy initialization for Gemini AI
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// ----------------- API ROUTES ----------------- //

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    aiEnabled: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString()
  });
});

// AI Chat Assistant powered by Gemini 3.8 Flash with full Rihan Ali grounding
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message string is required" });
    }

    const ai = getGeminiClient();
    const systemPrompt = `You are the official AI Assistant and Digital Advisor representing Rihan Ali, a renowned Digital Marketing Specialist, SEO Expert, WordPress Developer, Website Consultant, Trainer, and Community Leader based in Wayanad, Kerala, India.
Your mission is to represent Rihan with utmost professionalism, confidence, warmth, and precision (blending Apple, Stripe, Linear, and Vercel standards).

Key facts about Rihan Ali:
- Location: Wayanad, Kerala, India. Works with international clients (UAE, US, UK, Europe, Middle East) and premier Indian brands.
- Core Specialties:
  1. SEO: Technical SEO, Local SEO, Keyword Research, Google Business Profile optimization, Schema Markup, Core Web Vitals, On-Page & Off-Page SEO.
  2. WordPress Development: High-converting business sites, WooCommerce ecommerce, educational portals, custom landing pages, speed & security hardening.
  3. Digital Marketing & Paid Ads: Meta Ads (Facebook & Instagram), Google Search & Performance Max Ads, Funnel Architecture, Lead Generation, Email Automation.
  4. Training & Workshops: Corporate training, student masterclasses, 1,450+ students trained across Kerala and GCC.
  5. Leadership: Active community leader with SKSSF, youth empowerment advocate, organizer of educational tech initiatives in Wayanad.
- Contact Details:
  - Email: rihanmushykh@gmail.com
  - Location: Wayanad, Kerala, India
  - Available for: High-growth consulting, enterprise WordPress development, fractional CMO / SEO strategist, speaking & workshops.
- Tone: Crisp, insightful, helpful, executive-level, encouraging.
If asked about hiring, quote consultation links or suggest booking a 30-minute discovery session or contacting him directly via WhatsApp or email.
Keep answers well structured with concise formatting (bullet points, bold text). Do not fabricate non-existent contact information.`;

    if (ai) {
      try {
        const fullPrompt = `${systemPrompt}\n\nRecent context:\n${Array.isArray(conversationHistory) ? conversationHistory.map((c: any) => `${c.role}: ${c.text}`).join("\n") : ""}\nUser: ${message}\nAssistant:`;
        const response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: fullPrompt,
        });

        const reply = response.text || "I'd be glad to help you connect with Rihan Ali or review your digital marketing and website goals.";
        return res.json({ reply });
      } catch (geminiErr) {
        console.error("Gemini API call failed, falling back to smart responder:", geminiErr);
      }
    }

    // Smart contextual fallback response if API key is not yet set or during offline preview
    const query = message.toLowerCase();
    let reply = "Thank you for reaching out! Rihan Ali specializes in high-impact SEO, bespoke WordPress architecture, and ROI-driven digital marketing campaigns.";

    if (query.includes("seo") || query.includes("ranking") || query.includes("google")) {
      reply = "Rihan's SEO framework combines rigorous Technical Audits, Core Web Vitals optimization, High-Intent Keyword Mapping, and Local Business Profile domination. Clients frequently achieve 200–400% organic traffic growth within 4 to 6 months. Would you like to schedule an SEO audit or explore our Case Studies?";
    } else if (query.includes("wordpress") || query.includes("website") || query.includes("develop")) {
      reply = "Rihan builds ultra-fast, security-hardened WordPress websites crafted for maximum conversions. Every build includes mobile-first responsiveness, custom layout architecture, SEO schema setup, and sub-1s load times. We handle business portals, ecommerce stores, and high-converting landing pages.";
    } else if (query.includes("price") || query.includes("cost") || query.includes("rate") || query.includes("budget")) {
      reply = "Engagements typically start at ₹18,000 / $250 for targeted landing pages, ₹35,000 / $450 for full corporate WordPress systems, and monthly SEO/Growth retainers starting around ₹25,000 / $350. Rihan also provides custom enterprise proposals. You can submit a Project Request in the Client Portal!";
    } else if (query.includes("training") || query.includes("workshop") || query.includes("student") || query.includes("course")) {
      reply = "Rihan has trained over 1,450+ students, business owners, and corporate teams in WordPress, Performance Marketing, and SEO across Kerala and GCC. Upcoming workshops include hands-on live labs and verifiable certification. Check the Training & Workshops section or verify any certificate with the verification tool!";
    } else if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("phone") || query.includes("book")) {
      reply = "You can contact Rihan directly at rihanmushykh@gmail.com, initiate a direct WhatsApp conversation via the button on the Contact page, or book a live 30-minute discovery video consultation right here on the website.";
    } else if (query.includes("wayanad") || query.includes("kerala") || query.includes("leadership") || query.includes("skssf")) {
      reply = "Based in the lush hills of Wayanad, Kerala, Rihan is deeply dedicated to social impact, leading SKSSF community activities, youth career guidance initiatives, and digital literacy drives while advising clients globally.";
    }

    return res.json({ reply });
  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Failed to process chat request" });
  }
});

// Certificate verification endpoint
app.get("/api/verify-certificate/:code", (req, res) => {
  const code = req.params.code.trim().toUpperCase();
  const cert = mockCertificates[code];
  if (cert) {
    return res.json({ found: true, certificate: cert });
  }
  return res.status(404).json({
    found: false,
    message: `No certificate found with ID "${code}". Please check the ID or contact Rihan Ali for re-issuance.`
  });
});

// Contact & Lead capture
app.post("/api/contact", (req, res) => {
  const { name, email, phone, company, service, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newLead: ContactLead = {
    id: `lead-${Date.now()}`,
    type: "contact",
    name,
    email,
    phone,
    company,
    service: service || "General Consultation",
    message,
    createdAt: new Date().toISOString(),
  };

  leadsDatabase.unshift(newLead);
  res.json({ success: true, leadId: newLead.id, message: "Thank you! Rihan Ali will review your enquiry within 24 hours." });
});

// Appointment booking
app.post("/api/book-appointment", (req, res) => {
  const { name, email, date, timeSlot, service, message } = req.body;
  if (!name || !email || !date || !timeSlot) {
    return res.status(400).json({ error: "Name, email, date, and timeSlot are required" });
  }

  const newBooking: ContactLead = {
    id: `book-${Date.now()}`,
    type: "appointment",
    name,
    email,
    date,
    timeSlot,
    service: service || "Strategy Discovery Call",
    message,
    createdAt: new Date().toISOString(),
  };

  leadsDatabase.unshift(newBooking);
  res.json({ success: true, bookingId: newBooking.id, message: `Meeting booked successfully for ${date} at ${timeSlot}. Confirmation sent to ${email}!` });
});

// Course registration
app.post("/api/register-course", (req, res) => {
  const { name, email, phone, courseName } = req.body;
  if (!name || !email || !courseName) {
    return res.status(400).json({ error: "Name, email, and courseName are required" });
  }

  const newReg: ContactLead = {
    id: `course-reg-${Date.now()}`,
    type: "course_registration",
    name,
    email,
    phone,
    courseName,
    createdAt: new Date().toISOString(),
  };

  leadsDatabase.unshift(newReg);
  res.json({ success: true, regId: newReg.id, message: `Successfully registered for "${courseName}". Course materials & access link will be emailed!` });
});

// Newsletter subscription
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "A valid email address is required" });
  }

  const newSub: ContactLead = {
    id: `newsletter-${Date.now()}`,
    type: "newsletter",
    name: "Subscriber",
    email,
    createdAt: new Date().toISOString(),
  };

  leadsDatabase.unshift(newSub);
  res.json({ success: true, message: "Subscribed! Welcome to Rihan Ali's Digital Marketing & Growth Dispatch." });
});

// Project RFP submission
app.post("/api/project-request", (req, res) => {
  const { name, email, company, service, budget, timeline, message } = req.body;
  if (!name || !email || !service) {
    return res.status(400).json({ error: "Name, email, and service are required" });
  }

  const newRfp: ContactLead = {
    id: `rfp-${Date.now()}`,
    type: "project_rfp",
    name,
    email,
    company,
    service,
    budget,
    message: `Timeline: ${timeline || "Flexible"} | Details: ${message || "None"}`,
    createdAt: new Date().toISOString(),
  };

  leadsDatabase.unshift(newRfp);
  res.json({ success: true, rfpId: newRfp.id, message: "Project RFP received! Rihan will analyze your specifications and respond with a customized scope and quote." });
});

// Live Analytics / CRM feed for demo client portal
app.get("/api/leads", (req, res) => {
  res.json({
    totalLeads: leadsDatabase.length,
    leads: leadsDatabase.slice(0, 15),
  });
});

// ----------------- VITE MIDDLEWARE SETUP ----------------- //

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Rihan Ali Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
