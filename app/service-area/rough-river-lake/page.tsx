import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Installation Near Rough River Lake | Captain Chris',
  description: 'Professional boat electronics installation and service near Rough River Lake, Kentucky. Fish finders, trolling motors, wiring, and repairs by Captain Chris.',
}

export default function RoughRiverLakePage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boat Electronics Installation Near Rough River Lake
          </h1>
          <p className="text-gray-300 text-lg">
            Serving boaters and anglers across the Rough River Lake area
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                If you boat on Rough River Lake, Captain Chris is your local expert for marine electronics
                installation and service. Based just minutes away in Harned, KY, he provides professional
                fish finder installation, trolling motor setup, custom wiring, and electronics repair for
                boaters across the Rough River Lake area.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Services Available Near Rough River Lake</h2>
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
                Captain Chris serves boaters in Falls of Rough, McDaniels, Harned, and all communities
                around Rough River Lake. Whether you keep your boat at the marina or trailer in for the
                weekend, he can work with your schedule.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Why Local Matters</h2>
              <p className="text-gray-700">
                When you work with Captain Chris, you are working with someone who knows these waters.
                No shipping your boat off to a distant shop. No weeks-long wait times. Just professional,
                local service from someone who understands what Rough River Lake boaters need.
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
