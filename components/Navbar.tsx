"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#c4b89a] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl text-[#1a1209] tracking-wide hover:text-[#b84c1a] transition-colors"
        >
          YN<span className="text-[#b84c1a]">.</span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href ? "active" : ""}`}
              onClick={() => setActive(item.href)}
            >
              {item.label}
            </a>
          ))}
          {/* <a
            href="/resume.pdf"
            className="font-mono text-xs uppercase tracking-widest border border-[#1a1209] px-3 py-1.5 hover:bg-[#1a1209] hover:text-[#f5f0e8] transition-colors duration-200"
          >
            Résumé
          </a> */}
        </div>
      </div>
    </nav>
  );
}
