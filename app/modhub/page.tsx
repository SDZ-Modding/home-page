import type { Metadata } from "next";
import { UnavailablePage } from "../components/UnavailablePage";

export const metadata: Metadata = { title: "ModHub" };

export default function ModHubPage() {
  return <UnavailablePage code="HUB // 04" section="ModHub" />;
}
