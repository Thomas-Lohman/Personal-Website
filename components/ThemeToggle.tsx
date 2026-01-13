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

  // Avoid hydration mismatch (button text differs client vs server)
  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border px-3 py-1 text-sm opacity-80 hover:bg-foreground/10"
      aria-label="Toggle light/dark mode"
      title="Toggle theme"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
