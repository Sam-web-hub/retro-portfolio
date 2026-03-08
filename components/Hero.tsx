"use client";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer.",
  "Full-Stack Engineer.",
  "UI Craftsperson.",
  "React Enthusiast.",
  "Web Architect.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 70);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#1a1209 1px, transparent 1px),
            linear-gradient(90deg, #1a1209 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative corner marks */}
      <div className="absolute top-24 left-8 font-mono text-[#c4b89a] text-xs opacity-60">
        [0,0]
      </div>
      <div className="absolute top-24 right-8 font-mono text-[#c4b89a] text-xs opacity-60">
        v.2025
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-[#c4b89a] text-xs opacity-60">
        — portfolio
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[#c4b89a] text-xs opacity-60">
        est. 2025 —
      </div>

      {/* Decorative lines */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent to-[#c4b89a] opacity-40" />
      <div className="absolute left-1/2 bottom-0 w-px h-24 bg-gradient-to-t from-transparent to-[#c4b89a] opacity-40" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Stamp badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <span className="stamp">Available for Work</span>
        </div>

        {/* Eyebrow */}
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#8b6914] mb-4 animate-fade-up-delay-1">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl text-[#1a1209] leading-none mb-6 animate-fade-up-delay-2">
          Shamiul Hasan
        </h1>

        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay-3">
          <div className="h-px w-16 bg-[#c4b89a]" />
          <span className="text-[#c4b89a] text-sm">✦</span>
          <div className="h-px w-16 bg-[#c4b89a]" />
        </div>

        {/* Typewriter role */}
        <div className="font-mono text-xl md:text-2xl text-[#b84c1a] mb-8 h-8 animate-fade-up-delay-3">
          {displayed}
          <span className="inline-block w-0.5 h-5 bg-[#b84c1a] ml-0.5 align-middle animate-[cursor-blink_1s_step-end_infinite]" />
        </div>

        {/* Tagline */}
        <p className="font-body text-lg text-[#5a4a30] max-w-xl mx-auto leading-relaxed mb-12 animate-fade-up-delay-4">
          I build fast, thoughtful, and beautiful web experiences — from
          pixel-perfect UIs to robust backend systems.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-up-delay-5">
          <a
            href="#projects"
            className="font-mono text-sm uppercase tracking-widest bg-[#1a1209] text-[#f5f0e8] px-6 py-3 hover:bg-[#b84c1a] transition-colors duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm uppercase tracking-widest border border-[#1a1209] px-6 py-3 hover:border-[#b84c1a] hover:text-[#b84c1a] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
