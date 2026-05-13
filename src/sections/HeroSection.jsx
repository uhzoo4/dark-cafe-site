import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import heroTokyo from "../assets/hero-tokyo.jpg";
import { buttonMotion, heroCopy, heroLine } from "../animations/motion";
import Navbar from "../components/navbar";

export default function HeroSection() {
  const imageColumnRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageColumnRef,
    offset: ["start 0.9", "end 0.1"],
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["-2.5%", "2.5%"]);

  return (
    <motion.section className="relative min-h-screen overflow-hidden px-5 py-8 sm:px-7 sm:py-10 md:px-8 lg:px-9 lg:py-12 xl:px-10 2xl:px-11">
      <Navbar />

      <div className="absolute right-0 top-28 h-[62vh] w-[58vw] border-y border-l border-[#f4efe5]/10 bg-[#f4efe5]/3 backdrop-blur-md sm:right-8 sm:top-32 lg:right-14 lg:top-36" />
      <div className="absolute right-6 top-44 hidden h-[44vh] w-[28vw] border border-[#f4efe5]/20 bg-[#080807] lg:right-12 lg:top-48 lg:block">
        <div className="h-full w-full bg-[linear-gradient(115deg,transparent_0%,transparent_45%,rgba(244,239,229,0.14)_46%,transparent_47%),linear-gradient(0deg,rgba(244,239,229,0.08)_1px,transparent_1px)] bg-size-[100%_95%,90%_18px]" />
      </div>

      <div className="relative z-10 grid min-h-[calc(100vh-5.75rem)] items-center gap-y-14 gap-x-10 pt-20 sm:min-h-[calc(100vh-6rem)] sm:gap-y-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-16 lg:gap-y-12 xl:gap-x-20 2xl:gap-x-24">
        <div className="max-w-6xl">
          <p className="mb-8 max-w-xl text-pretty text-[0.6875rem] uppercase leading-relaxed tracking-[0.32em] text-[#f4efe5]/65 sm:mb-10 sm:text-xs sm:tracking-[0.4em]">
            Tokyo after rain / espresso after midnight / quiet corners
          </p>
          <motion.h1
            variants={heroCopy}
            initial="hidden"
            animate="show"
            className="font-serif italic leading-[0.92] tracking-[-0.015em] text-[clamp(2.625rem,10.2vw,3.85rem)] antialiased sm:text-[clamp(3.125rem,7.1vw,4.65rem)] lg:text-[clamp(3.75rem,5.35vw,5.85rem)]"
          >
            <motion.span variants={heroLine} className="block max-w-[22ch] text-pretty sm:max-w-none">
              Quiet coffee drawn in black and off-white, with warm light and space
            </motion.span>
            <motion.span
              variants={heroLine}
              className="mt-2 block text-pretty text-[0.88em] italic tracking-[0.01em] text-[#f4efe5]/76 drop-shadow-[0_0_14px_rgba(255,255,255,0.05)] sm:mt-3"
            >
              dark aesthetics
            </motion.span>
          </motion.h1>

          <div className="mt-12 flex max-w-2xl flex-col gap-10 border-l border-[#f4efe5]/22 pl-5 sm:mt-14 sm:gap-12 sm:pl-7 lg:mt-16 lg:max-w-[42rem] lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <p className="max-w-[32ch] text-[0.8125rem] leading-[1.85] text-[#f4efe5]/75 sm:max-w-[38ch] sm:text-sm sm:leading-[1.8]">
              A monochrome kissaten for slow mornings, rain-warm evenings, and cups that feel like a scene held just before the cut.
            </p>
            <motion.a
              href="#drinks"
              {...buttonMotion}
              className="inline-flex w-fit shrink-0 items-center justify-center self-start border border-[#f4efe5]/30 bg-[#f4efe5]/0 px-7 py-3.5 text-[0.6875rem] uppercase tracking-[0.26em] transition-[border-color,background-color,color,box-shadow] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#f4efe5]/68 hover:bg-[#f4efe5]/[0.97] hover:text-[#080807] hover:shadow-[0_20px_64px_rgba(244,239,229,0.07)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[6px] focus-visible:outline-[#f4efe5]/35 sm:self-auto lg:self-end"
            >
              View Menu
            </motion.a>
          </div>
        </div>

        <div
          ref={imageColumnRef}
          className="group/img relative mx-auto aspect-3/4 w-full max-w-[min(100%,20rem)] border border-[#f4efe5]/20 bg-[#f4efe5]/4 p-3 shadow-2xl backdrop-blur-md transition-[border-color,box-shadow] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#f4efe5]/26 hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-sm"
        >
          <div className="absolute -left-4 top-10 h-24 w-9 border border-[#f4efe5]/20 bg-[#080807]/80 sm:-left-5 sm:w-10" />
          <div className="absolute -bottom-4 right-6 h-9 w-28 border border-[#f4efe5]/20 bg-[#080807]/80 sm:-bottom-5 sm:right-8 sm:h-10 sm:w-32" />
          <div className="h-full border border-[#f4efe5]/10 bg-[radial-gradient(circle_at_50%_22%,rgba(244,239,229,0.18),transparent_26%),linear-gradient(180deg,rgba(244,239,229,0.08),transparent_38%),linear-gradient(90deg,rgba(244,239,229,0.08)_1px,transparent_1px)] bg-size-[100%_95%,95%_90%,34px_100%]">
            <div className="flex h-full flex-col justify-end p-5 sm:p-6">
              <div className="relative h-full overflow-hidden border border-[#f4efe5]/10">
                <motion.div style={{ y: imageParallaxY }} className="h-full w-full will-change-transform">
                  <img
                    src={heroTokyo}
                    alt="Tokyo street at night"
                    className="h-full w-full scale-[1.06] object-cover grayscale contrast-125 brightness-[0.52] transition-[transform,filter] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.065] group-hover/img:brightness-[0.56]"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-[#080807]/38" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 [text-shadow:0_1px_14px_rgba(8,8,7,0.72)]">
                  <p className="mb-2 font-serif text-4xl leading-none text-[#f4efe5]/95 sm:mb-3 sm:text-5xl">黒</p>
                  <p className="text-[0.625rem] uppercase leading-relaxed tracking-[0.32em] text-[#f4efe5]/82 sm:text-xs sm:tracking-[0.34em]">
                    Tokyo rain / black coffee / 02:17
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[0.625rem] uppercase leading-relaxed tracking-[0.32em] text-[#f4efe5]/62 sm:mt-5 sm:text-xs sm:tracking-[0.34em]">
                Hand-pulled espresso / noir room / 02:15
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
