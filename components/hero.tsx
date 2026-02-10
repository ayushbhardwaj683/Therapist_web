'use client'

import ScrollAnimator from './scroll-animator'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-neutral-50">
      {/* Left side - Content */}
      <ScrollAnimator>
        <div className="flex flex-col justify-center px-8 md:px-12 py-20 bg-neutral-100">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-neutral-900 mb-12">
            Live a fulfilling life.
          </h1>
          
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed max-w-md">
            Life can be challenging—especially when you're trying to balance your personal and professional life.
          </p>
          
          <p className="text-lg text-neutral-700 mb-12 leading-relaxed max-w-md">
            It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
          </p>
          
          <div className="w-full">
            <button className="btn-lilac">
              GET IN TOUCH →
            </button>
          </div>
        </div>
      </ScrollAnimator>

      {/* Right side - Square Image Placeholder */}
      <ScrollAnimator delay={100}>
        <div className="relative bg-white flex items-center justify-center overflow-hidden min-h-96 md:min-h-screen p-8">
          <div className="w-full max-w-md h-96 md:h-full md:max-h-96 bg-neutral-300 flex items-center justify-center text-neutral-500 font-medium rounded-lg">
            {/* 
              ADD IMAGE HERE:
              Replace the placeholder with your image:
              <img 
                src="/images/hero-image.jpg" 
                alt="Live a fulfilling life" 
                className="w-full h-full object-cover rounded-lg"
              />
            */}
            Image Placeholder
          </div>
        </div>
      </ScrollAnimator>
    </section>
  )
}
