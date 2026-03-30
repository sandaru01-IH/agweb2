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
  const alphaRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef({ x: 0, y: 0 })
  const canvasMouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0
    let H = 0

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse over the canvas
    const section = canvas.parentElement
    const onMouseMove = (e: MouseEvent) => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      canvasMouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }
    const onMouseLeave = () => {
      canvasMouseRef.current = { x: -9999, y: -9999 }
    }
    section?.addEventListener('mousemove', onMouseMove)
    section?.addEventListener('mouseleave', onMouseLeave)

    const SPACING = 52
    let frame = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      frame++

      const cols = Math.ceil(W / SPACING) + 1
      const rows = Math.ceil(H / SPACING) + 1
      const mx = canvasMouseRef.current.x
      const my = canvasMouseRef.current.y
      const MOUSE_RADIUS = 140

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING
          const y = j * SPACING

          // Wave animation
          const wave = Math.sin(frame * 0.014 + i * 0.38 + j * 0.28) * 0.5 + 0.5
          let opacity = wave * 0.14 + 0.03

          // Mouse proximity boost
          const dx = x - mx
          const dy = y - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS) {
            const proximity = 1 - dist / MOUSE_RADIUS
            // Smooth easing
            const boost = proximity * proximity * 0.65
            opacity = Math.min(opacity + boost, 0.9)
          }

          // Dot size also responds to mouse
          let radius = 1.2
          if (dist < MOUSE_RADIUS) {
            const proximity = 1 - dist / MOUSE_RADIUS
            radius = 1.2 + proximity * 2.2
          }

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(245, 197, 24, ${opacity})`
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    // Smooth lerp for parallax
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    let rafParallax: number

    const animateParallax = () => {
      smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, 0.06)
      smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, 0.06)

      const alpha = alphaRef.current
      const glow = glowRef.current

      if (alpha) {
        const moveX = (smoothRef.current.x - 0.5) * -18
        const moveY = (smoothRef.current.y - 0.5) * -12
        alpha.style.transform = `translateY(-50%) translateX(calc(18% + ${moveX}px)) translateY(${moveY}px)`
      }

      if (glow) {
        // Glow follows cursor with a bit of lag
        const gx = smoothRef.current.x * 100
        const gy = smoothRef.current.y * 100
        glow.style.background = `radial-gradient(ellipse 55% 45% at ${gx}% ${gy}%, rgba(245,197,24,0.08) 0%, transparent 70%)`
      }

      rafParallax = requestAnimationFrame(animateParallax)
    }
    animateParallax()

    return () => {
      cancelAnimationFrame(animId)
      cancelAnimationFrame(rafParallax)
      window.removeEventListener('resize', resize)
      section?.removeEventListener('mousemove', onMouseMove)
      section?.removeEventListener('mouseleave', onMouseLeave)
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
      {/* Animated dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Cursor-following radial glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-none"
        style={{
          background: 'radial-gradient(ellipse 55% 45% at 55% 50%, rgba(245,197,24,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Large decorative α — parallax layer */}
      <div
        ref={alphaRef}
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
          willChange: 'transform',
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
            <span className="tag-outline-dark">Est. 2025 &nbsp;·&nbsp; Colombo, Sri Lanka</span>
          </motion.div>

          {/* Headline */}
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
