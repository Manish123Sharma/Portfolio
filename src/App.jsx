import React, { useEffect, useState } from "react";
import "./index.css";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";

import agarwal from "./assets/Agarwal_Logo.png";
import jain from "./assets/Jain_Logo.png";
import maheshwari from "./assets/Maheshwari_Logo.png";
import gtp from "./assets/gtp.svg";
import resume from "./assets/Resume.pdf";
import portrait from "./assets/about.png";

const tech = ["React", "Node.js", "Express", "MongoDB", "Flutter", "Dart", "JavaScript", "REST APIs", "Firebase", "Git", "Vercel", "Tailwind"];

const services = [
  { tag: "Web", title: "Full-stack product builds", body: "React front end, Node and Express API, MongoDB behind it. Auth, payments, admin panels, the boring-but-critical parts included." },
  { tag: "Mobile", title: "Flutter apps for iOS & Android", body: "One codebase, both stores. I handle the build, the release pipeline and the app store paperwork nobody wants to think about." },
  { tag: "Rescue", title: "Inherited codebases, fixed", body: "A half-finished project from another developer, or something that works but keeps breaking. I audit it, tell you the truth, then stabilise it." },
  { tag: "Retainer", title: "Your on-call developer", body: "A set number of days a month for the features, fixes and small experiments that pile up after launch. No hiring, no ramp-up." },
];

const projects = [
  { name: "Agarwal2Agarwal Matrimony", year: "2026", image: agarwal, body: "A matrimonial platform for the Agarwal community: profile creation, gotra-aware matching, verification workflows and a moderation dashboard, plus a companion mobile app.", stack: ["React", "Node.js", "MongoDB", "Flutter"], playStore: "https://play.google.com/store/apps/details?id=org.agarwal2agarwal.matrimony&hl=en_IN" },
  { name: "Jain2Jain Matrimony", year: "2026", image: jain, body: "Built for the Jain community, with community-specific filters, family-led search, chat between matched families and a paid membership tier.", stack: ["React", "Express", "MongoDB", "Flutter"], playStore: "https://play.google.com/store/apps/details?id=org.jain2jain.matrimony&hl=en_IN" },
  { name: "Maheshwari.org Matrimony", year: "2026", image: maheshwari, body: "The third platform on the same foundation — reusing the shared core let this one launch in weeks rather than months, with its own branding and rules.", stack: ["MERN", "Flutter", "REST APIs"], playStore: "https://play.google.com/store/apps/details?id=org.maheshwari.matrimony&hl=en_IN" },
  { name: "Good Times Partnership", year: "2026", image: gtp, body: "An engagement and rewards app for UBL's retail partners: partners enroll in the program, track their sales performance and earn rewards, built as a Flutter app for iOS and Android.", stack: ["Flutter", "Dart", "REST APIs"], playStore: "https://play.google.com/store/apps/details?id=com.fourmm.GoodTimesPartnerUB&hl=en_IN", appStore: "https://apps.apple.com/in/app/good-times-partner/id6636486399" },
];

const process = [
  { num: "01", title: "A short call", body: "Twenty minutes on what you are building and why. No deck, no pitch — I mostly ask questions." },
  { num: "02", title: "Scope and a fixed quote", body: "You get a written breakdown: what is in, what is deliberately out, the price and the date. No hourly surprises." },
  { num: "03", title: "Weekly slices", body: "Something usable lands in your hands every week. You steer as it takes shape instead of waiting for a reveal." },
  { num: "04", title: "Launch and handover", body: "Deployed, documented and yours. Two weeks of fixes included, and I am around afterwards if you want me to be." },
];

const stats = [["3+", "Years building"], [String(projects.length), "Platforms shipped"], ["Web + iOS + Android", "One developer"], ["< 1 day", "Reply time"]];

function SectionTitle({ number, children }) {
  return <div className="section-title"><span>{number}</span><h2>{children}</h2></div>;
}

