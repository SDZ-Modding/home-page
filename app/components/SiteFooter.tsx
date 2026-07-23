import Link from "next/link";
import Image from "next/image";

const legalLinks = [
  { href: "/legal/eula", label: "EULA" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/tokens", label: "Token System Terms" },
  { href: "/legal/copyright", label: "Copyright Policy" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-accent" />
      <div className="page-width footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image
              src="/sdz-mark.png"
              alt="SDZ Modding"
              width={96}
              height={72}
            />
          </Link>
          <p>
            Community-led DayZ development with a focus on maintainable work,
            transparent licensing and long-term support.
          </p>
        </div>

        <div className="footer-column">
          <h2>Navigate</h2>
          <Link href="/info">Info</Link>
          <Link href="/licensing">Licensing</Link>
          <Link href="/mods">Mods</Link>
          <Link href="/modhub">ModHub</Link>
        </div>

        <div className="footer-column">
          <h2>Legal</h2>
          {legalLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h2>Contact</h2>
          <Link href="/legal/contact">Contact information</Link>
          <a href="mailto:support@squadrondayz.com">support@squadrondayz.com</a>
          <a href="https://squadrondayz.com/discord/invite">Discord</a>
          <a href="https://github.com/SDZ-Modding">GitHub</a>
        </div>
      </div>

      <div className="page-width footer-bottom">
        <p>© 2026 SDZ Modding. All Rights Reserved.</p>
        <p>
          SDZ intends to operate on a non-profit basis, with funds reinvested
          into development and infrastructure.
        </p>
      </div>
    </footer>
  );
}
