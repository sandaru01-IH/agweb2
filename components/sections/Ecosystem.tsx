'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Database, Mic } from 'lucide-react'

const companies = [
  {
    index: '01',
    id: 'alphadata',
    name: 'AlphaDATA',
    tagline: 'Intelligence Through Data',
    description:
      'End-to-end data solutions covering spatial analysis, GIS, advanced data science, visualization, and engineering pipelines that turn raw data into a competitive edge.',
    capabilities: ['Spatial & GIS Analysis', 'Data Science', 'Data Visualization', 'Data Engineering', 'Analytics & BI'],
    icon: Database,
    href: '#alphadata',
  },
  {
    index: '02',
    id: 'alphatalk',
    name: 'AlphaTALK',
    tagline: 'Stories That Move Markets',
    description:
      'Premium content creation and brand storytelling focused on Sri Lankan businesses and the moments that define culture, where strategy meets creative execution.',
    capabilities: ['Content Strategy', 'Video Production', 'Social Media', 'Brand Storytelling', 'Sri Lankan Market'],
    icon: Mic,
    href: '#alphatalk',
  },
]

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

      <div className="container-custom section-py relative z-10">

        {/* ── Section header ── */}
        <div ref={ref} className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="mb-4"
            >
              <span className="tag-outline-dark">The AlphaGRID Ecosystem</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white display-lg max-w-xl"
            >
              Built to lead every{' '}
              <span style={{ color: '#F5C518' }}>sector</span>{' '}
              we enter.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/35 max-w-xs leading-relaxed text-sm lg:text-right"
          >
            Each company is designed to be a category leader. Focused, resourced, and built for scale.
          </motion.p>
        </div>

        {/* ── Company rows ── */}
        <div className="flex flex-col">
          {companies.map((company, i) => {
            const Icon = company.icon
            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.14 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top divider */}
                <div className="h-px bg-white/[0.07]" />

                <div
                  className="group py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 cursor-pointer"
                  onClick={() => scrollTo(company.href)}
                >
                  {/* Index + icon — col 1-2 */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                    <span
                      style={{
                        fontFamily: 'var(--font-bricolage)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        color: 'rgba(245,197,24,0.45)',
                      }}
                    >
                      {company.index}
                    </span>
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(245,197,24,0.08)', color: '#F5C518' }}
                    >
                      <Icon size={19} />
                    </div>
                    {/* Active dot */}
                    <div className="flex items-center gap-1.5 lg:mt-auto">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <span className="label-sm text-yellow-500/70">Active</span>
                    </div>
                  </div>

                  {/* Name + description — col 3-8 */}
                  <div className="lg:col-span-6">
                    <h3
                      className="text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-bricolage)',
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {company.name}
                    </h3>
                    <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">
                      {company.tagline}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md">
                      {company.description}
                    </p>
                  </div>

                  {/* Tags + CTA — col 9-12 */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {company.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-xs px-2.5 py-1 rounded-sm border"
                          style={{
                            borderColor: 'rgba(245,197,24,0.14)',
                            color: 'rgba(245,197,24,0.6)',
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 group-hover:text-yellow-500 text-white/25 transition-colors duration-300 self-start">
                      <span className="text-xs font-semibold uppercase tracking-wider">Explore</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
          {/* Bottom divider */}
          <div className="h-px bg-white/[0.07]" />
        </div>

      </div>
    </section>
  )
}
