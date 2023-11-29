'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import ContentfulImage from '../lib/contentful-image'
import AnimatedText from './animated-text'

export default function Hero({
  heading,
  image,
}: {
  heading: string
  image?: any
}) {
  // Subtle effect on scroll
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const slow = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // Add or remove class on body element to disable mix-blend-mode when the Hero is visible
  const isInView = useInView(ref, {
    once: false,
  })

  useEffect(() => {
    const body = document.querySelector('body')
    if (isInView && body) {
      body.classList.add('no-mix-blend')
    } else if (body) {
      body.classList.remove('no-mix-blend')
    }
  }, [isInView])

  return (
    <>
      <motion.div
        ref={ref}
        className="relative block h-[100svh] overflow-hidden"
      >
        <motion.div
          className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
          style={{
            y: slow,
          }}
        >
          <ContentfulImage
            alt={image?.title}
            priority
            fill
            placeholder="blur"
            blurDataURL={image?.base64}
            className="object-cover z-2"
            src={image?.url}
          />
        </motion.div>
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30" />
        <div className="grid items-end container py-10 absolute top-0 bottom-0 left-0 right-0 text-white">
          <motion.div>
            {heading && (
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <AnimatedText text={heading} />
              </h1>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
