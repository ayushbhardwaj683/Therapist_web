'use client'

import ScrollAnimator from '../scroll-animator'
import ImagePlaceholder from '../image-placeholder'

export default function LetsConnect() {
  return (
    <section className="bg-blue-200 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollAnimator>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-green-900 mb-12">
            Let's Connect
          </h2>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left - Text and Image Placeholders */}
          <ScrollAnimator>
            <div>
              <p className="text-lg text-neutral-800 mb-8">
                Starting therapy is courageous.
              </p>
              <p className="text-base text-neutral-700 mb-16 leading-relaxed max-w-sm">
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>

              {/* Overlapping circular images */}
              <div className="relative h-72 w-80">
                <div className="absolute top-0 left-0 z-10">
                  <ImagePlaceholder 
                    className="w-72 h-72"
                    rounded="full"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-0">
                  <ImagePlaceholder 
                    className="w-56 h-56"
                    rounded="full"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Right - Dark Green Info Box */}
          <ScrollAnimator delay={100}>
            <div className="bg-green-800 p-8 md:p-12 text-white rounded-lg min-h-96 flex items-center">
              <p className="text-base leading-relaxed font-light">
                <span className="font-semibold">PLEASE NOTE:</span> If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
