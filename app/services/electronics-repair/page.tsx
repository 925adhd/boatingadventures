import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Boat Electronics Repair & Troubleshooting | Captain Chris | Harned, KY',
  description: 'Marine electronics repair and troubleshooting in Harned, Kentucky. Fish finder issues, wiring problems, transducer replacement, and more. Captain Chris can fix it.',
}

const service = services.find((s) => s.slug === 'electronics-repair')!
const related = services.filter((s) => s.slug !== 'electronics-repair')

export default function ElectronicsRepairPage() {
  return (
    <ServicePageTemplate
      title="Boat Electronics Repair & Troubleshooting in Harned, KY"
      intro={service.description}
      features={service.features}
      whoFor={service.whoFor}
      image={service.image}
      imageAlt={service.imageAlt}
      relatedServices={related.map((s) => ({ title: s.title, slug: s.slug }))}
    />
  )
}
