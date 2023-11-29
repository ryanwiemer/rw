'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from './animated-text'
import { AspectRatio } from './ui/aspect-ratio'
import { MicOffIcon, XIcon, MonitorOffIcon } from 'lucide-react'
import { useWindowSize } from '@uidotdev/usehooks'

export default function IntroPromo({
  heading,
  subheading,
  videos,
}: {
  heading: string
  subheading: string
  videos?: any
}) {
  // Subtle effect on scroll
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    offset: [0, '100vh'],
  })

  const screen = useWindowSize()
  const isMobile = screen?.width && screen.width < 768
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0])

  // Tile interactions
  const [isClosed, setIsClosed] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(videos[0].url)

  const constraintsRef = useRef(null)

  function close() {
    setIsClosed(true)
    setTimeout(() => {
      setCurrentVideo(
        currentVideo === videos[0].url ? videos[1].url : videos[0].url
      )
    }, 300)
  }

  function open() {
    setIsClosed(false)
  }

  const tileVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
  }

  return (
    <motion.section
      className="relative container min-h-[100svh] grid grid-cols-12 gap-6 place-content-between md:items-end md:place-content-end pt-[25vh] pb-10"
      style={{ opacity: fade }}
    >
      <div className="grid col-span-12 md:col-span-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <AnimatedText text={heading} />
        </h1>
        <h2 className="text-2xl md:text-3xl font-base tracking-tight text-muted-foreground">
          <AnimatedText word text={subheading} />
        </h2>
      </div>
      <div className="col-span-8 md:col-start-10 md:col-span-4 rounded-lg inner-border relative">
        {isClosed && (
          <button
            onClick={open}
            className="absolute w-full h-full top-0 right-0 bottom-0 left-0 text-foreground text-sm grid items-center justify-center"
            aria-label="Click to reconnect"
          >
            <span>
              <MonitorOffIcon className="inline mr-1 text-red-600" size={14} />{' '}
              Click to reconnect
            </span>
          </button>
        )}
        <motion.div
          variants={tileVariants}
          initial="hidden"
          whileInView={isClosed ? 'hidden' : 'visible'}
          viewport={{ once: true }}
          className={`grid items-end md:hover:cursor-grab md:active:cursor-grabbing shadow-xl rounded-lg ${
            isClosed ? 'pointer-events-none' : ''
          }`}
          drag={isMobile ? false : true}
          dragSnapToOrigin
          whileDrag={{ scale: 1.03 }}
          dragElastic={0.1}
          dragConstraints={constraintsRef}
        >
          <motion.div
            ref={constraintsRef}
            className="w-full h-full scale-125 absolute top-0 left-0 rounded-lg"
          />
          <AspectRatio ratio={3 / 2} className="relative">
            <video
              className="object-cover h-full w-full rounded-lg border-4 border-[#efefef] pointer-events-none"
              preload="auto"
              loop
              autoPlay
              muted
              playsInline
              src={currentVideo}
            />
            <button
              onClick={close}
              className="absolute top-0 right-0 text-black bg-[#efefef] p-2 rounded-bl-lg rounded-tr-lg"
              aria-label="Click to close video"
            >
              <XIcon size={18} />
            </button>
            <span className="rounded-bl-lg rounded-tr-lg text-sm absolute bottom-0 left-0 bg-[#efefef] p-1 text-black">
              <MicOffIcon
                className="inline-block relative -top-[2px] text-red-600 mr-1"
                size={14}
              />
              Ryan Wiemer
            </span>
          </AspectRatio>
        </motion.div>
      </div>
    </motion.section>
  )
}
