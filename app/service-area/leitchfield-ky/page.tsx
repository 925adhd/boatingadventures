import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Installation in Leitchfield, KY | Captain Chris',
  description: 'Professional boat electronics installation and service in Leitchfield, Kentucky. Serving Grayson County boaters with fish finder installation, trolling motors, wiring, and repairs.',
}

export default function LeitchfieldPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boat Electronics Installation in Leitchfield, KY
          </h1>
          <p className="text-gray-300 text-lg">
            Serving Grayson County boaters with professional marine electronics
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-6">
                Boaters in Leitchfield, Kentucky and Grayson County can count on Captain Chris for
                professional marine electronics installation and repair. Whether you fish Nolin Lake,
                Rough River, or any local waterway, Captain Chris has the experience to handle your
                electronics project.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Services Available in Leitchfield</h2>
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

              <h2 className="text-xl font-bold text-navy mb-4">Serving Grayson County</h2>
              <p className="text-gray-700 mb-6">
                Captain Chris serves boaters in Leitchfield, Clarkson, Caneyville, Shrewsbury, and
                throughout Grayson County. Based in Harned, KY, he is conveniently located to serve
                the entire area with professional boat electronics work.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">Professional Results, Local Service</h2>
              <p className="text-gray-700">
                You should not have to drive hours for quality electronics work. Captain Chris brings
                professional-grade installation and service right to your area. Clean wiring, solid
                mounts, and equipment that works when you need it most.
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
