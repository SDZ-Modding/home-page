import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { legalDocuments } from "../lib/legal";

export const metadata: Metadata = {
  title: "Legal Center",
};

export default function LegalCenterPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="subpage-hero legal-center-hero">
          <div className="subpage-grid" aria-hidden="true" />
          <div className="page-width">
            <p className="eyebrow">Policies and terms</p>
            <h1>SDZ Legal Center</h1>
            <p>
              Review the documents that govern SDZ content, services, privacy,
              tokens and intellectual property.
            </p>
          </div>
        </section>

        <section className="legal-cards section-panel">
          <div className="page-width legal-card-grid">
            {legalDocuments.map((document, index) => (
              <Link className="legal-card" href={`/legal/${document.id}`} key={document.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{document.shortTitle}</h2>
                <p>Read document</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
