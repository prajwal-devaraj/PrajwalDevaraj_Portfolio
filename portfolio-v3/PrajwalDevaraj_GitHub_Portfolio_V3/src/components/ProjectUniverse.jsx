import { useMemo, useState } from "react";
import { projects } from "../data/content";
import { Icon, ProjectVisual } from "./Visuals";

const featuredNames = [
  "CivicLens AI",
  "CodeTheGenome",
  "AdFusion AI",
  "Agentic Search Assistant",
  "SmartSpend",
  "SocialSphere Analytics Platform",
  "Disaster Management & Early Warning System",
  "Secure Healthcare DBaaS — SecHealthDB"
];

function ProjectShell({ p, children, className = "" }) {
  if (!p.url) return <article className={className}>{children}</article>;
  return <a className={`${className} project-link-shell`} href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>{children}</a>;
}

export default function ProjectUniverse() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const categories = ["All", "AI", "Data", "Backend", "Security", "Civic", "Full-Stack", "Creative"];
  const [cat, setCat] = useState("All");

  const featured = projects.filter(p => featuredNames.includes(p.title));
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter(p => {
      const hay = `${p.title} ${p.category} ${p.blurb} ${p.tech.join(" ")} ${p.meta}`.toLowerCase();
      const matchesQ = !q || hay.includes(q);
      const matchesCat = cat === "All" || hay.includes(cat.toLowerCase());
      return matchesQ && matchesCat;
    });
  }, [query, cat]);

  return (
    <>
      <div className="hero-project-grid">
        {featured.map((p, i) => (
          <ProjectShell p={p} className={`hero-project hp-${i}`} key={p.title}>
            <ProjectVisual category={p.category} />
            <div className="project-overlay">
              <div className="project-topline"><span>{String(i + 1).padStart(2, "0")}</span><span>{p.category}</span></div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              {p.meta && <strong className="project-meta">{p.meta}</strong>}
              <div className="project-tech">{p.tech.slice(0, 5).map(t => <span key={t}>{t}</span>)}</div>
              <div className="project-open">{p.url ? <>Open on GitHub / live <Icon name="arrow" size={17} /></> : <>Project entry</>}</div>
            </div>
          </ProjectShell>
        ))}
      </div>

      <div className="archive-head">
        <div>
          <span className="eyebrow">FULL ARCHIVE</span>
          <h3>{projects.length}+ projects & experiments</h3>
        </div>
        <button className="outline-btn" onClick={() => setShowAll(v => !v)}>{showAll ? "Close archive" : "Explore all projects"}</button>
      </div>

      {showAll && (
        <div className="archive-wrap">
          <div className="project-controls">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects, stacks, ideas…" />
            <div className="filter-row">{categories.map(c => <button key={c} className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c}</button>)}</div>
          </div>
          <div className="project-grid">
            {filtered.map((p, i) => (
              <ProjectShell p={p} className="project-card" key={`${p.title}-${i}`}>
                <div className="mini-visual"><ProjectVisual category={p.category} /></div>
                <div className="project-card-copy">
                  <div className="project-topline"><span>{p.category}</span><span>{p.url ? "↗" : "•"}</span></div>
                  <h4>{p.title}</h4>
                  {p.meta && <strong>{p.meta}</strong>}
                  <div className="project-tech small">{p.tech.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </ProjectShell>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
