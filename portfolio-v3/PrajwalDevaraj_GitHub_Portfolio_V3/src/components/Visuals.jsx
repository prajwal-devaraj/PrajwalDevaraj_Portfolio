export function Icon({ name = "spark", size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    spark: <><path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/></>,
    brain: <><path d="M9.5 4.5A3 3 0 0 0 4 6.3a3.4 3.4 0 0 0-1 6.5A3.6 3.6 0 0 0 7 18.5 3 3 0 0 0 12 16V7a2.5 2.5 0 0 0-2.5-2.5z"/><path d="M14.5 4.5A3 3 0 0 1 20 6.3a3.4 3.4 0 0 1 1 6.5 3.6 3.6 0 0 1-4 5.7A3 3 0 0 1 12 16V7a2.5 2.5 0 0 1 2.5-2.5z"/></>,
    code: <><path d="M8 9l-3 3 3 3"/><path d="M16 9l3 3-3 3"/><path d="M14 5l-4 14"/></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5z"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="7" r="2"/><path d="M15.5 14.5A5 5 0 0 1 21 20"/></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
    map: <><path d="M9 18l-5 3V6l5-3 6 3 5-3v15l-5 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></>,
    trophy: <><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 12v5"/><path d="M8 21h8"/><path d="M10 17h4"/></>,
    arrow: <><path d="M5 12h14"/><path d="M14 7l5 5-5 5"/></>
  };
  return <svg {...common}>{paths[name] || paths.spark}</svg>;
}

export function ProjectVisual({ category = "" }) {
  const c = category.toLowerCase();
  let type = "code";
  if (c.includes("ai") || c.includes("vision") || c.includes("ml")) type = "brain";
  else if (c.includes("data") || c.includes("database")) type = "data";
  else if (c.includes("security")) type = "shield";
  else if (c.includes("civic") || c.includes("safety")) type = "radar";
  else if (c.includes("creative") || c.includes("graphics") || c.includes("design")) type = "creative";

  return <div className={`project-visual visual-${type}`} aria-hidden="true">
    <div className="visual-grid" />
    {type === "brain" && <><div className="visual-orbit a"/><div className="visual-orbit b"/><div className="visual-core">AI</div><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/></>}
    {type === "data" && <><div className="bars"><i/><i/><i/><i/><i/></div><div className="data-line"/></>}
    {type === "shield" && <><div className="shield">◇</div><div className="scan"/></>}
    {type === "radar" && <><div className="radar"><i/><i/><b/></div></>}
    {type === "creative" && <><div className="creative-shape one"/><div className="creative-shape two"/><div className="creative-shape three"/></>}
    {type === "code" && <><div className="code-glyph">&lt;/&gt;</div><div className="code-lines"><i/><i/><i/><i/></div></>}
  </div>;
}
