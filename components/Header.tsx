'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { PHONE_NUMBER, PHONE_HREF } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/instruction', label: 'Instruction' },
  { href: '/about', label: 'About' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/boating-adventures-captain-chris-logo.jpeg"
            alt="Boating Adventures With Captain Chris logo - boat electronics installation in Harned, Kentucky"
            width={80}
            height={80}
            quality={100}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">Boating Adventures</span>
            <span className="text-sm text-gray-300">With Captain Chris</span>
          </div>
        </Link>

        <a
          href={PHONE_HREF}
          className="md:hidden p-2 text-orange"
          aria-label="Call Captain Chris"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a
          href={PHONE_HREF}
          className="hidden md:inline-block text-sm font-semibold text-orange hover:text-orange-light"
        >
          {PHONE_NUMBER}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-navy-light border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base font-medium py-2 hover:text-orange transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="block text-orange font-semibold py-2"
          >
            Call: {PHONE_NUMBER}
          </a>
        </nav>
      )}
    </header>
  )
}
