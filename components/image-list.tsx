'use client'

import ContentfulImage from '@/lib/contentful-image'
import { motion } from 'framer-motion'

export default function ImageList({ images }: { images: any }) {
  return (
    <ul className="-mb-8">
      {images.items.map((image: any) => {
        const isVideo = image.url.endsWith('.mp4')
        const isLeft = image.description?.includes('left')
        const isRight = image.description?.includes('right')
        const isFull = image.description?.includes('full')
        const liClass = `rounded-xl mb-4 mx-auto clear-right ${
          isLeft
            ? 'bg-muted w-[calc(50%-.5rem)] float-left'
            : isRight
              ? 'bg-muted w-[calc(50%-.5rem)] float-right clear-right'
              : isFull
                ? ''
                : 'bg-muted w-full'
        }`
        return (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: 'linear',
              duration: 0.5,
              y: { duration: 0.5 },
            }}
            key={image.title}
            className={liClass}
          >
            <div
              className={`rounded-xl ${
                image.description?.includes('full') ? '' : 'p-[10%]'
              }`}
            >
              {isVideo ? (
                <video
                  src={image.url}
                  className={`w-full h-auto rounded-xl ${
                    image.description?.includes('full') ? '' : 'border-2'
                  }`}
                  preload="auto"
                  loop
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <ContentfulImage
                  alt={image.title}
                  height={800}
                  width={1600}
                  blurDataURL={image.base64}
                  placeholder="blur"
                  src={image.url}
                  className={`rounded-xl ${
                    image.description?.includes('full') ? '' : 'border-2'
                  }`}
                />
              )}
            </div>
          </motion.li>
        )
      })}
    </ul>
  )
}
