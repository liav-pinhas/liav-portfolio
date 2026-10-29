import { Download, Mail } from "lucide-react";

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

const TOOLS = ["PSIM", "PSpice", "Multisim", "MATLAB"];
const CORE_KNOWLEDGE = [
  "Signals & Systems",
  "Control Systems",
  "Semiconductor Devices",
  "Digital Signal Processing",
  "Electromagnetics",
  "Power Electronics",
];

const TIMELINE = [
  { years: "2024 – 2028", title: "B.Sc. Electrical & Electronics Engineering", detail: "Ariel University · 96.55 average · Dean's List (year 1)" },
  { years: "2023 – Present", title: "Team Commander → Acting Company Operations Officer", detail: "Sayeret Carmeli, IDF Reserves · plans missions, leads the company's drone team" },
  { years: "2019 – 2023", title: "Combat Team Sergeant", detail: "Sayeret Golani · complex operations, specialized equipment · Certificate of Appreciation from the unit commander" },
  { years: "2024 – Present", title: "Volunteering", detail: "PERACH · HaNamer Association · Student Hub" },
];

const CERTS = [
  {
    src: "/certs/deans-list.jpg",
    alt: "Ariel University Dean's List certificate for Liav Pinhas",
    label: "Dean's List, Ariel University",
  },
  {
    src: "/certs/golani-appreciation.jpg",
    alt: "Certificate of Appreciation from the Sayeret Golani commander",
    label: "Certificate of Appreciation, Sayeret Golani",
  },
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
    <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.09] bg-white/[0.045] p-4 sm:p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/[0.16]">
      <span className="bg-gradient-to-br from-[#5b9dff] to-[#34d399] bg-clip-text block max-w-full text-[clamp(1.1rem,4.4vw,1.8rem)] leading-tight font-extrabold tracking-tight text-transparent [font-variant-numeric:tabular-nums]">
        {value}
      </span>
      <span className="text-[0.78rem] uppercase tracking-wide text-[#8190a5]">{label}</span>
    </div>
  );
}

export default function CV() {
  return (
    <section id="cv" className="relative px-6 pb-20 pt-16 sm:pb-32 sm:pt-28">
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
          <StatCard value="96.55" label="Cumulative Average" />
          <StatCard value="98.6" label="First-Year Average" />
          <StatCard value="Dean's List" label="Academic Distinction" />
          <StatCard value="3rd Year" label="B.Sc. EE · Ariel University" />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="h-full rounded-[1.1rem] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-md">
            <p className="mb-4 font-mono text-[0.75rem] uppercase tracking-wider text-[#8190a5]">Summary</p>
            <p className="mb-4 text-[0.98rem] leading-[1.75] text-[#93a0b3]">
              Currently in my third year of a{" "}
              <strong className="font-semibold text-[#edf1f6]">
                B.Sc. in Electrical &amp; Electronics Engineering
              </strong>{" "}
              at Ariel University, with top grades in signals &amp; systems, digital signal processing,
              electromagnetic fields and digital systems, and current coursework in power electronics,
              switched mode power converters and energy conversion.
            </p>
            <p className="text-[0.98rem] leading-[1.75] text-[#93a0b3]">
              I served as a{" "}
              <strong className="font-semibold text-[#edf1f6]">combat team sergeant in Sayeret Golani</strong>{" "}
              (2019–2023), managing specialized equipment in complex, high-pressure operations, and today I am
              a{" "}
              <strong className="font-semibold text-[#edf1f6]">
                team commander and acting company operations officer in the IDF reserves
              </strong>
              . Alongside my studies, I volunteer with{" "}
              <strong className="font-semibold text-[#edf1f6]">PERACH</strong>, the HaNamer Association and
              Student Hub.
            </p>
          </div>

          <div className="h-full rounded-[1.1rem] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-md">
            <p className="mb-4 font-mono text-[0.75rem] uppercase tracking-wider text-[#8190a5]">Tools</p>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((t) => (
                <Tag key={t} variant="tool">
                  {t}
                </Tag>
              ))}
            </div>
            <p className="mb-4 mt-6 font-mono text-[0.75rem] uppercase tracking-wider text-[#8190a5]">
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


        <div className="rounded-[1.1rem] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-md">
          <p className="mb-6 font-mono text-[0.75rem] uppercase tracking-wider text-[#8190a5]">Timeline</p>
          <ol className="relative flex flex-col gap-6 border-l border-white/[0.12] pl-6">
            {TIMELINE.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[1.78rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" />
                <p className="font-mono text-[0.76rem] text-[#5b9dff]">{t.years}</p>
                <p className="mt-1 font-semibold text-[#edf1f6]">{t.title}</p>
                <p className="text-[0.92rem] leading-[1.6] text-[#93a0b3]">{t.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-[1.1rem] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-md">
          <p className="mb-6 font-mono text-[0.75rem] uppercase tracking-wider text-[#8190a5]">Certificates</p>
          <div className="grid grid-cols-2 gap-5 sm:max-w-md">
            {CERTS.map((c) => (
              <a
                key={c.src}
                href={c.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b9dff]"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-lg border border-white/[0.12] object-cover object-top transition group-hover:-translate-y-0.5 group-hover:border-[#5b9dff]/60"
                />
                <span className="text-[0.88rem] leading-snug text-[#93a0b3] group-hover:text-[#edf1f6]">
                  {c.label}
                </span>
              </a>
            ))}
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
          <a
            href="mailto:liavpinhas@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.16] px-7 py-4 text-[1rem] font-semibold text-[#edf1f6] transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
          >
            Get in touch
            <Mail className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </div>
      </div>
    </section>
  );
}
