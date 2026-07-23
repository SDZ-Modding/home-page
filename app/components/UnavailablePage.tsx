import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function UnavailablePage({
  section,
  code,
}: {
  section: string;
  code: string;
}) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="error-page">
        <div className="error-grid" aria-hidden="true" />
        <div className="error-orbit" aria-hidden="true">
          <span>{code}</span>
        </div>
        <div className="error-content">
          <p className="eyebrow">Section unavailable</p>
          <h1>{section} is not online yet.</h1>
          <p>
            This part of the new SDZ website is still being prepared. Nothing is
            broken—you have simply arrived before the next deployment.
          </p>
          <div className="error-actions">
            <Link className="button button-primary" href="/">
              Return home
            </Link>
            <Link className="button button-ghost" href="/licensing">
              View licensing
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
