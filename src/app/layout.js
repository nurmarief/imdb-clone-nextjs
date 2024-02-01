import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a IMDb clone website created with nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
