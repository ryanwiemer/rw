'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

function ExitDraftModeLink(props: React.HTMLProps<HTMLAnchorElement>) {
  const pathname = usePathname()

  return (
    <a
      className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      href={`/api/disable-draft?redirect=${pathname}`}
      {...props}
    >
      Exit
    </a>
  )
}

export default ExitDraftModeLink
