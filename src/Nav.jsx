// Sticky glass nav bar. Only 2 links + a CTA, so no hamburger/mobile menu is
// needed — on narrow screens the CTA's label just collapses from
// "Download CV" to "CV" (see the `hidden sm:inline` span below), matching
// the plain-HTML version's `.btn-label-full` trick.

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.09] bg-[rgba(10,13,18,0.72)] px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <a href="#top" className="font-mono text-[0.95rem] font-bold tracking-tight text-[#edf1f6]">
          LP<span className="text-[#34d399]">.</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#cv" className="text-[0.9rem] font-medium text-[#93a0b3] transition hover:text-[#edf1f6]">
            CV
          </a>
          <a href="#projects" className="text-[0.9rem] font-medium text-[#93a0b3] transition hover:text-[#edf1f6]">
            Projects
          </a>
          <a
            href="#cv"
            className="inline-flex items-center rounded-xl bg-gradient-to-br from-[#3b7dfd] to-[#2f66e0] px-4 py-2.5 text-[0.85rem] font-semibold text-[#061024] shadow-[0_0_0_1px_rgba(91,157,255,0.4)] transition hover:-translate-y-0.5"
          >
            <span className="hidden sm:inline">Download&nbsp;</span>CV
          </a>
        </div>
      </div>
    </nav>
  );
}
