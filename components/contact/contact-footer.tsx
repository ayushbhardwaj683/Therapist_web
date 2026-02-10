'use client'

import ScrollAnimator from '../scroll-animator'

export default function ContactFooter() {
  return (
    <footer className="bg-neutral-100 py-20 border-t border-neutral-300">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Left - Business Info */}
            <div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-6">
                Lilac Template
              </h3>
              <div className="space-y-3 text-neutral-700">
                <p>123 Example Road</p>
                <p>Minneapolis, MN</p>
                <p className="mt-4">
                  <a href="mailto:email@example.com" className="hover:text-green-700 transition-colors underline">
                    email@example.com
                  </a>
                </p>
                <p>
                  <a href="tel:+15555555555" className="hover:text-green-700 transition-colors underline">
                    (555) 555-5555
                  </a>
                </p>
              </div>
            </div>

            {/* Center - Hours */}
            <div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-6">
                Hours
              </h3>
              <div className="space-y-2 text-neutral-700">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            {/* Right - Navigation */}
            <div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-6">
                Find
              </h3>
              <div className="space-y-2">
                <div>
                  <a href="/" className="text-neutral-700 hover:text-green-700 transition-colors underline">
                    Home
                  </a>
                </div>
                <div>
                  <a href="/contact" className="text-neutral-700 hover:text-green-700 transition-colors underline">
                    Contact
                  </a>
                </div>
                <div>
                  <a href="/blog" className="text-neutral-700 hover:text-green-700 transition-colors underline">
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimator>

        {/* Bottom Links */}
        <ScrollAnimator>
          <div className="border-t border-neutral-300 pt-12 text-center">
            <div className="space-y-4 text-sm text-neutral-600">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="hover:text-green-700 transition-colors underline">Privacy & Cookies Policy</a>
                <a href="#" className="hover:text-green-700 transition-colors underline">Good Faith Estimate</a>
                <a href="#" className="hover:text-green-700 transition-colors underline">Website Terms & Conditions</a>
                <a href="#" className="hover:text-green-700 transition-colors underline">Disclaimer</a>
              </div>
              <p>
                Website Template Credits: <a href="#" className="hover:text-green-700 transition-colors underline">Go Bloom Creative</a>
              </p>
              <p>
                All Rights Reserved © 2024 Your Business Name Here, LLC.
              </p>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </footer>
  )
}
