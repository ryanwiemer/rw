'use client'
import { useEffect } from 'react'

//Hacky fix for always scrolling to top even on page refresh or back button
export default function ScrollBehavior() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])
  return null
}
