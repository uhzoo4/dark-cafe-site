import { motion } from "framer-motion";
import React from "react";

import heroTokyo from "./assets/hero-tokyo.jpg";
import aboutBar from "./assets/about-bar.jpg";
import espresso from "./assets/espresso.jpg";
import matcha from "./assets/matcha.jpg";
import takeaway from "./assets/takeaway.jpg";

const drinks = [
  {
    name: "Midnight Hojicha",
    note: "Roasted tea, oat milk, black sugar smoke",
    price: "12",
    image: takeaway,
  },
  {
    name: "Ink Drop Espresso",
    note: "Double ristretto, cacao ash, mineral cream",
    price: "10",
    image: espresso,
  },
  {
    name: "Moonlit Matcha",
    note: "Stone-ground matcha, cold foam, sea salt",
    price: "13",
    image: matcha,
  },
];

const cinematicEase = [0.22, 1, 0.36, 1];

const heroCopy = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.18 },
  },
};

const heroLine = {
  hidden: { opacity: 0, y: 70, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.7, ease: cinematicEase },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 44, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.25, ease: cinematicEase },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 36 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: cinematicEase, delay: index * 0.12 },
  }),
};

const buttonMotion = {
  whileHover: {
    y: -3,
    scale: 1.015,
    transition: { duration: 0.55, ease: cinematicEase },
  },
  whileTap: { scale: 0.985 },
};

export default function App() {
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

        <div className="absolute right-0 top-24 h-[68vh] w-[58vw] border-y border-l border-[#f4efe5]/10 bg-[#f4efe5]/[0.03] backdrop-blur-md sm:right-10 lg:right-16" />
        <div className="absolute right-8 top-40 hidden h-[48vh] w-[28vw] border border-[#f4efe5]/20 bg-[#080807] lg:block">
          <div className="h-full w-full bg-[linear-gradient(115deg,transparent_0%,transparent_45%,rgba(244,239,229,0.14)_46%,transparent_47%),linear-gradient(0deg,rgba(244,239,229,0.08)_1px,transparent_1px)] bg-[length:100%_100%,100%_18px]" />
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

            <div className="mt-10 flex max-w-2xl flex-col gap-6 border-l border-[#f4efe5]/25 pl-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm leading-7 text-[#f4efe5]/70 sm:max-w-md">
                A monochrome kissaten for slow mornings, rain-warm evenings,
                and cups that feel like a scene held just before the cut. 
              </p>
              <motion.a
                href="#drinks"
                {...buttonMotion}
                className="inline-flex w-fit items-center justify-center border border-[#f4efe5]/30 bg-[#f4efe5]/0 px-6 py-3 text-xs uppercase tracking-[0.28em] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#f4efe5]/70 hover:bg-[#f4efe5] hover:text-[#080807] hover:shadow-[0_18px_60px_rgba(244,239,229,0.12)]"
              >
                View Menu
              </motion.a>
            </div>
          </div>

          <div className="relative ml-auto aspect-[3/4] w-full max-w-sm border border-[#f4efe5]/20 bg-[#f4efe5]/[0.04] p-3 shadow-2xl backdrop-blur-md">
            <div className="absolute -left-5 top-8 h-24 w-10 border border-[#f4efe5]/20 bg-[#080807]/80" />
            <div className="absolute -bottom-5 right-8 h-10 w-32 border border-[#f4efe5]/20 bg-[#080807]/80" />
            <div className="h-full border border-[#f4efe5]/10 bg-[radial-gradient(circle_at_50%_22%,rgba(244,239,229,0.18),transparent_26%),linear-gradient(180deg,rgba(244,239,229,0.08),transparent_38%),linear-gradient(90deg,rgba(244,239,229,0.08)_1px,transparent_1px)] bg-[length:100%_100%,100%_100%,34px_100%]">
              <div className="flex h-full flex-col justify-end p-6">
              <div className="relative h-full overflow-hidden border border-[#f4efe5]/10">
  <img
    src={heroTokyo}
    alt="Tokyo street at night"
    className="h-full w-full object-cover grayscale contrast-125 brightness-50"
  />
  <div className="absolute inset-0 bg-[#080807]/35" />
  <div className="absolute bottom-0 left-0 p-6">
    <p className="mb-3 font-serif text-5xl leading-none">黒</p>
    <p className="text-xs uppercase tracking-[0.34em] text-[#f4efe5]/70">
      Tokyo rain / black coffee / 02:17
    </p>
  </div>
</div>

                <p className="text-xs uppercase tracking-[0.34em] text-[#f4efe5]/55">
                  Hand-pulled espresso / nior room / 02:15
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
  id="drinks"
  variants={sectionReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.18 }}
  className="relative px-5 py-24 sm:px-8 lg:px-12"
