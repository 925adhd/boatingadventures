import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Custom Boat Wiring & Battery Systems | Captain Chris | Harned, KY',
  description: 'Custom marine wiring and battery system installation in Harned, Kentucky. Lithium batteries, onboard chargers, rewiring, and electrical upgrades by Captain Chris.',
}

const service = services.find((s) => s.slug === 'custom-wiring-battery-systems')!
const related = services.filter((s) => s.slug !== 'custom-wiring-battery-systems')

export default function CustomWiringBatterySystemsPage() {
  return (
    <ServicePageTemplate
      title="Custom Boat Wiring & Battery Systems in Harned, KY"
      intro={service.description}
      features={service.features}
      whoFor={service.whoFor}
      image={service.image}
      imageAlt={service.imageAlt}
      relatedServices={related.map((s) => ({ title: s.title, slug: s.slug }))}
    />
  )
}
