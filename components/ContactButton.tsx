import React from "react";

interface ContactButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function ContactButton({
  href,
  children,
  external = false,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition hover:bg-foreground/5"
    >
      {children}
    </a>
  );
}
