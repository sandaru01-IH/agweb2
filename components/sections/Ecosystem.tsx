'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Database, Mic, Plus } from 'lucide-react'

const companies = [
  {
    id: 'alphadata',
    name: 'AlphaDATA',
    status: 'Active',
    icon: <Database size={22} />,
    tagline: 'Intelligence Through Data',
    description:
      'End-to-end data solutions — from spatial analysis and GIS to advanced data science, visualization, and engineering pipelines.',
    capabilities: ['Spatial & GIS Analysis', 'Data Science', 'Data Visualization', 'Data Engineering', 'Analytics & BI'],
    color: '#F5C518',
    href: '#alphadata',
  },
  {
    id: 'alphatalk',
    name: 'AlphaTALK',
    status: 'Active',
    icon: <Mic size={22} />,
    tagline: 'Stories That Move Markets',
    description:
      'Premium content creation and brand storytelling focused on Sri Lankan businesses and the moments that define culture.',
    capabilities: ['Content Strategy', 'Video Production', 'Social Media', 'Brand Storytelling', 'Sri Lankan Market'],
    color: '#ffffff',
    href: '#alphatalk',
  },
  {
    id: 'future',
    name: 'More Coming',
    status: 'Upcoming',
    icon: <Plus size={22} />,
    tagline: 'The Ecosystem Expands',
    description:
      'We are building into new sectors — cafés, restaurants, fashion, and more. The AlphaGRID universe is just getting started.',
    capabilities: ['Café & F&B', 'Fashion & Lifestyle', 'Retail & Experience', 'Hospitality', 'And More...'],
    color: '#525252',
    href: '#vision',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Ecosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="ecosystem" className="relative bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(245,197,24,0.04) 0%, transparent 70%)',
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
            <span className="tag-outline-dark">The AlphaGRID Ecosystem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white display-lg max-w-2xl"
          >
            Built to lead{' '}
            <span style={{ color: '#F5C518' }}>every sector</span>{' '}
            we enter.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 max-w-xl mt-4 leading-relaxed"
            style={{ fontSize: '1.05rem' }}
          >
            Each company under AlphaGRID is designed to be a category leader —
            focused, resourced, and built for scale.
          </motion.p>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((company, i) => (
            <motion.div
              key={company.id}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className={`group relative rounded-lg border p-8 card-hover cursor-pointer flex flex-col ${
                company.id === 'future'
                  ? 'border-white/[0.08] bg-white/[0.02]'
                  : 'border-white/[0.1] bg-white/[0.04] hover:border-yellow-500/40'
              }`}
              onClick={() => scrollTo(company.href)}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor:
                      company.id === 'future'
                        ? 'rgba(255,255,255,0.06)'
                        : 'rgba(245,197,24,0.12)',
                    color: company.id === 'future' ? '#525252' : '#F5C518',
                  }}
                >
                  {company.icon}
                </div>
                <span
                  className={`label-sm ${
                    company.status === 'Active'
                      ? 'text-yellow-500'
                      : 'text-white/25'
                  }`}
                >
                  {company.status === 'Active' ? '● Active' : '○ Upcoming'}
                </span>
              </div>

              {/* Name & Tagline */}
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {company.name}
              </h3>
              <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-4">
                {company.tagline}
              </p>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
                {company.description}
              </p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mb-6">
                {company.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs px-2.5 py-1 rounded-sm border"
                    style={{
                      borderColor:
                        company.id === 'future'
                          ? 'rgba(255,255,255,0.06)'
                          : 'rgba(245,197,24,0.15)',
                      color:
                        company.id === 'future'
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(245,197,24,0.7)',
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {company.id !== 'future' && (
                <div className="flex items-center gap-2 text-white/30 text-sm group-hover:text-yellow-500 transition-colors">
                  <span className="text-xs font-medium uppercase tracking-wider">Learn more</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '2', label: 'Active Companies' },
            { value: '2', label: 'Visionary Founders' },
            { value: '∞', label: 'Sectors Ahead' },
            { value: '2024', label: 'Founded' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-white mb-1"
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#F5C518',
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/35 text-xs font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
