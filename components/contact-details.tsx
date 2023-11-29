'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ContactDetails() {
  const defaultVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.li className="overflow-hidden flex justify-between py-4 border-t border-b">
        <motion.span
          variants={defaultVariants}
          className="text-muted-foreground"
        >
          Location
        </motion.span>
        <motion.h3 variants={defaultVariants} className="">
          Oakland, CA
        </motion.h3>
      </motion.li>
      <motion.li className="overflow-hidden flex justify-between py-4 border-b">
        <motion.span
          variants={defaultVariants}
          className="text-muted-foreground"
        >
          Email
        </motion.span>
        <motion.h3 variants={defaultVariants} className="">
          <a
            className="underline hover:opacity-70 transition-opacity duration-300"
            href="mailto:ryan@ryanwiemer.com"
          >
            ryan@ryanwiemer.com
            <ArrowUpRight
              className="inline-block relative ml-1 opacity-50"
              size={16}
            />
          </a>
        </motion.h3>
      </motion.li>
      <motion.li className="overflow-hidden flex justify-between py-4 border-b">
        <motion.span
          variants={defaultVariants}
          className="text-muted-foreground"
        >
          LinkedIn
        </motion.span>
        <motion.h3 variants={defaultVariants}>
          <a
            className="underline hover:opacity-70 transition-opacity duration-300"
            href="https://www.linkedin.com/in/ryanwiemer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ryanwiemer
            <ArrowUpRight
              className="inline-block relative ml-1 opacity-50"
              size={16}
            />
          </a>
        </motion.h3>
      </motion.li>
      <motion.li className="overflow-hidden flex justify-between py-4 border-b">
        <motion.span
          variants={defaultVariants}
          className="text-muted-foreground"
        >
          GitHub
        </motion.span>
        <motion.h3 variants={defaultVariants}>
          <a
            className="underline hover:opacity-70 transition-opacity duration-300"
            href="https://github.com/ryanwiemer"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ryanwiemer
            <ArrowUpRight
              className="inline-block relative ml-1 opacity-50"
              size={16}
            />
          </a>
        </motion.h3>
      </motion.li>
    </motion.ul>
  )
}
