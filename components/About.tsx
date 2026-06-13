"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-28 px-6">
      {/* Section label */}
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b6914]">
              01.
            </span>
            <h2 className="font-display text-4xl text-[#1a1209]">About Me</h2>
            <div className="flex-1 h-px bg-[#c4b89a]" />
          </div>
        </div>

        <div className="max-w-3xl">
          {/* Text */}
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="font-body text-lg leading-relaxed text-[#2d2010]">
              Hi, I&apos;m a{" "}
              <span className="text-[#b84c1a] italic">
                full-stack developer
              </span>{" "}
              with a deep love for the web — the kind that keeps you up at night
              debugging CSS and somehow still thinking it&apos;s worth it.
            </p>
            <p className="font-body text-base leading-relaxed text-[#5a4a30]">
              I specialize in building clean, performant interfaces with React
              and Next.js, paired with robust backends in Node.js and
              TypeScript. I care deeply about the details — the
              micro-interactions, the loading states, the edge cases nobody
              asked for but everyone notices.
            </p>
            <p className="font-body text-base leading-relaxed text-[#5a4a30]">
              When I&apos;m not pushing pixels, I&apos;m probably reading about
              compilers, contributing to open source, or making a pot of
              unnecessarily good coffee.
            </p>

            {/* Quick facts */}
            <div className="border border-[#c4b89a] p-6 mt-8 relative">
              <span className="absolute -top-3 left-4 bg-[#f5f0e8] px-2 font-mono text-xs text-[#8b6914] uppercase tracking-widest">
                Quick Facts
              </span>
              <ul className="space-y-3">
                {[
                  ["📍", "Location", "Dhaka, Bangladesh"],
                  ["🎓", "Education", ""],
                  ["💼", "Experience", "3+ years building for the web"],
                  ["🌱", "Currently learning", "React Native, Flutter"],
                ].map(([icon, label, value]) => (
                  <li key={label} className="flex items-baseline gap-3">
                    <span className="text-sm">{icon}</span>
                    <span className="font-mono text-xs text-[#8b6914] uppercase tracking-wider w-32 shrink-0">
                      {label}:
                    </span>
                    <span className="font-body text-sm text-[#2d2010]">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
