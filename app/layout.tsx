import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { draftMode } from 'next/headers'
import ExitDraftMode from '../components/exit-draft-mode'
import { ThemeProvider } from '@/components/theme-provider'
import ScrollBehavior from '@/components/scroll-behavior'

export const metadata = {
  metadataBase: new URL('https://rw-poc.vercel.app/'),
  title: {
    template: '%s | Ryan Wiemer',
    default: 'Ryan Wiemer',
  },
  description: `Client engagement director, project manager, and occasional open source developer. I help companies build and launch digital products.`,
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollBehavior />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {draftMode().isEnabled && (
            <p className="bg-yellow-200 py-4 px-[6vw] fixed w-50 bottom-0 right-0">
              Draft mode is on! <ExitDraftMode className="underline" />
            </p>
          )}
          <Menu />
          <main className="min-h-[calc(100svh-81px)] relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
