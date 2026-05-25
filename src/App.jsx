import { useState, useEffect, useRef } from "react";
import photo from "./assets/Adarshphot.jpeg";
// phir img src mein: src={photo}
const NAV_LINKS = ["About", "Projects", "Skills", "Certifications", "Contact"];

const PROJECTS = [
  {
    title: "SafeMail AI",
    tags: ["Naive Bayes", "TF-IDF", "Flask", "NLP"],
    date: "Apr 2026",
    color: "#FF6B6B",
    icon: "🛡️",
    github: "https://github.com/dwivediadarsh496-commits/SafeMail-AI",
    live: "https://safe-mail-ai-five.vercel.app/",
    stats: ["94%+ Accuracy", "18,650+ Emails", "<2s Response"],
    bullets: [
      "Full-stack ML web app detecting phishing emails with 94%+ accuracy using Naive Bayes + TF-IDF on 18,650 email dataset",
      "Flask API with 5 routes, 9-heuristic explanation engine detecting urgent language, credential harvesting, brand impersonation",
      "3-tier classification (Phishing / Suspicious / Legitimate) with confidence score, risk breakdown & prevention tips",
    ],
  },
  {
    title: "CGPA Trend Analysis",
    tags: ["Python", "Data Analysis", "Visualization"],
    date: "2025",
    color: "#A78BFA",
    icon: "📈",
    github: "https://github.com/dwivediadarsh496-commits/-CGPA-Trend-Analysis",
    live: "https://cgpa-trend-analysis.vercel.app/",
    stats: ["Semester Trends", "GPA Prediction", "Visual Dashboard"],
    bullets: [
      "Python-based CGPA trend analysis tool for tracking academic performance across semesters",
      "Visualizes grade patterns and predicts future CGPA trajectory using statistical analysis",
      "Deployed on Vercel with interactive dashboard for data-driven academic insights",
    ],
  },
  {
    title: "Mini LLM From Scratch",
    tags: ["Transformer", "PyTorch", "Tokenization"],
    date: "May 2026",
    color: "#6C63FF",
    icon: "🧠",
    github: null,
    live: null,
    stats: ["WikiText-2", "Transformer", "PyTorch"],
    bullets: [
      "Built character-level Mini Language Model using PyTorch and WikiText-2 dataset",
      "Implemented tokenization, embeddings, transformer attention, and text generation pipeline",
      "Learned fundamentals of LLMs, neural networks, transformers, and sequence prediction",
    ],
  },
  {
    title: "ChatBot RAG",
    tags: ["RAG Pipeline", "LangChain", "Vector DB"],
    date: "May 2026",
    color: "#00C9A7",
    icon: "🤖",
    github: null,
    live: null,
    stats: ["Semantic Search", "LangChain", "Embeddings"],
    bullets: [
      "AI-powered chatbot using Retrieval-Augmented Generation architecture",
      "Semantic search and vector embeddings for context-aware responses",
      "Built with LangChain, vector databases, and embedding models",
    ],
  },
  {
    title: "Fraud Detection",
    tags: ["Anomaly Detection", "Classification", "ML"],
    date: "Sep 2026",
    color: "#FFD166",
    icon: "💳",
    github: null,
    live: null,
    stats: ["Transaction Analysis", "Feature Eng.", "Classification"],
    bullets: [
      "ML-based system to detect fraudulent transactions with anomaly detection",
      "Data preprocessing and feature analysis pipeline for transaction data",
      "Applied classification models for accurate fraud detection",
    ],
  },
  {
    title: "Jarvis AI Assistant",
    tags: ["Voice AI", "NLP", "Automation"],
    date: "Sep 2025",
    color: "#4FC3F7",
    icon: "🎙️",
    github: null,
    live: null,
    stats: ["Voice Control", "Speech Rec.", "API Integration"],
    bullets: [
      "Voice-controlled AI assistant for task automation using speech recognition",
      "NLP and speech recognition for natural human-computer interaction",
      "Real-time data via APIs for dynamic responses",
    ],
  },
];

const ML_SKILLS = [
  "Linear Regression", "Random Forest", "Logistic Regression", "KNN",
  "Decision Tree", "Q-Learning", "K-Means", "SVM", "Confusion Matrix", "Transformer",
];

const TECH_SKILLS = {
  Languages: ["Python", "Java", "C", "SQL"],
  "AI/ML": ["PyTorch", "Scikit-learn", "NLP", "Transformers", "RAG", "TensorFlow", "Tokenization", "Embeddings", "HuggingFace"],
};

