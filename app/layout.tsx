import './globals.css'
import type { Metadata } from 'next'
import NavigationBar from './components/NavigationBar/NavigationBar'

import { Lato } from 'next/font/google';
import Footer from './components/Footer/Footer';

const lato = Lato({
  weight: ["400", "700"],
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Minecraft4Politics - Najlepszy serwer polityczny w Polsce',
  description: `Symulacja polityczno-gospodarcza oparta na serwerze Minecraft której świat został podzielony na cztery państwa których ideologie są zgodne z kompasem politycznym.`,
  openGraph: {
    images: [
        'https://cdn.discordapp.com/attachments/1105284658566025377/1109814281110818816/image.png'
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
