import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SDZ Modding — DayZ development built to last",
    template: "%s — SDZ Modding",
  },
  description:
    "Official home of SDZ Modding: DayZ mods, licensing, documentation and access to the SDZ ModHub.",
  openGraph: {
    type: "website",
    siteName: "SDZ Modding",
    title: "SDZ Modding — Built for the long haul.",
    description:
      "DayZ mods, licensing, documentation and access to the SDZ ModHub.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SDZ Modding — Built for the long haul.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDZ Modding — Built for the long haul.",
    description:
      "DayZ mods, licensing, documentation and access to the SDZ ModHub.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/sdz-mark.png",
    shortcut: "/sdz-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
