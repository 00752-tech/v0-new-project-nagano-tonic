import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Site',
  description: 'Welcome to my site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
