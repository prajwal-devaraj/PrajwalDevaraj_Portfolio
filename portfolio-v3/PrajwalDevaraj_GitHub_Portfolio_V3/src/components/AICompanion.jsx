import { useEffect, useMemo, useState } from "react";
import { experience, projects, research, testimonials } from "../data/content";

const canned = {
  "Who is Prajwal?": "Prajwal is a software engineer, AI/ML researcher, builder, teacher and storyteller. He completed an M.S. in Computer Science at Kent State University with a 3.97/4.00 GPA, and his journey spans research, software projects, teaching, campus leadership, operations and creative work.",
  "Tell me his story.": "He started in Bangalore, learned through classrooms and real responsibility, worked in school administration, software internships, campus jobs, teaching and research, then kept building increasingly ambitious AI, data and full-stack systems. The common thread is curiosity plus ownership.",
  "Show his wildest project.": "Start with CivicLens AI — a first-person multimodal and embodied intelligence platform. It combines perception, context, memory, reasoning, planning and system infrastructure rather than treating AI as a single model.",
  "What does he research?": "His research includes hybrid ML + generative AI + agentic AI, genomics conflict prediction, gastrointestinal endoscopy image analysis, environmental monitoring and future sensing/behavior-analysis ideas.",
  "What do people say about him?": "Recommendations consistently describe him as technically strong, curious, reliable, proactive, patient, collaborative and willing to take ownership. You can explore the Voices section for specific quotes.",
  "What does he do outside tech?": "He writes, teaches, plays cricket and volleyball, enjoys communication and leadership, and has experience in campus operations, customer-facing work and sponsorship outreach.",
  "Show projects involving AI.": "Try CivicLens AI, CodeTheGenome, Agentic Search Assistant, SmartSpend, VishingAI, Facial Emotion Recognition, PIRVISION, RGPIR, NEXORA and several deep-learning experiments.",
  "Show backend projects.": "Good backend-heavy examples include Procurement & Vendor Management, SmartSpend, SocialSphere Analytics, Real-Time Inventory, Library Management, SecHealthDB, Employee Self-Service Portal and What's Cooking.",
  "Tell me something unexpected.": "Prajwal has debugged ML pipelines, taught Operating Systems, handled school administration, worked university events, talked with sponsors, led software teams and still found time to start more projects than most people would reasonably recommend."
};

export default function AICompanion({ onNavigate }) {
  const [phase, setPhase] = useState("roam");
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "p", text: "Hey — I’m P, Prajwal’s digital guide. Ask me about the person, the work, the research or the story." }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setPhase("docked"), 7200);
    return () => clearTimeout(t);
  }, []);

  const prompts = useMemo(() => Object.keys(canned), []);

  function answer(q) {
    const lower = q.toLowerCase();
    const exact = canned[q];
    let text = exact;
    if (!text) {
      if (lower.includes("project")) text = `Prajwal has ${projects.length}+ projects and experiments across AI, backend, data, security, civic tech, graphics and full-stack product work. Use the Projects section filters to explore them.`;
      else if (lower.includes("experience")) text = `His experience spans ${experience.length} major roles/activities including software engineering internships, graduate research, teaching, university operations, school administration and sponsorship outreach.`;
      else if (lower.includes("research")) text = `His research lab currently highlights ${research.length} completed, active and planned research directions.`;
      else if (lower.includes("recommend") || lower.includes("people")) text = `There are ${testimonials.length} recommendation excerpts from professors, mentors and teammates in the Voices section.`;
      else text = "I can help with Prajwal’s story, projects, research, experience, recommendations, skills or life beyond tech. Try one of the quick prompts.";
    }
    setMessages(m => [...m, { from: "you", text: q }, { from: "p", text }]);
  }

  function submit(e) {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    answer(q);
    setInput("");
  }

  return (
    <>
      <div className={`companion ${phase}`} aria-hidden="true">
        <div className="bot-shadow" />
        <div className="bot-body">
          <div className="bot-eye left" />
          <div className="bot-eye right" />
          <div className="bot-core">P</div>
        </div>
        {phase === "roam" && <div className="bot-bubble roam-copy">Scanning this universe…</div>}
      </div>

      <button className="assistant-launcher" onClick={() => setOpen(v => !v)} aria-label="Open digital guide">
        <span className="launcher-core">P</span>
        <span className="launcher-status" />
      </button>

      {open && (
        <aside className="chat-panel">
          <div className="chat-head">
            <div>
              <strong>P · DIGITAL GUIDE</strong>
              <span>● ONLINE</span>
            </div>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => <div key={i} className={`chat-msg ${m.from}`}>{m.text}</div>)}
          </div>
          <div className="quick-prompts">
            {prompts.slice(0, 6).map(p => <button key={p} onClick={() => answer(p)}>{p}</button>)}
          </div>
          <form onSubmit={submit} className="chat-form">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask P anything…" />
            <button>Send</button>
          </form>
          <div className="chat-nav">
            <button onClick={() => onNavigate("projects")}>Projects</button>
            <button onClick={() => onNavigate("journey")}>Journey</button>
            <button onClick={() => onNavigate("voices")}>Voices</button>
          </div>
        </aside>
      )}
    </>
  );
}
