export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between border-b border-[#f4efe5]/15 pb-5 text-xs uppercase tracking-[0.32em]">
      <span className="font-serif text-base normal-case tracking-normal transition-[opacity,color] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        Kuro Cafe
      </span>
      <div className="hidden gap-8 sm:flex">
        <a
          href="#drinks"
          className="text-[#f4efe5]/92 transition-[color,opacity,transform] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#f4efe5]/58 hover:translate-y-px"
        >
          Drinks
        </a>
        <a
          href="#about"
          className="text-[#f4efe5]/92 transition-[color,opacity,transform] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#f4efe5]/58 hover:translate-y-px"
        >
          About
        </a>
        <a
          href="#visit"
          className="text-[#f4efe5]/92 transition-[color,opacity,transform] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#f4efe5]/58 hover:translate-y-px"
        >
          Visit
        </a>
      </div>
    </nav>
  );
}
