const transitionDuration = 300
const transitionDelay = 350

export const pageFade = {
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
    transition: { duration: transitionDuration },
  },
}

export const staggerChildren = {
  enter: { staggerChildren: 50 },
}

export const delayChildren = {
  enter: { delayChildren: transitionDelay },
}

export const slideUp = {
  enter: { y: 0, transition: { duration: transitionDuration } },
  exit: { y: '110%', delay: transitionDelay },
}

export const appear = {
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: transitionDuration },
  },
  exit: { opacity: 0, y: 10, delay: transitionDelay },
}

export const fade = {
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
  },
  exit: { opacity: 0, delay: transitionDelay },
}
