"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/info", label: "Info" },
  { href: "/licensing", label: "Licensing" },
  { href: "/mods", label: "Mods" },
  { href: "/modhub", label: "ModHub" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${overlay ? "site-header-overlay" : ""}`}>
      <div className="header-line" />
      <div className="page-width header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image
            src="/sdz-mark.png"
            alt=""
            width={64}
            height={64}
            priority
          />
          <span>
            <strong>SDZ</strong>
            <small>Modding</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>

        <nav
          className={`primary-nav ${open ? "primary-nav-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={active ? "active" : ""}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a className="login-link" href="https://squadrondayz.com/profile">
            Login <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
