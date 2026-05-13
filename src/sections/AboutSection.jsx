import { motion } from "framer-motion";

import aboutBar from "../assets/about-bar.jpg";
import { cinematicEase, motionDuration } from "../animations/motion";

const aboutReveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionDuration.section, ease: cinematicEase },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={aboutReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className="relative overflow-hidden px-5 py-28 sm:px-7 sm:py-32 md:px-8 lg:px-9 lg:py-36 xl:px-10 2xl:px-11"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
        <img
          src={aboutBar}
          alt="Dark cafe bar interior"
          className="h-full w-full object-cover grayscale contrast-125 brightness-[0.5] opacity-[0.58]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 12%, black 45%, black 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 12%, black 45%, black 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[#080807]/46" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[min(100%,100rem)] gap-14 sm:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div className="hidden lg:block" />

        <div className="max-w-3xl lg:max-w-4xl">
          <p className="mb-8 text-[0.6875rem] uppercase leading-relaxed tracking-[0.34em] text-[#f4efe5]/55 sm:mb-9 sm:text-xs sm:tracking-[0.38em]">
            About the room
          </p>

          <h2 className="font-serif text-[clamp(2.125rem,5.2vw,2.75rem)] italic leading-[1.06] tracking-[-0.012em] text-pretty text-[#f4efe5]/[0.96] antialiased sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:leading-[1.04]">
            Built for silence, shadow, and the first bitter sip.
          </h2>

          <div className="mt-12 grid gap-10 border-t border-[#f4efe5]/15 pt-10 sm:mt-14 sm:gap-11 sm:pt-11 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:mt-16 lg:gap-x-20 lg:pt-12">
            <p className="max-w-[36ch] text-[0.8125rem] leading-[1.82] text-[#f4efe5]/66 sm:text-sm sm:leading-[1.8]">
              Kuro Cafe sits behind a narrow paper door, lit by low lamps and passing train light. The menu is short. The cups are warm. The room leaves space for whatever follows you in.
            </p>

            <p className="max-w-[36ch] text-[0.8125rem] leading-[1.82] text-[#f4efe5]/66 sm:text-sm sm:leading-[1.8] md:pt-0.5">
              Every detail is reduced to contrast: black ceramic, off-white linen, quiet service, and coffee with the patience of a final panel.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
