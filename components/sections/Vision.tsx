'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Coffee, Shirt, Utensils, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react'

const upcoming = [
  {
    icon: <Coffee size={20} />,
    name: 'AlphaCafé',
    sector: 'Café & Coffee',
    description: 'A curated café experience that embodies the AlphaGRID ethos — premium, intentional, and community-driven.',
    status: 'Concept Stage',
  },
  {
    icon: <Utensils size={20} />,
    name: 'Alpha Kitchen',
    sector: 'F&B & Restaurants',
    description: 'Restaurant concepts that merge quality food with exceptional brand experiences.',
    status: 'Concept Stage',
  },
  {
    icon: <Shirt size={20} />,
    name: 'AlphaWear',
    sector: 'Fashion & Lifestyle',
    description: 'A premium fashion and lifestyle brand rooted in minimalist design and cultural identity.',
    status: 'In Planning',
  },
  {
    icon: <ShoppingBag size={20} />,
    name: 'AlphaRetail',
    sector: 'Retail & Commerce',
    description: 'Curated retail experiences and e-commerce ventures in Sri Lanka\'s growing consumer market.',
    status: 'In Planning',
  },
]

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="vision" className="relative bg-ink-950 overflow-hidden">
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)' }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,197,24,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom section-py relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="tag-outline-dark">The Road Ahead</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white display-lg max-w-3xl"
          >
            The{' '}
            <span style={{ color: '#F5C518' }}>AlphaGRID universe</span>
            {' '}is just getting started.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 max-w-xl mt-4 leading-relaxed"
            style={{ fontSize: '1.05rem' }}
          >
            Beyond data and content, AlphaGRID is building ventures in every sector
            worth disrupting. These are the next chapters.
          </motion.p>
        </div>

        {/* Upcoming ventures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {upcoming.map((venture, i) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-yellow-500/20 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              {/* Coming soon badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-white/20 uppercase tracking-wider">
                  {venture.status}
                </span>
              </div>

              <div
                className="w-10 h-10 rounded-md flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(245,197,24,0.08)', color: 'rgba(245,197,24,0.5)' }}
              >
                {venture.icon}
              </div>

              <p
                className="text-white/25 text-xs font-medium uppercase tracking-widest mb-1"
              >
                {venture.sector}
              </p>

              <h4
                className="text-white/70 mb-3 group-hover:text-white transition-colors"
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {venture.name}
              </h4>

              <p className="text-white/30 text-sm leading-relaxed">
                {venture.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bold manifesto statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="border-t border-white/[0.06] pt-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} style={{ color: '#F5C518' }} />
                <span className="label-sm text-white/30">Our Philosophy</span>
              </div>
              <p
                className="text-white"
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: 'clamp(1.2rem, 2.8vw, 1.8rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                }}
              >
                Every sector we enter, we enter to{' '}
                <span style={{ color: '#F5C518' }}>set the standard.</span>{' '}
                Not to follow it.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group flex-shrink-0"
            >
              <span className="text-sm font-medium uppercase tracking-wider">Partner With Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