const CERTS = [
  { name: "Microsoft AI Classroom", sub: "Introduction to ML Operations", icon: "🏆" },
  { name: "Coding Spoon", sub: "Data Science AI/ML", icon: "🏅" },
  { name: "Google Cloud", sub: "Prompt Design in Vertex AI", icon: "☁️" },
  { name: "Open Source Connect Global 2026", sub: "Contributor Certificate", icon: "🌐" },
  { name: "8+ AI Learning Certificates", sub: "Various platforms", icon: "📜" },
  { name: "30+ Microsoft Badges", sub: "Microsoft Learn", icon: "🎖️" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(108,99,255,0.18)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "#6C63FF", letterSpacing: "-0.5px" }}>
          AD<span style={{ color: "#fff" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {NAV_LINKS.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={() => setActive(n)}
              style={{
                color: active === n ? "#6C63FF" : "rgba(255,255,255,0.65)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 8,
                background: active === n ? "rgba(108,99,255,0.12)" : "transparent",
                transition: "all 0.2s",
                letterSpacing: "0.01em",
              }}
            >
              {n}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const titles = ["AI/ML Engineer", "LLM Builder", "Deep Learner", "Open Source Contributor"];
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[ti];
    const timeout = setTimeout(() => {
      if (!del) {
        setTyped(current.slice(0, ci + 1));
        if (ci + 1 === current.length) { setTimeout(() => setDel(true), 1400); }
        else setCi(ci + 1);
      } else {
        setTyped(current.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setTi((ti + 1) % titles.length); setCi(0); }
        else setCi(ci - 1);
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [ci, del, ti]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 2rem 60px",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "15%", left: "5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)", zIndex: 0, filter: "blur(50px)" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,167,0.12) 0%, transparent 70%)", zIndex: 0, filter: "blur(50px)" }} />

      {/* Main split layout */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1100, width: "100%", margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
        flexWrap: "wrap",
      }}>

        {/* LEFT — Text content */}
        <div style={{ flex: "1 1 440px", minWidth: 280 }}>
          {/* Badge */}
          {/* <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.28)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 28,
            animation: "fadeDown 0.6s ease forwards",
          }}>
          
          </div> */}

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            color: "#fff",
            lineHeight: 1.0,
            letterSpacing: "-2px",
            margin: "0 0 2px",
            animation: "fadeUp 0.8s ease 0.1s both",
          }}>
            Adarsh
          </h1>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            background: "linear-gradient(90deg, #6C63FF, #00C9A7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.0,
            letterSpacing: "-2px",
            margin: "0 0 24px",
            animation: "fadeUp 0.8s ease 0.2s both",
          }}>
            Dwivedi
          </h1>

          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 36,
            minHeight: 36,
            animation: "fadeUp 0.8s ease 0.35s both",
          }}>
            <span style={{ color: "#6C63FF", fontWeight: 600 }}>{typed}</span>
            <span style={{ color: "#6C63FF", animation: "blink 1s step-end infinite" }}>|</span>
          </div>

          {/* Quick stats row */}
          <div style={{
            display: "flex", gap: 20, marginBottom: 36, flexWrap: "wrap",
            animation: "fadeUp 0.8s ease 0.38s both",
          }}>
            {[
              { num: "6+", label: "Projects" },
              { num: "10+", label: "ML Algos" },
              { num: "30+", label: "MS Badges" },
              { num: "8+", label: "AI Certs" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "#6C63FF", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3, letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.45s both" }}>
            <a href="#projects" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: 14,
              background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
              color: "#fff", padding: "12px 28px",
              borderRadius: 100, textDecoration: "none",
              boxShadow: "0 0 28px rgba(108,99,255,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 42px rgba(108,99,255,0.5)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 28px rgba(108,99,255,0.35)"; }}
            >
              View Projects →
            </a>
            <a href="mailto:dwivediadarsh496@gmail.com" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: 14,
              background: "transparent",
              color: "rgba(255,255,255,0.8)", padding: "12px 28px",
              borderRadius: 100, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              transition: "all 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)"; e.currentTarget.style.color = "#6C63FF"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 18, marginTop: 32, animation: "fadeUp 0.8s ease 0.55s both", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/dwivediadarsh496-commits", icon: "⌥" },
              { label: "LinkedIn", href: "#", icon: "in" },
              { label: "YouTube", href: "#", icon: "▶" },
              { label: "Blog", href: "#", icon: "✍" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, color: "rgba(255,255,255,0.4)",
                textDecoration: "none", display: "flex", alignItems: "center", gap: 5,
                transition: "color 0.2s",
              }}
                onMouseOver={e => e.currentTarget.style.color = "#6C63FF"}
                onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
              >
                <span style={{ fontSize: 13 }}>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeUp 0.9s ease 0.3s both",
        }}>
          {/* Outer ring */}
          <div style={{
            position: "relative",
            width: 320,
            height: 320,
          }}>
            {/* Spinning gradient ring */}
            <div style={{
              position: "absolute", inset: -4,
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #6C63FF, #00C9A7, #6C63FF)",
              animation: "spin 6s linear infinite",
              zIndex: 0,
            }} />
            {/* White gap ring */}
            <div style={{
              position: "absolute", inset: -1,
              borderRadius: "50%",
              background: "#080812",
              zIndex: 1,
            }} />
            {/* Photo container */}
            <div style={{
              position: "absolute", inset: 4,
              borderRadius: "50%",
              overflow: "hidden",
              zIndex: 2,
              background: "rgba(108,99,255,0.1)",
            }}>
              <img
                src={photo}
                alt="Adarsh Dwivedi"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            {/* Floating badge — top right */}
            <div style={{
              position: "absolute", top: 10, right: -20, zIndex: 10,
              background: "rgba(10,10,28,0.92)",
              border: "1px solid rgba(108,99,255,0.35)",
              borderRadius: 12, padding: "8px 14px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              animation: "fadeUp 1s ease 0.7s both",
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "#6C63FF" }}>AI/ML</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>Engineer</div>
            </div>

            {/* Floating badge — bottom left */}
            <div style={{
              position: "absolute", bottom: 20, left: -28, zIndex: 10,
              background: "rgba(10,10,28,0.92)",
              border: "1px solid rgba(0,201,167,0.3)",
              borderRadius: 12, padding: "8px 14px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              animation: "fadeUp 1s ease 0.9s both",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00C9A7", flexShrink: 0, boxShadow: "0 0 6px #00C9A7", animation: "pulse 2s infinite" }} />
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11, color: "#fff" }}>Open to Work</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Bhilai, India</div>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div style={{
              position: "absolute", bottom: -10, right: -10, zIndex: 10,
              background: "rgba(10,10,28,0.92)",
              border: "1px solid rgba(255,107,107,0.3)",
              borderRadius: 12, padding: "8px 14px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              animation: "fadeUp 1s ease 1.1s both",
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "#FF6B6B" }}>6+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        animation: "bounce 2s ease infinite",
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em" }}>SCROLL</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(108,99,255,0.5), transparent)" }} />
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const hasLinks = project.github || project.live;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "44" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 20,
        padding: "26px 26px 22px",
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 80}ms`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
        opacity: hovered ? 1 : 0.4, transition: "opacity 0.3s",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 11,
            background: `${project.color}18`,
            border: `1px solid ${project.color}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 19, flexShrink: 0,
          }}>
            {project.icon}
          </div>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, fontSize: 16, color: "#fff",
            margin: 0, lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
        </div>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11, color: "rgba(255,255,255,0.3)",
          whiteSpace: "nowrap", marginTop: 4, flexShrink: 0,
        }}>
          {project.date}
        </span>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
        {project.stats.map((s) => (
          <span key={s} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 600,
            background: `${project.color}10`,
            color: project.color,
            padding: "3px 9px", borderRadius: 6,
            border: `1px solid ${project.color}20`,
            letterSpacing: "0.02em",
          }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {project.tags.map((t) => (
          <span key={t} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 500,
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.5)",
            padding: "3px 9px", borderRadius: 100,
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {t}
          </span>
        ))}
      </div>

      <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
        {project.bullets.map((b, i) => (
          <li key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: "rgba(255,255,255,0.52)",
            lineHeight: 1.65, paddingLeft: 15, position: "relative", marginBottom: 6,
          }}>
            <span style={{ position: "absolute", left: 0, color: project.color, fontSize: 10, top: 5 }}>▸</span>
            {b}
          </li>
        ))}
      </ul>

      {/* GitHub / Live links */}
      {hasLinks && (
        <div style={{ display: "flex", gap: 10, marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              display: "flex", alignItems: "center", gap: 5,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "6px 14px", borderRadius: 8,
              transition: "all 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
              onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
            >
              ⌥ GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, fontWeight: 600,
              color: project.color,
              textDecoration: "none",
              display: "flex", alignItems: "center", gap: 5,
              background: `${project.color}12`,
              border: `1px solid ${project.color}30`,
              padding: "6px 14px", borderRadius: 8,
              transition: "all 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.background = `${project.color}25`; }}
              onMouseOut={e => { e.currentTarget.style.background = `${project.color}12`; }}
            >
              ↗ Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080812; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080812; }
        ::-webkit-scrollbar-thumb { background: #6C63FF44; border-radius: 4px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 6px #00C9A7} 50%{opacity:0.5;box-shadow:0 0 12px #00C9A7} }
      `}</style>

      <Navbar active={active} setActive={setActive} />
      <HeroSection />

      {/* Education */}
      <section style={{ padding: "100px 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>EDUCATION</h2>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </AnimSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {[
            {
              school: "Rungta College of Engineering and Technology",
              degree: "Bachelor of Technology — CSE (AI & ML)",
              period: "Sept 2024 – June 2028",
              location: "Bhilai, India",
              color: "#6C63FF",
              icon: "🎓",
              current: true,
            },
            {
              school: "Govt. Excellence Higher Secondary School",
              degree: "MP Board — PCM — 85.4%",
              period: "July 2022 – April 2024",
              location: "Beohari, India",
              color: "#00C9A7",
              icon: "🏫",
              current: false,
            },
          ].map((e, i) => (
            <AnimSection key={i} delay={i * 120}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20, padding: "28px 28px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${e.color}, transparent)` }} />
                {e.current && (
                  <div style={{
                    position: "absolute", top: 18, right: 18,
                    background: "rgba(0,201,167,0.12)", border: "1px solid rgba(0,201,167,0.3)",
                    borderRadius: 100, padding: "3px 10px",
                    fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#00C9A7",
                    display: "flex", alignItems: "center", gap: 5,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00C9A7", animation: "pulse 2s infinite" }} />
                    Ongoing
                  </div>
                )}
                <div style={{ fontSize: 32, marginBottom: 14 }}>{e.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>{e.school}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: e.color, marginBottom: 14, fontWeight: 500 }}>{e.degree}</p>
                <div style={{ display: "flex", gap: 20 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>📅 {e.period}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>📍 {e.location}</span>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "20px 1.5rem 100px", maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>PROJECTS & ML LEARNINGS</h2>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </AnimSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>

        {/* ML Learnings */}
        <AnimSection delay={200}>
          <div style={{
            marginTop: 40,
            background: "rgba(108,99,255,0.05)",
            border: "1px solid rgba(108,99,255,0.15)",
            borderRadius: 20, padding: "28px 28px",
          }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 18, letterSpacing: "0.05em" }}>
              🧪 ML Algorithms Explored
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {ML_SKILLS.map((s) => (
                <span key={s} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 500,
                  background: "rgba(108,99,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  padding: "6px 14px", borderRadius: 100,
                  border: "1px solid rgba(108,99,255,0.2)",
                }}>{s}</span>
              ))}
            </div>
          </div>
        </AnimSection>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "20px 1.5rem 100px", maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>TECHNICAL SKILLS</h2>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </AnimSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {Object.entries(TECH_SKILLS).map(([cat, skills], ci) => (
            <AnimSection key={cat} delay={ci * 100}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20, padding: "28px",
              }}>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                  color: ci === 0 ? "#6C63FF" : "#00C9A7",
                  marginBottom: 18, letterSpacing: "0.1em",
                }}>
                  {cat.toUpperCase()}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map((s) => (
                    <span key={s} style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13, fontWeight: 500,
                      background: ci === 0 ? "rgba(108,99,255,0.08)" : "rgba(0,201,167,0.08)",
                      color: ci === 0 ? "rgba(140,130,255,0.9)" : "rgba(0,201,167,0.9)",
                      padding: "5px 12px", borderRadius: 100,
                      border: `1px solid ${ci === 0 ? "rgba(108,99,255,0.2)" : "rgba(0,201,167,0.2)"}`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" style={{ padding: "20px 1.5rem 100px", maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>CERTIFICATIONS</h2>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </AnimSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {CERTS.map((c, i) => (
            <AnimSection key={i} delay={i * 80}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "20px 22px",
                display: "flex", alignItems: "flex-start", gap: 14,
                transition: "all 0.25s",
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.3)"; e.currentTarget.style.background = "rgba(108,99,255,0.05)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 4 }}>{c.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{c.sub}</p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "20px 1.5rem 120px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <AnimSection>
          <div style={{
            background: "rgba(108,99,255,0.05)",
            border: "1px solid rgba(108,99,255,0.15)",
            borderRadius: 28, padding: "60px 40px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 12, position: "relative" }}>
              Let's Connect
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.45)", marginBottom: 36, lineHeight: 1.7, position: "relative" }}>
              Open to collaborations, project ideas, and AI/ML discussions. Drop a message!
            </p>
            <a href="mailto:dwivediadarsh496@gmail.com" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: 15,
              background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
              color: "#fff", padding: "14px 36px",
              borderRadius: 100, textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 0 35px rgba(108,99,255,0.4)",
              position: "relative",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 50px rgba(108,99,255,0.6)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 35px rgba(108,99,255,0.4)"; }}
            >
              ✉ dwivediadarsh496@gmail.com
            </a>
          </div>
        </AnimSection>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 1.5rem",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
          © 2026 Adarsh Dwivedi · Built with React
        </p>
      </footer>
    </>
  );
}