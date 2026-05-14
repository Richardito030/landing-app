import { useState, useEffect } from "react";
import "./App.css";

const words = ["Builders.", "Makers.", "Dreamers.", "Doers."];

export default function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="root">
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <span className="nav__logo">NEXUS</span>
        <ul className="nav__links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav__cta">Get started</a>
      </nav>

      <section className="hero">
        <div className="hero__bg-text" aria-hidden>NEXUS</div>
        <div className="hero__content">
          <p className="hero__eyebrow">Digital studio · Est. 2024</p>
          <h1 className="hero__title">
            We build for<br />
            <span className={`hero__word ${visible ? "hero__word--in" : "hero__word--out"}`}>
              {words[wordIndex]}
            </span>
          </h1>
          <p className="hero__sub">
            Crafting fast, beautiful web experiences<br />
            that convert visitors into customers.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">See our work ↓</a>
            <a href="#contact" className="btn btn--ghost">Start a project</a>
          </div>
        </div>
        <div className="hero__badge">
          <svg viewBox="0 0 120 120" className="badge__ring">
            <path id="circlePath" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" fill="none"/>
            <text fontSize="11" fill="currentColor" letterSpacing="4">
              <textPath href="#circlePath">AVAILABLE FOR PROJECTS · 2026 · </textPath>
            </text>
          </svg>
          <span className="badge__dot" />
        </div>
      </section>

      <div className="marquee">
        <div className="marquee__track">
          {["React", "Next.js", "Node", "PostgreSQL", "Tailwind", "Docker", "TypeScript", "REST APIs",
            "React", "Next.js", "Node", "PostgreSQL", "Tailwind", "Docker", "TypeScript", "REST APIs"
          ].map((t, i) => (
            <span key={i} className="marquee__item">{t} <em>·</em></span>
          ))}
        </div>
      </div>

      <section className="section" id="work">
        <div className="section__header">
          <span className="section__num">01</span>
          <h2 className="section__title">Selected Work</h2>
        </div>
        <div className="grid">
          {[
            { tag: "Web App", title: "Dashboard Pro", desc: "Real-time analytics platform with live data visualization and role-based access.", color: "#0ff" },
            { tag: "E-Commerce", title: "ShopFast", desc: "High-conversion storefront with sub-second load times and seamless checkout.", color: "#f0f" },
            { tag: "SaaS", title: "TaskFlow", desc: "Team collaboration tool handling 50k+ tasks per day with zero downtime.", color: "#ff0" },
          ].map((p, i) => (
            <div className="card" key={i} style={{ "--accent": p.color }}>
              <div className="card__img" />
              <div className="card__body">
                <span className="card__tag">{p.tag}</span>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
                <a href="#" className="card__link">View case →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="about">
        <div className="section__header">
          <span className="section__num">02</span>
          <h2 className="section__title">About Us</h2>
        </div>
        <div className="about">
          <p className="about__text">
            We are a lean team of engineers and designers obsessed with performance,
            clean code, and interfaces that feel inevitable. No bloat. No fluff.
            Just things that work.
          </p>
          <div className="stats">
            {[["40+", "Projects shipped"], ["99%", "Client satisfaction"], ["3yr", "Of experience"]].map(([n, l]) => (
              <div className="stat" key={l}>
                <span className="stat__num">{n}</span>
                <span className="stat__label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section__header">
          <span className="section__num">03</span>
          <h2 className="section__title">Start a Project</h2>
        </div>
        <div className="contact">
          <p className="contact__sub">Tell us what you are building and we will get back within 24 hrs.</p>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__row">
              <input className="input" type="text" placeholder="Your name" required />
              <input className="input" type="email" placeholder="Email address" required />
            </div>
            <textarea className="input input--area" placeholder="What are you building?" rows={4} required />
            <button className="btn btn--primary btn--full" type="submit">Send message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span className="footer__logo">NEXUS</span>
        <span className="footer__copy">2026 All rights reserved</span>
      </footer>
    </div>
  );
}
