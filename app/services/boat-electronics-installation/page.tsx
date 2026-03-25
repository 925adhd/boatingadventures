import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Installation in Harned, KY | Captain Chris',
  description: 'Complete boat electronics installation in Harned, Kentucky. GPS, chartplotters, marine radios, lighting, and more. Professional service from Captain Chris.',
}

const service = services.find((s) => s.slug === 'boat-electronics-installation')!
const related = services.filter((s) => s.slug !== 'boat-electronics-installation')

export default function BoatElectronicsInstallationPage() {
  return (
    <ServicePageTemplate
      title="Boat Electronics Installation in Harned, KY"
      intro={service.description}
      features={service.features}
      whoFor={service.whoFor}
      image={service.image}
      imageAlt={service.imageAlt}
      relatedServices={related.map((s) => ({ title: s.title, slug: s.slug }))}
    />
  )
}
