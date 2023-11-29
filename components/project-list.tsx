'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedText from './animated-text'
import ProjectCard from './project-card'

export default function ProjectList({
  heading,
  subheading,
  items,
}: {
  heading: string
  subheading?: string
  items: any
}) {
  //const defaultItems = items.filter((item: any) => item.category === 'Client')
  const defaultItems = items
  const [projects, setProjects] = useState(defaultItems)
  const [selected, setSelected] = useState('All')

  const filter = (value: any) => {
    setSelected(value)
    setProjects(items.filter((project: any) => project.category === value))

    value != 'All'
      ? setProjects(items.filter((project: any) => project.category === value))
      : setProjects(items)
  }

  const categories = [
    ...new Set(
      items
        .map((item: any) => {
          return item.category
        })
        .sort()
    ),
  ]

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

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <section>
      <div className="grid grid-cols-12 items-baseline">
        <div className="col-span-12 text-4xl md:text-6xl font-extrabold tracking-tight relative">
          <div className="relative inline-block">
            <AnimatedText el="h1" text={heading} />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.75 },
              }}
              viewport={{ once: true }}
              className="absolute top-0 -right-2 text-sm font-normal text-muted-foreground"
            >
              {projects.length}
            </motion.span>
          </div>
        </div>
        {subheading && (
          <div className="mb-10 col-span-12 text-lg md:text-xl text-muted-foreground">
            <AnimatedText word el="h2" text={subheading} />
          </div>
        )}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.25 }}
          className="col-span-12 flex gap-8 mb-6 overflow-hidden"
        >
          <motion.button
            className={`text-muted-foreground${
              selected === 'All' ? 'text-foreground underline' : ''
            }`}
            onClick={() => filter('All')}
            variants={defaultVariants}
            aria-label="Show everything"
          >
            Everything
          </motion.button>
          {categories.map((category: any, index) => (
            <motion.button
              className={`text-muted-foreground ${
                selected === category ? 'text-foreground underline' : ''
              }`}
              onClick={() => filter(category)}
              key={index}
              variants={defaultVariants}
              aria-label={`Show ${category} projects`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
      <ul className="md:grid grid-cols-12 gap-4">
        {projects.map((project: any) => (
          <ProjectCard
            className="mb-8 md:mb-0 md:col-span-6 lg:col-span-4"
            key={project.slug}
            {...project}
          />
        ))}
      </ul>
    </section>
  )
}
