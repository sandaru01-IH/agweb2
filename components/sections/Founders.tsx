'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const founders = [
  {
    name: 'Sandaruwan Sankalpa',
    role: 'Co-Founder & CEO',
    focus: 'Data & Technology',
    bio: 'Visionary technologist and data specialist driving AlphaGRID\'s data intelligence arm. Sandaruwan brings deep expertise in GIS, spatial analysis, and data science — translating complex data into meaningful decisions for clients across industries.',
    expertise: ['Data Science', 'GIS & Spatial', 'Technology Strategy', 'Product Vision'],
    initial: 'S',
    color: '#F5C518',
  },
  {
    name: 'Samith Madushanka',
    role: 'Co-Founder & COO',
    focus: 'Operations & Growth',
    bio: 'Strategic operator and business builder with a sharp eye for growth opportunities. Samith leads AlphaGRID\'s operational excellence and drives the expansion of new ventures — from content creation to the future sectors the group will enter.',
    expertise: ['Business Strategy', 'Operations', 'Growth', 'Brand Development'],
    initial: 'S',
    color: '#ffffff',
  },
]

export default function Founders() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="founders" className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />

      <div className="container-custom section-py relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="tag-outline-light">The Founders</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg text-ink-950 max-w-2xl"
          >
            The minds{' '}
            <span style={{ color: '#F5C518' }}>behind</span>{' '}
            AlphaGRID.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink-400 max-w-lg mt-4 leading-relaxed"
            style={{ fontSize: '1.05rem' }}
          >
            Two complementary forces — one built on data, one on strategy — driving
            a holding company with the ambition to reshape multiple industries.
          </motion.p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-lg border border-ink-100 bg-white p-10 hover:shadow-xl transition-all duration-500"
            >
              {/* Avatar */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: founder.color === '#F5C518' ? '#F5C518' : '#0A0A0A',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        color: founder.color === '#F5C518' ? '#0A0A0A' : '#F5C518',
                        fontStyle: 'italic',
                      }}
                    >
                      {founder.initial}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-ink-950"
                      style={{
                        fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {founder.name}
                    </h3>
                    <p className="text-ink-400 text-sm font-medium mt-0.5">{founder.role}</p>
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: 'rgba(245,197,24,0.1)',
                    color: '#CC9400',
                    letterSpacing: '0.08em',
                  }}
                >
                  {founder.focus}
                </div>
              </div>

              {/* Bio */}
              <p className="text-ink-500 leading-relaxed mb-8 text-sm">
                {founder.bio}
              </p>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-2">
                {founder.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-sm text-xs font-medium"
                    style={{
                      backgroundColor: '#F5F5F5',
                      color: '#525252',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Yellow bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: '#F5C518' }}
              />
            </motion.div>
          ))}
        </div>

        {/* AlphaGRID philosophy statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 p-8 lg:p-10 rounded-lg bg-ink-950 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(245,197,24,0.06) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16">
            <div
              className="text-yellow-500 flex-shrink-0"
              style={{
                fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                fontSize: '5rem',
                fontWeight: 800,
                lineHeight: 1,
                fontStyle: 'italic',
                opacity: 0.8,
              }}
            >
              &ldquo;
            </div>
            <div>
              <p
                className="text-white leading-relaxed mb-4"
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                We didn&apos;t build AlphaGRID to run a company.
                We built it to build an ecosystem — one where every venture
                we create raises the standard of the industries we enter.
              </p>
              <p className="text-white/40 text-sm font-medium">— The Founders, AlphaGRID</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
