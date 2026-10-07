import React, { useEffect, useMemo, useRef, useState } from "react";

const profile = {
  name: "Prajwal Devaraj",
  initials: "PD",
  location: "United States",
  email: "pdevaraj001@gmail.com",
  github: "https://github.com/prajwal-devaraj",
  linkedin: "https://linkedin.com/in/prajwaldevaraj",
  linktree: "https://linktr.ee/prajwaldevaraj",
  x: "https://x.com/pdevaraj001",
  huggingface: "https://huggingface.co/prajwaldevaraj",
  scholar: "https://scholar.google.com/citations?hl=en&user=D40ny1EAAAAJ",
  orcid: "https://orcid.org/0009-0006-0069-928X",
  discord: "prajwaldevaraj",
};

const experiences = [
  {
    role: "Software Engineer Intern",
    org: "Greenhouse Research · Kent State University",
    period: "May 2026 — Aug 2026",
    kind: "Engineering",
    description:
      "Built around an IoT environmental-monitoring workflow — sensor data, backend storage, dashboards, alerting, testing, and real-world research requirements.",
  },
  {
    role: "Graduate Research Assistant",
    org: "Kent State University",
    period: "May 2025 — May 2026",
    kind: "Research",
    description:
      "Worked across applied AI/ML research in genomics and medical imaging, including ClinVar conflict prediction and gastrointestinal image analysis using real clinical data.",
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "Kent State University",
    period: "Sep 2025 — May 2026",
    kind: "Teaching",
    description:
      "Supported Operating Systems and Database Management Systems — lectures, office hours, grading, debugging help, and technical mentoring for 120+ students.",
  },
  {
    role: "Student Employee / Technical Operations",
    org: "Kent State University Bookstore · Barnes & Noble College",
    period: "Aug 2024 — May 2026",
    kind: "Leadership",
    description:
      "Handled store systems, technical troubleshooting, training, operations, inventory, customer workflows, and student ambassador responsibilities.",
  },
  {
    role: "Student Employee",
    org: "Commerce Café · Kent State University",
    period: "Aug 2024 — Feb 2026",
    kind: "Operations",
    description:
      "Worked in fast-paced campus operations, opening/closing, training, inventory, service quality, and team coordination.",
  },
  {
    role: "Administrator",
    org: "Sri Guruvandana Global Pre-School",
    period: "Mar 2020 — Jul 2023",
    kind: "Leadership",
    description:
      "Ran day-to-day academic and administrative operations, built structured workflows, supported thousands of students, and taught basic computing.",
  },
  {
    role: "Software Engineer Intern",
    org: "Technofly Solutions",
    period: "Aug 2022 — Sep 2022",
    kind: "Engineering",
    description:
      "Contributed to a bus transportation management system across frontend, backend, database, and agile sprint workflows.",
  },
  {
    role: "Software Engineer Intern",
    org: "Gowri Software Solutions Pvt. Ltd.",
    period: "Dec 2020 — Jan 2021",
    kind: "Engineering",
    description:
      "Early hands-on software development experience across frontend, backend, databases, testing, debugging, and application workflows.",
  },
];

const research = [
  {
    title: "Hybrid Machine Learning + Generative AI + Agentic AI Framework",
    status: "Paper submitted · Sep 2026",
    tone: "done",
    summary:
      "Completed research combining machine learning, generative AI, agentic AI, and evolutionary/genetic approaches where genuinely implemented.",
  },
  {
    title: "Firehawk Bird Detection & Environmental Monitoring System",
    status: "Completed · Recognized by Karnataka Forest Department",
    tone: "done",
    summary:
      "Environmental intelligence project focused on firehawk bird detection and forest monitoring; recognized as a best project in forest preservation context.",
  },
  {
    title: "Uniswap Liquidity Intelligence Dashboard",
    status: "In development · Team lead (5)",
    tone: "active",
    summary:
      "Blockchain/Web3 analytics platform focused on liquidity intelligence, financial data visualization, full-stack engineering, and data pipelines.",
  },
  {
    title: "Endoscopy Image Analysis for Gastrointestinal Abnormality Detection",
    status: "In development · SCI Lab, Kent State",
    tone: "active",
    summary:
      "Medical-imaging research with a professor using real clinical data to study gastrointestinal abnormalities and postoperative patterns.",
  },
  {
    title: "Mice Odour Detection & Behavior Analysis System",
    status: "Upcoming",
    tone: "upcoming",
    summary:
      "Planned multimodal sensing and behavioral-analysis project exploring signals around odour, activity, and animal behavior.",
  },
  {
    title: "Integrated Fire & Wildlife Monitoring System",
    status: "Upcoming",
    tone: "upcoming",
    summary:
      "Planned integrated sensing, AI, and monitoring platform for fire risk and wildlife observation.",
  },
];

