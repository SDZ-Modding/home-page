import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const disciplines = [
  {
    index: "01",
    title: "Create",
    text: "Original DayZ systems, environments and assets built with a clean, maintainable foundation.",
  },
  {
    index: "02",
    title: "Rebuild",
    text: "Legacy ideas are carefully re-engineered when the original work cannot responsibly be continued.",
  },
  {
    index: "03",
    title: "Support",
    text: "Clear documentation, transparent licensing and long-term maintenance for server owners.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader overlay />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content page-width">
            <p className="eyebrow">Squadron DayZ Modding</p>
            <h1 id="hero-title">
              Built for the
              <span>long haul.</span>
            </h1>
            <p className="hero-copy">
              SDZ develops, rebuilds and maintains DayZ mods with a clear
              licensing structure and a focus on reliable long-term support.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/licensing">
                Explore licensing <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost" href="/mods">
                View our mods <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            <span>Community-led development</span>
            <span className="status-divider" />
            <span>DayZ / PC</span>
          </div>

          <a className="scroll-cue" href="#mission" aria-label="Scroll to our mission">
            <span>Discover</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="mission section-dark" id="mission">
          <div className="page-width mission-grid">
            <div>
              <p className="eyebrow">Our mission</p>
              <h2>
                Preserve the good.
                <br />
                Rebuild what matters.
              </h2>
            </div>
            <div className="mission-copy">
              <p>
                SDZ grew from the Utopia community when continuing under the old
                development structure was no longer sustainable. We are building
                a cleaner future: new work, properly licensed assets, clearer
                ownership and dependable support.
              </p>
              <Link className="text-link" href="/info">
                Read the full story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="disciplines section-panel" aria-labelledby="work-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">What we do</p>
              <h2 id="work-title">Development with a foundation.</h2>
            </div>
            <div className="discipline-grid">
              {disciplines.map((item) => (
                <article className="discipline-card" key={item.index}>
                  <span className="card-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-split">
          <div className="feature-image" role="img" aria-label="Utopia Skycrane carrying a supply container" />
          <div className="feature-copy">
            <p className="eyebrow">Featured development</p>
            <h2>Airdrop, rebuilt responsibly.</h2>
            <p>
              One of the first legacy projects to return, reworked for modern
              DayZ builds with configurable cargo, visible rack items and a
              maintainable codebase.
            </p>
            <div className="feature-meta">
              <span>Free Workshop release</span>
              <span>Active development</span>
            </div>
            <Link className="button button-primary" href="/mods">
              Project details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="license-cta section-dark">
          <div className="page-width license-cta-inner">
            <div>
              <p className="eyebrow">Know your rights</p>
              <h2>Five license types. No guesswork.</h2>
            </div>
            <p>
              Every SDZ release clearly states what is provided, whether
              repacking is available, and which source restrictions apply.
            </p>
            <Link className="button button-outline" href="/licensing">
              Licensing overview <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
