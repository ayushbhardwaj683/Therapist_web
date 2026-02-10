'use client'

import ScrollAnimator from './scroll-animator'

export default function ContactInfo() {
  return (
    <section className="bg-neutral-50 py-24 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {/* Left - Business Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                Lilac Template
              </h3>
              <p className="text-neutral-700 mb-4">123 Example Road</p>
              <p className="text-neutral-700 mb-8">Minneapolis, MN</p>
              <a href="mailto:email@example.com" className="text-neutral-700 hover:text-green-700 transition-colors underline block mb-2">
                email@example.com
              </a>
              <a href="tel:+15555555555" className="text-neutral-700 hover:text-green-700 transition-colors underline">
                (555) 555-5555
              </a>
            </div>

            {/* Middle - Hours */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                Hours
              </h3>
              <p className="text-neutral-700 mb-2 font-medium">Monday – Friday</p>
              <p className="text-neutral-700">10am – 6pm</p>
            </div>

            {/* Right - Navigation */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                Find
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="/" className="text-neutral-700 hover:text-green-700 transition-colors hover:underline">
                  Home
                </a>
                <a href="/contact" className="text-neutral-700 hover:text-green-700 transition-colors hover:underline">
                  Contact
                </a>
                <a href="/blog" className="text-neutral-700 hover:text-green-700 transition-colors hover:underline">
                  Blog
                </a>
              </nav>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
