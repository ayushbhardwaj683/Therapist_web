'use client'

import ScrollAnimator from './scroll-animator'

export default function Specialties() {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    }
  ]

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollAnimator>
          <h2 className="text-6xl font-serif font-bold text-center text-neutral-900 mb-20">
            My Specialties
          </h2>
        </ScrollAnimator>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specialties.map((specialty, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <div className="border border-neutral-400 p-8 bg-neutral-100">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                  {specialty.title}
                </h3>
                
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  {specialty.description}
                </p>
                
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto bg-neutral-300">
                  <div className="w-full h-full flex items-center justify-center text-neutral-500 font-medium text-sm">
                    Image Placeholder
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  )
}
