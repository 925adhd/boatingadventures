import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Fish Finder Installation in Harned, KY | Captain Chris',
  description: 'Professional fish finder installation in Harned, Kentucky. Garmin, Lowrance, Humminbird — installed right the first time. Serving Rough River Lake, Nolin Lake, and surrounding areas.',
}

const service = services.find((s) => s.slug === 'fish-finder-installation')!
const related = services.filter((s) => s.slug !== 'fish-finder-installation')

export default function FishFinderInstallationPage() {
  return (
    <ServicePageTemplate
      title="Fish Finder Installation in Harned, KY"
      intro={service.description}
      features={service.features}
      whoFor={service.whoFor}
      image={service.image}
      imageAlt={service.imageAlt}
      relatedServices={related.map((s) => ({ title: s.title, slug: s.slug }))}
    />
  )
}
