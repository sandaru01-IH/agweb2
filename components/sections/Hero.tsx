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

/* ─── Silent background SVG — line art, no labels ─── */
function BackgroundArtwork() {
  return (
    <svg
      viewBox="0 0 1160 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      {/* ══ LEFT — data workspace ══ */}
      <line x1="32" y1="348" x2="440" y2="348" stroke="white" strokeWidth="1.5" />
      <line x1="72" y1="348" x2="72" y2="395" stroke="white" strokeWidth="1" />
      <line x1="400" y1="348" x2="400" y2="395" stroke="white" strokeWidth="1" />

      {/* Monitor */}
      <rect x="148" y="228" width="158" height="116" rx="4" stroke="white" strokeWidth="1.5" />
      <line x1="227" y1="344" x2="227" y2="348" stroke="white" strokeWidth="2.5" />
      <line x1="208" y1="348" x2="246" y2="348" stroke="white" strokeWidth="2" />

      {/* Bar chart — yellow */}
      {[
        { x: 166, h: 34, y: 296 }, { x: 184, h: 52, y: 278 },
        { x: 202, h: 22, y: 308 }, { x: 220, h: 62, y: 268 },
        { x: 238, h: 44, y: 286 }, { x: 256, h: 30, y: 300 },
        { x: 274, h: 48, y: 282 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width="13" height={b.h} rx="1"
          stroke="#F5C518" strokeWidth="1.1" fill="rgba(245,197,24,0.07)" />
      ))}
      <line x1="160" y1="332" x2="296" y2="332" stroke="white" strokeWidth="0.8" />
      <rect x="158" y="344" width="138" height="7" rx="2" stroke="white" strokeWidth="1" />

      {/* Person left */}
      <line x1="168" y1="198" x2="168" y2="268" stroke="white" strokeWidth="1.2" />
      <line x1="288" y1="198" x2="288" y2="268" stroke="white" strokeWidth="1.2" />
      <path d="M168 198 Q228 180 288 198" stroke="white" strokeWidth="1.2" />
      <line x1="158" y1="268" x2="298" y2="268" stroke="white" strokeWidth="1.2" />
      <circle cx="228" cy="160" r="26" stroke="white" strokeWidth="1.6" />
      <path d="M210 186 Q228 196 246 186 L262 214 Q270 230 267 254 L267 268 L189 268 L189 254 Q186 230 194 214 Z"
        stroke="white" strokeWidth="1.4" />
      <path d="M189 230 Q174 254 182 290 Q188 305 210 308" stroke="white" strokeWidth="1.3" />
      <path d="M267 230 Q282 252 272 286 Q266 302 248 308" stroke="white" strokeWidth="1.3" />

      {/* GIS map floating */}
      <rect x="38" y="72" width="88" height="64" rx="3" stroke="#F5C518" strokeWidth="1" />
      <line x1="84" y1="72" x2="84" y2="136" stroke="#F5C518" strokeWidth="0.7" />
      <line x1="100" y1="72" x2="100" y2="136" stroke="#F5C518" strokeWidth="0.7" />
      <line x1="116" y1="72" x2="116" y2="136" stroke="#F5C518" strokeWidth="0.7" />
      <line x1="38" y1="95" x2="126" y2="95" stroke="#F5C518" strokeWidth="0.7" />
      <line x1="38" y1="115" x2="126" y2="115" stroke="#F5C518" strokeWidth="0.7" />
      <circle cx="88" cy="102" r="6" stroke="#F5C518" strokeWidth="1.4" />
      <line x1="88" y1="108" x2="88" y2="118" stroke="#F5C518" strokeWidth="1.4" />

      {/* Data network nodes */}
      <circle cx="380" cy="88" r="5.5" stroke="#F5C518" strokeWidth="1.1" />
      <circle cx="428" cy="62" r="3.5" stroke="#F5C518" strokeWidth="1.1" />
      <circle cx="448" cy="118" r="4" stroke="#F5C518" strokeWidth="1.1" />
      <line x1="385" y1="88" x2="424" y2="65" stroke="#F5C518" strokeWidth="0.8" />
      <line x1="385" y1="92" x2="444" y2="114" stroke="#F5C518" strokeWidth="0.8" />
      <line x1="431" y1="65" x2="446" y2="114" stroke="#F5C518" strokeWidth="0.8" />

      {/* ══ CENTER — AlphaGRID connection ══ */}
      <path d="M448 310 Q510 280 548 255 Q568 242 580 236"
        stroke="#F5C518" strokeWidth="1" strokeDasharray="5 4" />
      <path d="M712 310 Q650 280 612 255 Q592 242 580 236"
        stroke="#F5C518" strokeWidth="1" strokeDasharray="5 4" />
      <circle cx="580" cy="220" r="46" stroke="#F5C518" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="580" cy="220" r="32" stroke="white" strokeWidth="1" />
      <text x="580" y="240" textAnchor="middle"
        fill="none" stroke="#F5C518" strokeWidth="1.2"
        fontSize="48" fontStyle="italic"
        style={{ fontFamily: 'serif' }}>α</text>

      {/* ══ RIGHT — content workspace ══ */}
      <line x1="720" y1="348" x2="1128" y2="348" stroke="white" strokeWidth="1.5" />
      <line x1="760" y1="348" x2="760" y2="395" stroke="white" strokeWidth="1" />
      <line x1="1088" y1="348" x2="1088" y2="395" stroke="white" strokeWidth="1" />

      {/* Laptop */}
      <rect x="854" y="228" width="158" height="116" rx="4" stroke="white" strokeWidth="1.5" />
      <line x1="933" y1="344" x2="933" y2="348" stroke="white" strokeWidth="2.5" />
      <line x1="914" y1="348" x2="952" y2="348" stroke="white" strokeWidth="2" />
      {/* Waveform — yellow */}
      <path d="M870 288 Q878 268 886 288 Q894 308 902 288 Q910 268 918 288 Q926 308 934 288 Q942 268 950 288 Q958 308 966 288 Q974 268 982 288 Q990 308 998 288"
        stroke="#F5C518" strokeWidth="1.3" fill="none" />
      <line x1="870" y1="316" x2="965" y2="316" stroke="white" strokeWidth="0.9" />
      <line x1="870" y1="328" x2="990" y2="328" stroke="white" strokeWidth="0.9" />
      <line x1="870" y1="338" x2="942" y2="338" stroke="white" strokeWidth="0.9" />
      <rect x="864" y="344" width="138" height="7" rx="2" stroke="white" strokeWidth="1" />

      {/* Person right */}
      <line x1="872" y1="198" x2="872" y2="268" stroke="white" strokeWidth="1.2" />
      <line x1="992" y1="198" x2="992" y2="268" stroke="white" strokeWidth="1.2" />
      <path d="M872 198 Q932 180 992 198" stroke="white" strokeWidth="1.2" />
      <line x1="862" y1="268" x2="1002" y2="268" stroke="white" strokeWidth="1.2" />
      <circle cx="932" cy="160" r="26" stroke="white" strokeWidth="1.6" />
      <path d="M914 186 Q932 196 950 186 L966 214 Q974 230 971 254 L971 268 L893 268 L893 254 Q890 230 898 214 Z"
        stroke="white" strokeWidth="1.4" />
      <path d="M893 230 Q878 254 886 290 Q892 305 914 308" stroke="white" strokeWidth="1.3" />
      <path d="M971 230 Q986 252 976 286 Q970 302 952 308" stroke="white" strokeWidth="1.3" />

      {/* Camera floating */}
      <rect x="1048" y="78" width="78" height="58" rx="7" stroke="#F5C518" strokeWidth="1.2" />
      <circle cx="1087" cy="107" r="16" stroke="#F5C518" strokeWidth="1.2" />
      <circle cx="1087" cy="107" r="8" stroke="#F5C518" strokeWidth="1" />
      <rect x="1064" y="72" width="22" height="9" rx="2" stroke="#F5C518" strokeWidth="1" />

      {/* Microphone floating */}
      <rect x="748" y="84" width="22" height="38" rx="11" stroke="#F5C518" strokeWidth="1.3" />
      <path d="M738 112 Q738 134 759 134 Q780 134 780 112"
        stroke="#F5C518" strokeWidth="1.2" />
      <line x1="759" y1="134" x2="759" y2="146" stroke="#F5C518" strokeWidth="1.2" />
      <line x1="748" y1="146" x2="770" y2="146" stroke="#F5C518" strokeWidth="1.2" />
      {/* Sound waves */}
      <path d="M726 100 Q718 107 726 114" stroke="#F5C518" strokeWidth="0.9" />
      <path d="M716 96 Q704 107 716 118" stroke="#F5C518" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M792 100 Q800 107 792 114" stroke="#F5C518" strokeWidth="0.9" />
      <path d="M802 96 Q814 107 802 118" stroke="#F5C518" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Speech bubble */}
      <path d="M786 126 Q838 110 886 121 Q928 132 924 156 Q920 180 884 186 Q848 192 816 180 Q786 170 782 152 Q778 136 786 126 Z"
        stroke="white" strokeWidth="1.2" />
      <path d="M810 186 L800 200" stroke="white" strokeWidth="1.2" />
      <line x1="800" y1="148" x2="870" y2="148" stroke="white" strokeWidth="0.8" />
      <line x1="800" y1="161" x2="888" y2="161" stroke="white" strokeWidth="0.8" />
      <line x1="800" y1="171" x2="854" y2="171" stroke="white" strokeWidth="0.8" />
    </svg>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const alphaRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const torchLayerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothRef = useRef({ x: 0.5, y: 0.5 })
  const canvasMouseRef = useRef({ x: -9999, y: -9999 })
  const torchPosRef = useRef({ x: -9999, y: -9999 })
  const heroHRef = useRef(720)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0, H = 0

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      heroHRef.current = H
    }
    resize()
    window.addEventListener('resize', resize)

    const section = canvas.parentElement
    const onMouseMove = (e: MouseEvent) => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      canvasMouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      mouseRef.current = { x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height }
    }
    const onMouseLeave = () => { canvasMouseRef.current = { x: -9999, y: -9999 } }
    section?.addEventListener('mousemove', onMouseMove)
    section?.addEventListener('mouseleave', onMouseLeave)

    // ── Dot grid canvas ──
    const SPACING = 52
    let frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      frame++
      const cols = Math.ceil(W / SPACING) + 1
      const rows = Math.ceil(H / SPACING) + 1
      const mx = canvasMouseRef.current.x
      const my = canvasMouseRef.current.y
      const MOUSE_RADIUS = 160

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING, y = j * SPACING
          const wave = Math.sin(frame * 0.014 + i * 0.38 + j * 0.28) * 0.5 + 0.5
          let opacity = wave * 0.10 + 0.02
          const dx = x - mx, dy = y - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          let radius = 1.1
          if (dist < MOUSE_RADIUS) {
            const p = 1 - dist / MOUSE_RADIUS
            opacity = Math.min(opacity + p * p * 0.80, 0.95)
            radius = 1.2 + p * 2.6
          }
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(245,197,24,${opacity})`
          ctx.fill()
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    // ── Parallax + torch RAF ──
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    let rafP: number
    const animate = () => {
      smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, 0.06)
      smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, 0.06)

      // Alpha parallax
      if (alphaRef.current) {
        const px = (smoothRef.current.x - 0.5) * -18
        const py = (smoothRef.current.y - 0.5) * -12
        alphaRef.current.style.transform = `translateY(-50%) translateX(calc(18% + ${px}px)) translateY(${py}px)`
      }

      // Ambient glow
      if (glowRef.current) {
        const gx = smoothRef.current.x * 100
        const gy = smoothRef.current.y * 100
        glowRef.current.style.background = `radial-gradient(ellipse 55% 45% at ${gx}% ${gy}%, rgba(245,197,24,0.07) 0%, transparent 70%)`
      }

      // Torch reveal
      const rawX = canvasMouseRef.current.x
      const rawY = canvasMouseRef.current.y
      if (torchLayerRef.current) {
        if (rawX === -9999) {
          torchPosRef.current = { x: -9999, y: -9999 }
          torchLayerRef.current.style.opacity = '0'
        } else {
          // Lerp torch position — responsive but smooth
          if (torchPosRef.current.x === -9999) {
            torchPosRef.current = { x: rawX, y: rawY }
          } else {
            torchPosRef.current.x = lerp(torchPosRef.current.x, rawX, 0.20)
            torchPosRef.current.y = lerp(torchPosRef.current.y, rawY, 0.20)
          }

          // Container starts at 25% hero height — adjust coords to container space
          const heroH = heroHRef.current
          const containerTop = heroH * 0.25
          const cx = torchPosRef.current.x
          const cy = torchPosRef.current.y - containerTop

          // Soft torch beam: fully opaque core → soft falloff
          const mask = `radial-gradient(circle 230px at ${cx}px ${cy}px, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.4) 60%, transparent 100%)`
          const s = torchLayerRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }
          s.maskImage = mask
          s.webkitMaskImage = mask
          torchLayerRef.current.style.opacity = '1'
        }
      }

      rafP = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      cancelAnimationFrame(rafP)
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
    <section id="hero" className="relative min-h-screen bg-ink-950 flex flex-col justify-center overflow-hidden">

      {/* ── Layer 1: Animated dot-grid canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* ── Layer 2: Ambient artwork — barely visible ghost hint ── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '75%',
          opacity: 0.04,
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 55%, transparent 100%)',
        }}
      >
        <BackgroundArtwork />
      </div>

      {/* ── Layer 2b: Torch-revealed artwork — lit up by cursor ── */}
      <div
        ref={torchLayerRef}
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '75%',
          opacity: 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <BackgroundArtwork />
      </div>

      {/* ── Layer 3: Cursor-following ambient glow ── */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 55% 50%, rgba(245,197,24,0.06) 0%, transparent 70%)' }}
      />

      {/* ── Layer 4: Large decorative α — parallax ── */}
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

      {/* ── Content ── */}
      <div className="container-custom relative z-10 pt-32 pb-28">
        <div className="max-w-4xl">
          <motion.div initial="hidden" animate="visible" custom={0.1} variants={fadeUp} className="mb-8">
            <span className="tag-outline-dark">Est. 2024 &nbsp;·&nbsp; Colombo, Sri Lanka</span>
          </motion.div>

          <div className="mb-8">
            <motion.h1 initial="hidden" animate="visible" custom={0.25} variants={fadeUp}
              className="text-white"
              style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(3.6rem, 9.5vw, 9.5rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
              One Group.
            </motion.h1>
            <motion.h1 initial="hidden" animate="visible" custom={0.38} variants={fadeUp}
              style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(3.6rem, 9.5vw, 9.5rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', color: '#F5C518' }}>
              Infinite
            </motion.h1>
            <motion.h1 initial="hidden" animate="visible" custom={0.5} variants={fadeUp}
              className="text-white"
              style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(3.6rem, 9.5vw, 9.5rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
              Ambition.
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-yellow-500 mb-8"
          />

          <motion.p initial="hidden" animate="visible" custom={0.65} variants={fadeUp}
            className="text-white/50 mb-10 max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}>
            AlphaGRID is a multi-brand holding company building category-defining
            ventures, from data intelligence to creative content and beyond.
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.78} variants={fadeUp}
            className="flex flex-wrap gap-3">
            <button onClick={() => scrollTo('ecosystem')} className="btn-primary">
              Explore Companies <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-secondary-dark">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollTo('ecosystem')}
      >
        <span className="label-sm text-white/25 group-hover:text-white/50 transition-colors">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-white/25 group-hover:text-yellow-500 transition-colors" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  )
}
