import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Captain Chris | Boat Electronics Expert in Harned, KY',
  description: 'Learn about Captain Chris, a professional boat electronics installer based in Harned, Kentucky. Serving Rough River Lake, Nolin Lake, and surrounding areas.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Captain Chris</h1>
          <p className="text-gray-300 text-lg">Boat electronics done right, every time.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-4">
                A Local Expert You Can Trust
              </h2>
              <p className="text-gray-700 mb-4">
                Captain Chris has been around boats and water his whole life. Based in Harned, Kentucky,
                he specializes in marine electronics installation and service — from fish finders and
                trolling motors to complete wiring overhauls.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a passion for fishing and boating turned into a career helping other boaters
                get the most out of their equipment. Captain Chris has installed hundreds of units across
                all major brands including Garmin, Lowrance, Humminbird, Minn Kota, and MotorGuide.
              </p>
              <p className="text-gray-700 mb-4">
                Every job is treated the same — with attention to detail, clean wiring, and professional results.
                Whether it is a simple fish finder install or a full electronics overhaul, Captain Chris takes
                pride in doing the job right the first time.
              </p>

              {/* Fishing catches collage */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden my-8">
                <Image
                  src="/images/fishing-catches-kentucky-lake-collage.png"
                  alt="Captain Chris and clients with bass, crappie, and striped bass catches on Kentucky lakes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Why Work With Captain Chris</h2>
              <ul className="space-y-3 mb-8">
                {[
                  'Hands-on experience with all major marine electronics brands',
                  'Clean, organized installs that look as good as they perform',
                  'Based locally — no long wait times or travel fees',
                  'Honest pricing with no hidden charges',
                  'Instruction available so you actually know how to use your equipment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/captain-chris-bass-fishing-kentucky.png"
                  alt="Captain Chris holding two largemouth bass caught on a Kentucky lake"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/captain-chris-crappie-fishing-harned-ky.jpeg"
                  alt="Captain Chris holding crappie caught while fishing near Harned, Kentucky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Based in</p>
                <p className="font-bold text-navy">Harned, Kentucky</p>
                <p className="text-sm text-gray-600 mt-3 mb-1">Serving</p>
                <p className="font-bold text-navy text-sm">Rough River Lake, Nolin Lake, & surrounding areas</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-navy mb-4">Explore Services</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/fish-finder-installation" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                Fish Finder Installation
              </Link>
              <Link href="/services/boat-electronics-installation" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                Boat Electronics
              </Link>
              <Link href="/services/trolling-motor-installation" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                Trolling Motor Installation
              </Link>
              <Link href="/services/custom-wiring-battery-systems" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                Wiring & Battery Systems
              </Link>
              <Link href="/services/electronics-repair" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                Electronics Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
