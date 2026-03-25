import Link from 'next/link'
import { PHONE_HREF, PHONE_NUMBER } from '@/lib/data'

interface CTASectionProps {
  heading?: string
  text?: string
  ctaLabel?: string
}

export default function CTASection({
  heading = 'Ready to Get Started?',
  text = 'Contact Captain Chris today for a free quote on your boat electronics project.',
  ctaLabel = 'Get a Quote for Your Boat Setup',
}: CTASectionProps) {
  return (
    <section className="bg-navy text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-gray-300 mb-6">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {ctaLabel}
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  )
}
