'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const defaultVariants = {
  hidden: { opacity: 1, y: '200%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export default function AnimatedText({
  text,
  el: Wrapper = 'span',
  className,
  word,
}: {
  text: string | string[]
  el?: keyof JSX.IntrinsicElements
  className?: string
  word?: boolean
}) {
  const textArray = Array.isArray(text) ? text : [text]
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.025 }}
        aria-hidden
      >
        {word ? (
          <>
            {textArray.map((line, index) => (
              <span className="inline-block py-1 overflow-hidden" key={index}>
                {line.split(' ').map((word, index) => (
                  <span className="inline-block" key={index}>
                    <motion.span
                      className="inline-block"
                      variants={defaultVariants}
                      key={index}
                    >
                      {word}
                    </motion.span>
                    <span className="inline-block">&nbsp;</span>
                  </span>
                ))}
              </span>
            ))}
          </>
        ) : (
          <>
            {textArray.map((line, index) => (
              <span className="inline-block py-1 overflow-hidden" key={index}>
                {line.split(' ').map((word, index) => (
                  <span className=" inline-block" key={index}>
                    {word.split('').map((char, index) => (
                      <motion.span
                        className="inline-block"
                        variants={defaultVariants}
                        key={index}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                  </span>
                ))}
              </span>
            ))}
          </>
        )}
      </motion.span>
    </Wrapper>
  )
}
