import type { Metadata } from 'next'

const BUSINESS_NAME = 'Captain Chris'
const SITE_NAME = 'Boating Adventures With Captain Chris'
const DEFAULT_LOCATION = 'Harned, KY'

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
    },
  }
}

export { BUSINESS_NAME, SITE_NAME, DEFAULT_LOCATION }
