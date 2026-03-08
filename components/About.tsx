"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Text */}
          <div
            className={`md:col-span-3 space-y-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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

          {/* Photo placeholder + decorations */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative">
              {/* Shadow card */}
              <div className="absolute inset-0 border border-[#c4b89a] transform translate-x-3 translate-y-3" />
              {/* Photo box */}
              <div className="relative border border-[#8b6914] bg-[#ede8de] aspect-[3/4] flex flex-col items-center justify-center gap-3">
                <Image
                  src="/profile.jfif"
                  alt="Photo of Shamiul Hasan"
                  className="object-cover"
                  fill
                />
                {/* Corner marks */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#8b6914]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#8b6914]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#8b6914]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#8b6914]" />
              </div>

              {/* Stamp */}
              <div className="absolute -bottom-4 -right-4 stamp rotate-6">
                Dev ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
