'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Target, Users, Zap, Linkedin } from 'lucide-react'
import Timeline from '@/components/Timeline'
import Image from 'next/image'
import ScrollLinesBg from '@/components/ScrollLinesBg'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const founders = [
  {
    name: 'Samith Madushanka',
    role: 'Co-Founder',
    bio: 'Samith Madushanka helps shape AlphaGrid by turning ideas into meaningful, real-world solutions. He focuses on building simple, useful products that create clear value and support confident decisions.',
    quote: '"We Creating clarity through action."',
    highlights: [
      'Led 630+ project deliveries across industries',
      'Data analytics + AI solution strategy',
      'Client-first execution and quality control',
    ],
    image: '/founders/samith-madushanka.jpg',
    linkedin: 'https://www.linkedin.com/in/samith-madusanka?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGRcI9tSdR5iAPQBlOd1ENg%3D%3D', // Replace with actual LinkedIn URL
  },
  {
    name: 'Sandaruwan Sankalpa',
    role: 'Co-Founder',
    bio: 'Sandaruwan Sankalpa focuses on building systems that feel simple, smooth, and reliable for real users. He shapes how AlphaGrid’s products are designed and built, making sure every solution is easy to use, well-structured, and ready to grow.',
    quote: '"Making complexity feel simple."',
    highlights: [
      'Solution architecture & scalable systems',
      'Data analytics + AI solution strategy',
      'Performance, security, and UX-driven builds',
    ],
    image: '/founders/sandaruwansankalpa.png',
    linkedin: 'www.linkedin.com/in/wsssilva', // Replace with actual LinkedIn URL
  },
]

interface FounderFeatureProps {
  founder: typeof founders[0]
  index: number
  isReversed?: boolean
}

