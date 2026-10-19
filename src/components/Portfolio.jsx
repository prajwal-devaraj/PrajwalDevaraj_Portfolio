import { useEffect, useMemo, useRef, useState } from "react";
import AICompanion from "./AICompanion";
import ProjectUniverse from "./ProjectUniverse";
import { Icon } from "./Visuals";
import { careerSeasons, experience, identities, milestones, profile, research, skillGroups, testimonials } from "../data/content";

function SectionTitle({ index, kicker, title, text }) {
  return <div className="section-title reveal">
    <div className="eyebrow">{String(index).padStart(2, "0")} / {kicker}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll(".reveal")];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: .1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function VoiceIntro() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const bars = [23,52,34,66,44,74,38,58,83,46,71,32,63,88,54,76,41,69,49,79,36,61,86,43,70,53,82,47,67,31,59,75];
  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { await a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
  };
  return <div className="voice-intro reveal">
    <audio ref={audioRef} src={`${import.meta.env.BASE_URL}audio/prajwal-intro.m4a`} preload="metadata"
      onTimeUpdate={e => setProgress(e.currentTarget.duration ? e.currentTarget.currentTime / e.currentTarget.duration : 0)}
      onEnded={() => { setPlaying(false); setProgress(0); }} />
    <div className="voice-art">
      <div className="voice-orbit" />
      <div className="voice-monogram"><img src={`${import.meta.env.BASE_URL}assets/pd-logo.png`} alt="PD logo"/></div>
      <span className="voice-badge"><Icon name="mic" size={14}/> MY VOICE</span>
    </div>
    <div className="voice-copy">
      <div className="eyebrow">1:23 · IN MY OWN VOICE</div>
      <h3>Hear the story in my own words.</h3>
      <p>Why I build, what shaped me, and the kind of person I’m becoming.</p>
      <div className="waveform" onClick={toggle} role="button" tabIndex="0" aria-label="Play Prajwal's introduction">
        {bars.map((h,i)=><i key={i} style={{height:`${h}%`, opacity: i / bars.length <= progress ? 1 : .35}} />)}
      </div>
      <button className="voice-play" onClick={toggle}>{playing ? "❚❚ Pause" : "▶ Play Prajwal’s intro"}</button>
    </div>
  </div>;
}

