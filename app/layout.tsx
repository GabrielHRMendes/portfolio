import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Gabriel | Especialista em IA e Automações',
  description:
    'Transforme seu negócio com Inteligência Artificial e Automações sob medida. Agentes de IA, N8N, WhatsApp API, sites e muito mais.',
  keywords: [
    'IA',
    'Inteligência Artificial',
    'Automações',
    'N8N',
    'WhatsApp API',
    'Chatbots',
    'Agentes de IA',
    'Landing Pages',
  ],
  openGraph: {
    title: 'Gabriel | Especialista em IA e Automações',
    description:
      'Transforme seu negócio com Inteligência Artificial e Automações sob medida.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