const projects = [
  {
    title: "AdFlow Intelligence",
    category: "AI / AdTech",
    status: "Almost done",
    summary: "AdTech measurement and activation platform built independently.",
    tags: ["AdTech", "Analytics", "AI", "Full-Stack"],
    featured: true,
  },
  {
    title: "AdFusion AI",
    category: "AI / Full-Stack",
    status: "Building",
    summary: "Multimodal conversational advertising platform and enterprise AI product architecture.",
    tags: ["Next.js", "FastAPI", "AI", "Agents"],
    github: "https://github.com/prajwal-devaraj/AdFusion_AI",
    featured: true,
  },
  {
    title: "CivicPulse Bharat",
    category: "Civic Tech",
    status: "Building",
    summary: "AI-assisted civic engagement platform that turns public issues into structured, visible, actionable signals.",
    tags: ["Next.js", "TypeScript", "AI", "Data Viz"],
    github: "https://github.com/prajwal-devaraj/CivicPulse-Bharat",
    featured: true,
  },
  {
    title: "CivicLens AI",
    category: "Embodied AI",
    status: "Research build",
    summary: "First-person multimodal and embodied intelligence platform spanning perception, memory, reasoning, planning, and telemetry.",
    tags: ["PyTorch", "ROS 2", "FastAPI", "PostGIS"],
    github: "https://github.com/prajwal-devaraj/CivicLens-AI-First-Person-Multimodal-and-Embodied-Intelligence-Platform",
    featured: true,
  },
  {
    title: "What's Cooking",
    category: "Full-Stack",
    status: "Live",
    summary: "Recipe discovery app that matches recipes to ingredients already available in the kitchen.",
    tags: ["Full-Stack", "PostgreSQL", "i18n", "Vercel"],
    live: "https://whats-cooking-app-kappa.vercel.app/",
    featured: true,
  },
  {
    title: "Agentic Search Assistant",
    category: "Agentic AI",
    status: "Building",
    summary: "Citation-backed AI search and research assistant using live retrieval, RAG, confidence scoring, and agentic flows.",
    tags: ["RAG", "FastAPI", "React", "LLMs"],
    github: "https://github.com/prajwal-devaraj/Agentic-Search-Assistant",
    featured: true,
  },
  {
    title: "Procurement & Vendor Management Platform",
    category: "Enterprise Software",
    status: "Built",
    summary: "End-to-end procurement lifecycle platform with approvals, RBAC, invoice matching, APIs, tests, and Dockerized delivery.",
    tags: ["Node.js", "JWT", "RBAC", "Testing"],
    github: "https://github.com/prajwal-devaraj/Procurement-Vendor-Management-Platform",
    featured: true,
  },
  {
    title: "Employee Self-Service Portal",
    category: "Enterprise Software",
    status: "Built",
    summary: "Employee-facing self-service portal covering common workforce workflows and secure application patterns.",
    tags: ["Full-Stack", "APIs", "Database"],
    github: "https://github.com/prajwal-devaraj/Employee-Self-Service-Portal",
  },
  {
    title: "SmartSpend",
    category: "AI / FinTech",
    status: "Capstone · Fall 2025",
    summary: "AI-powered personal-finance platform; led a 6-person team and owned backend, ML, database, and major integration work.",
    tags: ["React", "Flask", "MongoDB", "ML"],
    github: "https://github.com/prajwal-devaraj/SmartSpend",
    featured: true,
  },
  {
    title: "Real-Time Inventory Management System",
    category: "Backend / Data",
    status: "Built · Team lead (3)",
    summary: "Real-time inventory platform; led development with primary ownership of backend and database design.",
    tags: ["Backend", "Database", "Real-Time"],
    github: "https://github.com/prajwal-devaraj/Real-Time-Inventory-Management-System",
  },
  {
    title: "Library Inventory & Management System",
    category: "Backend / Data",
    status: "Built · Team lead (4)",
    summary: "Library management system with team leadership and primary ownership of backend and database work.",
    tags: ["Backend", "Database", "Team Lead"],
    github: "https://github.com/prajwal-devaraj/Library-Management-System",
  },
  {
    title: "Student & School Management System",
    category: "Full-Stack",
    status: "Built",
    summary: "School-oriented information management application for student and administrative workflows.",
    tags: ["Full-Stack", "Database"],
    github: "https://github.com/prajwal-devaraj/Student-Management-System",
  },
  {
    title: "Mobile Quiz App",
    category: "Mobile",
    status: "Built",
    summary: "Mobile quiz application exploring app architecture, interactions, and user-facing flows.",
    tags: ["Mobile", "UI"],
    github: "https://github.com/prajwal-devaraj/QuizApp",
  },
  {
    title: "CodeTheGenome",
    category: "Healthcare AI",
    status: "Best Project · Spring 2025",
    summary: "ClinVar conflict-prediction system; original idea, team lead of 4, with major ownership across dataset work, ML architecture, hyperparameters, and training.",
    tags: ["XGBoost", "LightGBM", "CatBoost", "SHAP"],
    github: "https://github.com/prajwal-devaraj/CodeTheGenome",
    featured: true,
  },
  {
    title: "Edge-Cloud Collaborative Anomaly Detection for CNC Machining",
    category: "ML Systems",
    status: "Built",
    summary: "Edge/cloud anomaly-detection research pipeline for CNC machining sensor streams.",
    tags: ["Time-Series", "Edge AI", "Anomaly Detection"],
    github: "https://github.com/prajwal-devaraj/edge_TS_preprocess",
  },
  {
    title: "Mixture of Experts — Explicit Function Decomposition",
    category: "Deep Learning",
    status: "Built",
    summary: "Experiment exploring explicit function decomposition through Mixture-of-Experts model structure.",
    tags: ["MoE", "Deep Learning", "Research"],
  },
  {
    title: "CNN with 3×3 Kernels + Manual Convolution Verification",
    category: "Deep Learning",
    status: "Built",
    summary: "CNN implementation paired with manual convolution verification to understand model mechanics from first principles.",
    tags: ["CNN", "Computer Vision", "Math"],
  },
  {
    title: "3-Layer MLP for MNIST",
    category: "Deep Learning",
    status: "Built",
    summary: "Three-layer multilayer perceptron implementation for handwritten digit recognition.",
    tags: ["MLP", "MNIST", "Neural Networks"],
  },
  {
    title: "MNIST Visual Autoregressive Modeling",
    category: "Generative AI",
    status: "Built",
    summary: "Visual autoregressive modeling experiment on MNIST data.",
    tags: ["Autoregressive", "MNIST", "Generative AI"],
  },
  {
    title: "Facial Emotion Recognition",
    category: "Computer Vision",
    status: "Built",
    summary: "Computer-vision system for identifying facial emotion classes from visual input.",
    tags: ["Computer Vision", "Emotion AI"],
  },
  {
    title: "ADL Recognition",
    category: "Computer Vision",
    status: "Built",
    summary: "Activity-of-daily-living recognition project using visual/sensor-oriented ML concepts.",
    tags: ["Activity Recognition", "ML"],
  },
  {
    title: "PIRVISION",
    category: "Computer Vision / IoT",
    status: "Built",
    summary: "Human-presence detection system combining perception-oriented logic with sensing concepts.",
    tags: ["Presence Detection", "IoT", "Vision"],
  },
  {
    title: "Don't Touch Your Face",
    category: "Computer Vision",
    status: "Built",
    summary: "Computer-vision project for detecting face-touching behavior.",
    tags: ["OpenCV", "Vision", "Detection"],
    github: "https://github.com/prajwal-devaraj/Don-t_touch_your_face",
  },
  {
    title: "AI Avatar & Cartoon Generator",
    category: "Generative AI",
    status: "Built",
    summary: "AI image transformation and avatar/cartoon generation project.",
    tags: ["Generative AI", "Images", "Web"],
    github: "https://github.com/prajwal-devaraj/AI-Avatar-Cartoon-Generator",
  },
  {
    title: "VishingAI",
    category: "AI Security",
    status: "Built",
    summary: "Voice-phishing detection system using AI-driven signal and classification workflows.",
    tags: ["Voice", "Security", "AI"],
    github: "https://github.com/prajwal-devaraj/VishingAI-Voice-Phishing-Detection-Using-AI",
  },
  {
    title: "Text2Language",
    category: "NLP",
    status: "Built",
    summary: "Language-detection web application for identifying text language through NLP classification.",
    tags: ["NLP", "Web", "Classification"],
    github: "https://github.com/prajwal-devaraj/Text2Language",
  },
  {
    title: "SocialSphere Analytics Platform",
    category: "Data Engineering",
    status: "Built",
    summary: "Analytics lakehouse and product-intelligence pipeline with PySpark, Airflow, quality checks, APIs, tests, and dashboards.",
    tags: ["PySpark", "Airflow", "Lakehouse", "Analytics"],
    github: "https://github.com/prajwal-devaraj/SocialSphere-Analytics-Platform",
    featured: true,
  },
  {
    title: "Adaptive Query Optimizer",
    category: "Databases",
    status: "Built",
    summary: "Query-optimization system exploring adaptive planning, performance tradeoffs, and database execution behavior.",
    tags: ["Databases", "Optimization", "Systems"],
    github: "https://github.com/prajwal-devaraj/adaptive-query-optimizer",
  },
  {
    title: "SecHealthDB — Secure Healthcare DBaaS",
    category: "Security / Databases",
    status: "Built",
    summary: "Secure Database-as-a-Service system designed around healthcare data, privacy, and protected database operations.",
    tags: ["Security", "DBaaS", "Healthcare"],
    github: "https://github.com/prajwal-devaraj/Secure-Database-as-a-Service-DBaaS-System",
  },
  {
    title: "Facebook Graph Network Analysis",
    category: "Graph ML",
    status: "Built",
    summary: "Social graph analysis project exploring network structure, graph metrics, and relationship patterns.",
    tags: ["Graphs", "NetworkX", "Analytics"],
    github: "https://github.com/prajwal-devaraj/Facebook-Graph",
  },
  {
    title: "DeepWalk — Online Learning of Social Representations",
    category: "Graph ML",
    status: "Built",
    summary: "Graph representation learning project based on DeepWalk-style node embeddings and social-network structure.",
    tags: ["DeepWalk", "Embeddings", "Graphs"],
    github: "https://github.com/prajwal-devaraj/DeepWalk-Online-Learning-of-Social-Representations",
  },
  {
    title: "MOOC User Action Analysis & Forecasting",
    category: "Data Science",
    status: "Built",
    summary: "Behavior analytics and forecasting project using MOOC user-action data.",
    tags: ["Forecasting", "Analytics", "ML"],
    github: "https://github.com/prajwal-devaraj/MOOC-USER-ACTION",
  },
  {
    title: "Network Anomaly Detection",
    category: "Cybersecurity",
    status: "Built",
    summary: "ML-oriented anomaly detection project for network behavior and suspicious traffic patterns.",
    tags: ["Security", "Anomaly Detection", "Networks"],
    github: "https://github.com/prajwal-devaraj/Network-Anamoly-Detection",
  },
  {
    title: "Bajpe Air Crash 3D Simulation",
    category: "Computer Graphics",
    status: "Built",
    summary: "3D simulation project reconstructing and visualizing the Bajpe air crash scenario through computer-graphics concepts.",
    tags: ["3D", "Simulation", "Graphics"],
  },
  {
    title: "Disaster Management & Early Warning System",
    category: "AI / Public Safety",
    status: "Best Project · Team lead (3)",
    summary: "Multi-hazard disaster intelligence platform; led the team and owned backend, database, ML, and major system integration.",
    tags: ["Flask", "ML", "Leaflet", "Risk"],
    github: "https://github.com/prajwal-devaraj/DISASTER-MANAGEMENT-EARLY-WARNING-SYSTEM",
    featured: true,
  },
  {
    title: "IDERS",
    category: "Emergency Tech",
    status: "Built",
    summary: "Intelligent Disaster & Emergency Reporting System for structured incident reporting and response workflows.",
    tags: ["Emergency", "Reporting", "Full-Stack"],
    github: "https://github.com/prajwal-devaraj/IDERS-Intelligent-Disaster-Emergency-Reporting-System",
  },
  {
    title: "Intelligent Alarm Clock Dashboard",
    category: "Web / Automation",
    status: "Built",
    summary: "Smart alarm-clock dashboard designed around Kent, Ohio and contextual daily information.",
    tags: ["Dashboard", "Automation", "Web"],
    github: "https://github.com/prajwal-devaraj/Intelligent-Alarm-Clock---Kent-OH",
  },
  {
    title: "Bus Transportation Management System",
    category: "Enterprise Software",
    status: "Internship project",
    summary: "Transportation-management system developed during the Technofly Solutions internship.",
    tags: ["Backend", "Frontend", "Database"],
  },
  {
    title: "JSS Fashion UI/UX Design",
    category: "UI / UX",
    status: "Built",
    summary: "Application interface and experience design created for the JSS Fashion team.",
    tags: ["UI/UX", "Product Design"],
  },
];

