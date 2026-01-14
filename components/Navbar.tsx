"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/hobbies", label: "Hobbies" }, // NEW
  { href: "/resume", label: "Resume" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Name */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight font-mono"
        >
          Thomas Lohman
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-2 text-sm">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-md px-3 py-1 transition",
                    "hover:bg-foreground/10",
                    active
                      ? "font-semibold underline underline-offset-4"
                      : "opacity-80",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
