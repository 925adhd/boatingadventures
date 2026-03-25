import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Trolling Motor Installation in Kentucky | Captain Chris',
  description: 'Professional trolling motor installation in Harned, KY. Minn Kota, MotorGuide, and more. Expert mounting, wiring, and configuration by Captain Chris.',
}

const service = services.find((s) => s.slug === 'trolling-motor-installation')!
const related = services.filter((s) => s.slug !== 'trolling-motor-installation')

export default function TrollingMotorInstallationPage() {
  return (
    <ServicePageTemplate
      title="Trolling Motor Installation in Kentucky"
      intro={service.description}
      features={service.features}
      whoFor={service.whoFor}
      image={service.image}
      imageAlt={service.imageAlt}
      relatedServices={related.map((s) => ({ title: s.title, slug: s.slug }))}
    />
  )
}
