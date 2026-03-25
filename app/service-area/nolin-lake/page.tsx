import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Setup Near Nolin Lake | Captain Chris',
  description: 'Boat electronics installation, fish finder setup, and trolling motor installation for Nolin Lake boaters. Professional service from Captain Chris in Harned, KY.',
}

export default function NolinLakePage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boat Electronics Setup Near Nolin Lake
          </h1>
          <p className="text-gray-300 text-lg">
            Professional marine electronics service for Nolin Lake boaters
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                Nolin Lake boaters trust Captain Chris for professional boat electronics installation
                and service. From fish finder installations to complete wiring overhauls, he provides
                expert marine electronics work for anglers and recreational boaters across the Nolin
                Lake area.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Services for Nolin Lake Boaters</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-orange transition-colors"
                  >
                    <svg className="w-4 h-4 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service.title}
                  </Link>
                ))}
              </div>

              <h2 className="text-xl font-bold text-navy mb-4">Nearby Communities Served</h2>
              <p className="text-gray-700 mb-6">
                Captain Chris serves boaters near Mammoth Cave, Brownsville, Leitchfield, and all
                communities around Nolin Lake. Based in Harned, KY, he is a short drive from the
                lake and available to work at your location or his shop.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Why Choose Captain Chris</h2>
              <p className="text-gray-700">
                With hands-on experience installing electronics for all types of boats, Captain Chris
                delivers clean, reliable installs that perform when it matters. No guesswork, no loose
                connections — just professional results you can count on every trip out.
              </p>
            </div>

            <div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-navy mb-4">Get a Free Quote</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
