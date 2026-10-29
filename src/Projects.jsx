import { Plus } from "lucide-react";

// Same design tokens as Hero.jsx / CV.jsx.
// No real projects yet — this renders a single "coming soon" empty state
// instead of fabricated cards. Once you have a project to add, replace the
// empty state below with a PROJECTS array + card grid (see the previous
// version of this file, or just ask Claude to rebuild the grid).

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 pb-20 pt-16 sm:pb-32 sm:pt-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <div className="flex max-w-xl flex-col items-start gap-3.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.045] px-3.5 py-1.5 font-mono text-[0.78rem] tracking-wide text-[#5b9dff] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" />
            PROJECTS
          </span>
          <h2 className="text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Selected Work
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-[#93a0b3]">
            This section is just getting started — new engineering projects are on their way.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3.5 rounded-[1.25rem] border border-dashed border-white/[0.09] px-8 py-16 text-center text-[#8190a5]">
          <Plus className="h-8 w-8 text-[#5b9dff] opacity-70" />
          <span className="text-[1.05rem] font-semibold text-[#edf1f6]">More Projects Coming Soon</span>
          <span className="max-w-md text-[0.92rem] leading-[1.6]">
            This portfolio is actively growing. Check back soon, or reach out directly to hear about current work.
          </span>
        </div>
      </div>
    </section>
  );
}
