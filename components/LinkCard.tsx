'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface LinkCardProps {
  id: string
  href: string
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
  featured?: boolean
  shimmerDelay?: number
  animationDelay?: number
  external?: boolean
}

export default function LinkCard({
  id,
  href,
  icon,
  title,
  description,
  badge,
  featured = false,
  shimmerDelay = 0,
  animationDelay = 0,
  external = true,
}: LinkCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <motion.a
      ref={ref}
      id={`card-${id}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`
        card-shimmer
        block w-full relative
        px-5 py-4 rounded-2xl
        text-decoration-none outline-none
        transition-all duration-200 ease-out
        group
        ${featured ? 'card-featured' : ''}
      `}
      style={
        !featured
          ? {
              background: '#0D0D0F',
              border: '1px solid rgba(255,255,255,0.07)',
            }
          : {}
      }
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.38,
        ease: [0.2, 0.8, 0.2, 1],
        delay: animationDelay,
      }}
      whileHover={{ scale: 1.008 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={(e) => {
        if (!featured) {
          ;(e.currentTarget as HTMLAnchorElement).style.background = '#161618'
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
            'rgba(255,255,255,0.12)'
        }
      }}
      onMouseLeave={(e) => {
        if (!featured) {
          ;(e.currentTarget as HTMLAnchorElement).style.background = '#0D0D0F'
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
            'rgba(255,255,255,0.07)'
        }
      }}
    >
      {/* Shimmer overlay */}
      <span
        className="pointer-events-none"
        style={{ '--shimmer-delay': `${shimmerDelay}s` } as React.CSSProperties}
      />

      {/* Card layout */}
      <div className="flex items-center justify-between gap-3">
        {/* Left: icon + text */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Icon box */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
            style={{
              background: 'rgba(255,255,255,0.04)',
              color: '#6B7280',
            }}
          >
            <span className="w-5 h-5 group-hover:text-white transition-colors duration-200 block">
              {icon}
            </span>
          </div>

          {/* Text */}
          <div className="min-w-0">
            {badge && (
              <span
                className="inline-block text-[10px] font-semibold tracking-widest uppercase mb-1 px-2 py-[2px] rounded"
                style={{
                  color: '#1F4FFF',
                  background: 'rgba(31,79,255,0.1)',
                  border: '1px solid rgba(31,79,255,0.25)',
                  letterSpacing: '0.09em',
                  fontFamily: 'ui-monospace, monospace',
                }}
              >
                {badge}
              </span>
            )}
            <div
              className="text-sm font-medium truncate transition-colors duration-200 group-hover:text-white"
              style={{
                color: '#E7E7E9',
                letterSpacing: '-0.015em',
                lineHeight: badge ? '1.3' : '1.4',
              }}
            >
              {title}
            </div>
            <div
              className="text-[11px] mt-[3px] truncate"
              style={{
                color: '#4B5563',
                fontFamily: 'ui-monospace, monospace',
                letterSpacing: '0.04em',
              }}
            >
              {description}
            </div>
          </div>
        </div>

        {/* Arrow — appears on hover */}
        <div
          className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: '#6B7280' }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" x2="17" y1="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}
