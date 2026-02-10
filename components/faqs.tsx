'use client'

import { useState } from 'react'
import ScrollAnimator from './scroll-animator'

export default function Faqs() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "I work with many insurance plans. Please contact me to discuss your specific coverage."
    },
    {
      question: "What are your rates?",
      answer: "Session rates vary based on the type of service. Please reach out for current pricing information."
    },
    {
      question: "Do you have any openings?",
      answer: "I maintain a limited caseload to ensure quality care. Please contact me to discuss availability."
    }
  ]

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Image Placeholder */}
          <ScrollAnimator>
            <div className="rounded-lg w-full h-96 overflow-hidden bg-neutral-300 flex items-center justify-center">
              <span className="text-neutral-500 font-medium">Image Placeholder</span>
            </div>
          </ScrollAnimator>

          {/* Right - FAQs */}
          <ScrollAnimator>
            <div>
              <h2 className="text-6xl font-serif font-bold text-neutral-900 mb-12">
                FAQs
              </h2>

              <div className="space-y-0 border-t border-neutral-400">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-neutral-400">
                    <button
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      className="w-full flex items-center justify-between py-6 px-0 text-left hover:text-green-700 transition-colors group"
                    >
                      <span className="text-2xl font-serif font-normal text-neutral-900 group-hover:text-green-700 transition-colors">
                        {faq.question}
                      </span>
                      <span className={`text-3xl text-neutral-900 group-hover:text-green-700 transition-all transform ${expanded === index ? 'rotate-180' : ''}`}>
                        +
                      </span>
                    </button>
                    
                    {expanded === index && (
                      <div className="pb-6 text-neutral-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
