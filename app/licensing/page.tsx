import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Licensing",
  description:
    "Understand SDZ Modding license types, source access and repack permissions.",
};

const licenses = [
  {
    code: "NONR",
    title: "Closed source. No repacking.",
    access: "Compiled release only",
    repack: "Not available",
    description:
      "Use the mod through its official release. Source access, repacking and redistribution are not permitted.",
  },
  {
    code: "NOFR",
    title: "Closed source. Repack access available.",
    access: "Compiled release only",
    repack: "Licensed through SDZ",
    description:
      "The source remains closed. Repack rights may be obtained under the applicable SDZ terms without granting source access.",
  },
  {
    code: "LOSA",
    title: "Limited open-source access.",
    access: "Selected source provided",
    repack: "Conditional",
    description:
      "Source is available, but identified parts may remain restricted by third-party licenses, permissions or agreements.",
  },
  {
    code: "FODL",
    title: "Full source, different licenses.",
    access: "Full source provided",
    repack: "Allowed with conditions",
    description:
      "The complete source is supplied, but individual files or components may carry separate licenses that must be followed.",
  },
  {
    code: "FOFR",
    title: "Full source. Fully repackable.",
    access: "Full source provided",
    repack: "Allowed",
    description:
      "The most permissive SDZ license type, subject to the standard SDZ terms, BI EULA and any expressly identified requirements.",
  },
];

export default function LicensingPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="subpage-hero">
          <div className="subpage-grid" aria-hidden="true" />
          <div className="page-width">
            <p className="eyebrow">SDZ standards</p>
            <h1>Licensing without the fine-print maze.</h1>
            <p>
              Every release carries a clear SDZ sub-license showing what you
              receive, whether repacking is available and how supplied source
              may be used.
            </p>
          </div>
        </section>

        <section className="license-intro section-panel">
          <div className="page-width intro-grid">
            <div>
              <span className="section-number">01</span>
              <h2>Five core license types</h2>
            </div>
            <div>
              <p>
                A license is not ownership. Access to source files or repack
                rights grants a limited permission under the terms attached to
                that release; copyright remains with SDZ or the relevant rights
                holder.
              </p>
              <p className="muted-note">
                The individual mod page and its supplied documentation remain
                authoritative if they state additional restrictions.
              </p>
            </div>
          </div>
        </section>

        <section className="license-list section-dark">
          <div className="page-width">
            {licenses.map((license, index) => (
              <article className="license-row" key={license.code}>
                <div className="license-code">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{license.code}</strong>
                </div>
                <div className="license-description">
                  <h2>{license.title}</h2>
                  <p>{license.description}</p>
                </div>
                <dl>
                  <div>
                    <dt>Source</dt>
                    <dd>{license.access}</dd>
                  </div>
                  <div>
                    <dt>Repacking</dt>
                    <dd>{license.repack}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="education-band section-panel">
          <div className="page-width education-grid">
            <div className="education-code">-E</div>
            <div>
              <p className="eyebrow">Educational variants</p>
              <h2>Study and reference, not reuse.</h2>
            </div>
            <p>
              When a license carries the <strong>-E</strong> suffix, the
              supplied source is available for education, study and reference
              only. It may not be copied, reused or redistributed without
              explicit permission.
            </p>
          </div>
        </section>

        <section className="legal-link-band">
          <div className="page-width legal-link-inner">
            <div>
              <p className="eyebrow">Full terms</p>
              <h2>Read the documents behind the labels.</h2>
            </div>
            <Link className="button button-outline" href="/legal/eula">
              Open legal center <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
