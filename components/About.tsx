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
              focused on building fast, scalable, and user-centered web
              applications. I enjoy transforming complex problems into clean,
              intuitive experiences using modern technologies like React,
              Next.js, TypeScript, and Node.js.
            </p>
            <p className="font-body text-base leading-relaxed text-[#5a4a30]">
              From crafting responsive interfaces to designing robust backend
              systems, I care about every layer of the development process. My
              approach combines technical precision with a strong attention to
              user experience, ensuring products are not only functional but
              enjoyable to use.
            </p>
            <p className="font-body text-base leading-relaxed text-[#5a4a30]">
              Always eager to learn and grow.
            </p>

            {/* Quick facts */}
            <div className="border border-[#c4b89a] p-6 mt-8 relative">
              <span className="absolute -top-3 left-4 bg-[#f5f0e8] px-2 font-mono text-xs text-[#8b6914] uppercase tracking-widest">
                Quick Facts
              </span>
              <ul className="space-y-3">
                {[
                  ["📍", "Location", "Dhaka, Bangladesh"],
                  ["🎓", "Education", "BSc in Applied Mathematics"],
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
