'use client'

import { motion } from 'framer-motion'
import Profile from '@/components/Profile'
import SocialLinks from '@/components/SocialLinks'
import LinkCard from '@/components/LinkCard'

/* ─── Avatar placeholder ─────────────────────────────
   Substitua pelo URL real da foto de perfil.
   Pode ser um link do Supabase Storage, por exemplo:
   https://<project>.supabase.co/storage/v1/object/public/...
─────────────────────────────────────────────────────── */
const AVATAR_URL = '/avatar.jpg' // coloque sua foto em public/avatar.jpg

/* ─── Social icons ────────────────────────────────── */
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="100%"
    height="100%"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
)

/* ─── Link card icons ─────────────────────────────── */
const BudgetIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const AgentsIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    <path d="M9 14s1 1 3 1 3-1 3-1" />
  </svg>
)

const AutomationIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const WhatsAppCardIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const InstagramCardIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const SitesIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const DesignIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
)

/* ─── Social links data ───────────────────────────── */
const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/gabrielhrmendes/',
    icon: <InstagramIcon />,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/5537998668569',
    icon: <WhatsAppIcon />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-henrique-99389b296/',
    icon: <LinkedInIcon />,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@gabrielhenriquelopesdesouzamen?si=niDs0FKN68Zq3l70',
    icon: <YouTubeIcon />,
  },
]

/* ─── Link cards data ─────────────────────────────── */
const linkCards = [
  {
    id: 'orcamento',
    href: 'https://wa.me/5537998668569?text=Ol%C3%A1%2C%20vim%20da%20bio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!',
    icon: <BudgetIcon />,
    title: 'Solicitar Orçamento',
    description: 'whatsapp · resposta rápida',
    featured: true,
    badge: '🚀 Comece aqui',
    shimmerDelay: 0,
    animationDelay: 0.08,
  },
  {
    id: 'agentes-ia',
    href: 'https://wa.me/5537998668569?text=Quero%20saber%20mais%20sobre%20Agentes%20de%20IA',
    icon: <AgentsIcon />,
    title: 'Agentes de IA',
    description: 'atendimento · vendas · suporte',
    shimmerDelay: 1.2,
    animationDelay: 0.14,
  },
  {
    id: 'automacoes',
    href: 'https://wa.me/5537998668569?text=Quero%20saber%20mais%20sobre%20Automa%C3%A7%C3%B5es',
    icon: <AutomationIcon />,
    title: 'Automações',
    description: 'n8n · integrações · fluxos',
    shimmerDelay: 2.4,
    animationDelay: 0.20,
  },
  {
    id: 'whatsapp-api',
    href: 'https://wa.me/5537998668569?text=Quero%20saber%20mais%20sobre%20WhatsApp%20Oficial',
    icon: <WhatsAppCardIcon />,
    title: 'WhatsApp Oficial',
    description: 'api oficial · chatbots',
    shimmerDelay: 3.6,
    animationDelay: 0.26,
  },
  {
    id: 'instagram-auto',
    href: 'https://www.instagram.com/gabrielhrmendes/',
    icon: <InstagramCardIcon />,
    title: 'Instagram',
    description: 'dm automática · captura de leads',
    shimmerDelay: 0.6,
    animationDelay: 0.32,
  },
  {
    id: 'sites',
    href: 'https://wa.me/5537998668569?text=Quero%20saber%20mais%20sobre%20Sites%20e%20Landing%20Pages',
    icon: <SitesIcon />,
    title: 'Sites e Landing Pages',
    description: 'sites · lps · lançamentos',
    shimmerDelay: 1.8,
    animationDelay: 0.38,
  },
  {
    id: 'design',
    href: 'https://wa.me/5537998668569?text=Quero%20saber%20mais%20sobre%20Design%20e%20V%C3%ADdeo',
    icon: <DesignIcon />,
    title: 'Design e Vídeo',
    description: 'criativos · reels · edição',
    shimmerDelay: 3.0,
    animationDelay: 0.44,
  },
]

/* ─── Page ────────────────────────────────────────── */
export default function Home() {
  return (
    <main
      className="relative z-10 flex flex-col items-center min-h-screen px-5"
      style={{ paddingTop: '72px', paddingBottom: '64px' }}
    >
      <div className="w-full" style={{ maxWidth: '420px' }}>

        {/* Profile section */}
        <Profile
          name="Gabriel Mendes"
          bio="Especialista em IA e Automações para transformar seu negócio"
          avatarSrc={AVATAR_URL}
        />

        {/* Social links */}
        <SocialLinks links={socialLinks} />

        {/* Divider */}
        <div
          className="w-full h-px my-8"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)',
          }}
        />

        {/* Link cards */}
        <div className="flex flex-col gap-2.5">
          {linkCards.map((card) => (
            <LinkCard
              key={card.id}
              {...card}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <p
            className="text-[11px] tracking-widest uppercase"
            style={{
              color: 'rgba(255,255,255,0.15)',
              fontFamily: 'ui-monospace, monospace',
              letterSpacing: '0.12em',
            }}
          >
            IA · Automações · Inovação
          </p>
        </motion.footer>

      </div>
    </main>
  )
}
