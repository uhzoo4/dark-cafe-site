import { motion } from "framer-motion";

import { cinematicEase, motionDuration } from "../animations/motion";

const quoteSectionReveal = {
  hidden: { opacity: 0, y: 22, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionDuration.section, ease: cinematicEase },
  },
};

export default function QuoteSection() {
  return (
    <motion.section
      variants={quoteSectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.17 }}
      className="relative px-5 py-28 sm:px-7 sm:py-32 md:px-8 lg:px-9 lg:py-36 xl:px-10 2xl:px-11"
    >
      <div className="mx-auto w-full max-w-[min(100%,100rem)] border-y border-[#f4efe5]/15 px-2 py-20 sm:px-4 sm:py-24 md:px-5 lg:px-6 lg:py-28 xl:px-7">
        <blockquote className="mx-auto my-0 max-w-[min(100%,34ch)] text-center font-serif text-[clamp(1.875rem,5.2vw,2.625rem)] leading-[1.22] tracking-[-0.012em] text-pretty text-[#f4efe5]/[0.94] antialiased sm:max-w-[38ch] sm:text-[clamp(2.125rem,4vw,3.25rem)] sm:leading-[1.14] lg:max-w-[44ch] lg:text-[clamp(2.625rem,3.35vw,4rem)] lg:leading-[1.08] xl:max-w-[48ch]">
          <p className="text-balance">
            “The kind of place where even the steam seems to remember the rain.”
          </p>
          <footer className="mt-10 text-[0.6875rem] uppercase leading-relaxed tracking-[0.3em] text-[#f4efe5]/54 sm:mt-12 sm:text-xs sm:tracking-[0.34em] lg:mt-14">
            yoozhaa , Monochrome Quarterly
          </footer>
        </blockquote>
      </div>
    </motion.section>
  );
}
