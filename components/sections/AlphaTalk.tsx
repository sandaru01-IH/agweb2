'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Video, Megaphone, TrendingUp, BookOpen, Camera, Users } from 'lucide-react'

const services = [
  {
    icon: <Video size={20} />,
    title: 'Video Production',
    description: 'High-impact video content — from corporate profiles to short-form social content that stops the scroll.',
  },
  {
    icon: <Megaphone size={20} />,
    title: 'Content Strategy',
    description: 'Data-driven content plans aligned with your brand goals, audience behaviour, and market positioning.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Social Media',
    description: 'Platform-native content and community management that builds authentic engagement for Sri Lankan brands.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Brand Storytelling',
    description: 'Compelling narratives that communicate your brand\'s essence, values, and vision to the right audience.',
  },
  {
    icon: <Camera size={20} />,
    title: 'Photography & Visual',
    description: 'Professional photography and visual identity work that elevates how your brand presents itself.',
  },
  {
    icon: <Users size={20} />,
    title: 'Audience Development',
    description: 'Growth strategies and community-building that turn passive followers into loyal brand advocates.',
  },
]

export default function AlphaTalk() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="alphatalk" className="relative bg-ink-950 overflow-hidden">
      {/* Subtle yellow gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 30% 30%, rgba(245,197,24,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom section-py relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Capabilities */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-6 rounded-lg border border-white/[0.07] bg-white/[0.03] hover:border-yellow-500/25 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(245,197,24,0.1)', color: '#F5C518' }}
                  >
                    {service.icon}
                  </div>
                  <h4
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Sri Lanka focus callout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 p-5 rounded-lg"
              style={{ border: '1px solid rgba(245,197,24,0.15)', backgroundColor: 'rgba(245,197,24,0.04)' }}
            >
              <div className="flex items-start gap-3">
                <span style={{ color: '#F5C518', fontSize: '1.2rem' }}>🇱🇰</span>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="text-white font-semibold">Sri Lanka-first approach.</span>
                  {' '}AlphaTALK is deeply rooted in understanding Sri Lankan business culture,
                  consumer behaviour, and the stories that resonate locally.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Brand + Description */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="tag-outline-dark">Portfolio Company</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F5C518' }} />
                <span className="label-sm" style={{ color: '#F5C518', letterSpacing: '0.12em' }}>
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
                  color: '#ffffff',
                }}
              >
                Alpha<span style={{ color: '#F5C518' }}>TALK</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 leading-relaxed mb-6"
              style={{ fontSize: '1.05rem', maxWidth: '400px' }}
            >
              AlphaTALK is where stories meet strategy. We create content that moves
              people, builds brands, and captures the curious moments that define
              Sri Lankan business and culture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="text-white/35 leading-relaxed mb-10 text-sm"
              style={{ maxWidth: '380px' }}
            >
              In a market saturated with noise, we help brands find their authentic
              voice — building loyal audiences through content that educates,
              entertains, and inspires.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: '#F5C518' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
