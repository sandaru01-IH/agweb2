'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = 0
    let height = 0

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      frame++
      const cols = Math.ceil(width / 50) + 1
      const rows = Math.ceil(height / 50) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * 50
          const y = j * 50
          const wave = Math.sin(frame * 0.015 + i * 0.4 + j * 0.3) * 0.5 + 0.5
          const opacity = wave * 0.18 + 0.04
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(245, 197, 24, ${opacity})`
          ctx.fill()
        }
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-ink-950 flex flex-col justify-center overflow-hidden"
    >
      {/* Animated dot grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 55% 50%, rgba(245,197,24,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Large decorative α */}
      <div
        className="absolute right-0 top-1/2 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-bricolage), serif',
          fontSize: 'clamp(260px, 42vw, 600px)',
          fontWeight: 800,
          fontStyle: 'italic',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,197,24,0.07)',
          lineHeight: 1,
          transform: 'translateY(-50%) translateX(18%)',
          letterSpacing: '-0.06em',
          userSelect: 'none',
        }}
      >
        α
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-28">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mb-8"
          >
            <span className="tag-outline-dark">Est. 2024 &nbsp;·&nbsp; Colombo, Sri Lanka</span>
          </motion.div>

          {/* Main Headline */}
          <div className="mb-8">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.25}
              variants={fadeUp}
              className="text-white"
              style={{
                fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                fontSize: 'clamp(3.6rem, 9.5vw, 9.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
              }}
            >
              One Group.
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.38}
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                fontSize: 'clamp(3.6rem, 9.5vw, 9.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#F5C518',
              }}
            >
              Infinite
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={fadeUp}
              className="text-white"
              style={{
                fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                fontSize: 'clamp(3.6rem, 9.5vw, 9.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
              }}
            >
              Ambition.
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-yellow-500 mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.65}
            variants={fadeUp}
            className="text-white/50 mb-10 max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}
          >
            AlphaGRID is a multi-brand holding company building category-defining
            ventures — from data intelligence to creative content and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.78}
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            <button onClick={() => scrollTo('ecosystem')} className="btn-primary">
              Explore Companies
              <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-secondary-dark">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollTo('ecosystem')}
      >
        <span className="label-sm text-white/25 group-hover:text-white/50 transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/25 group-hover:text-yellow-500 transition-colors" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  )
}
