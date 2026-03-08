"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML & CSS", level: 98 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "◉",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 72 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "Tools & Infra",
    icon: "◎",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS / Vercel", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 72 },
    ],
  },
];

const otherSkills = ["Figma", "Jest", "Vitest", "Prisma", "MongoDB"];

function SkillBar({
  name,
  level,
  visible,
}: {
  name: string;
  level: number;
  visible: boolean;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-mono text-xs text-[#2d2010] uppercase tracking-wider">
          {name}
        </span>
        <span className="font-mono text-xs text-[#c4b89a] group-hover:text-[#8b6914] transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#e5dfd3] relative overflow-hidden">
        <div
          className="h-full bg-[#1a1209] transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
        {/* Tick marks */}
        {[25, 50, 75].map((tick) => (
          <div
            key={tick}
            className="absolute top-0 bottom-0 w-px bg-[#f5f0e8]"
            style={{ left: `${tick}%` }}
          />
        ))}
      </div>
    </div>
  );
}

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
            Technologies I work with, and how comfortable I am with each.
          </p>
        </div>

        {/* Skill bars grid */}
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
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    style={{ transitionDelay: `${gi * 100 + si * 80 + 200}ms` }}
                  >
                    <SkillBar
                      name={skill.name}
                      level={skill.level}
                      visible={visible}
                    />
                  </div>
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
