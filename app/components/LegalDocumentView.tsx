import type { ReactNode } from "react";
import Link from "next/link";
import type { LegalDocument } from "../lib/legal";
import { legalDocuments } from "../lib/legal";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

function renderInline(text: string): ReactNode[] {
  const tokenPattern =
    /(\*\*.+?\*\*|https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

  return text.split(tokenPattern).filter(Boolean).map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={`${token}-${index}`}>{token.slice(2, -2)}</strong>;
    }

    if (/^https?:\/\//i.test(token)) {
      const cleanUrl = token.replace(/[.,]$/, "");
      const suffix = token.slice(cleanUrl.length);
      return (
        <span key={`${token}-${index}`}>
          <a href={cleanUrl} rel="noreferrer" target="_blank">
            {cleanUrl}
          </a>
          {suffix}
        </span>
      );
    }

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(token)) {
      return (
        <a href={`mailto:${token}`} key={`${token}-${index}`}>
          {token}
        </a>
      );
    }

    return token;
  });
}

function renderDocument(content: string) {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push(
      <ul key={`list-${blocks.length}`}>
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line) => {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={`h2-${blocks.length}`}>{renderInline(line.slice(3))}</h2>);
      return;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={`h3-${blocks.length}`}>{renderInline(line.slice(4))}</h3>);
      return;
    }

    const isDate = /^(Effective Date|Last Updated):/.test(line);
    blocks.push(
      <p className={isDate ? "legal-date" : undefined} key={`p-${blocks.length}`}>
        {renderInline(line)}
      </p>,
    );
  });

  flushList();
  return blocks;
}

function quickRead(content: string) {
  return Array.from(content.matchAll(/\*\*(.+?)\*\*/g))
    .map((match) => match[1])
    .filter((phrase, index, all) => all.indexOf(phrase) === index)
    .slice(0, 12);
}

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  const summary = quickRead(document.content);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="legal-layout">
        <section className="legal-heading">
          <div className="page-width">
            <p className="eyebrow">SDZ legal center</p>
            <h1>{document.title}</h1>
          </div>
        </section>

        <div className="page-width legal-grid">
          <aside className="legal-nav" aria-label="Legal documents">
            <p>Documents</p>
            {legalDocuments.map((item) => (
              <Link
                aria-current={item.id === document.id ? "page" : undefined}
                className={item.id === document.id ? "active" : ""}
                href={`/legal/${item.id}`}
                key={item.id}
              >
                <span>{item.shortTitle}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </aside>

          <article className="legal-document">
            <div className="quick-read">
              <div>
                <span className="quick-label">Quick read</span>
                <p>
                  The emphasized wording forms a condensed reading path. The
                  complete document below remains authoritative.
                </p>
              </div>
              <div className="quick-phrases">
                {summary.map((phrase) => (
                  <strong key={phrase}>{phrase}</strong>
                ))}
              </div>
            </div>
            <div className="legal-prose">{renderDocument(document.content)}</div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
