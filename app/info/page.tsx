import type { Metadata } from "next";
import { UnavailablePage } from "../components/UnavailablePage";

export const metadata: Metadata = { title: "Info" };

export default function InfoPage() {
  return <UnavailablePage code="INFO // 01" section="Info" />;
}
