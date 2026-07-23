import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentView } from "../../components/LegalDocumentView";
import { legalDocumentMap, legalDocuments } from "../../lib/legal";

export function generateStaticParams() {
  return legalDocuments.map((document) => ({ doc: document.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ doc: string }>;
}): Promise<Metadata> {
  const { doc } = await params;
  const document = legalDocumentMap[doc];
  return {
    title: document?.shortTitle ?? "Legal document",
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const { doc } = await params;
  const document = legalDocumentMap[doc];

  if (!document) {
    notFound();
  }

  return <LegalDocumentView document={document} />;
}