const skillCloud = [
  "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Go", "Kotlin",
  "React", "Next.js", "FastAPI", "Flask", "Django", "Node.js", "REST APIs",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", "Azure", "Docker", "Kubernetes",
  "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "RAG", "LLMs", "AI Agents",
  "LangChain", "LangGraph", "Spark", "PySpark", "Airflow", "ROS 2", "GitHub Actions",
  "Distributed Systems", "System Design", "Computer Vision", "Data Engineering", "ML Research",
];

const studies = [
  { school: "Kent State University", degree: "M.S. Computer Science", period: "Aug 2024 — May 2026", meta: "GPA 3.966 / 4.0 · Kent, Ohio" },
  { school: "JSS Academy of Technical Education · VTU", degree: "B.E. Computer Science", period: "Aug 2019 — Jun 2023", meta: "Bangalore, Karnataka, India" },
];

const stats = [
  ["40+", "projects & experiments"],
  ["3.966", "M.S. GPA / 4.0"],
  ["93.3%", "ClinVar model accuracy"],
  ["120+", "students supported as TA"],
];

const socials = [
  ["GitHub", "Code, experiments & repos", profile.github],
  ["LinkedIn", "Professional timeline", profile.linkedin],
  ["Hugging Face", "Models & AI work", profile.huggingface],
  ["Google Scholar", "Research profile", profile.scholar],
  ["ORCID", "Research identity", profile.orcid],
  ["X", "Thoughts & updates", profile.x],
  ["Linktree", "Everything in one place", profile.linktree],
];

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    external: <path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3"/><path d="m14 5-4 14"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
    terminal: <><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]")];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--x", `${e.clientX}px`);
      ref.current.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div className="cursor-glow" ref={ref} />;
}

function MatrixCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let raf;
    let particles = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = innerWidth * dpr;
      c.height = innerHeight * dpr;
      c.style.width = `${innerWidth}px`;
      c.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(80, Math.floor(innerWidth / 18));
      particles = Array.from({ length: count }, (_, i) => ({
        x: (i / count) * innerWidth + Math.random() * 20,
        y: Math.random() * innerHeight,
        s: 0.25 + Math.random() * 0.7,
        a: 0.04 + Math.random() * 0.12,
      }));
    };
    resize();
    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(103,232,249,${p.a})`;
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", p.x, p.y);
        p.y += p.s;
        if (p.y > innerHeight + 15) p.y = -15;
      });
      raf = requestAnimationFrame(loop);
    };
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas className="matrix-canvas" ref={ref} aria-hidden="true" />;
}

function SectionHead({ kicker, title, copy }) {
  return (
    <div className="section-head" data-reveal>
      <p className="kicker"><span>{"//"}</span> {kicker}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`} data-reveal style={{ "--delay": `${Math.min(index * 40, 320)}ms` }}>
      <div className="project-topline">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Icon name="github" /> Code</a>}
        {project.live && <a href={project.live} target="_blank" rel="noreferrer"><Icon name="external" /> Live</a>}
      </div>
    </article>
  );
}

