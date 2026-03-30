'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const founders = [
  {
    name: 'Sandaruwan Sankalpa',
    role: 'Co-Founder & CEO',
    focus: 'Data & Technology',
    bio: 'Visionary technologist and data specialist driving AlphaGRID\'s data intelligence arm. Sandaruwan brings deep expertise in GIS, spatial analysis, and data science — translating complex data into meaningful decisions for clients across industries.',
    expertise: ['Data Science', 'GIS & Spatial', 'Technology Strategy'],
    photo: '/founders/sandaruwan.jpg',
    initial: 'S',
    accentLeft: true,
  },
  {
    name: 'Samith Madushanka',
    role: 'Co-Founder & COO',
    focus: 'Operations & Growth',
    bio: 'Strategic operator and business builder with a sharp eye for growth opportunities. Samith leads AlphaGRID\'s operational excellence and drives the expansion of ventures — building on a foundation of strong business acumen and leadership.',
    expertise: ['Business Strategy', 'Operations', 'Brand Development'],
    photo: '/founders/samith.jpg',
    initial: 'S',
    accentLeft: false,
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
            a holding company with the ambition to reshape industries.
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
              className="group relative rounded-lg overflow-hidden border border-ink-100 bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.55) 100%)',
                  }}
                />
                {/* Focus badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: '#F5C518', color: '#0A0A0A' }}
                  >
                    {founder.focus}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-7">
                <div className="mb-4">
                  <h3
                    className="text-ink-950"
                    style={{
                      fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {founder.name}
                  </h3>
                  <p className="text-ink-400 text-sm font-medium mt-1">{founder.role}</p>
                </div>

                <p className="text-ink-500 leading-relaxed text-sm mb-6">
                  {founder.bio}
                </p>

                {/* Expertise */}
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-sm text-xs font-medium"
                      style={{ backgroundColor: '#F5F5F5', color: '#525252' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Yellow bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: '#F5C518' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 p-8 lg:p-10 rounded-lg bg-ink-950 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(245,197,24,0.05) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-14">
            <div
              className="flex-shrink-0"
              style={{
                fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                fontSize: '5rem',
                fontWeight: 800,
                lineHeight: 0.8,
                fontStyle: 'italic',
                color: '#F5C518',
                opacity: 0.7,
              }}
            >
              &ldquo;
            </div>
            <div>
              <p
                className="text-white leading-relaxed mb-3"
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                We didn&apos;t build AlphaGRID to run a company.
                We built it to build an ecosystem — one where every venture
                we create raises the standard of the industries we enter.
              </p>
              <p className="text-white/35 text-sm font-medium">— Sandaruwan &amp; Samith, Co-Founders</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
