import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Installation in Hardinsburg, KY | Captain Chris',
  description: 'Marine electronics installation and repair in Hardinsburg, Kentucky. Fish finders, trolling motors, wiring, and more from Captain Chris. Serving Breckinridge County.',
}

export default function HardinsburgPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boat Electronics Installation in Hardinsburg, KY
          </h1>
          <p className="text-gray-300 text-lg">
            Professional marine electronics service for Hardinsburg and Breckinridge County
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                Captain Chris provides professional boat electronics installation and service to boaters
                in Hardinsburg, Kentucky and throughout Breckinridge County. Based nearby in Harned, he
                offers fast, reliable service without the long drive to a big-city shop.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Services Available in Hardinsburg</h2>
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

              <h2 className="text-xl font-bold text-navy mb-4">Serving Breckinridge County</h2>
              <p className="text-gray-700 mb-6">
                In addition to Hardinsburg, Captain Chris serves boaters in Harned, Irvington, Cloverport,
                and communities throughout Breckinridge County. Whether you are heading to Rough River Lake
                or any local waterway, he can get your boat electronics set up and ready to go.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Local, Reliable Service</h2>
              <p className="text-gray-700">
                No need to haul your boat across the state. Captain Chris is right here in the area,
                ready to handle your fish finder installation, trolling motor setup, wiring project,
                or electronics repair. Contact him today to discuss your project.
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
