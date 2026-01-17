"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/resume", label: "Resume" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b overflow-x-hidden">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 py-4">
        {/* Name */}
        <Link href="/" className="text-xl font-bold tracking-tight font-mono shrink-0">
          Thomas Lohman
        </Link>

        <div className="flex items-center gap-3 min-w-0">
          {/* Links */}
          <div className="flex flex-wrap justify-end gap-2 text-sm min-w-0">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-md px-3 py-1 transition whitespace-nowrap",
                    "hover:bg-foreground/10",
                    active ? "font-semibold underline underline-offset-4" : "opacity-80",
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
