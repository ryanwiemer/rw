'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/work/')) {
    return null
  }
  return (
    <footer className="container z-30 pb-10 flex flex-col justify-center text-muted-foreground">
      <div className="border-t pt-4 grid grid-cols-2 gap-4 items-center">
        <a href="#" className="col-span-2 md:col-span-1">
          &copy;{new Date().getFullYear()}
        </a>
        <ul className="col-span-2 md:col-span-1 md:justify-end md:text-right flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