export default function Portfolio() {
  useReveal();
  const [welcome, setWelcome] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [storyOpen, setStoryOpen] = useState(false);
  const [storyStep, setStoryStep] = useState(0);
  const [skillGroup, setSkillGroup] = useState(Object.keys(skillGroups)[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(v => (v + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  const story = useMemo(() => [
    ["BANGALORE", "Curiosity came first."],
    ["COMPUTER SCIENCE", "Then curiosity became a way of building."],
    ["RESPONSIBILITY", "School administration and service work taught ownership before job titles did."],
    ["RESEARCH", "Research taught me to measure ideas, not just believe in them."],
    ["TEACHING", "Teaching made technical knowledge human."],
    ["BUILDING", "AI, data, backend, civic tech, safety, products — the lab kept growing."],
    ["LEADERSHIP", "Teams, sponsorship conversations and real responsibility added people to the equation."],
    ["NOW", "Learn. Build. Break. Understand. Build again."],
    ["TO BE CONTINUED", "Still early. Still curious. Still building."]
  ], []);

  function navigate(id) {
    setStoryOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return <div className="site-shell">
    {welcome && <div className="series-welcome" role="dialog" aria-modal="true" aria-label="Prajwal Devaraj — enter portfolio">
      <div className="series-welcome-glow" />
      <div className="series-welcome-kicker">PD ORIGINALS <span>•</span> THE DIGITAL SERIES</div>
      <div className="welcome-visual">
        <span className="welcome-orbit orbit-outer" /><span className="welcome-orbit orbit-inner" />
        <img className="welcome-platinum" src={`${import.meta.env.BASE_URL}assets/pd-logo.png`} alt="Prajwal Devaraj platinum PD monogram" />
      </div>
      <h1>PRAJWAL DEVARAJ</h1>
      <p className="welcome-roles">Software Development Engineer · AI/ML Engineer · Backend & Full-Stack Developer · Cloud Engineer · Researcher · Team Lead · Creative Storyteller</p>
      <button className="welcome-enter" onClick={() => setWelcome(false)}>▶ ENTER MY DIGITAL UNIVERSE <span>↗</span></button>
      <small className="welcome-foot">A DIGITAL LAB ORIGINAL · WATCH THE STORY UNFOLD</small>
    </div>}
    <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    <div className="ambient-grid" /><div className="ambient-orb one" /><div className="ambient-orb two" /><div className="noise" />

    <header className="nav">
      <button className="brand" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}><img src={`${import.meta.env.BASE_URL}assets/pd-logo.png`} alt="Prajwal Devaraj platinum PD logo" className="brand-logo"/><span className="brand-series">PD ORIGINALS</span></button>
      <nav>
        <button onClick={() => navigate("about")}>Story</button>
        <button onClick={() => navigate("education")}>Education</button>
        <button onClick={() => navigate("skills")}>Toolkit</button>
        <button onClick={() => navigate("journey")}>Full Cast</button>
        <button onClick={() => navigate("projects")}>Originals</button>
        <button onClick={() => navigate("research")}>Research</button>
        <button onClick={() => navigate("human")}>Leadership</button>
        <button onClick={() => navigate("building")}>Building</button>
      </nav>
      <a className="nav-contact" href={`mailto:${profile.email}`}>Contact ↗</a>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy"><div className="series-premiere">● NOW STREAMING · THE PRAJWAL ORIGINAL SERIES</div>
          <div className="eyebrow reveal">BUILDER · RESEARCHER · ENGINEER · HUMAN</div>
          <h1 className="reveal"><span>PRAJWAL</span><span>DEVARAJ</span></h1>
          <p className="hero-lead reveal">I build to understand — software, AI systems, research, products and ideas that matter.</p>
          <div className="hero-actions reveal">
            <button className="primary-btn" onClick={() => navigate("projects")}>Explore my work</button>
            <button className="outline-btn" onClick={() => setStoryOpen(true)}>▶ Play my story</button>
          </div>
          <div className="hero-meta reveal">
            <span><Icon name="map" size={16}/> Bangalore → United States</span>
            <span><Icon name="book" size={16}/> M.S. Computer Science</span>
            <span><Icon name="trophy" size={16}/> GPA {profile.gpa}</span>
          </div>
        </div>
        <div className="identity-core-wrap reveal">
          <div className="identity-ring ring-a"/><div className="identity-ring ring-b"/><div className="identity-ring ring-c"/>
          <div className="core-center"><img src={`${import.meta.env.BASE_URL}assets/pd-logo.png`} alt="PD monogram"/><small>BUILD · LEARN</small></div>
          {["AI","SOFTWARE","RESEARCH","DATA","WRITING","LEADERSHIP","SYSTEMS","IDEAS"].map((x,i)=><span key={x} className={`orbit-label o${i}`}>{x}</span>)}
        </div>
      </section>

      <section className="section voice-section"><VoiceIntro /></section>

      <section id="about" className="section about-section compact-section">
        <SectionTitle index={1} kicker="THE OPENING" title="More than a tech profile." />
        <div className="about-grid reveal">
          <div className="story-copy short-copy">
            <p>I’m <strong>Prajwal Devaraj</strong> — a software engineer, AI/ML researcher, teacher, builder and storyteller from Bangalore.</p>
            <p>I learn by building. That has taken me through research labs, software teams, classrooms, campus operations, school administration, sponsorship outreach and 40+ projects.</p>
            <p>Outside tech: <strong>writing, cricket, volleyball, people, ideas and a little chaos.</strong></p>
          </div>
          <div className="profile-mini">
            <div><span>Education</span><strong>M.S. CS · Kent State</strong></div>
            <div><span>GPA</span><strong>{profile.gpa}</strong></div>
            <div><span>Languages</span><strong>{profile.languages.join(" · ")}</strong></div>
            <div><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          </div>
        </div>
        <div className="manifesto reveal">Still learning. <span>Still building.</span> Still becoming.</div>
      </section>

      <section id="profile" className="section profile-section compact-section">
        <SectionTitle index={2} kicker="THE PERSON" title="Find me around the internet." />
        <div className="social-strip reveal">
          {profile.socials.map(s => <a href={s.url} target="_blank" rel="noreferrer" key={s.label}><small>{s.note}</small><strong>{s.label}</strong><span>{s.value}</span><i>↗</i></a>)}
          <button onClick={() => navigator.clipboard?.writeText("prajwaldevaraj")}><small>Chat</small><strong>Discord</strong><span>prajwaldevaraj</span><i>copy</i></button>
        </div>
      </section>

      <section id="education" className="section education-section compact-section">
        <SectionTitle index={3} kicker="THE JOURNEY" title="The formal foundation." />
        <div className="edu-grid visual-edu">
          <article className="edu-card reveal"><div className="edu-icon"><Icon name="book" size={34}/></div><span>2024 — 2026 · Kent, Ohio</span><h3>Kent State University</h3><h4>M.S. Computer Science</h4><strong>GPA {profile.gpa}</strong><div className="edu-tags"><b>AI/ML</b><b>Databases</b><b>Security</b><b>Systems</b></div></article>
          <article className="edu-card reveal"><div className="edu-icon"><Icon name="code" size={34}/></div><span>2019 — 2023 · Bangalore</span><h3>JSS Academy of Technical Education</h3><h4>B.E. Computer Science</h4><div className="edu-tags"><b>Algorithms</b><b>DBMS</b><b>Networks</b><b>Software</b></div></article>
        </div>
      </section>

      <section id="skills" className="section skills-section compact-section">
        <SectionTitle index={4} kicker="TOOLKIT · 13 UNIVERSES" title="My engineering arsenal." text="From secure Java services and cloud infrastructure to machine learning, agentic AI and product UI. Explore all 13 technical universes. Click any category to see the full stack." />
        <div className="toolkit-tally reveal"><strong>{Object.keys(skillGroups).length} skill universes</strong><span>{new Set(Object.values(skillGroups).flat()).size}+ technologies, frameworks and engineering practices</span><small>Includes applied tools and fundamentals — depth varies by technology.</small></div>
        <div className="skill-universe reveal"><div className="skill-nav">{Object.keys(skillGroups).map(k=><button key={k} className={skillGroup===k?"active":""} onClick={()=>setSkillGroup(k)}>{k}</button>)}</div><div className="skill-cloud">{(skillGroups[skillGroup] ?? []).map((s,i)=><span style={{"--i":i}} key={s}>{s}</span>)}</div></div>
      </section>

      <section id="journey" className="section journey-section compact-section">
        <SectionTitle index={5} kicker="FULL CAST · ALL 10 ROLES" title="The whole experience. Then the seasons." text="The complete career record comes first — scroll further for the Netflix-style chapters." />
        <div className="timeline compact-timeline">
          {experience.map((e,i)=><article className="timeline-item reveal" key={`${e.role}-${i}`}><div className="timeline-num">{String(i+1).padStart(2,"0")}</div><div className="timeline-body"><div className="timeline-period">{e.period}</div><h3>{e.role}</h3><h4>{e.org}</h4>{e.location && <div className="timeline-location">{e.location}</div>}<p>{e.text}</p><div className="tag-row">{e.tags.slice(0,4).map(t=><span key={t}>{t}</span>)}</div></div></article>)}
        </div>
        <div className="career-seasons-header"><span>CONTINUE WATCHING</span><h3>Career seasons</h3><p>Four chapters of one story, following the complete experience list.</p></div>
        <div className="career-season-grid">{careerSeasons.map((season,i)=><article className="career-season-card reveal" key={season.label}><div className="season-card-top"><span>{season.label}</span><b>0{i+1}</b></div><h3>{season.title}</h3><small>{season.period}</small><p>{season.story}</p><div className="season-role-list">{season.roles.map(r=><span key={r}>{r}</span>)}</div></article>)}</div>
      </section>

      <section id="projects" className="section project-section">
        <SectionTitle index={6} kicker="ORIGINALS · PROJECT UNIVERSE" title="Built because I wanted to know if I could." text="Click any project with a link to jump straight to GitHub or the live app." />
        <ProjectUniverse />
      </section>

      <section id="research" className="section research-section compact-section">
        <SectionTitle index={7} kicker="THE RESEARCH LAB" title="Questions I couldn’t leave alone." />
        <div className="research-grid pictorial-research">{research.map((r,i)=><article className={`research-card ${r.type} reveal`} key={r.title}><div className="research-art"><span>R-{String(i+1).padStart(2,"0")}</span><div className="lab-rings"><i/><i/><b/></div></div><div><strong className="research-status">{r.status}</strong><h3>{r.title}</h3><p>{r.text}</p></div></article>)}</div>
      </section>

      <section id="human" className="section human-section compact-section">
        <SectionTitle index={8} kicker="THE DIRECTOR’S CUT" title="Different rooms. Same person." />
        <div className="identity-grid visual-identities">{identities.map((x,i)=><article className="identity-card reveal" key={x.title}><div className="identity-icon"><Icon name={["code","brain","book","users","spark","users","spark","mic"][i] || "spark"} size={25}/></div><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
      </section>

      <section className="section milestones-section compact-section">
        <SectionTitle index={9} kicker="HALL OF FAME" title="A few moments that stayed." />
        <div className="milestone-grid">{milestones.map(([a,b],i)=><article className="milestone reveal" key={i}><Icon name="trophy" size={20}/><h3>{a}</h3><p>{b}</p></article>)}</div>
      </section>

      <section id="voices" className="section voices-section compact-section">
        <SectionTitle index={10} kicker="BEYOND THE SCREEN" title="What people who know my work say." />
        <div className="testimonial-stage reveal">
          <div className="quote-mark">“</div>
          <blockquote>{testimonials[activeTestimonial].quote}</blockquote>
          <div className="quote-person"><strong>{testimonials[activeTestimonial].name}</strong><span>{testimonials[activeTestimonial].relation}</span><small>{testimonials[activeTestimonial].detail}</small></div>
          <div className="testimonial-dots">{testimonials.map((_,i)=><button aria-label={`Show recommendation ${i+1}`} className={i===activeTestimonial?"active":""} onClick={()=>setActiveTestimonial(i)} key={i}/>)}</div>
        </div>
      </section>

      <section id="building" className="section research-section compact-section">
        <SectionTitle index={11} kicker="CURRENTLY BUILDING" title="The next episodes are in progress." text="Active research, current builds and ideas on the horizon — never confused with finished work." />
        <div className="research-grid pictorial-research">
          {research.filter(r => r.type !== "completed").map((r,i) => <article className={`research-card ${r.type} reveal`} key={r.title}><div className="research-art"><span>NOW-{String(i+1).padStart(2,"0")}</span><div className="lab-rings"><i/><i/><b/></div></div><div><strong className="research-status">{r.status}</strong><h3>{r.title}</h3><p>{r.text}</p></div></article>)}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="end-label reveal">12 / THE FINALE · LET’S BUILD SOMETHING GREAT</div>
        <h2 className="reveal">But I haven’t.</h2>
        <p className="reveal">Still building systems, ideas, relationships and whatever comes next.</p>
        <a className="end-link reveal" href={`mailto:${profile.email}`}>SAY HELLO →</a>
      </section>
    </main>

    <footer><div><strong>PRAJWAL DEVARAJ</strong><span>Built from curiosity. Powered by too many ideas.</span></div><div>© 2026</div></footer>
    {!welcome && <AICompanion onNavigate={navigate} />}

    {storyOpen && <div className="story-modal"><button className="story-close" onClick={()=>setStoryOpen(false)}>×</button><div className="story-count">{String(storyStep+1).padStart(2,"0")} / {String(story.length).padStart(2,"0")}</div><div className="story-scene"><img className="story-brand-logo" src={`${import.meta.env.BASE_URL}assets/pd-logo.png`} alt="Prajwal Devaraj logo"/><span>{story[storyStep][0]}</span><h2>{story[storyStep][1]}</h2></div><div className="story-controls"><button disabled={storyStep===0} onClick={()=>setStoryStep(s=>Math.max(0,s-1))}>← Back</button><button onClick={()=>storyStep===story.length-1?setStoryOpen(false):setStoryStep(s=>s+1)}>{storyStep===story.length-1?"Return to site":"Continue →"}</button></div></div>}
  </div>;
}
