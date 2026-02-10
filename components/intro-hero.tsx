'use client'

import ScrollAnimator from './scroll-animator'

export default function IntroHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-neutral-50">
      {/* Left side - Circular Image Placeholder */}
      <ScrollAnimator>
        <div className="relative bg-white flex items-center justify-center overflow-hidden min-h-96 md:min-h-screen">
          <div className="relative z-10 w-80 md:w-96 h-80 md:h-96 rounded-full bg-neutral-300 flex items-center justify-center text-neutral-500 font-medium overflow-hidden">
            {/* 
              ADD IMAGE HERE:
              Replace the placeholder with your image:
              <img 
                src="/images/intro-hero.jpg" 
                alt="Live your life in full bloom" 
                className="w-full h-full object-cover"
              />
            */}
            Image Placeholder
          </div>
        </div>
      </ScrollAnimator>

      {/* Right side - Content */}
      <ScrollAnimator delay={100}>
        <div className="flex flex-col justify-center px-8 md:px-12 py-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-6">
            Live your life in full bloom
          </h1>
          
          <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
            Therapy for Adults in Minneapolis, MN.
          </p>
          
          <div className="w-full">
            <button className="btn-lilac">
              CONNECT WITH ME →
            </button>
          </div>
        </div>
      </ScrollAnimator>
    </section>
  )
}
