'use client'

import ScrollAnimator from '../scroll-animator'

export default function BookAppointment() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-8">
        <ScrollAnimator>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-neutral-900 mb-6">
            Book an appointment.
          </h2>
          <p className="text-center text-neutral-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Add some text here if you like, and add your scheduling widget below you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your own portal.
          </p>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="flex items-center justify-center min-h-96">
            <div className="bg-white border border-neutral-300 rounded-lg p-12 text-center max-w-lg">
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                This page is not active
              </h3>
              <p className="text-sm text-neutral-700 mb-8">
                If you're the owner, please log into your account to start a free trial or subscribe.
              </p>
              <button className="bg-neutral-900 text-white px-8 py-3 rounded hover:bg-neutral-800 transition-colors font-semibold tracking-wide">
                GO TO ACCOUNT
              </button>
            </div>
          </div>
        </ScrollAnimator>

        <div className="mt-16 pt-12 border-t border-neutral-200">
          <ScrollAnimator>
            <p className="text-center text-sm text-neutral-600">
              Powered by <span className="font-medium">monthly scheduling</span>
            </p>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
