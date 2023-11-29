'use client'

import ContentfulImage from '@/lib/contentful-image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'

export default function ProjectCard({
  title,
  slug,
  screenshot,
  role,
  className,
  style,
}: {
  title?: string
  slug?: string
  screenshot?: any
  role?: string
  className?: any
  style?: any
}) {
  const defaultVariants = {
    hidden: { opacity: 0, y: '110%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      key={slug}
      className={`group bg-muted rounded-lg relative ${className}`}
      style={{ ...style }}
    >
      <Link href={`/work/${slug}`} key={slug}>
        <AspectRatio
          className="flex flex-col justify-center items-center w-full h-full"
          ratio={1 / 1}
        >
          <motion.div
            transition={{ duration: 0.25 }}
            className="w-[70%] rounded-lg relative shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all transition-250"
          >
            <AspectRatio ratio={4 / 3}>
              <ContentfulImage
                alt={title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                src={screenshot.url}
                blurDataURL={screenshot.base64}
                placeholder="blur"
                className="object-cover rounded-lg"
              />
            </AspectRatio>
          </motion.div>
        </AspectRatio>
        <div className="text-xs p-4 grid grid-cols-12 align-baseline">
          <h3 className="font-semibold col-span-6">{title}</h3>
          <h4 className="col-span-6 text-muted-foreground text-right">
            {role}
          </h4>
        </div>
      </Link>
    </motion.li>
  )
}
