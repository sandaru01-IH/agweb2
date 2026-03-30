'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, BarChart3, Database, Brain, Layers, LineChart } from 'lucide-react'

const capabilities = [
  {
    icon: <MapPin size={20} />,
    title: 'Spatial & GIS Analysis',
    description: 'Geographic information systems, spatial data processing, and location intelligence for actionable insights.',
  },
  {
    icon: <Brain size={20} />,
    title: 'Data Science',
    description: 'Machine learning models, statistical analysis, and predictive systems that turn raw data into competitive advantage.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Data Visualization',
    description: 'Interactive dashboards and compelling visual narratives that make complex data instantly understandable.',
  },
  {
    icon: <Database size={20} />,
    title: 'Data Engineering',
    description: 'Robust pipelines, data warehousing, and ETL processes built for reliability and scale.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Analytics & BI',
    description: 'Business intelligence platforms and reporting systems that empower informed decision-making at every level.',
  },
  {
    icon: <LineChart size={20} />,
    title: 'Data Processing',
    description: 'High-volume data processing, cleansing, transformation, and enrichment pipelines tailored to your needs.',
  },
]

export default function AlphaData() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="alphadata" className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />

      <div className="container-custom section-py relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Brand + Description */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="tag-outline-light">Portfolio Company</span>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: '#F5C518' }}
                />
                <span
                  className="label-sm"
                  style={{ color: '#F5C518', letterSpacing: '0.12em' }}
                >
                  Active Since 2024
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                  color: '#0A0A0A',
                }}
              >
                Alpha<span style={{ color: '#F5C518' }}>DATA</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-ink-600 leading-relaxed mb-8"
              style={{ fontSize: '1.05rem', maxWidth: '420px' }}
            >
              AlphaDATA specializes in transforming complex datasets into strategic assets.
              We combine deep expertise in spatial data, GIS, and advanced analytics
              to deliver solutions that create measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="text-ink-400 leading-relaxed mb-10 text-sm"
              style={{ maxWidth: '400px' }}
            >
              From Sri Lanka to global markets, our data solutions power smarter
              decisions across industries including urban planning, agriculture,
              logistics, and enterprise analytics.
            </motion.p>

            {/* Bottom accent bar */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: '#F5C518' }}
            />
          </div>

          {/* Right — Capabilities Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-6 rounded-lg border border-ink-100 bg-white hover:border-yellow-500/30 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(245,197,24,0.1)', color: '#E5A800' }}
                  >
                    {cap.icon}
                  </div>
                  <h4
                    className="text-ink-900 mb-2"
                    style={{
                      fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cap.title}
                  </h4>
                  <p className="text-ink-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.15)' }}
            >
              <p className="text-ink-600 text-sm leading-relaxed">
                <span className="font-semibold text-ink-800">Specialized in Sri Lanka&apos;s growing data economy</span>
                {' '}— providing enterprise-grade spatial and data solutions to government, NGOs, and private sector clients.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
