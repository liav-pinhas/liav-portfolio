import { Download } from "lucide-react";

// Same design tokens as Hero.jsx — see that file's header comment.
// This section is a self-contained "Background" block: a stat row, a bio
// card, a skills card, and a prominent CV download button with a hover
// "shine" sweep (the after: utilities below).
//
// The download itself is a plain static-file link — put Liav_Pinhas_CV.pdf
// in your project's /public folder. (The Artifact preview version of this
// section uses the sandboxed `downloads` capability instead, because a
// plain <a download> does nothing inside that preview frame — this file is
// the real, simpler thing you actually ship.)

const TOOLS = ["C++", "MATLAB", "PSpice", "Multisim"];
const CORE_KNOWLEDGE = [
  "Signals & Systems",
  "Control Systems",
  "Semiconductor Devices",
  "Circuit Analysis",
  "Electromagnetics",
];

function Tag({ children, variant }) {
  const styles =
    variant === "tool"
      ? "text-[#5b9dff] border-[rgba(91,157,255,0.35)] bg-[rgba(91,157,255,0.08)]"
      : "text-[#34d399] border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.08)]";
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-3.5 py-1.5 font-mono text-[0.76rem] ${styles}`}
    >
      {children}
    </span>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.09] bg-white/[0.045] p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/[0.16]">
      <span className="bg-gradient-to-br from-[#5b9dff] to-[#34d399] bg-clip-text text-[1.8rem] font-extrabold tracking-tight text-transparent [font-variant-numeric:tabular-nums]">
        {value}
      </span>
      <span className="text-[0.78rem] uppercase tracking-wide text-[#5b6576]">{label}</span>
    </div>
  );
}

export default function CV() {
  return (
    <section id="cv" className="relative px-6 pb-32 pt-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <div className="flex max-w-xl flex-col items-start gap-3.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.045] px-3.5 py-1.5 font-mono text-[0.78rem] tracking-wide text-[#5b9dff] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" />
            BACKGROUND
          </span>
          <h2 className="text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Education &amp; Experience
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-[#93a0b3]">
            A quick overview of where I stand academically and what I bring outside the classroom — full
            coursework and references are in the PDF.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard value="95.3" label="Cumulative Average" />
          <StatCard value="98.6" label="First-Year Average" />
          <StatCard value="Dean's List" label="Academic Distinction" />
          <StatCard value="3rd Year" label="B.Sc. EE · Ariel University" />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="h-full rounded-[1.1rem] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-md">
            <p className="mb-4 font-mono text-[0.75rem] uppercase tracking-wider text-[#5b6576]">Summary</p>
            <p className="mb-4 text-[0.98rem] leading-[1.75] text-[#93a0b3]">
              Currently in my third year of a{" "}
              <strong className="font-semibold text-[#edf1f6]">
                B.Sc. in Electrical &amp; Electronics Engineering
              </strong>{" "}
              at Ariel University, with coursework spanning signals &amp; systems, digital systems,
              electromagnetic fields, semiconductor devices, control theory, and circuit theory.
            </p>
            <p className="text-[0.98rem] leading-[1.75] text-[#93a0b3]">
              Before university, I served as a{" "}
              <strong className="font-semibold text-[#edf1f6]">
                combat team commander in an IDF special-forces unit
              </strong>{" "}
              (Sayeret Golani), leading teams through complex, high-pressure operations — and I continue in
              reserve duty today. Alongside my studies, I mentor youth through the national{" "}
              <strong className="font-semibold text-[#edf1f6]">PERACH</strong> program and volunteer within my
              unit&apos;s alumni community.
            </p>
          </div>

          <div className="h-full rounded-[1.1rem] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-md">
            <p className="mb-4 font-mono text-[0.75rem] uppercase tracking-wider text-[#5b6576]">Tools</p>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((t) => (
                <Tag key={t} variant="tool">
                  {t}
                </Tag>
              ))}
            </div>
            <p className="mb-4 mt-6 font-mono text-[0.75rem] uppercase tracking-wider text-[#5b6576]">
              Core Knowledge
            </p>
            <div className="flex flex-wrap gap-2.5">
              {CORE_KNOWLEDGE.map((k) => (
                <Tag key={k} variant="concept">
                  {k}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/Liav_Pinhas_CV.pdf"
            download
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#3b7dfd] to-[#2f66e0] px-7 py-4 text-[1rem] font-semibold text-[#061024] shadow-[0_0_0_1px_rgba(91,157,255,0.4),0_8px_24px_-8px_rgba(59,125,253,0.65)] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(91,157,255,0.6),0_10px_32px_-6px_rgba(59,125,253,0.85)] after:absolute after:inset-y-0 after:-left-[60%] after:w-2/5 after:skew-x-[-20deg] after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent after:transition-[left] after:duration-500 hover:after:left-[130%] motion-reduce:after:transition-none"
          >
            Download Full CV (PDF)
            <Download className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </div>
      </div>
    </section>
  );
}
