export default function Hero() {
  return (
    <main className="min-h-screen bg-[#080807] text-[#f4efe5] selection:bg-[#f4efe5] selection:text-[#080807]">
      <div
  aria-hidden="true"
  className="pointer-events-none fixed inset-0 z-50 opacity-[0.075] mix-blend-soft-light"
  style={{
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
    backgroundSize: "220px 220px",
  }}
/>
      <motion.section className="relative min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <nav className="relative z-10 flex items-center justify-between border-b border-[#f4efe5]/15 pb-5 text-xs uppercase tracking-[0.32em]">
          <span className="font-serif text-base normal-case tracking-normal">
            Kuro Cafe
          </span>
         <div className="hidden gap-8 sm:flex">
  <a href="#drinks" className="transition hover:text-[#f4efe5]/60">
    Drinks
  </a>
  <a href="#about" className="transition hover:text-[#f4efe5]/60">
    About
  </a>
  <a href="#visit" className="transition hover:text-[#f4efe5]/60">
    Visit
  </a>
</div>
        </nav>

        <div className="absolute right-0 top-24 h-[68vh] w-[58vw] border-y border-l border-[#f4efe5]/10 bg-[#f4efe5]/3 backdrop-blur-md sm:right-10 lg:right-16" />
        <div className="absolute right-8 top-40 hidden h-[48vh] w-[28vw] border border-[#f4efe5]/20 bg-[#080807] lg:block">
          <div className="h-full w-full bg-[linear-gradient(115deg,transparent_0%,transparent_45%,rgba(244,239,229,0.14)_46%,transparent_47%),linear-gradient(0deg,rgba(244,239,229,0.08)_1px,transparent_1px)] bg-size-[100%_95%,90%_18px]" />
        </div>

        <div className="relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs uppercase tracking-[0.44em] text-[#f4efe5]/60">
              Tokyo after rain / espresso after midnight / quiet corners  
            </p>
           <motion.h1
  variants={heroCopy}
  initial="hidden"
  animate="show"
  className="font-serif italic text-[11vw] leading-[0.95] tracking-normal sm:text-[8vw] lg:text-[5.2vw]"
>
  <motion.span variants={heroLine} className="block">
    Quiet coffee drawn in black and off-white, with warm light and space
  </motion.span>
  <motion.span
    variants={heroLine}
    className="block italic text-[#f4efe5]/70 drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]"
  >
    dark aesthetics
  </motion.span>
</motion.h1>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 