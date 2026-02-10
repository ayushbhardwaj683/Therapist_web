'use client'

import ScrollAnimator from '../scroll-animator'
import ImagePlaceholder from '../image-placeholder'

export default function MyOffice() {
  return (
    <section className="bg-green-900 py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Office Info */}
          <ScrollAnimator>
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12">
                My Office
              </h2>
              
              <div className="space-y-10">
                <div>
                  <p className="text-lg text-white mb-1">123 Example Street</p>
                  <p className="text-lg text-white">Minneapolis, MN</p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Hours</h3>
                  <p className="text-white">Monday – Friday</p>
                  <p className="text-white">10am – 6pm</p>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Right - Map Placeholder */}
          <ScrollAnimator delay={100}>
            <ImagePlaceholder 
              className="w-full h-96"
              rounded="none"
              alt="Office location map"
            />
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
