import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { serviceAreas, services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Service Area | Boat Electronics Installation in Central Kentucky | Captain Chris',
  description: 'Captain Chris serves boaters across central Kentucky including Rough River Lake, Nolin Lake, Hardinsburg, Leitchfield, and surrounding areas. Professional boat electronics installation and repair.',
}

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Service Area</h1>
          <p className="text-gray-300 text-lg">
            Captain Chris serves boaters and anglers across central Kentucky from his base in Harned, KY.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-navy mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                <span className="text-orange font-semibold text-sm">View details &rarr;</span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-6">Services Available in Your Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-navy hover:text-white transition-colors group"
              >
                <h3 className="font-semibold text-navy group-hover:text-white">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need Service in Your Area?"
        text="Contact Captain Chris to discuss your project. Serving all of central Kentucky."
      />
    </>
  )
}
