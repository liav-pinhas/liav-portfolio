import { ArrowRight, Download, Mail } from "lucide-react";

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

// Design tokens used throughout this component (mirrors the Artifact preview 1:1):
//   bg            #0a0d12   near-black, slight cool tint (not pure #000)
//   surface       white/[0.045]  glass card fill
//   border        white/[0.09]   glass card border
//   text primary  #edf1f6
//   text secondary #93a0b3
//   accent blue    #5b9dff / #3b7dfd
//   accent emerald #34d399
//
// These are used as Tailwind arbitrary values (bg-[#...], text-[#...]) so this file
// works immediately in any Tailwind project with zero config changes. If you want to
// reuse this palette across the whole site, promote them into tailwind.config.js
// under theme.extend.colors instead (e.g. colors.ink, colors.signal, colors.measure)
// and swap the arbitrary values for those names.

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0d12] px-6 pb-20 pt-24 text-[#edf1f6]"
    >
      {/* Faint engineering-grid texture, masked to a soft ellipse behind the content */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)",
        }}
      />

      {/* Ambient blue / emerald glow blobs */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-55 blur-[10px]"
        style={{
          background:
            "radial-gradient(38rem 26rem at 14% 8%, rgba(91,157,255,0.35), transparent 60%), radial-gradient(34rem 24rem at 88% 82%, rgba(52,211,153,0.28), transparent 60%)",
        }}
      />


      {/* Signature: a slow-moving waveform, a nod to the scope on an EE bench */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 w-full opacity-40"
      >
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop offset="0" stopColor="#5b9dff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#5b9dff" />
            <stop offset="1" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 60 C 100 0, 200 120, 300 60 S 500 0, 600 60 S 800 120, 900 60 S 1100 0, 1200 60"
          fill="none"
          stroke="url(#wave)"
          strokeWidth="2"
          strokeDasharray="14 10"
          className="animate-[dash_14s_linear_infinite] motion-reduce:animate-none"
        />
      </svg>

      <div className="flex w-full max-w-3xl flex-col items-center gap-7 text-center">
        {/* Avatar — photo lives at /public/liav-photo.jpg (drop the file from the portfolio
            project folder into your project's public/ dir; adjust the src below if you rename it) */}
        <div className="relative grid h-36 w-36 place-items-center">
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#5b9dff,#34d399,#5b9dff)] opacity-85 motion-reduce:animate-none" />
          <div className="absolute inset-[3px] overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <img
              src="/liav-photo.jpg"
              alt="Liav Pinhas"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.045] px-3.5 py-1.5 font-mono text-[0.78rem] tracking-wide text-[#5b9dff] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" />
          OPEN TO EE STUDENT POSITIONS
        </span>

        <h1 className="text-balance text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
          Liav Pinhas
        </h1>

        <p className="text-balance text-[clamp(1.05rem,2.4vw,1.3rem)] font-medium text-[#93a0b3]">
          Electrical &amp; Electronics Engineering Student{" "}
          <span className="text-[#5b9dff]">·</span> Ariel University
        </p>

        <p className="max-w-xl text-[1.05rem] leading-[1.7] text-[#93a0b3]">
          <strong className="font-semibold text-[#edf1f6]">96.55</strong> cumulative average (
          <strong className="font-semibold text-[#edf1f6]">98.6</strong> in first year) — Dean&apos;s List.
          Strong foundation in signals, systems, control and power electronics, with hands-on work in{" "}
          <strong className="font-semibold text-[#edf1f6]">PSIM, PSpice, Multisim and MATLAB</strong> and in
          the lab. Sayeret Golani veteran and active IDF reserve commander, bringing proven leadership under
          pressure.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="mailto:liavpinhas@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#3b7dfd] to-[#2f66e0] px-6 py-3.5 text-[0.95rem] font-semibold text-[#061024] shadow-[0_0_0_1px_rgba(91,157,255,0.4),0_8px_24px_-8px_rgba(59,125,253,0.65)] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(91,157,255,0.6),0_10px_32px_-6px_rgba(59,125,253,0.85)] active:translate-y-px"
          >
            Get in touch
            <ArrowRight className="h-[1.05rem] w-[1.05rem]" />
          </a>
          <a
            href="#cv"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.045] px-6 py-3.5 text-[0.95rem] font-semibold text-[#edf1f6] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.07] active:translate-y-px"
          >
            Download CV
            <Download className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </div>

        <div className="mt-1 flex items-center gap-3">
          <a
            href="https://github.com/liav-pinhas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-[2.6rem] w-[2.6rem] place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-[#93a0b3] transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-[#edf1f6]"
          >
            <GithubIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <a
            href="https://www.linkedin.com/in/liav-pinhas-49030a3a6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-[2.6rem] w-[2.6rem] place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-[#93a0b3] transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-[#edf1f6]"
          >
            <LinkedinIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <a
            href="mailto:liavpinhas@gmail.com"
            aria-label="Email"
            className="grid h-[2.6rem] w-[2.6rem] place-items-center rounded-full border border-white/[0.09] bg-white/[0.045] text-[#93a0b3] transition hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-[#edf1f6]"
          >
            <Mail className="h-[1.15rem] w-[1.15rem]" />
          </a>
        </div>
      </div>

    </section>
  );
}
