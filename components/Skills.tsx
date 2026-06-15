"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "◉",
    skills: ["Node.js", "Better Auth", "PostgreSQL", "Neon DB", "Drizzle ORM"],
  },
  {
    category: "Tools & Infra",
    icon: "◎",
    skills: ["Git / GitHub", "Docker", "Vercel", "Linux"],
  },
];

const otherSkills = ["Figma", "OAuth", "Prisma", "MongoDB"];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b6914]">
              03.
            </span>
            <h2 className="font-display text-4xl text-[#1a1209]">Skills</h2>
            <div className="flex-1 h-px bg-[#c4b89a]" />
          </div>
          <p className="font-body text-[#5a4a30] mb-16 ml-10">
            Technologies I work with to build high-quality applications.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${gi * 100 + 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-lg text-[#b84c1a]">
                  {group.icon}
                </span>
                <h3 className="font-display text-xl text-[#1a1209]">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm uppercase tracking-wider border border-[#c4b89a] px-3 py-1.5 text-[#5a4a30] hover:border-[#8b6914] hover:text-[#1a1209] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider my-12" />

        {/* Other tools */}
        <div
          className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8b6914] mb-6 text-center">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs uppercase tracking-wider border border-[#c4b89a] px-3 py-1.5 text-[#5a4a30] hover:border-[#8b6914] hover:text-[#1a1209] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
