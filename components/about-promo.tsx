'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Markdown } from '@/lib/markdown'

export default function AboutPromo({ content }: { content?: any }) {
  return (
    <motion.section className="min-h-[100svh] grid items-center">
      <div className="container grid grid-cols-12 gap-6 items-baseline">
        <h3 className="col-span-12 md:col-span-3 lg:col-start-2 text-2xl text-muted-foreground">
          About
        </h3>
        <div className="col-span-12 md:col-span-9 lg:col-span-7 text-2xl md:text-3xl">
          <div className="mb-10">
            {content && <Markdown content={content} />}
          </div>
          <Link
            className="underline hover:opacity-70 transition-opacity duration-300"
            href="/about"
          >
            Get to know me
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