export default function PrajwalPortfolio() {
  const [theme, setTheme] = useState(() => localStorage.getItem("pd-theme") || "dark");
  const [projectQuery, setProjectQuery] = useState("");
  const [projectFilter, setProjectFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(false);

  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pd-theme", theme);
  }, [theme]);

  const filters = useMemo(() => {
    const roots = [...new Set(projects.map((p) => p.category.split(" /")[0]))];
    return ["All", ...roots.slice(0, 8)];
  }, []);

  const filtered = useMemo(() => {
    const q = projectQuery.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQ = !q || [p.title, p.category, p.summary, ...p.tags].join(" ").toLowerCase().includes(q);
      const matchesF = projectFilter === "All" || p.category.startsWith(projectFilter);
      return matchesQ && matchesF;
    });
  }, [projectQuery, projectFilter]);

  const visibleProjects = showAllProjects || projectQuery || projectFilter !== "All"
    ? filtered
    : filtered.filter((p) => p.featured).slice(0, 10);

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(profile.discord);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <>
      <style>{css}</style>
      <MatrixCanvas />
      <CursorGlow />
      <div className="noise" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav shell">
          <a className="brand" href="#top" aria-label="Prajwal Devaraj home">
            <span className="brand-mark">PD</span>
            <span className="brand-text"><b>Prajwal</b><small>devaraj.dev</small></span>
          </a>
          <div className={`nav-links ${menu ? "open" : ""}`}>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
            <a href="#research" onClick={() => setMenu(false)}>Research</a>
            <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
            <a href="#journey" onClick={() => setMenu(false)}>Journey</a>
            <a href="#connect" onClick={() => setMenu(false)}>Connect</a>
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><span/><span/></button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="terminal-pill"><span className="dot"/> <span>~/prajwal</span> <b>whoami</b><i>↵</i></div>
              <p className="eyebrow">CS · AI/ML · SYSTEMS · RESEARCH · BUILDING THINGS</p>
              <h1>
                I’m Prajwal.<br />
                <span className="gradient-text">I build to understand.</span>
              </h1>
              <p className="hero-lead">
                Computer scientist, software builder, AI/ML researcher, full-stack engineer, teacher, and relentlessly curious human. This is my digital lab — the things I’ve built, studied, broken, rebuilt, and learned from.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">Explore my work <Icon name="arrow" /></a>
                <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
              </div>
              <div className="hero-mini">
                <span><b>01</b> engineer</span><span><b>02</b> researcher</span><span><b>03</b> builder</span><span><b>04</b> storyteller</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-a"><span>AI</span><i/><i/><i/></div>
              <div className="orbit orbit-b"><span>ML</span><i/><i/></div>
              <div className="orbit orbit-c"><span>01</span><i/><i/><i/></div>
              <div className="core">
                <span className="core-ring" />
                <div className="core-avatar">PD</div>
                <p>COMPUTER<br/>SCIENCE</p>
              </div>
              <div className="floating-chip chip-1">&lt;code/&gt;</div>
              <div className="floating-chip chip-2">{`{ ideas }`}</div>
              <div className="floating-chip chip-3">∑ curiosity</div>
              <div className="floating-chip chip-4">git commit -m "build"</div>
            </div>
          </div>

          <div className="ticker" aria-label="Technology ticker">
            <div className="ticker-track">{[...skillCloud.slice(0, 18), ...skillCloud.slice(0, 18)].map((s, i) => <span key={`${s}-${i}`}>{s}<b>✦</b></span>)}</div>
          </div>
        </section>

        <section className="stats-band">
          <div className="shell stats-grid">
            {stats.map(([n, label]) => <div className="stat" key={label} data-reveal><strong>{n}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section id="about" className="section shell about-section">
          <SectionHead kicker="ABOUT ME" title="More than a résumé. More like a running experiment." copy="I like computer science because it lets me move between abstraction and reality — from an algorithm on paper to a system that is actually useful." />
          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>I finished my <strong>M.S. in Computer Science at Kent State University</strong>, but I still approach technology like a student: question everything, learn the foundations, build the thing, inspect what failed, and try again.</p>
              <p>My work moves across <strong>software engineering, AI/ML, backend systems, full-stack development, data engineering, databases, computer vision, agentic systems, and research</strong>. I’m happiest when a project forces me to combine several of those worlds.</p>
              <p>I’ve also been a research assistant, teaching assistant, intern, team lead, administrator, student worker, and mentor. Those experiences taught me that engineering is not only code — it’s communication, patience, ownership, curiosity, and the ability to make complicated things understandable.</p>
              <p>Outside of code, I write stories, poems, and songs. I like ideas with personality. That is why this site is intentionally a little different.</p>
            </div>
            <div className="terminal-card" data-reveal>
              <div className="terminal-bar"><span/><span/><span/><b>identity.sh</b></div>
              <pre><code><em>$</em> cat prajwal.json{"\n"}{`{`}{"\n"}  <i>"role"</i>: <b>"builder + researcher"</b>,{"\n"}  <i>"degree"</i>: <b>"M.S. Computer Science"</b>,{"\n"}  <i>"curiosity"</i>: <b>true</b>,{"\n"}  <i>"projects"</i>: <b>"40+"</b>,{"\n"}  <i>"favorite_mode"</i>: <b>"learn → build → iterate"</b>,{"\n"}  <i>"currently"</i>: [<b>"AI"</b>, <b>"agents"</b>, <b>"systems"</b>]{"\n"}{`}`}{"\n"}{"\n"}<em>$</em> echo "still learning..."<span className="terminal-caret">▌</span></code></pre>
            </div>
          </div>
        </section>

        <section id="research" className="section research-section">
          <div className="shell">
            <SectionHead kicker="RESEARCH LAB" title="Questions I’m exploring beyond the obvious." copy="Some projects are finished, some are active, and some are ideas waiting for the right experiment." />
            <div className="research-grid">
              {research.map((r, i) => (
                <article className="research-card" data-reveal key={r.title} style={{"--delay": `${i * 60}ms`}}>
                  <div className="research-num">R{String(i + 1).padStart(2, "0")}</div>
                  <span className={`status ${r.tone}`}>{r.status}</span>
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                  <div className="signal"><i/><i/><i/><i/><i/></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section shell projects-section">
          <SectionHead kicker="PROJECT ARCHIVE" title="A lot of building. A lot of learning." copy={`Not a curated list of five perfect projects — this is the fuller archive. ${projects.length} builds across AI, systems, full-stack, data, security, graphics, and research.`} />

          <div className="project-controls" data-reveal>
            <label className="search-box"><Icon name="search"/><input value={projectQuery} onChange={(e) => setProjectQuery(e.target.value)} placeholder="Search projects, tech, ideas..." /></label>
            <div className="filter-row">
              {filters.map((f) => <button key={f} className={projectFilter === f ? "active" : ""} onClick={() => setProjectFilter(f)}>{f}</button>)}
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((p, i) => <ProjectCard project={p} index={projects.indexOf(p)} key={p.title} />)}
          </div>
          {!projectQuery && projectFilter === "All" && (
            <button className="show-all" onClick={() => setShowAllProjects(!showAllProjects)}>
              {showAllProjects ? "Show featured projects" : `Open full archive · ${projects.length} projects`} <Icon name="arrow" />
            </button>
          )}
          {visibleProjects.length === 0 && <p className="empty">No project matched that search. Try another keyword.</p>}
        </section>

        <section className="section skills-section">
          <div className="shell">
            <SectionHead kicker="TOOLBOX" title="The stack changes. The fundamentals stay." copy="Languages and frameworks are tools, not identity — but yes, I enjoy collecting good tools." />
            <div className="skill-cloud" data-reveal>
              {skillCloud.map((skill, i) => <span style={{"--i": i}} key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="journey" className="section shell journey-section">
          <SectionHead kicker="JOURNEY" title="The path has never been one straight line." copy="Research, teaching, software, operations, leadership — each one changed how I think about building technology." />
          <div className="timeline">
            {experiences.map((e, i) => (
              <article className="timeline-item" key={`${e.role}-${e.org}`} data-reveal>
                <div className="timeline-node"><span>{String(i + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{e.kind}</span><time>{e.period}</time></div>
                  <h3>{e.role}</h3>
                  <h4>{e.org}</h4>
                  <p>{e.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell education-section">
          <SectionHead kicker="EDUCATION" title="The formal part of the learning loop." />
          <div className="education-grid">
            {studies.map((s, i) => (
              <article className="edu-card" key={s.school} data-reveal>
                <div className="edu-code">0{i + 1}</div>
                <p>{s.period}</p>
                <h3>{s.degree}</h3>
                <h4>{s.school}</h4>
                <span>{s.meta}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="connect" className="section connect-section">
          <div className="shell">
            <SectionHead kicker="THE INTERNET VERSION OF ME" title="Code here. Research there. Chaos everywhere." copy="These are the places where different pieces of my work live." />
            <div className="social-grid">
              {socials.map(([name, desc, href], i) => (
                <a className="social-card" href={href} target="_blank" rel="noreferrer" key={name} data-reveal style={{"--delay": `${i * 45}ms`}}>
                  <span className="social-num">0{i + 1}</span>
                  <div><strong>{name}</strong><small>{desc}</small></div>
                  <Icon name="external" />
                </a>
              ))}
              <button className="social-card discord-card" onClick={copyDiscord} data-reveal>
                <span className="social-num">08</span>
                <div><strong>Discord</strong><small>{copied ? "Copied ✓" : profile.discord}</small></div>
                <Icon name="copy" />
              </button>
            </div>

            <div className="contact-panel" data-reveal>
              <div>
                <p className="kicker"><span>{"//"}</span> SAY HELLO</p>
                <h2>Want to talk about an idea, project, research problem, or something weirdly technical?</h2>
              </div>
              <a className="big-mail" href={`mailto:${profile.email}`}><Icon name="mail"/> {profile.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><span className="brand-mark">PD</span><p>Designed & built by Prajwal Devaraj.</p></div>
          <p className="footer-code"><Icon name="terminal"/> while (curious) {'{'} learn(); build(); repeat(); {'}'}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

const css = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root{--bg:#070a0f;--bg2:#0b1018;--panel:rgba(14,20,30,.78);--panel2:#101722;--text:#f2f6fb;--muted:#8b98aa;--line:rgba(148,163,184,.15);--cyan:#67e8f9;--blue:#60a5fa;--violet:#a78bfa;--lime:#bef264;--pink:#f0abfc;--shadow:0 30px 80px rgba(0,0,0,.35);--nav:rgba(7,10,15,.72)}
:root[data-theme='light']{--bg:#f4f7fb;--bg2:#ecf2f8;--panel:rgba(255,255,255,.8);--panel2:#fff;--text:#111827;--muted:#5b6778;--line:rgba(15,23,42,.12);--nav:rgba(244,247,251,.78);--shadow:0 24px 70px rgba(30,41,59,.10)}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,sans-serif;overflow-x:hidden}body::selection{background:var(--cyan);color:#001014}a{color:inherit;text-decoration:none}button,input{font:inherit}button{color:inherit}.shell{width:min(1180px,calc(100% - 42px));margin-inline:auto}.noise{position:fixed;inset:0;pointer-events:none;z-index:999;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E")}.matrix-canvas{position:fixed;inset:0;z-index:-3;opacity:.7}.cursor-glow{position:fixed;inset:0;z-index:-2;pointer-events:none;background:radial-gradient(500px circle at var(--x,50%) var(--y,20%),rgba(96,165,250,.09),transparent 45%)}
.nav-wrap{position:fixed;top:0;left:0;right:0;z-index:50;border-bottom:1px solid var(--line);background:var(--nav);backdrop-filter:blur(20px)}.nav{height:72px;display:flex;align-items:center;justify-content:space-between}.brand{display:flex;align-items:center;gap:11px}.brand-mark{width:38px;height:38px;display:grid;place-items:center;border:1px solid rgba(103,232,249,.4);background:linear-gradient(145deg,rgba(103,232,249,.13),rgba(167,139,250,.1));font:700 13px 'JetBrains Mono';color:var(--cyan);box-shadow:inset 0 0 20px rgba(103,232,249,.05)}.brand-text{display:flex;flex-direction:column;line-height:1.02}.brand-text b{font-family:'Space Grotesk';font-size:15px}.brand-text small{font:500 10px 'JetBrains Mono';color:var(--muted);margin-top:4px}.nav-links{display:flex;gap:28px}.nav-links a{font:500 12px 'JetBrains Mono';color:var(--muted);transition:.2s}.nav-links a:hover{color:var(--cyan)}.nav-actions{display:flex;align-items:center;gap:8px}.icon-btn,.menu-btn{width:40px;height:40px;border:1px solid var(--line);background:transparent;display:grid;place-items:center;cursor:pointer}.icon-btn:hover{border-color:rgba(103,232,249,.45);color:var(--cyan)}.menu-btn{display:none;position:relative}.menu-btn span{position:absolute;width:16px;height:1px;background:currentColor;transform:translateY(-3px)}.menu-btn span+span{transform:translateY(3px)}
.hero{min-height:100vh;padding-top:150px;display:flex;flex-direction:column;justify-content:center}.hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:70px;align-items:center}.terminal-pill{display:inline-flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid var(--line);background:rgba(255,255,255,.025);font:500 11px 'JetBrains Mono';color:var(--muted);margin-bottom:28px}.terminal-pill .dot{width:7px;height:7px;border-radius:50%;background:var(--lime);box-shadow:0 0 18px var(--lime);animation:pulse 1.8s infinite}.terminal-pill b{color:var(--cyan);font-weight:500}.terminal-pill i{color:var(--violet);font-style:normal}.eyebrow{font:600 11px 'JetBrains Mono';letter-spacing:.14em;color:var(--blue);margin:0 0 14px}.hero h1{font:700 clamp(52px,7vw,92px)/.94 'Space Grotesk';letter-spacing:-.055em;margin:0;max-width:820px}.gradient-text{background:linear-gradient(90deg,var(--cyan),var(--blue) 35%,var(--violet) 68%,var(--pink));background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gradientShift 5s linear infinite}.hero-lead{max-width:720px;color:var(--muted);font-size:18px;line-height:1.78;margin:28px 0 32px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap}.btn{height:48px;padding:0 18px;display:inline-flex;align-items:center;gap:9px;border:1px solid var(--line);font:600 12px 'JetBrains Mono';transition:.25s}.btn.primary{background:var(--text);color:var(--bg);border-color:var(--text)}.btn:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(96,165,250,.12)}.btn.ghost:hover{border-color:var(--cyan);color:var(--cyan)}.hero-mini{display:flex;flex-wrap:wrap;gap:22px;margin-top:36px;font:500 11px 'JetBrains Mono';color:var(--muted)}.hero-mini b{color:var(--cyan);margin-right:5px}.hero-visual{aspect-ratio:1;position:relative;display:grid;place-items:center;max-width:500px;margin-left:auto}.hero-visual::before{content:"";position:absolute;inset:7%;border-radius:50%;background:radial-gradient(circle,rgba(96,165,250,.1),transparent 65%);filter:blur(10px)}.core{width:180px;height:180px;border:1px solid rgba(103,232,249,.32);border-radius:50%;display:grid;place-items:center;position:relative;background:rgba(8,14,22,.72);box-shadow:0 0 80px rgba(96,165,250,.12),inset 0 0 45px rgba(103,232,249,.05)}:root[data-theme='light'] .core{background:rgba(255,255,255,.8)}.core-avatar{font:700 54px 'Space Grotesk';letter-spacing:-.06em;background:linear-gradient(140deg,var(--cyan),var(--violet));-webkit-background-clip:text;color:transparent}.core p{position:absolute;bottom:25px;margin:0;font:600 7px/1.4 'JetBrains Mono';letter-spacing:.22em;text-align:center;color:var(--muted)}.core-ring{position:absolute;inset:-12px;border:1px dashed rgba(167,139,250,.3);border-radius:50%;animation:spin 18s linear infinite}.orbit{position:absolute;border:1px dashed rgba(148,163,184,.18);border-radius:50%;animation:spin 24s linear infinite}.orbit span{position:absolute;left:50%;top:-9px;transform:translateX(-50%);background:var(--bg);color:var(--cyan);font:500 9px 'JetBrains Mono';padding:3px 5px}.orbit i{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--cyan);box-shadow:0 0 18px var(--cyan)}.orbit-a{inset:12%}.orbit-b{inset:2%;animation-duration:34s;animation-direction:reverse}.orbit-c{inset:24%;animation-duration:16s}.orbit-a i:nth-of-type(1){top:18%;left:5%}.orbit-a i:nth-of-type(2){right:9%;bottom:18%;background:var(--violet)}.orbit-a i:nth-of-type(3){right:-3px;top:48%;background:var(--lime)}.orbit-b i:nth-of-type(1){left:20%;bottom:5%;background:var(--pink)}.orbit-b i:nth-of-type(2){right:12%;top:16%;background:var(--blue)}.orbit-c i:nth-of-type(1){left:-3px;top:45%}.orbit-c i:nth-of-type(2){right:16%;top:6%;background:var(--pink)}.orbit-c i:nth-of-type(3){bottom:4%;left:34%;background:var(--lime)}.floating-chip{position:absolute;padding:8px 10px;background:var(--panel);border:1px solid var(--line);backdrop-filter:blur(12px);font:500 10px 'JetBrains Mono';color:var(--muted);box-shadow:var(--shadow);animation:float 5s ease-in-out infinite}.chip-1{top:12%;left:0;color:var(--cyan)}.chip-2{top:25%;right:-3%;animation-delay:-1s;color:var(--violet)}.chip-3{bottom:16%;left:0;animation-delay:-2s;color:var(--lime)}.chip-4{bottom:5%;right:0;animation-delay:-3s}.ticker{overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-top:80px}.ticker-track{display:flex;width:max-content;animation:ticker 35s linear infinite}.ticker span{font:500 10px 'JetBrains Mono';letter-spacing:.08em;color:var(--muted);padding:15px 13px;white-space:nowrap}.ticker b{color:var(--cyan);margin-left:25px;font-size:8px}
.stats-band{border-bottom:1px solid var(--line);background:linear-gradient(90deg,rgba(103,232,249,.025),rgba(167,139,250,.025))}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr)}.stat{padding:34px 26px;border-right:1px solid var(--line);display:flex;flex-direction:column;gap:8px}.stat:first-child{border-left:1px solid var(--line)}.stat strong{font:700 38px 'Space Grotesk';letter-spacing:-.04em}.stat span{font:500 10px 'JetBrains Mono';text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
.section{padding:130px 0}.section-head{max-width:820px;margin-bottom:58px}.kicker{margin:0 0 16px;font:600 10px 'JetBrains Mono';letter-spacing:.16em;color:var(--muted)}.kicker span{color:var(--cyan)}.section-head h2,.contact-panel h2{font:700 clamp(38px,5vw,64px)/1.02 'Space Grotesk';letter-spacing:-.045em;margin:0}.section-copy{font-size:17px;line-height:1.75;color:var(--muted);max-width:740px;margin:20px 0 0}.about-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:start}.about-copy p{font-size:17px;line-height:1.9;color:var(--muted);margin:0 0 20px}.about-copy strong{color:var(--text);font-weight:600}.terminal-card{background:#06090e;border:1px solid rgba(103,232,249,.18);box-shadow:var(--shadow);overflow:hidden;position:sticky;top:110px}.terminal-bar{height:42px;border-bottom:1px solid rgba(148,163,184,.14);display:flex;align-items:center;gap:7px;padding:0 14px}.terminal-bar span{width:8px;height:8px;border-radius:50%;background:#fb7185}.terminal-bar span:nth-child(2){background:#facc15}.terminal-bar span:nth-child(3){background:#4ade80}.terminal-bar b{font:500 10px 'JetBrains Mono';color:#64748b;margin-left:8px}.terminal-card pre{margin:0;padding:26px;white-space:pre-wrap;overflow:auto;color:#94a3b8;font:500 12px/1.85 'JetBrains Mono'}.terminal-card em{color:var(--lime);font-style:normal}.terminal-card i{color:var(--cyan);font-style:normal}.terminal-card b{color:#e2e8f0;font-weight:500}.terminal-caret{color:var(--cyan);animation:blink .8s step-end infinite}
.research-section,.skills-section,.connect-section{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--bg2)}.research-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.research-card{position:relative;min-height:330px;padding:26px;border:1px solid var(--line);background:var(--panel);overflow:hidden;transition:.3s}.research-card::after{content:"";position:absolute;width:180px;height:180px;border-radius:50%;right:-90px;bottom:-90px;background:radial-gradient(circle,rgba(103,232,249,.12),transparent 68%);transition:.3s}.research-card:hover{transform:translateY(-4px);border-color:rgba(103,232,249,.32)}.research-card:hover::after{transform:scale(1.4)}.research-num{font:500 11px 'JetBrains Mono';color:var(--muted);margin-bottom:44px}.status{display:inline-flex;padding:6px 8px;border:1px solid var(--line);font:500 9px 'JetBrains Mono';text-transform:uppercase;letter-spacing:.08em}.status.done{color:var(--lime)}.status.active{color:var(--cyan)}.status.upcoming{color:var(--violet)}.research-card h3{font:600 22px/1.2 'Space Grotesk';letter-spacing:-.02em;margin:17px 0 12px}.research-card p{color:var(--muted);font-size:13px;line-height:1.7;margin:0}.signal{position:absolute;bottom:22px;left:26px;display:flex;gap:4px;align-items:flex-end}.signal i{width:3px;height:7px;background:var(--cyan);opacity:.3;animation:signal 1.2s ease-in-out infinite}.signal i:nth-child(2){height:14px;animation-delay:.1s}.signal i:nth-child(3){height:21px;animation-delay:.2s}.signal i:nth-child(4){height:12px;animation-delay:.3s}.signal i:nth-child(5){height:18px;animation-delay:.4s}
.project-controls{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:28px}.search-box{min-width:310px;height:44px;border:1px solid var(--line);background:var(--panel);display:flex;align-items:center;gap:10px;padding:0 14px;color:var(--muted)}.search-box input{border:0;outline:0;background:transparent;color:var(--text);width:100%;font:500 11px 'JetBrains Mono'}.filter-row{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}.filter-row button{border:1px solid var(--line);background:transparent;padding:9px 11px;cursor:pointer;font:500 9px 'JetBrains Mono';color:var(--muted)}.filter-row button:hover,.filter-row button.active{border-color:rgba(103,232,249,.45);color:var(--cyan);background:rgba(103,232,249,.04)}.project-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.project-card{min-height:330px;padding:24px;border:1px solid var(--line);background:var(--panel);position:relative;display:flex;flex-direction:column;transition:.28s;overflow:hidden}.project-card.featured::before{content:"FEATURED";position:absolute;right:-33px;top:23px;transform:rotate(45deg);width:130px;text-align:center;background:rgba(103,232,249,.1);border-block:1px solid rgba(103,232,249,.16);color:var(--cyan);font:600 7px 'JetBrains Mono';letter-spacing:.16em;padding:4px 0}.project-card:hover{transform:translateY(-5px);border-color:rgba(96,165,250,.35);box-shadow:0 24px 50px rgba(0,0,0,.12)}.project-topline{display:flex;justify-content:space-between;gap:16px;align-items:center}.project-index{font:500 10px 'JetBrains Mono';color:var(--cyan)}.project-status{font:500 9px 'JetBrains Mono';color:var(--muted);text-align:right}.project-category{font:600 9px 'JetBrains Mono';text-transform:uppercase;letter-spacing:.12em;color:var(--violet)!important;margin:38px 0 10px!important}.project-card h3{font:600 21px/1.17 'Space Grotesk';margin:0 0 12px;letter-spacing:-.025em}.project-card>p{font-size:13px;line-height:1.65;color:var(--muted);margin:0}.tags{display:flex;gap:6px;flex-wrap:wrap;margin:20px 0}.tags span{padding:5px 7px;border:1px solid var(--line);font:500 8px 'JetBrains Mono';color:var(--muted)}.project-links{margin-top:auto;display:flex;gap:16px}.project-links a{display:inline-flex;align-items:center;gap:6px;font:600 10px 'JetBrains Mono';color:var(--muted)}.project-links a:hover{color:var(--cyan)}.show-all{margin:28px auto 0;display:flex;align-items:center;gap:9px;padding:13px 16px;border:1px solid var(--line);background:transparent;cursor:pointer;font:600 10px 'JetBrains Mono';color:var(--muted)}.show-all:hover{color:var(--cyan);border-color:rgba(103,232,249,.4)}.empty{text-align:center;color:var(--muted);padding:60px 0;font:500 12px 'JetBrains Mono'}
.skill-cloud{display:flex;flex-wrap:wrap;gap:9px}.skill-cloud span{padding:11px 14px;border:1px solid var(--line);background:var(--panel);font:500 11px 'JetBrains Mono';color:var(--muted);transition:.25s;animation:skillFloat 6s ease-in-out infinite;animation-delay:calc(var(--i) * -90ms)}.skill-cloud span:nth-child(5n+1){color:var(--cyan)}.skill-cloud span:nth-child(5n+2){color:var(--violet)}.skill-cloud span:nth-child(5n+3){color:var(--lime)}.skill-cloud span:hover{transform:translateY(-5px) rotate(-1deg);border-color:currentColor;background:rgba(103,232,249,.03)}
.timeline{position:relative;max-width:950px}.timeline::before{content:"";position:absolute;left:27px;top:0;bottom:0;width:1px;background:linear-gradient(var(--cyan),var(--violet),transparent)}.timeline-item{display:grid;grid-template-columns:56px 1fr;gap:26px;padding-bottom:52px}.timeline-node{width:56px;height:56px;border:1px solid rgba(103,232,249,.25);background:var(--bg);display:grid;place-items:center;z-index:1;box-shadow:0 0 30px rgba(103,232,249,.05)}.timeline-node span{font:600 10px 'JetBrains Mono';color:var(--cyan)}.timeline-content{padding:2px 0}.timeline-meta{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:8px}.timeline-meta span{font:600 9px 'JetBrains Mono';text-transform:uppercase;letter-spacing:.1em;color:var(--violet)}.timeline-meta time{font:500 10px 'JetBrains Mono';color:var(--muted)}.timeline-content h3{font:600 23px 'Space Grotesk';margin:0 0 4px}.timeline-content h4{font:500 13px 'JetBrains Mono';color:var(--muted);margin:0 0 14px}.timeline-content p{margin:0;color:var(--muted);font-size:14px;line-height:1.75;max-width:760px}
.education-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.edu-card{border:1px solid var(--line);background:var(--panel);padding:28px;position:relative;overflow:hidden}.edu-code{position:absolute;right:20px;top:12px;font:700 74px 'Space Grotesk';color:rgba(148,163,184,.06)}.edu-card p{font:500 10px 'JetBrains Mono';color:var(--cyan);margin:0 0 34px}.edu-card h3{font:600 25px 'Space Grotesk';margin:0 0 7px}.edu-card h4{font:500 13px 'JetBrains Mono';color:var(--muted);margin:0 0 18px}.edu-card span{font-size:12px;color:var(--muted)}
.social-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.social-card{min-height:132px;border:1px solid var(--line);background:var(--panel);padding:18px;display:flex;align-items:flex-end;gap:12px;position:relative;text-align:left;cursor:pointer;transition:.25s}.social-card:hover{transform:translateY(-4px);border-color:rgba(103,232,249,.4);background:rgba(103,232,249,.035)}.social-card>svg{margin-left:auto;color:var(--muted)}.social-num{position:absolute;top:16px;left:18px;font:500 9px 'JetBrains Mono';color:var(--cyan)}.social-card div{display:flex;flex-direction:column;gap:5px}.social-card strong{font:600 15px 'Space Grotesk'}.social-card small{font:500 9px 'JetBrains Mono';color:var(--muted)}.discord-card{width:100%;font:inherit;color:inherit}.contact-panel{margin-top:80px;border-top:1px solid var(--line);padding-top:60px;display:grid;grid-template-columns:1fr auto;gap:50px;align-items:end}.contact-panel h2{font-size:clamp(30px,4vw,50px);max-width:780px}.big-mail{display:flex;align-items:center;gap:10px;font:600 11px 'JetBrains Mono';color:var(--cyan);padding:14px;border:1px solid rgba(103,232,249,.28);white-space:nowrap}.big-mail:hover{background:rgba(103,232,249,.05)}
.footer{padding:35px 0;border-top:1px solid var(--line)}.footer-grid{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:20px}.footer-grid>div{display:flex;align-items:center;gap:12px}.footer-grid>div p,.footer-grid>a{font:500 9px 'JetBrains Mono';color:var(--muted)}.footer-grid>a{text-align:right}.footer-code{display:flex;align-items:center;gap:7px;font:500 9px 'JetBrains Mono';color:var(--muted)}
[data-reveal]{opacity:0;transform:translateY(22px);transition:opacity .75s ease var(--delay,0ms),transform .75s cubic-bezier(.22,.68,0,1) var(--delay,0ms)}[data-reveal].is-visible{opacity:1;transform:none}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}@keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}@keyframes gradientShift{to{background-position:200% 0}}@keyframes blink{50%{opacity:0}}@keyframes ticker{to{transform:translateX(-50%)}}@keyframes signal{0%,100%{opacity:.2;transform:scaleY(.55)}50%{opacity:1;transform:scaleY(1)}}@keyframes skillFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@media(max-width:980px){.hero-grid{grid-template-columns:1fr}.hero-visual{width:min(520px,90vw);margin:20px auto 0}.research-grid,.project-grid{grid-template-columns:repeat(2,1fr)}.social-grid{grid-template-columns:repeat(2,1fr)}.about-grid{grid-template-columns:1fr}.terminal-card{position:relative;top:0}.contact-panel{grid-template-columns:1fr;align-items:start}.footer-grid{grid-template-columns:1fr;text-align:center}.footer-grid>div{justify-content:center}.footer-grid>a{text-align:center}.footer-code{justify-content:center}}
@media(max-width:760px){.shell{width:min(100% - 28px,1180px)}.nav-links{display:none;position:absolute;top:72px;left:0;right:0;background:var(--bg);border-bottom:1px solid var(--line);padding:20px;flex-direction:column;gap:18px}.nav-links.open{display:flex}.menu-btn{display:grid}.brand-text{display:none}.hero{padding-top:120px}.hero h1{font-size:clamp(46px,14vw,70px)}.hero-lead{font-size:16px}.hero-visual{width:100%}.ticker{margin-top:50px}.stats-grid{grid-template-columns:1fr 1fr}.stat:nth-child(odd){border-left:1px solid var(--line)}.section{padding:90px 0}.research-grid,.project-grid,.education-grid{grid-template-columns:1fr}.project-controls{align-items:stretch;flex-direction:column}.search-box{min-width:0}.filter-row{justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;padding-bottom:5px}.filter-row button{white-space:nowrap}.timeline-meta{align-items:flex-start;flex-direction:column;gap:5px}.social-grid{grid-template-columns:1fr}.contact-panel{margin-top:60px}.big-mail{white-space:normal}.footer-code{font-size:8px}.floating-chip{font-size:8px}.chip-2{right:0}.chip-4{right:0}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;scroll-behavior:auto!important;transition-duration:.01ms!important}[data-reveal]{opacity:1;transform:none}.matrix-canvas{display:none}}
`;
