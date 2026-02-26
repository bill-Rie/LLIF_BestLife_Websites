import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LLIF — Live Learn Innovate Foundation',
    template: '%s | LLIF',
  },
  description:
    'LLIF is a 501(c)(3) nonprofit building data infrastructure that gives individuals agency over their data while enabling better decisions at every scale.',
  openGraph: {
    siteName: 'Live Learn Innovate Foundation',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-body text-gray-800 leading-relaxed bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
