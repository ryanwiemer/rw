'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Link from 'next/link'
import ContentfulImage from '@/lib/contentful-image'
import { AspectRatio } from './ui/aspect-ratio'
import { ArrowRight } from 'lucide-react'

export default function WorkPromo({ projects }: { projects?: any }) {
  // Animate the columns on scroll
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
  }

  const y = useParallax(scrollYProgress, 125)
  const y2 = useParallax(scrollYProgress, 350)
  const y3 = useParallax(scrollYProgress, 250)

  // Control grid animation on button hover
  const [mutedGrid, setMutedGrid] = useState(false)
  const gridVariants = {
    muted: {
      opacity: 0.75,
      transition: {
        duration: 0.5,
      },
    },
    regular: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.section className="px-6 relative bg-muted">
      <motion.div
        ref={ref}
        variants={gridVariants}
        animate={mutedGrid ? 'muted' : 'regular'}
        className="grid grid-cols-12 gap-4 overflow-hidden h-[75svh] -mb-[100px]"
      >
        <motion.div
          className="relative -top-[0%] flex flex-col gap-4 col-span-6 md:col-span-4"
          style={{ y: y }}
        >
          {projects.slice(0, 5).map((project: any) => (
            <div key={project.slug} className="relative w-full">
              <AspectRatio ratio={4 / 3}>
                <ContentfulImage
                  src={project.screenshot.url}
                  className="object-cover rounded-lg"
                  alt={project.title}
                  fill
                  placeholder="blur"
                  blurDataURL={project.screenshot.base64}
                  sizes="600px"
                />
              </AspectRatio>
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="hidden relative -top-[10%] md:flex flex-col gap-4 col-span-6 md:col-span-4"
        >
          {projects.slice(5, 10).map((project: any) => (
            <div key={project.slug} className="relative w-full">
              <AspectRatio ratio={4 / 3}>
                <ContentfulImage
                  src={project.screenshot.url}
                  className="object-cover rounded-lg"
                  alt={project.title}
                  fill
                  placeholder="blur"
                  blurDataURL={project.screenshot.base64}
                  sizes="600px"
                />
              </AspectRatio>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="relative md:-top-[15%] flex flex-col gap-4 col-span-6 md:col-span-4"
          style={{ y: y3 }}
        >
          {projects.slice(10, 15).map((project: any) => (
            <div key={project.slug} className="relative w-full">
              <AspectRatio ratio={4 / 3}>
                <ContentfulImage
                  src={project.screenshot.url}
                  className="object-cover rounded-lg"
                  alt={project.title}
                  fill
                  placeholder="blur"
                  blurDataURL={project.screenshot.base64}
                  sizes="600px"
                />
              </AspectRatio>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className="z-20 sticky bottom-0 left-0 right-0 col-span-12 grid justify-center items-center">
        <motion.div
          onHoverStart={() => setMutedGrid(true)}
          onHoverEnd={() => setMutedGrid(false)}
          whileHover={{ scale: 1.03, transition: { duration: 0.5 } }}
          className="group"
        >
          <Link
            href="/work"
            className="shadow-xl backdrop-blur-lg bg-foreground/80 group-hover:bg-foreground/100 transition-all duration-500 text-background inline-block text-lg md:text-xl my-6 py-3 px-6 rounded-full"
          >
            Explore work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-all duration-500 inline-block align-middle ml-2 relative -top-[1px]"
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
