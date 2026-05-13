/** Cinematic editorial easing — use for Framer + match CSS `ease-[cubic-bezier(0.22,1,0.36,1)]` */
export const cinematicEase = [0.22, 1, 0.36, 1];

/** Seconds — shared Framer pacing */
export const motionDuration = {
  /** Weighted hover / depth (Framer) */
  hover: 0.76,
  tap: 0.46,
  section: 1.32,
  line: 1.62,
  card: 1.08,
};

export const heroCopy = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.16 },
  },
};

export const heroLine = {
  hidden: { opacity: 0, y: 56, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionDuration.line, ease: cinematicEase },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 32, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionDuration.section, ease: cinematicEase },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.card,
      ease: cinematicEase,
      delay: index * 0.1,
    },
  }),
};

export const buttonMotion = {
  whileHover: {
    y: -1.5,
    scale: 1.0035,
    transition: { duration: motionDuration.hover, ease: cinematicEase },
  },
  whileTap: {
    scale: 0.994,
    transition: { duration: motionDuration.tap, ease: cinematicEase },
  },
};
