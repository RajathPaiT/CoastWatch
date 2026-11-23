
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Waves,
  LayoutDashboard,
  FileWarning,
  CalendarDays,
  ChartNoAxesCombined,
  Moon,
  Sun
} from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { href: "/reports", label: "Reports", Icon: FileWarning },
  { href: "/events", label: "Cleanup events", Icon: CalendarDays },
  { href: "/impact", label: "Impact", Icon: ChartNoAxesCombined }
];

export default function Navbar() {
  const path = usePathname();

  const [darkMode, setDarkMode] = useState(false);

  // Load the saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("coastwatch-theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Apply the theme whenever it changes
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    localStorage.setItem(
      "coastwatch-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((current) => !current);
  }

  return (
    <header className="topbar">

      <Link href="/" className="brand">
        <span className="brand-icon">
          <Waves size={22} />
        </span>

        <span>
          coast<span className="brand-light">watch</span>
          <small>COMMUNITY COASTAL CARE</small>
        </span>
      </Link>

      <nav>
        {links.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className={
              path === href ? "nav-link active" : "nav-link"
            }
          >
            <Icon size={17} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            darkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <Link href="/reports/new" className="top-cta">
          ＋ Report pollution
        </Link>

      </div>
    </header>
  );
}
