'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Background() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const sections = [
    {
      title: "Education",
      content: "PhD in Clinical Psychology from accredited institution"
    },
    {
      title: "Licensure",
      content: "Licensed Clinical Psychologist (PsyD) in California"
    },
    {
      title: "Certifications",
      content: "EMDR trained and certified in evidence-based therapy practices"
    }
  ]

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-6xl font-serif font-bold text-center text-neutral-900 mb-20">
          My Professional Background
        </h2>

        <div className="max-w-3xl mx-auto border-t border-neutral-400">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-neutral-400">
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full flex items-center justify-between py-6 px-0 text-left hover:text-green-700 transition-colors"
              >
                <span className="text-2xl font-serif font-normal text-neutral-900">
                  {section.title}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`transform transition-transform ${expanded === index ? 'rotate-180' : ''}`}
                />
              </button>

              {expanded === index && (
                <div className="pb-6 text-neutral-700">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Green bar at bottom */}
      <div className="h-24 bg-green-700 mt-24"></div>
    </section>
  )
}
