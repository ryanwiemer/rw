import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Transition = ({ children, location }) => {
  const duration = 0.35

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: duration,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        id="main"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default Transition
