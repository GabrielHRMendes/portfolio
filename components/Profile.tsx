'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfileProps {
  name: string
  bio: string
  avatarSrc: string
}

export default function Profile({ name, bio, avatarSrc }: ProfileProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
    >
      {/* Avatar */}
      <div className="relative mb-4">
        {/* Animated glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #1F4FFF, transparent, #1F4FFF)',
            padding: '2px',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        {/* Outer ring */}
        <div
          className="relative rounded-full p-[2px] avatar-ring-animated"
          style={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #1F4FFF 0%, #102B5C 50%, #1F4FFF 100%)',
          }}
        >
          {/* Inner gap */}
          <div
            className="w-full h-full rounded-full p-[2px]"
            style={{ background: '#050505' }}
          >
            {/*
             * Clip circle — overflow:hidden recorta a imagem
             * sem nenhum transform aplicado, evitando conflitos
             * de clip-before-scale que distorciam o enquadramento.
             *
             * object-cover escala a foto pela largura do quadrado,
             * expondo a região vertical controlada por objectPosition.
             *
             * center 38% ⟶ ancora o slice entre os olhos e a mão/relógio,
             * resultando em: testa visível → rosto → queixo → mão → relógio.
             */}
            <div
              className="relative w-full h-full rounded-full"
              style={{ overflow: 'hidden' }}
            >
              <Image
                src={avatarSrc}
                alt={name}
                fill
                sizes="96px"
                className="object-cover"
                style={{ objectPosition: 'center 38%' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Name */}
      <h1
        className="text-xl font-semibold tracking-tight mb-2"
        style={{ color: '#FAFAFA', letterSpacing: '-0.03em' }}
      >
        {name}
      </h1>

      {/* Bio */}
      <p
        className="text-sm leading-relaxed max-w-[260px]"
        style={{ color: '#6B7280', letterSpacing: '-0.005em' }}
      >
        {bio}
      </p>
    </motion.div>
  )
}
