import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Thomas Lohman
        </Link>

        <div className="flex gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 hover:bg-foreground/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