>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 border-t border-[#f4efe5]/15 pt-8 md:flex-row">
            <h2 className="font-serif text-5xl leading-none sm:text-7xl">
              Featured drinks
            </h2>
            <p className="max-w-sm text-sm leading-7 text-[#f4efe5]/62">
              Three signatures, composed like black ink on paper: restrained,
              bitter, soft at the edge.
            </p>
          </div>

          <div className="grid gap-px bg-[#f4efe5]/15 md:grid-cols-3">
            {drinks.map((drink, index) => (
  <motion.article
    key={drink.name}
    custom={index}
    variants={cardReveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.24 }}
    whileHover={{ y: -8, transition: { duration: 0.6, ease: cinematicEase } }}
    className="group bg-[#080807] p-6 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#11100e] sm:p-8"
  >
    <div className="mb-16 flex items-start justify-between">
      <span className="text-xs uppercase tracking-[0.32em] text-[#f4efe5]/45">
        0{index + 1}
      </span>
      <span className="border border-[#f4efe5]/20 px-3 py-1 font-serif text-sm text-[#f4efe5]/70 backdrop-blur-md">
        ${drink.price}
      </span>
    </div>

    <div className="mb-8 h-48 overflow-hidden border border-[#f4efe5]/10">
      <img
        src={drink.image}
        alt={drink.name}
        className="h-full w-full object-cover grayscale contrast-125 brightness-75 transition duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:brightness-90"
      />
    </div>

    <h3 className="font-serif text-3xl leading-tight">
      {drink.name}
    </h3>

    <p className="mt-4 text-sm leading-7 text-[#f4efe5]/60">
      {drink.note}
    </p>
  </motion.article>
))}

          </div>
        </div>
      </motion.section>

     <motion.section
  id="about"
  variants={sectionReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12"
>
  <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
    <img
      src={aboutBar}
      alt="Dark cafe bar interior"
      className="h-full w-full object-cover grayscale contrast-125 brightness-50 opacity-60"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, transparent 12%, black 45%, black 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, transparent 12%, black 45%, black 100%)",
      }}
    />
    <div className="absolute inset-0 bg-[#080807]/45" />
  </div>

  <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
    <div className="hidden lg:block" />

    <div className="max-w-3xl">
      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#f4efe5]/50">
        About the room
      </p>

      <h2 className="font-serif italic text-4xl leading-[1] sm:text-5xl lg:text-6xl">
        Built for silence, shadow, and the first bitter sip.
      </h2>

      <div className="mt-10 grid gap-8 border-t border-[#f4efe5]/15 pt-8 md:grid-cols-2">
        <p className="text-sm leading-7 text-[#f4efe5]/65">
          Kuro Cafe sits behind a narrow paper door, lit by low lamps and
          passing train light. The menu is short. The cups are warm. The room
          leaves space for whatever follows you in.
        </p>

        <p className="text-sm leading-7 text-[#f4efe5]/65">
          Every detail is reduced to contrast: black ceramic, off-white linen,
          quiet service, and coffee with the patience of a final panel.
        </p>
      </div>
    </div>
  </div>
</motion.section>
      <motion.section
  variants={sectionReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.24 }}
  className="relative px-5 py-24 sm:px-8 lg:px-12"
>
        <div className="mx-auto max-w-7xl border-y border-[#f4efe5]/15 py-16">
          <blockquote className="mx-auto max-w-5xl text-center font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            “The kind of place where even the steam seems to remember the rain.”
          </blockquote>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.36em] text-[#f4efe5]/50">
            yoozhaa , Monochrome Quarterly
          </p>
        </div>
      </motion.section>

      <motion.footer
  id="visit"
  variants={sectionReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="relative px-5 pb-8 pt-20 sm:px-8 lg:px-12"
>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
  <div className="hidden lg:block" />

          <div>
            <h2 className="font-serif text-4xl">Kuro Cafe</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#f4efe5]/55">
              9-14 Kanda Alley, Tokyo. Open daily from dusk until the last
              train.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#f4efe5]/60">
            <p>Espresso / Hojicha / Matcha</p>
            <p>Silent bar seating</p>
            <p>Reservations after 20:00</p>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <motion.a
  {...buttonMotion}
  href="mailto:hanshu12yt@gmail.com"
  className="inline-flex items-center justify-center border border-[#f4efe5]/25 bg-[#f4efe5]/0 px-5 py-3 text-xs uppercase tracking-[0.28em] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#f4efe5]/70 hover:bg-[#f4efe5] hover:text-[#080807] hover:shadow-[0_18px_60px_rgba(244,239,229,0.12)]"
>
  Reserve
</motion.a>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#f4efe5]/10 pt-5 text-xs uppercase tracking-[0.28em] text-[#f4efe5]/35 sm:flex-row">
          <p>© 2026 Kuro Cafe</p>
          <p>Black coffee / Off-white pages</p>
        </div>
      </motion.footer>
    </main>
  );
}
