'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, Phone, Copy, Check } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = 'alphagrid.official@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback silently
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />

      <div className="container-custom section-py relative z-10">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="tag-outline-light">Let&apos;s Talk</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg text-ink-950 max-w-2xl"
          >
            Ready to build{' '}
            <span style={{ color: '#F5C518' }}>something</span>{' '}
            remarkable?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-ink-500 leading-relaxed mb-8" style={{ fontSize: '1.05rem' }}>
              Whether you want to work with AlphaDATA on a data project,
              partner with AlphaTALK for content, or explore opportunities
              within the AlphaGRID ecosystem. We want to hear from you.
            </p>

            {/* Email */}
            <div className="mb-8">
              <p className="label-sm text-ink-300 mb-3">Direct Email</p>
              <button
                onClick={handleCopy}
                className="group flex items-center gap-3 w-full p-4 rounded-lg border border-ink-100 bg-white hover:border-yellow-500/40 transition-all duration-300"
              >
                <Mail size={16} className="text-ink-400 group-hover:text-yellow-600 transition-colors" />
                <span
                  className="text-ink-700 font-medium flex-1 text-left text-sm"
                  style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.01em' }}
                >
                  {email}
                </span>
                {copied ? (
                  <Check size={14} className="text-green-600" />
                ) : (
                  <Copy size={14} className="text-ink-300 group-hover:text-ink-600 transition-colors" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <p className="label-sm text-ink-300 mb-3">Phone / WhatsApp</p>
              <a
                href="tel:+94701475747"
                className="group flex items-center gap-3 w-full p-4 rounded-lg border border-ink-100 bg-white hover:border-yellow-500/40 transition-all duration-300 no-underline"
              >
                <Phone size={16} className="text-ink-400 group-hover:text-yellow-600 transition-colors flex-shrink-0" />
                <span
                  className="text-ink-700 font-medium text-sm"
                  style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.02em' }}
                >
                  +94 70 147 5747
                </span>
              </a>
            </div>

            {/* What we can help with */}
            <div>
              <p className="label-sm text-ink-300 mb-4">Areas of Collaboration</p>
              <div className="space-y-3">
                {[
                  { label: 'AlphaDATA', desc: 'Spatial, GIS, and data science projects' },
                  { label: 'AlphaTALK', desc: 'Content creation and brand strategy' },
                  { label: 'Partnerships', desc: 'Joining the AlphaGRID ecosystem' },
                  { label: 'Investing', desc: 'Supporting our growth story' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: '#F5C518' }}
                    />
                    <div>
                      <span className="text-ink-800 font-semibold text-sm">{item.label}</span>
                      <span className="text-ink-400 text-sm"> · {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center py-16">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'rgba(245,197,24,0.15)' }}
                  >
                    <Check size={28} style={{ color: '#F5C518' }} />
                  </motion.div>
                  <h3
                    className="text-ink-900 mb-3"
                    style={{
                      fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    Message Received
                  </h3>
                  <p className="text-ink-400 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-sm text-ink-400 block mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-sm text-ink-400 block mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-sm text-ink-400 block mb-2">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-sm text-ink-400 block mb-2">Area of Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 text-sm focus:outline-none focus:border-yellow-500 transition-colors appearance-none"
                    >
                      <option value="">Select one...</option>
                      <option value="alphadata">AlphaDATA: Data Solutions</option>
                      <option value="alphatalk">AlphaTALK: Content Creation</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment / Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-sm text-ink-400 block mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what you have in mind..."
                    className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
