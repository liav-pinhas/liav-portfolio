import { Mail } from "lucide-react";

// lucide-react dropped brand/logo icons (GitHub, LinkedIn, etc.) — only
// generic UI icons remain in the package. These two are hand-drawn to match
// the Lucide stroke style (24x24, currentColor, stroke-width 2) instead.
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.09] px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
        <span className="text-[0.85rem] text-[#8190a5]">
          © 2026 Liav Pinhas. Built with React &amp; Tailwind.
        </span>

        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/liav-pinhas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-[#93a0b3] transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:text-[#edf1f6]"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/liav-pinhas-49030a3a6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-[#93a0b3] transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:text-[#edf1f6]"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:liavpinhas@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-[#93a0b3] transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:text-[#edf1f6]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <a href="#top" className="font-mono text-[0.76rem] text-[#8190a5] transition hover:text-[#5b9dff]">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
