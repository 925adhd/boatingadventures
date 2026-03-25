import Link from 'next/link'
import Image from 'next/image'
import CTASection from './CTASection'
import ContactForm from './ContactForm'

interface ServicePageTemplateProps {
  title: string
  intro: string
  features: string[]
  whoFor: string
  image?: string
  imageAlt?: string
  relatedServices: { title: string; slug: string }[]
}

export default function ServicePageTemplate({
  title,
  intro,
  features,
  whoFor,
  image,
  imageAlt,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {image && (
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-10">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-8">{intro}</p>

              <h2 className="text-xl font-bold text-navy mb-4">What&apos;s Included</h2>
              <ul className="space-y-2 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-navy mb-4">Who This Is For</h2>
              <p className="text-gray-700 mb-8">{whoFor}</p>

              <h2 className="text-xl font-bold text-navy mb-4">Why Choose Captain Chris</h2>
              <p className="text-gray-700 mb-4">
                Captain Chris brings years of hands-on experience to every install. Based in Harned, KY, he serves boaters
                across Rough River Lake, Nolin Lake, and the surrounding area. Every job is done with care — clean wiring,
                solid mounts, and installs that hold up season after season.
              </p>

              {relatedServices.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-navy mb-4">Related Services</h2>
                  <div className="flex flex-wrap gap-3">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