function App() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-rise]").forEach((el, i) => {
      if (reduce) { el.style.opacity = "1"; return; }
      el.style.animation = `editorialRise 0.85s cubic-bezier(0.16,1,0.3,1) ${0.06 + i * 0.13}s both`;
    });
    const targets = document.querySelectorAll("[data-reveal]");
    if (reduce) return undefined;
    targets.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(20px)"; el.style.transition = "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)"; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = `${Number(entry.target.dataset.revealDelay || 0)}ms`;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const form = new FormData(e.currentTarget);
    emailjs.send(serviceId, templateId, {
      name: form.get("name"),
      email: form.get("email"),
      project_type: form.get("project_type"),
      message: form.get("message"),
      title: `Portfolio Contact from ${form.get("name")}`,
    }, publicKey).then(() => {
      setSent(true); setSending(false); e.currentTarget.reset();
    }).catch(() => {
      setError("Something went wrong. Please try again or email me directly."); setSending(false);
    });
  };

  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#top"><span>Manish</span><em>.</em></a>
        <nav className="desktop-nav" aria-label="Primary">
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("process")}>Process</button>
          <button onClick={() => scrollTo("about")}>About</button>
        </nav>
        <button className="header-cta" onClick={() => scrollTo("contact")}>Start a project</button>
      </header>

      <main>
        <section id="top" className="hero editorial-shell">
          <div className="hero-orb hero-orb-right" aria-hidden="true" />
          <div className="hero-orb hero-orb-left" aria-hidden="true" />
          <div className="availability" data-reveal><span />Available for new projects</div>
          <h1 className="hero-title">
            <span data-rise="0">I build the software</span>{" "}
            <span data-rise="1">small teams</span>{" "}
            <span data-rise="2" className="accent-italic">actually ship.</span>
          </h1>
          <p className="hero-copy" data-reveal data-reveal-delay="220">Hi, I'm Manish — a software developer in Noida, India. I take web and mobile products from a first conversation to something live: React and Node on the web, Flutter on mobile. I've shipped three community matrimony platforms end to end, and I work directly with the people whose problem I'm solving.</p>
          <div className="hero-actions" data-reveal data-reveal-delay="320">
            <button className="primary-pill" onClick={() => scrollTo("contact")}>Start a project <span>→</span></button>
            <button className="secondary-pill" onClick={() => scrollTo("work")}>See the work</button>
          </div>
          <div className="stats" data-reveal data-reveal-delay="420">
            {stats.map(([value, label]) => <div className="stat" key={label}><div>{value}</div><small>{label}</small></div>)}
          </div>
        </section>

        <div className="ticker" aria-label="Technology list"><div className="ticker-track">{[0, 1].map((run) => <div className="ticker-run" key={run}>{tech.map((item) => <span key={`${run}-${item}`}>{item}<i /></span>)}</div>)}</div></div>

        <section id="services" className="editorial-shell section">
          <SectionTitle number="01">What I build</SectionTitle>
          <div className="service-grid">{services.map((service) => <article className="service-card" data-reveal key={service.title}><div className="eyebrow">{service.tag}</div><h3>{service.title}</h3><p>{service.body}</p><div className="orange-rule" /></article>)}</div>
        </section>

        <section id="work" className="editorial-shell section">
          <div className="work-intro" data-reveal><SectionTitle number="02">Selected work</SectionTitle><p>Web apps and Flutter mobile apps built and maintained end to end, from admin tooling to the app store release itself.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" data-reveal key={project.name}><div className="project-image"><img src={project.image} alt="" /></div><div className="project-body"><div className="project-heading-row"><h3>{project.name}</h3><span>{project.year}</span></div><p>{project.body}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{(project.playStore || project.appStore) && <div className="project-links">{project.playStore && <a href={project.playStore} target="_blank" rel="noreferrer">Play Store <FiArrowUpRight /></a>}{project.appStore && <a href={project.appStore} target="_blank" rel="noreferrer">App Store <FiArrowUpRight /></a>}</div>}</div></article>)}</div>
        </section>

        <section id="process" className="editorial-shell section">
          <SectionTitle number="03">How we'd work together</SectionTitle>
          <div className="process-grid">{process.map((item) => <article className="process-card" data-reveal key={item.num}><div className="process-num">{item.num}</div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </section>

        <section id="about" className="editorial-shell section about-grid">
          <div data-reveal>
            <SectionTitle number="04">A bit about me</SectionTitle>
            <p className="about-lead">I'm a software developer at Binary Chai by day and a freelance developer the rest of the time. I studied Computer Science and Engineering at The NorthCap University, and I've been building for the web since long before that was the job.</p>
            <p>Most of my freelance work has been for founders and small teams who need one person who can hold the whole thing — database, API, interface, app store release — without a handoff at every seam. That's the part I enjoy: fewer meetings, more shipping.</p>
            <p>Away from the editor I'm usually playing something competitive or planning the next trip.</p>
            <div className="about-actions">
              <a href={resume} target="_blank" rel="noreferrer"><FiDownload /> Download resume</a>
              <a href="https://github.com/Manish123Sharma" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/mks001/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a>
            </div>
          </div>
          <div className="about-side" data-reveal data-reveal-delay="140">
            <div className="portrait-wrap"><img src={portrait} alt="Manish" /></div>
            <div className="toolkit"><div className="toolkit-label">Toolkit</div><div className="toolkit-list">{tech.map((item) => <span key={item}>{item}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-inner editorial-shell">
            <div data-reveal>
              <div className="contact-kicker">05 — CONTACT</div>
              <h2>Tell me what you're<br /><span>trying to build.</span></h2>
              <p>A rough idea is enough to start. I'll reply within a day with honest thoughts on scope, timeline and whether I'm the right person for it.</p>
              <div className="contact-meta"><div><span>Email</span> mksharma256001@gmail.com</div><div><span>Based</span> Noida, India · IST (UTC+5:30)</div></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} data-reveal data-reveal-delay="140">
              {sent ? <div className="form-success"><div>Thanks — I'll be in touch.</div><p>Your message has been sent successfully.</p></div> : <>
                <label>Your name<input name="name" type="text" placeholder="Jane Doe" required /></label>
                <label>Email<input name="email" type="email" placeholder="jane@company.com" required /></label>
                <label>Project type<select name="project_type" defaultValue="Web app build"><option>Web app build</option><option>Mobile app (Flutter)</option><option>Rescue an existing codebase</option><option>Ongoing development support</option><option>Something else</option></select></label>
                <label>What are you building?<textarea name="message" rows="4" placeholder="A few sentences on the idea, who it's for, and any deadline you have in mind." required /></label>
                {error && <p className="form-error">{error}</p>}
                <button className="send-button" type="submit" disabled={sending}>{sending ? "Sending..." : "Send it over"} <FiArrowUpRight /></button>
              </>}
            </form>
          </div>
          <footer className="site-footer"><div className="editorial-shell footer-inner"><span>© 2026 Manish Kumar Sharma</span><div className="footer-social"><a href="https://github.com/Manish123Sharma" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/mks001/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="https://www.instagram.com/mks_830/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><span>Built and maintained by hand</span></div></div></footer>
        </section>
      </main>
    </div>
  );
}

export default App;
