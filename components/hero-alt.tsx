'use client'

import { motion } from 'framer-motion'
import ContentfulImage from '../lib/contentful-image'
import AnimatedText from './animated-text'
import { AspectRatio } from './ui/aspect-ratio'

export default function HeroAlt({
  heading,
  subheading,
  images,
}: {
  heading: string
  subheading?: string
  images?: any
}) {
  //Marquee effect on the images
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 100,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <>
      <motion.div className="relative pt-[25vh]">
        <div className="grid container">
          <motion.div>
            {heading && (
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <AnimatedText text={heading} />
              </h1>
            )}
            {subheading && (
              <h2 className="text-lg md:text-xl text-muted-foreground">
                <AnimatedText text={subheading} word />
              </h2>
            )}
          </motion.div>
        </div>

        <motion.div className="relative gap-x-4 max-w-[1400px] mx-auto flex mt-10 overflow-hidden gradient-mask-custom">
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="gap-x-4 min-w-full flex flex-shrink-0 justify-around user-select-none"
            variants={marqueeVariants}
            animate="animate"
          >
            {images?.map((image: any, index: number) => (
              <motion.li key={index} className="min-w-[50vw] lg:min-w-[600px]">
                <AspectRatio className="rounded-lg relative" ratio={1 / 1}>
                  {image.url && image.url.endsWith('.mp4') ? (
                    <video
                      preload="auto"
                      loop
                      autoPlay
                      muted
                      playsInline
                      className="object-cover z-2 rounded-lg h-full w-full"
                    >
                      <source src={image.url} type="video/mp4" />
                    </video>
                  ) : (
                    <ContentfulImage
                      alt={image.title}
                      priority
                      fill
                      blurDataURL={image.base64}
                      placeholder="blur"
                      sizes="100vw"
                      className="object-cover z-2 rounded-lg"
                      src={image.url!}
                    />
                  )}
                </AspectRatio>
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="gap-x-4 min-w-full flex flex-shrink-0 justify-around user-select-none"
            variants={marqueeVariants}
            animate="animate"
          >
            {images?.map((image: any, index: number) => (
              <motion.li key={index} className="min-w-[50vw] lg:min-w-[600px]">
                <AspectRatio className="rounded-lg relative" ratio={1 / 1}>
                  <ContentfulImage
                    alt={image.title}
                    priority
                    fill
                    sizes="100vw"
                    className="object-cover z-2 rounded-lg"
                    src={image.url!}
                  />
                </AspectRatio>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  )
}
