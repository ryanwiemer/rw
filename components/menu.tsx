'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { stagger, useAnimate, motion } from 'framer-motion'
import { ModeToggle } from './mode-toggle'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'nav',
            { opacity: 1, x: 0 },
            {
              ease: [0.08, 0.65, 0.53, 0.96],
            },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          ['nav', { x: '100%' }, { at: '-0.3' }],
        ]
    // @ts-expect-error - TODO: Fix this
    animate([...menuAnimations])
  }, [animate, isOpen])

  return scope
}

export default function Menu() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
    document.documentElement.classList.toggle('contain')
  }

  function close() {
    setIsOpen(false)
    document.documentElement.classList.remove('contain')
  }

  const scope = useMenuAnimation(isOpen)

  useEffect(() => {
    if (pathname !== '/projects/*') {
      const body = document.querySelector('body')
      if (body) {
        body.classList.remove('no-mix-blend')
      }
    }
  }, [pathname])

  return (
    <>
      <header
        ref={scope}
        className={`${
          isOpen ? 'open' : 'closed'
        } md:fixed md:z-50 md:top-0 md:left-0 md:right-0 md:container md:flex md:justify-between md:items-baseline md:mix-blend-difference`}
      >
        <Link
          href="/"
          onClick={close}
          className={`${
            isOpen ? '' : ''
          } z-50 fixed left-[1.4rem] top-6 md:relative md:left-0 md:top-0 uppercase text-white font-semibold mix-blend-difference text-xl md:text-base`}
        >
          Ryan
        </Link>
        <motion.button
          onClick={toggle}
          className="fixed right-[1.4rem] top-6 z-50 h-7 w-14 text-xl text-white mix-blend-difference md:!hidden"
          aria-label="Toggle menu"
        >
          <span className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
            <motion.span
              initial={false}
              animate={
                isOpen
                  ? { y: '100%', skewY: '5deg', scale: 0.9 }
                  : { y: 0, skewY: 0, scale: 1 }
              }
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              className="absolute left-0 right-0 top-0"
            >
              Menu
            </motion.span>
            <motion.span
              initial={false}
              animate={
                isOpen
                  ? { y: 0, skewY: 0, scale: 1 }
                  : { y: '-100%', skewY: '5deg', scale: 0.9 }
              }
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              className="absolute left-0 right-0 top-0"
            >
              Close
            </motion.span>
          </span>
        </motion.button>
        <nav
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          className="z-40 opacity-0 will-change-transform grid items-end py-6 fixed md:relative top-0 right-0 left-0 bottom-0 text-left bg-background md:!opacity-100 md:!translate-x-0 md:!pointer-events-auto md:!right-0 md:!bottom-auto md:!left-auto md:!bg-transparent md:mix-blend-difference"
        >
          <ul className="w-full grid gap-6 items-center px-6 text-foreground md:text-white text-4xl font-medium md:text-base md:flex md:font-normal md:gap-6 md:px-0">
            <li className="md:!opacity-100 md:!filter-none md:!scale-100">
              <Link
                href="/"
                className={`inline-block hover:opacity-70 transition-opacity duration-300 ease-in-out ${
                  pathname === '/' ? 'underline' : ''
                }`}
                onClick={close}
              >
                Home
              </Link>
            </li>
            <li className="md:!opacity-100 md:!filter-none md:!scale-100">
              <Link
                href="/about"
                className={`inline-block hover:opacity-70 transition-opacity duration-300 ease-in-out ${
                  pathname === '/about' ? 'underline' : ''
                }`}
                onClick={close}
              >
                About
              </Link>
            </li>
            <li className="md:!opacity-100 md:!filter-none md:!scale-100">
              <Link
                href="/work"
                className={`inline-block hover:opacity-70 transition-opacity duration-300 ease-in-out ${
                  pathname === '/work' ? 'underline' : ''
                }`}
                onClick={close}
              >
                Work
              </Link>
            </li>
            <li className="md:!opacity-100 md:!filter-none md:!scale-100">
              <Link
                href="/contact"
                className={`inline-block hover:opacity-70 transition-opacity duration-300 ease-in-out ${
                  pathname === '/contact' ? 'underline' : ''
                }`}
                onClick={close}
              >
                Contact
              </Link>
            </li>
            <li className="hidden md:!opacity-100 md:inline-block md:!filter-none md:!scale-100">
              <ModeToggle blend />
            </li>
          </ul>
          <ul className="flex gap-6 px-6 text-foreground leading-1 md:!hidden">
            <li>
              <a
                className="text-base"
                href="https://www.linkedin.com/in/ryanwiemer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight
                  className="inline-block relative ml-1 opacity-50"
                  size={16}
                />
              </a>
            </li>
            <li>
              <a
                className="text-base"
                href="https://github.com/ryanwiemer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight
                  className="inline-block relative ml-1 opacity-50"
                  size={16}
                />
              </a>
            </li>
            <li className="ml-auto">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
