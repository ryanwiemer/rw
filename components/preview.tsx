'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import ContentfulImage from '../lib/contentful-image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useWindowSize } from '@uidotdev/usehooks'
import { ArrowRight } from 'lucide-react'

export default function Preview({
  heading,
  url,
  image,
}: {
  heading: string
  url: string
  image: any
}) {
  // Setup scroll watcher
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  })

  const { scrollYProgress: pageScrollProgress } = useScroll()

  //Navigate to the next project once scrolled to the bottom (only on desktop screen sizes)
  /*
  const router = useRouter()
  const screen = useWindowSize()

  function handleLinkNavigation(url: string) {
    router.push(url)
    const body = document.querySelector('body')
    body?.classList.add('no-scroll')
    setTimeout(() => {
      body?.classList.remove('no-scroll')
    }, 500)
  }

  useMotionValueEvent(pageScrollProgress, 'change', (latest) => {
    latest >= 0.999 &&
      screen?.width &&
      screen.width >= 768 &&
      handleLinkNavigation(url)
  })
  */

  // Prefetch the next project (only on desktop screen sizes)
  const router = useRouter()
  const screen = useWindowSize()

  function handlePrefetch(url: string) {
    router.prefetch(url)
  }
  const [isPrefetched, setIsPrefetched] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (
      latest >= 0.1 &&
      screen?.width &&
      screen.width >= 768 &&
      !isPrefetched
    ) {
      handlePrefetch(url)
      setIsPrefetched(true)
    }
  })

  // Subtle visual effect on scroll
  const slide = useTransform(scrollYProgress, [0, 0.6], ['0%', '-100%'])
  const slide2 = useTransform(scrollYProgress, [0, 0.6], ['200%', '-100%'])

  return (
    <>
      <div className="container grid grid-cols-12 mb-24">
        <div className="col-start-2 col-span-10 md:flex items-baseline justify-between">
          <div className="overflow-hidden flex-grow relative text-lg mb-2 md:mb-0 md:text-xl text-muted-foreground">
            <motion.span style={{ y: slide }} className="block">
              Next up
            </motion.span>
            <motion.span style={{ y: slide2 }} className="block absolute">
              <span className="block">Click to view</span>
            </motion.span>
          </div>
          <motion.div className="text-4xl md:text-6xl font-extrabold tracking-tight group">
            <Link ref={ref} href={url}>
              {heading}
              <ArrowRight
                size={40}
                strokeWidth={2.5}
                className="text-muted-foreground md:group-hover:translate-x-1 transition-all duration-500 inline-block align-middle ml-2 md:ml-4 relative -top-[1px]"
              />
            </Link>
          </motion.div>
        </div>
      </div>
      <Link
        ref={ref}
        href={url}
        className="md:hover:opacity-80 transition-all duration-300 relative z-20 h-[50vh] md:h-[50svh] grid items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black" />
        <motion.div className="absolute inset-0">
          <ContentfulImage
            alt={image.title}
            priority
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={image.base64}
            className="object-cover -z-2 opacity-70"
            src={image.url}
          />
        </motion.div>
      </Link>
    </>
  )
}
