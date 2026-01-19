"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // On first load: use saved theme if present, otherwise use system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme: Theme = saved ?? (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);

    setMounted(true);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light/dark mode"
      title="Toggle theme"
      className={[
        "relative flex h-8 w-14 items-center rounded-full border",
        "bg-background transition-colors",
        "hover:bg-foreground/10",
      ].join(" ")}
    >
      {/* Sliding knob */}
      <span
        className={[
          "absolute left-1 top-1 h-6 w-6 rounded-full",
          "bg-foreground transition-transform",
          isDark ? "translate-x-6" : "translate-x-0",
        ].join(" ")}
      />

      {/* Icons */}
      <span className="relative z-10 flex w-full items-center justify-between px-1.5 text-foreground">
        <span className="text-xs">☀️</span>
        <span className="text-xs">🌙</span>
      </span>
    </button>
  );
}
