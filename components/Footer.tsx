import Link from 'next/link'
import { PHONE_NUMBER, PHONE_HREF, EMAIL, LOCATION } from '@/lib/data'

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/instruction', label: 'Instruction' },
  { href: '/about', label: 'About' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/fish-finder-installation', label: 'Fish Finder Installation' },
  { href: '/services/boat-electronics-installation', label: 'Boat Electronics' },
  { href: '/services/trolling-motor-installation', label: 'Trolling Motor Installation' },
  { href: '/services/custom-wiring-battery-systems', label: 'Wiring & Battery Systems' },
  { href: '/services/electronics-repair', label: 'Electronics Repair' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Boating Adventures With Captain Chris</h3>
            <p className="text-gray-300 text-sm mb-4">
              Professional boat electronics installation and service in {LOCATION}.
            </p>
            <p className="text-sm text-gray-300">
              <a href={PHONE_HREF} className="text-orange hover:text-orange-light">{PHONE_NUMBER}</a>
            </p>
            <p className="text-sm text-gray-300 mt-1">
              <a href={`mailto:${EMAIL}`} className="hover:text-orange">{EMAIL}</a>
            </p>
            <p className="text-sm text-gray-400 mt-1">{LOCATION}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Boating Adventures With Captain Chris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
