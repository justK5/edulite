import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing | EduLite',
  description: 'Skeleton landing app for EduLite'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <main className="min-h-dvh p-6">
          <div className="mx-auto max-w-3xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