function FounderFeature({ founder, index, isReversed = false }: FounderFeatureProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      className="founder-feature group mb-16 md:mb-24 last:mb-0"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isReversed ? 'lg:grid-flow-dense' : ''
      }`}>
        {/* Photo - Alternating sides */}
        <motion.div
          className={`relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl ${
            isReversed ? 'lg:col-start-2' : ''
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2, ease: 'easeOut' }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 via-transparent to-transparent z-10" />
          
          {!imageError ? (
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-dark-100 text-dark-400 text-6xl">
              ?
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          className={`space-y-6 lg:space-y-8 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: 'easeOut' }}
        >
          {/* Name & Role */}
          <div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark-900 mb-2" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}>
              {founder.name}
            </h3>
            <p className="text-lg text-dark-600 font-medium">
              {founder.role}
            </p>
          </div>

          {/* Bio */}
          <p className="text-base md:text-lg text-dark-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
            {founder.bio}
          </p>

          {/* Quote Block */}
          <div className="relative pl-6 border-l-2 border-dark-200">
            {/* Floating quote mark */}
            <span className="absolute -left-3 top-0 text-6xl md:text-7xl font-serif text-dark-200 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              &#34;
            </span>
            <p className="text-xl md:text-2xl italic text-dark-700 leading-relaxed relative z-10" style={{ lineHeight: '1.5' }}>
              {founder.quote}
            </p>
          </div>

          {/* Career Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-4">
              Career Highlights
            </h4>
            <ul className="space-y-3">
              {founder.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-dark-600">
                  <span className="text-dark-400 mt-1.5">→</span>
                  <span className="leading-relaxed" style={{ lineHeight: '1.6' }}>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LinkedIn Link */}
          <div className="pt-2">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-dark-900 hover:text-dark-700 transition-colors group/link"
            >
              <Linkedin size={18} className="group-hover/link:scale-110 transition-transform" />
              <span className="underline underline-offset-4">Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const whyAlphaGrid = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable business outcomes, not just technical solutions.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our 17-member team brings decades of combined experience in data, AI, and software.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest tools and frameworks to build future-proof solutions.',
  },
]

// Process Step Graphics Component
function ProcessGraphic({ step }: { step: string }) {
  const graphics = {
    '01': (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-discovery-${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#grad-discovery-${step})`} rx="20" />
        {/* Magnifying Glass - Discovery */}
        <g transform="translate(150, 80)">
          <circle cx="0" cy="0" r="60" fill="none" stroke="#0f172a" strokeWidth="8" opacity="0.3" />
          <circle cx="0" cy="0" r="40" fill="none" stroke="#0f172a" strokeWidth="6" />
          <line x1="50" y1="50" x2="80" y2="80" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
          <circle cx="0" cy="0" r="15" fill="#0f172a" opacity="0.2" />
        </g>
        {/* Search dots */}
        <circle cx="100" cy="180" r="4" fill="#0f172a" opacity="0.4" />
        <circle cx="130" cy="200" r="4" fill="#0f172a" opacity="0.4" />
        <circle cx="300" cy="200" r="4" fill="#0f172a" opacity="0.4" />
      </svg>
    ),
    '02': (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-strategy-${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#grad-strategy-${step})`} rx="20" />
        {/* Strategy Chart/Blueprint */}
        <g transform="translate(100, 60)">
          <rect x="0" y="0" width="200" height="180" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="5,5" opacity="0.3" />
          {/* Chart bars */}
          <rect x="30" y="140" width="30" height="40" fill="#0f172a" opacity="0.6" />
          <rect x="70" y="100" width="30" height="80" fill="#0f172a" opacity="0.7" />
          <rect x="110" y="80" width="30" height="100" fill="#0f172a" opacity="0.8" />
          <rect x="150" y="60" width="30" height="120" fill="#0f172a" />
          {/* Connection lines */}
          <line x1="45" y1="120" x2="75" y2="100" stroke="#0f172a" strokeWidth="2" opacity="0.4" />
          <line x1="85" y1="80" x2="125" y2="60" stroke="#0f172a" strokeWidth="2" opacity="0.4" />
        </g>
      </svg>
    ),
    '03': (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-development-${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#grad-development-${step})`} rx="20" />
        {/* Code brackets - Development */}
        <g transform="translate(120, 80)" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Left bracket */}
          <path d="M 0 20 L 0 0 L 40 0" />
          <path d="M 0 60 L 0 80 L 40 80" />
          {/* Code lines */}
          <line x1="80" y1="20" x2="180" y2="20" strokeWidth="4" opacity="0.6" />
          <line x1="80" y1="40" x2="160" y2="40" strokeWidth="4" opacity="0.6" />
          <line x1="80" y1="60" x2="200" y2="60" strokeWidth="4" opacity="0.6" />
          {/* Right bracket */}
          <path d="M 240 0 L 280 0 L 280 20" />
          <path d="M 240 80 L 280 80 L 280 60" />
        </g>
        {/* Gear icon */}
        <g transform="translate(320, 200)">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#0f172a" strokeWidth="4" opacity="0.3" />
          <path d="M -20 -20 L -10 -10 M 20 -20 L 10 -10 M 20 20 L 10 10 M -20 20 L -10 10" stroke="#0f172a" strokeWidth="3" opacity="0.4" />
        </g>
      </svg>
    ),
    '04': (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-launch-${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#grad-launch-${step})`} rx="20" />
        {/* Rocket - Launch */}
        <g transform="translate(150, 100)">
          <path d="M 50 100 L 50 40 L 30 40 L 50 20 L 70 40 L 50 40" fill="#0f172a" />
          <rect x="40" y="40" width="20" height="60" fill="#0f172a" />
          <circle cx="50" cy="60" r="5" fill="white" opacity="0.8" />
          {/* Rocket flames */}
          <path d="M 40 100 L 35 120 L 50 110 Z" fill="#0f172a" opacity="0.6" />
          <path d="M 60 100 L 65 120 L 50 110 Z" fill="#0f172a" opacity="0.6" />
        </g>
        {/* Checkmark - Support */}
        <g transform="translate(280, 180)">
          <circle cx="0" cy="0" r="25" fill="none" stroke="#0f172a" strokeWidth="4" />
          <path d="M -10 0 L -5 5 L 10 -5" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        {/* Success stars */}
        <circle cx="100" cy="80" r="2" fill="#0f172a" opacity="0.4" />
        <circle cx="300" cy="100" r="2" fill="#0f172a" opacity="0.4" />
        <circle cx="320" cy="60" r="2" fill="#0f172a" opacity="0.4" />
      </svg>
    ),
  }

  return graphics[step as keyof typeof graphics] || null
}

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your business challenges and goals to understand what success looks like.',
    image: null, // Will use graphic component instead
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Our team designs a comprehensive solution tailored to your specific needs and constraints.',
    image: null,
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build with precision, maintaining transparency and collaboration throughout the process.',
    image: null,
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We ensure smooth deployment and provide ongoing support to maximize your investment.',
    image: null,
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const whyChooseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    // Ensure items are visible initially
    const items = sectionRef.current?.querySelectorAll('.about-item')
    if (items) {
      items.forEach((item) => {
        gsap.set(item, { opacity: 1, y: 0 })
      })
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-item',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-dark-50 relative">
      <div className="container-custom">
        {/* Company Story */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-dark-900" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}>
            About <span className="text-dark-900">AlphaGrid</span>
          </h2>
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-xl text-dark-700 mb-6" style={{ lineHeight: '1.6' }}>
              AlphaGrid was founded with a simple mission: to transform how businesses leverage
              data and technology. We believe that every organization, regardless of size, should
              have access to world-class data analytics, AI solutions, and software development
              services.
            </p>
            <p className="text-lg text-dark-600" style={{ lineHeight: '1.6' }}>
              Over the years, we&#39;ve completed 630+ projects for clients across various industries,
              helping them unlock the power of their data and build innovative solutions that drive
              growth. Our team of 17 experts combines deep technical expertise with business
              acumen to deliver results that matter.
            </p>
          </div>
        </motion.div>

        {/* Co-Founders Section - Premium Founder Feature Layout */}
        <motion.div
          className="mb-20 py-16 md:py-24 bg-gradient-to-b from-white to-dark-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-dark-900" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}>
                Co-Founders
              </h2>
              <p className="text-lg md:text-xl text-dark-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                The leadership behind AlphaGrid&#39;s data, AI, and software delivery.
              </p>
            </motion.div>

            {/* Founder Features - Alternating Layout */}
            <div className="space-y-0">
              {founders.map((founder, idx) => (
                <FounderFeature
                  key={idx}
                  founder={founder}
                  index={idx}
                  isReversed={idx % 2 === 1}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why AlphaGrid */}
        <div 
          ref={whyChooseRef}
          className="mb-20 relative overflow-hidden py-16 md:py-20"
        >
          {/* Scroll-reactive moving lines background */}
          <ScrollLinesBg sectionRef={whyChooseRef} />
          
          <motion.h3
            className="text-3xl font-heading font-bold text-center mb-12 relative z-10"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Why Choose AlphaGrid?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {whyAlphaGrid.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  className="about-item bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-dark-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-dark-900" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-dark-900">{item.title}</h4>
                  <p className="text-dark-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <motion.h3
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Process
          </motion.h3>
          <Timeline
            items={processSteps.map((step) => ({
              step: step.step,
              title: step.title,
              description: step.description,
              image: step.image,
              graphic: <ProcessGraphic step={step.step} />,
            }))}
            className="min-h-[600px] md:min-h-[800px]"
          />
        </div>
      </div>
    </section>
  )
}


