import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  slug: string
  image?: string
  imageAlt?: string
}

export default function ServiceCard({ title, description, slug, image, imageAlt }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {image && (
        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={imageAlt || `${title} service by Captain Chris in Harned, Kentucky`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-orange font-semibold hover:text-orange-light transition-colors">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  )
}
