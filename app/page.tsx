import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import FAQ from '@/components/FAQ'
import { services, faqItems, PHONE_HREF, PHONE_NUMBER } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        headline="Expert Fish Finder Installation and Boating Electronics in Harned KY"
        subheadline="Fish finders, trolling motors, wiring, and full electronics installs done right the first time."
        locationLine="Serving Harned, KY and surrounding lakes."
        backgroundImage="/images/captain-chris-bass-fishing-kentucky.png"
        ctaText="Get a Quote"
        ctaPhoneText="Call Captain Chris"
      />

      {/* ===== INTRO + GARMIN BADGE ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Harned KY&apos;s Go-To for Boat Electronics Installation
              </h2>
              <p className="text-gray-700 mb-4">
                At Boating Adventures With Captain Chris, we help anglers and boaters get more out of every
                trip on the water. Whether you need a new Garmin fish finder installed, a Minn Kota trolling
                motor wired up, a full lithium battery system built out, or an existing setup diagnosed and
                repaired — we handle it right here in Harned, Kentucky.
              </p>
              <p className="text-gray-700 mb-6">
                Every install is done with clean wiring, solid mounts, and attention to detail. No shortcuts.
                No loose connections. Just professional work from someone who actually runs this equipment on the water.
              </p>
              <p className="text-sm font-semibold text-navy">
                Garmin Authorized Reseller. NMEA Certified. Coast Guard Approved. Locally Owned and Operated.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/garmin-authorized-reseller-badge.jpeg"
                alt="Garmin Authorized Reseller badge - Captain Chris is a certified Garmin dealer in Harned, Kentucky"
                width={240}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
            Boat Electronics Installation & Services in Harned, KY
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Professional installs, wiring, repairs, and upgrades to keep your boat running at its best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={`${service.slug}-${service.title}`}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY QUALITY INSTALLS MATTER ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Why Quality Boat Electronics and Installs Matter
              </h2>
              <p className="text-gray-700 mb-4">
                Modern fishing and boating depend on accurate electronics and dependable installations. A poorly
                wired fish finder or a misaligned trolling motor can cause frustration, missed fish, and even
                unsafe conditions on the water.
              </p>
              <p className="text-gray-700 mb-6">
                That is why working with an experienced, NMEA-certified technician like Captain Chris makes the
                difference. From shallow-water lake fishing to long-distance navigation, having the right tools
                installed the right way lets you focus on the adventure — not the equipment.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange hover:bg-orange-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/garmin-fish-finder-dual-screen-installation.jpeg"
                  alt="Garmin dual fish finder screen installation by Captain Chris showing clean wiring and professional mounting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/lithium-battery-installation-boat-harned-ky.jpeg"
                  alt="Lithium ION battery system installed cleanly in a boat compartment by Captain Chris in Harned KY"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/marine-wiring-supplies-sea-clear-power.jpeg"
                  alt="Sea Clear Power marine wiring kit and supplies used for professional boat wiring in Kentucky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/str8-up-trolling-motor-mount.jpeg"
                  alt="Str8 Up Mounts trolling motor bracket installed on a bass boat for secure trolling motor mounting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY BOATERS TRUST CAPTAIN CHRIS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden md:col-span-1">
              <Image
                src="/images/captain-chris-crappie-fishing-harned-ky.jpeg"
                alt="Captain Chris holding crappie caught while fishing near Harned, Kentucky - trusted boat electronics installer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                Why Boaters Trust Captain Chris
              </h2>
              <p className="text-gray-700 mb-6">
                With decades of boating experience and a dedication to quality, Captain Chris brings deep
                knowledge and real integrity to every install. Customers appreciate our clean work, fast
                response times, and reliable service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy">Clean, Professional Work</span>
                    <span className="text-gray-600"> — Every wire run, every mount, every connection is done right the first time</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy">NMEA Certified, Coast Guard Approved, Licensed & Insured</span>
                    <span className="text-gray-600"> — Your gear is handled by a professional who knows the craft</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy">Fast Turnaround</span>
                    <span className="text-gray-600"> — No weeks-long waits. Most installs are completed quickly so you get back on the water</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy">Honest Recommendations</span>
                    <span className="text-gray-600"> — If something does not need replacing, we will tell you. No upselling, no pressure</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy">Real-World Experience</span>
                    <span className="text-gray-600"> — Captain Chris runs this equipment on the same lakes you fish. He knows what works</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Serving Harned and Surrounding Kentucky Waters
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Based in Harned, KY, we serve boaters throughout central Kentucky including nearby lakes,
            rivers, and fishing communities. All work is performed at our shop in Harned — bring your
            boat to us and leave with your gear rigged right the first time.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { name: 'Rough River Lake', href: '/service-area/rough-river-lake' },
              { name: 'Nolin Lake', href: '/service-area/nolin-lake' },
              { name: 'Hardinsburg, KY', href: '/service-area/hardinsburg-ky' },
              { name: 'Leitchfield, KY', href: '/service-area/leitchfield-ky' },
              { name: 'Falls of Rough', href: '/service-area' },
              { name: 'McDaniels', href: '/service-area' },
              { name: 'Cloverport', href: '/service-area' },
              { name: 'Irvington', href: '/service-area' },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-gray-100 hover:bg-navy hover:text-white text-navy text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Serving Breckinridge County, Grayson County, and surrounding areas
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <CTASection
        heading="Ready to Upgrade Your Boat Electronics?"
        text="Whether you need a fish finder installed, a trolling motor wired, or a full electronics overhaul — Captain Chris is ready to help. Contact us today for a free quote."
      />
    </>
  )
}
