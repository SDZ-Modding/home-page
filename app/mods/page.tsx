import type { Metadata } from "next";
import { UnavailablePage } from "../components/UnavailablePage";

export const metadata: Metadata = { title: "Mods" };

export default function ModsPage() {
  return <UnavailablePage code="MODS // 03" section="Mods" />;
}
