import { motion } from "framer-motion";

import { sectionReveal } from "../animations/motion";
import { drinks } from "../data/drinks";
import DrinkCard from "./drinkcard";

export default function MenuSection() {
  return (
    <motion.section
      id="drinks"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative px-5 py-28 sm:px-7 sm:py-32 md:px-8 lg:px-9 lg:py-36 xl:px-10 2xl:px-11"
    >
      <div className="mx-auto w-full max-w-[min(100%,100rem)]">
        <div className="mb-16 flex flex-col gap-9 border-t border-[#f4efe5]/15 pt-10 sm:mb-20 sm:gap-10 sm:pt-12 md:flex-row md:items-end md:justify-between md:gap-12 lg:mb-24 lg:gap-16">
          <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.015em] text-pretty sm:text-6xl lg:text-7xl">
            Featured drinks
          </h2>
          <p className="max-w-[30ch] text-[0.8125rem] leading-[1.8] text-[#f4efe5]/64 sm:max-w-lg sm:text-sm sm:leading-[1.85] lg:max-w-xl">
            Three signatures, composed like black ink on paper: restrained, bitter, soft at the edge.
          </p>
        </div>

        <div className="grid gap-px bg-[#f4efe5]/15 md:grid-cols-3">
          {drinks.map((drink, index) => (
            <DrinkCard key={drink.name} drink={drink} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
