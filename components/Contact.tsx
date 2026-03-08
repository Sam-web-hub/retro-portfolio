"use client";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "Sam-web-hub",
    href: "https://github.com/Sam-web-hub",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Shamiul Hasan",
    href: "https://www.linkedin.com/in/shamiul-hasan-4a4b991ba/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@HasanShami16978",
    href: "https://twitter.com/HasanShami16978",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "shamiulhasan20@gmail.com";

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

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 bg-[#1a1209] overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#f5f0e8 1px, transparent 1px),
            linear-gradient(90deg, #f5f0e8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b6914]">
              04.
            </span>
            <h2 className="font-display text-4xl text-[#f5f0e8]">
              Get In Touch
            </h2>
            <div className="flex-1 h-px bg-[#5a4a30]" />
          </div>
          <p className="font-body text-[#c4b89a] mb-16 ml-10 max-w-xl">
            I&apos;m open to new opportunities, collaborations, and interesting
            projects. My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Email CTA */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="border border-[#5a4a30] p-8 relative group hover:border-[#8b6914] transition-colors">
              <span className="absolute -top-3 left-4 bg-[#1a1209] px-2 font-mono text-xs text-[#8b6914] uppercase tracking-widest">
                Email
              </span>

              <p className="font-body text-[#c4b89a] text-sm mb-6 leading-relaxed">
                The best way to reach me. I typically respond within 24 hours.
              </p>

              <button
                onClick={copyEmail}
                className="w-full font-mono text-sm text-[#f5f0e8] border border-[#5a4a30] py-3 px-4 hover:border-[#b84c1a] hover:text-[#b84c1a] transition-all duration-200 text-left flex items-center justify-between group"
              >
                <span>{email}</span>
                <span className="text-xs uppercase tracking-widest text-[#5a4a30] group-hover:text-[#b84c1a] transition-colors">
                  {copied ? "Copied ✓" : "Copy"}
                </span>
              </button>

              <a
                href={`mailto:${email}`}
                className="mt-4 w-full font-mono text-sm uppercase tracking-widest bg-[#f5f0e8] text-[#1a1209] py-3 px-4 hover:bg-[#b84c1a] hover:text-[#f5f0e8] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Email</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Socials */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8b6914] mb-6">
                Find me online
              </p>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[#5a4a30] p-4 hover:border-[#8b6914] group transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#8b6914] group-hover:text-[#b84c1a] transition-colors">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-[#c4b89a] group-hover:text-[#f5f0e8] transition-colors">
                        {social.name}
                      </div>
                      <div className="font-mono text-xs text-[#5a4a30] group-hover:text-[#8b6914] transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  <span className="text-[#5a4a30] group-hover:text-[#b84c1a] transition-colors font-mono text-xs">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-8 border-t border-[#5a4a30] flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="font-display text-[#5a4a30] text-lg">
            Your Name<span className="text-[#b84c1a]">.</span>
          </span>
          <p className="font-mono text-xs text-[#5a4a30] text-center">
            Built with Next.js & Tailwind CSS — Designed with intention
          </p>
          <p className="font-mono text-xs text-[#5a4a30]">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
