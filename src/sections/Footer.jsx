import { motion } from "framer-motion";

import { buttonMotion, cinematicEase, motionDuration } from "../animations/motion";

const footerReveal = {
  hidden: { opacity: 0, y: 22, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionDuration.section, ease: cinematicEase },
  },
};

export default function Footer() {
  return (
    <motion.footer
      id="visit"
      variants={footerReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.17 }}
      className="relative px-5 pb-10 pt-24 sm:px-7 sm:pb-12 sm:pt-28 md:px-8 lg:px-9 lg:pb-14 lg:pt-32 xl:px-10 2xl:px-11"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[min(100%,100rem)] gap-y-14 gap-x-10 sm:gap-y-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-x-14 lg:gap-y-12">
        <div className="hidden lg:block" />

        <div>
          <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.02em]">
            Kuro Cafe
          </h2>
          <p className="mt-5 max-w-[28ch] text-[0.8125rem] leading-[1.82] text-[#f4efe5]/58 sm:mt-6 sm:text-sm sm:leading-[1.8]">
            9-14 Kanda Alley, Tokyo. Open daily from dusk until the last train.
          </p>
        </div>

        <div className="space-y-3 text-[0.8125rem] leading-[1.75] text-[#f4efe5]/62 sm:text-sm sm:leading-[1.8] sm:space-y-3.5">
          <p>Espresso / Hojicha / Matcha</p>
          <p>Silent bar seating</p>
          <p>Reservations after 20:00</p>
        </div>

        <div className="flex items-end justify-start pt-2 md:justify-end lg:pt-0">
          <motion.a
            {...buttonMotion}
            href="mailto:hanshu12yt@gmail.com"
            className="inline-flex items-center justify-center border border-[#f4efe5]/22 bg-[#f4efe5]/0 px-7 py-3.5 text-[0.6875rem] uppercase tracking-[0.26em] transition-[border-color,background-color,color,box-shadow] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#f4efe5]/64 hover:bg-[#f4efe5]/[0.97] hover:text-[#080807] hover:shadow-[0_18px_56px_rgba(244,239,229,0.07)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[6px] focus-visible:outline-[#f4efe5]/35"
          >
            Reserve
          </motion.a>
        </div>
      </div>

      <div className="mx-auto mt-20 flex w-full max-w-[min(100%,100rem)] flex-col justify-between gap-6 border-t border-[#f4efe5]/12 pt-7 text-[0.625rem] uppercase leading-relaxed tracking-[0.26em] text-[#f4efe5]/44 sm:flex-row sm:items-baseline sm:pt-8 sm:text-[0.6875rem] sm:tracking-[0.28em]">
        <p>© 2026 Kuro Cafe</p>
        <p className="max-w-[32ch] text-[#f4efe5]/38 sm:max-w-none sm:text-right">
          Black coffee / Off-white pages
        </p>
      </div>
    </motion.footer>
  );
}
