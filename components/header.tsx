'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-neutral-50 border-b border-neutral-200 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <a href="/" className="text-2xl font-serif font-semibold text-neutral-900 hover:text-green-700 transition-colors">Lilac Template</a>
      <nav className="flex gap-8">
        <a href="/blog" className="text-neutral-900 hover:text-green-700 transition-colors font-medium">Blog</a>
        <a href="/contact" className="text-neutral-900 hover:text-green-700 transition-colors font-medium">Contact</a>
      </nav>
    </header>
  )
}
