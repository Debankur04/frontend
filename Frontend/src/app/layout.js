export const metadata = {
  title: 'Food Donate MVP',
  description: 'Simple frontend for food donation project'
}

import Nav from '@/app/components/Nav'
import '@/app/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Nav />

        <div className="max-w-5xl mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  )
}
