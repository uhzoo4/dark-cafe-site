import { motion } from "framer-motion";

import { cardReveal, cinematicEase, motionDuration } from "../animations/motion";

export default function DrinkCard({ drink, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{
        y: -2.5,
        transition: { duration: motionDuration.hover, ease: cinematicEase },
      }}
      className="group flex h-full flex-col bg-[#080807] px-6 pb-8 pt-7 transition-[background-color] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#0c0b09] sm:px-8 sm:pb-9 sm:pt-8 md:px-8 md:pb-10 md:pt-9"
    >
      <div className="mb-10 flex items-baseline justify-between gap-4 sm:mb-11">
        <span className="text-[0.6875rem] uppercase tracking-[0.3em] text-[#f4efe5]/48 transition-[color,opacity] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-xs sm:tracking-[0.32em] group-hover:text-[#f4efe5]/56">
          0{index + 1}
        </span>
        <span className="shrink-0 border border-[#f4efe5]/16 px-3 py-1.5 font-serif text-sm tabular-nums text-[#f4efe5]/72 backdrop-blur-sm transition-[border-color,color,opacity] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#f4efe5]/24 group-hover:text-[#f4efe5]/80">
          ${drink.price}
        </span>
      </div>

      <div className="relative mb-7 overflow-hidden border border-[#f4efe5]/10 transition-[border-color,box-shadow] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#f4efe5]/16 group-hover:shadow-[inset_0_0_0_1px_rgba(244,239,229,0.04)] sm:mb-8">
        <div className="h-44 sm:h-48 md:h-[13.25rem]">
          <img
            src={drink.image}
            alt={drink.name}
            className="h-full w-full scale-[1.02] object-cover grayscale contrast-125 brightness-[0.72] transition-[transform,filter] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.03] group-hover:brightness-[0.79]"
          />
        </div>
      </div>

      <h3 className="font-serif text-2xl leading-[1.12] tracking-tight text-[#f4efe5] sm:text-3xl sm:leading-[1.1]">
        {drink.name}
      </h3>

      <p className="mt-3.5 max-w-[34ch] text-[0.8125rem] leading-[1.75] text-[#f4efe5]/62 transition-[color,opacity] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#f4efe5]/68 sm:mt-5 sm:text-sm sm:leading-[1.8]">
        {drink.note}
      </p>
    </motion.article>
  );
}
