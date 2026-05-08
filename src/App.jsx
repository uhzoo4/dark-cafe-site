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


export default function App() {
  return (
    <main className="min-h-screen bg-[#080807] text-[#f4efe5] selection:bg-[#f4efe5] selection:text-[#080807]">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
        }}
      />

      <section className="relative min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
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
           <h1 className="font-serif italic text-[11vw] leading-[0.95] tracking-normal sm:text-[8vw] lg:text-[5.2vw]">
              Quiet coffee drawn in black and off-white, with warm light and space 
              <span className="block italic text-[#f4efe5]/70">
                dark aesthetics 
              </span>
            </h1>
            <div className="mt-10 flex max-w-2xl flex-col gap-6 border-l border-[#f4efe5]/25 pl-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm leading-7 text-[#f4efe5]/70 sm:max-w-md">
                A monochrome kissaten for slow mornings, rain-warm evenings,
                and cups that feel like a scene held just before the cut. 
              </p>
              <a
                href="#drinks"
                className="w-fit border border-[#f4efe5]/30 px-6 py-3 text-xs uppercase tracking-[0.28em] transition duration-300 hover:bg-[#f4efe5] hover:text-[#080807]"
              >
                View Menu
              </a>
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
      </section>

      <section id="drinks" className="relative px-5 py-24 sm:px-8 lg:px-12">
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
              <article
                key={drink.name}
                className="group bg-[#080807] p-6 transition duration-300 hover:bg-[#11100e] sm:p-8"
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
    className="h-full w-full object-cover grayscale contrast-125 brightness-75 transition duration-500 group-hover:scale-105"
  />
  <img
  src={heroTokyo}
  alt="Tokyo street at night"
  className="h-full w-full object-cover grayscale contrast-125 brightness-50"
/>
<img
  src={aboutBar}
  alt="Dark cafe bar interior"
  className="h-full w-full object-cover grayscale contrast-125 brightness-75"
/>
</div>

                <h3 className="font-serif text-3xl leading-tight">
                  {drink.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#f4efe5]/60">
                  {drink.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

     <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
<div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
  <img
    src={aboutBar}
    alt="Dark cafe bar interior"
    className="h-full w-full object-cover grayscale contrast-125 brightness-50 opacity-45"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/65 to-transparent" />
  <div className="absolute inset-0 bg-[#080807]/25" />
</div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="aspect-[4/5] border border-[#f4efe5]/15 bg-[#f4efe5]/[0.03] p-4 backdrop-blur-md">
            <div className="h-full border border-[#f4efe5]/10 bg-[linear-gradient(180deg,transparent,rgba(244,239,229,0.09)),repeating-linear-gradient(0deg,rgba(244,239,229,0.09)_0_1px,transparent_1px_22px)]" />
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#f4efe5]/50">
              About the room
            </p>
            <h2 className="font-serif italic text-4xl leading-[1] sm:text-5xl lg:text-6xl">
              Built for silence, shadow, warm and the first bitter sip.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[#f4efe5]/15 pt-8 md:grid-cols-2">
              <p className="text-sm leading-7 text-[#f4efe5]/65">
                Kuro Cafe sits behind a narrow paper door, lit by low lamps and
                passing train light. The menu is short. The cups are warm. The
                room leaves space for whatever follows you in.
              </p>
              <p className="text-sm leading-7 text-[#f4efe5]/65">
                Every detail is reduced to contrast: black ceramic, off-white
                linen, quiet service, and coffee with the patience of a final
                panel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl border-y border-[#f4efe5]/15 py-16">
          <blockquote className="mx-auto max-w-5xl text-center font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            “The kind of place where even the steam seems to remember the rain.”
          </blockquote>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.36em] text-[#f4efe5]/50">
            yoozhaa , Monochrome Quarterly
          </p>
        </div>
      </section>

      <footer
        id="visit"
        className="relative px-5 pb-8 pt-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#f4efe5]/15 pt-8 md:grid-cols-[1fr_1fr_1fr]">
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
            <a
              href="mailto:hello@kuro.cafe"
              className="border border-[#f4efe5]/25 px-5 py-3 text-xs uppercase tracking-[0.28em] transition duration-300 hover:bg-[#f4efe5] hover:text-[#080807]"
            >
              Reserve
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#f4efe5]/10 pt-5 text-xs uppercase tracking-[0.28em] text-[#f4efe5]/35 sm:flex-row">
          <p>© 2026 Kuro Cafe</p>
          <p>Black coffee / Off-white pages</p>
        </div>
      </footer>
    </main>
  );
}
