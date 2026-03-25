import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { PHONE_NUMBER, PHONE_HREF, EMAIL, LOCATION } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Captain Chris | Boat Electronics Service in Harned, KY',
  description: 'Contact Captain Chris for boat electronics installation, fish finder setup, trolling motor installation, and marine electronics repair in Harned, Kentucky.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Captain Chris</h1>
          <p className="text-gray-300 text-lg">
            Ready to get your boat electronics installed or repaired? Reach out today.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href={PHONE_HREF} className="text-orange hover:text-orange-light text-lg font-semibold">
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Call or text anytime</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-orange hover:text-orange-light">
                    {EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-700">{LOCATION}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Serving Rough River Lake, Nolin Lake, Hardinsburg, Leitchfield, and surrounding areas
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy mb-2">What to Expect</h3>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-navy">1.</span>
                      Send a message or give Captain Chris a call
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-navy">2.</span>
                      Discuss your project and get a quote
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-navy">3.</span>
                      Schedule your installation or service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-navy">4.</span>
                      Get back on the water with confidence
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
