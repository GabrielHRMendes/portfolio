'use client'

import { motion } from 'framer-motion'

interface SocialLink {
  id: string
  label: string
  href: string
  icon: React.ReactNode
}

interface SocialLinksProps {
  links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <motion.div
      className="flex items-center justify-center gap-2 mt-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
    >
      {links.map((link) => (
        <a
          key={link.id}
          id={`social-${link.id}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="group relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: '#0D0D0F',
            border: '1px solid rgba(255,255,255,0.07)',
            color: '#6B7280',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
              'rgba(31,79,255,0.5)'
            ;(e.currentTarget as HTMLAnchorElement).style.color = '#FAFAFA'
            ;(e.currentTarget as HTMLAnchorElement).style.background = '#0D0D0F'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
              'rgba(255,255,255,0.07)'
            ;(e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'
            ;(e.currentTarget as HTMLAnchorElement).style.background = '#0D0D0F'
          }}
        >
          <span className="w-4 h-4 transition-colors duration-200">{link.icon}</span>
        </a>
      ))}
    </motion.div>
  )
}
