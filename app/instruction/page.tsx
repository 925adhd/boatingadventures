import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Boat Electronics Instruction & Training | Captain Chris | Harned, KY',
  description: 'Learn how to use your fish finder, GPS, and boat electronics with hands-on instruction from Captain Chris in Harned, Kentucky.',
}

export default function InstructionPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boat Electronics Instruction & Training
          </h1>
          <p className="text-gray-300 text-lg">
            Get the most out of your electronics with hands-on training from Captain Chris.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero image for the instruction page */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-10">
            <Image
              src="/images/garmin-fish-finder-dual-screen-installation.jpeg"
              alt="Garmin dual screen fish finder setup used for hands-on boat electronics instruction in Kentucky"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-8">
                Buying new electronics is only half the battle. Knowing how to actually use them on the water
                is what makes the difference. Captain Chris offers one-on-one instruction to help you get
                comfortable with your fish finder, GPS, and other marine electronics.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">What You Will Learn</h2>
              <ul className="space-y-2 mb-8">
                {[
                  'How to read and interpret your fish finder display',
                  'Setting up waypoints and routes on your GPS',
                  'Understanding sonar settings for different conditions',
                  'Using Livescope, ActiveTarget, and forward-facing sonar',
                  'Networking multiple screens and sharing data',
                  'Tips for finding fish in local lakes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Brand units Captain Chris teaches on */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/lowrance-elite-fish-finder-sonar.jpeg"
                    alt="Lowrance Elite fish finder with sonar display - learn to use Lowrance electronics with Captain Chris"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/humminbird-xplore-12-fish-finder.jpeg"
                    alt="Humminbird Xplore 12 fish finder with GPS and sonar - instruction available from Captain Chris"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-navy mb-4">Who This Is For</h2>
              <p className="text-gray-700 mb-8">
                Whether you just bought a new unit or have had one sitting on your dash for years that you have never
                fully figured out, Captain Chris can help. No question is too basic — the goal is to get you confident
                and catching more fish.
              </p>

              <h2 className="text-xl font-bold text-navy mb-4">How It Works</h2>
              <p className="text-gray-700 mb-4">
                Instruction sessions are available on your boat or at a location that works for you.
                Sessions can be tailored to your specific equipment and skill level.
                Contact Captain Chris to set up a time.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-navy mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/fish-finder-installation" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                    Fish Finder Installation
                  </Link>
                  <Link href="/services/boat-electronics-installation" className="text-sm bg-gray-100 hover:bg-navy hover:text-white text-navy px-4 py-2 rounded-lg transition-colors">
                    Boat Electronics Installation
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-navy mb-4">Book a Session</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Learn?"
        text="Book a one-on-one instruction session with Captain Chris today."
      />
    </>
  )
}
