import type { Metadata } from 'next'
import Image from 'next/image'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Services | Captain Chris | Harned, KY',
  description: 'Professional boat electronics installation services including fish finders, trolling motors, custom wiring, and marine electronics repair in Harned, Kentucky.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Boat Electronics Services</h1>
          <p className="text-gray-300 text-lg">
            From fish finders to full rewiring, Captain Chris handles it all. Every install is done clean, done right, and built to last.
          </p>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-4">Brands We Install & Service</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              src="/images/lowrance-elite-fish-finder-sonar.jpeg"
              alt="Lowrance Elite fish finder - professional installation available from Captain Chris"
              width={120}
              height={80}
              className="object-contain"
            />
            <Image
              src="/images/humminbird-xplore-12-fish-finder.jpeg"
              alt="Humminbird Xplore 12 fish finder - installed and serviced by Captain Chris in Kentucky"
              width={120}
              height={80}
              className="object-contain"
            />
            <Image
              src="/images/garmin-authorized-reseller-badge.jpeg"
              alt="Garmin Authorized Reseller - Captain Chris is a certified Garmin installer"
              width={140}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
