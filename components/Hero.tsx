import Link from 'next/link'
import Image from 'next/image'
import { PHONE_HREF } from '@/lib/data'

interface HeroProps {
  headline: string
  subheadline: string
  locationLine?: string
  showCTAs?: boolean
  backgroundImage?: string
  ctaText?: string
  ctaPhoneText?: string
}

export default function Hero({
  headline,
  subheadline,
  locationLine,
  showCTAs = true,
  backgroundImage,
  ctaText = 'Get a Quote',
  ctaPhoneText = 'Call Now',
}: HeroProps) {
  if (backgroundImage) {
    return (
      <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center md:items-end text-white overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center md:object-[center_25%]"
          priority
          sizes="100vw"
          quality={95}
        />
        <div className="absolute inset-0 bg-black/30 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/40 md:bg-gradient-to-t md:from-black/60 md:via-black/15 md:to-transparent" />
        <div className="relative w-full max-w-lg md:max-w-3xl mx-auto px-4 md:px-6 md:pb-24 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 md:mb-6 leading-snug md:leading-tight uppercase tracking-wide drop-shadow-lg text-shadow-hero">
            {headline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 max-w-xl mx-auto leading-relaxed drop-shadow text-shadow-hero">
            {subheadline}
          </p>
          {locationLine && (
            <p className="text-sm md:text-base text-white/80 font-medium mb-8 md:mb-10 drop-shadow text-shadow-hero">
              {locationLine}
            </p>
          )}
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#4A90A4] hover:bg-[#3d7a8d] text-white font-bold px-10 py-4 rounded shadow-lg shadow-black/20 transition-colors text-base md:text-lg text-center min-h-[52px] flex items-center justify-center"
              >
                {ctaText}
              </Link>
              <a
                href={PHONE_HREF}
                className="border-2 border-white/80 text-white hover:bg-white hover:text-navy font-semibold px-10 py-4 rounded transition-colors text-base md:text-lg text-center min-h-[52px] flex items-center justify-center"
              >
                {ctaPhoneText}
              </a>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="bg-navy text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{headline}</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-3">{subheadline}</p>
        {locationLine && (
          <p className="text-sm text-gray-400 mb-8">{locationLine}</p>
        )}
        {showCTAs && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base md:text-lg text-center"
            >
              {ctaText}
            </Link>
            <a
              href={PHONE_HREF}
              className="bg-white text-navy font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg text-center"
            >
              {ctaPhoneText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
