'use client'

import { useTheme } from 'next-themes'

interface ModeToggleProps {
  blend?: boolean
}

export function ModeToggle({ blend }: ModeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="hover:opacity-70 transition-opacity duration-300 relative top-[3px] h-[1.2rem] w-[1.2rem] mix-blend-difference dark:-rotate-180"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      <svg
        viewBox="0 0 440.926 440.926"
        className={`${blend ? 'fill-white' : 'fill-foreground'}`}
      >
        <g>
          <path
            d="M321.004,100.539c-3.836,0-7.613,0.22-11.361,0.583H119.349C53.435,101.123,0,154.558,0,220.463
  c0,65.904,53.435,119.34,119.349,119.34h190.293c3.748,0.354,7.525,0.584,11.361,0.584c66.125,0,119.922-53.789,119.922-119.924
  S387.129,100.539,321.004,100.539z M321.004,298.264c-42.898,0-77.801-34.895-77.801-77.801c0-42.907,34.902-77.801,77.801-77.801
  c42.896,0,77.801,34.894,77.801,77.801C398.805,263.369,363.891,298.264,321.004,298.264z"
          />
        </g>
      </svg>
    </button>
  )
}
