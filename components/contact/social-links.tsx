'use client'

import ScrollAnimator from '../scroll-animator'
import ImagePlaceholder from '../image-placeholder'

export default function SocialLinks() {
  const socialImages = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]

  return (
    <section className="bg-neutral-50 py-24 md:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-16">
            Find me on social.
          </h2>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialImages.map((image) => (
              <ImagePlaceholder
                key={image.id}
                className="w-full aspect-square"
                alt={`Social post ${image.id}`}
              />
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
