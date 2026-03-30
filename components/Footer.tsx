'use client'

import { Linkedin, Facebook, Mail, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Companies', href: '#ecosystem' },
  { name: 'AlphaDATA', href: '#alphadata' },
  { name: 'AlphaTALK', href: '#alphatalk' },
  { name: 'Founders', href: '#founders' },
  { name: 'Vision', href: '#vision' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href) as HTMLElement
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink-950 border-t border-white/[0.06]">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center rounded-sm">
                <span
                  style={{
                    fontFamily: 'var(--font-bricolage), serif',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                  }}
                >
                  α
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Alpha<span style={{ color: '#F5C518' }}>GRID</span>
              </span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              A multi-brand holding company building category-defining ventures
              across data intelligence, creative content, and beyond.
              Based in Colombo, Sri Lanka.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Facebook size={15} />
              </a>
              <a
                href="mailto:alphagrid.official@gmail.com"
                className="w-9 h-9 rounded-md border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-sm text-white/25 mb-5">Navigate</p>
            <nav className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className="block text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Companies */}
          <div>
            <p className="label-sm text-white/25 mb-5">Companies</p>
            <nav className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <button
                  onClick={() => handleScroll('#alphadata')}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  AlphaDATA
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <button
                  onClick={() => handleScroll('#alphatalk')}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  AlphaTALK
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-sm text-white/20">More Coming Soon</span>
              </div>
            </nav>

            <div className="mt-8">
              <p className="label-sm text-white/25 mb-3">Website</p>
              <a
                href="https://alphagridglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors"
              >
                alphagridglobal.com
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} AlphaGRID Global. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="text-white/20 text-xs">Colombo, Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
