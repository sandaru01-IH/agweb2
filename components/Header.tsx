'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Companies', href: '#ecosystem' },
  { name: 'About', href: '#founders' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)

      const sectionIds = navItems.map(item => item.href.replace('#', ''))
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { handleScroll(); ticking = false })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href) as HTMLElement
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ink-950/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="flex items-center justify-center rounded-sm bg-yellow-500 flex-shrink-0"
              style={{ width: '32px', height: '32px' }}
            >
              <span
                className="font-display font-black text-ink-950 leading-none"
                style={{ fontSize: '1.05rem', fontStyle: 'italic' }}
              >
                α
              </span>
            </div>
            <span
              className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '-0.02em' }}
            >
              Alpha<span className="text-yellow-500">GRID</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
                  }`}
                  style={{ letterSpacing: '0.01em' }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-4 right-4 h-px bg-yellow-500"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA — wrapper div controls visibility so btn-primary display doesn't bleed through */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative flex items-center justify-center rounded-sm transition-colors"
              style={{
                width: '38px',
                height: '38px',
                border: '1px solid rgba(255,255,255,0.12)',
                color: isMobileMenuOpen ? '#F5C518' : 'rgba(255,255,255,0.7)',
                backgroundColor: isMobileMenuOpen ? 'rgba(245,197,24,0.08)' : 'transparent',
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-ink-950/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="container-custom pt-4 pb-6 flex flex-col">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-between text-left py-3.5 transition-colors"
                    style={{
                      borderBottom: idx < navItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      color: isActive ? '#F5C518' : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 600 : 400,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                    )}
                  </button>
                )
              })}

              {/* Mobile CTA */}
              <div className="mt-5">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full justify-center"
                  style={{ borderRadius: '6px' }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
