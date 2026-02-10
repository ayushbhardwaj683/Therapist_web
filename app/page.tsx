import Header from '@/components/header'
import IntroHero from '@/components/intro-hero'
import Hero from '@/components/hero'
import Specialties from '@/components/specialties'
import Faqs from '@/components/faqs'
import NotAlone from '@/components/not-alone'
import Background from '@/components/background'
import ContactInfo from '@/components/contact-info'
import Footer from '@/components/footer'
import ScrollAnimator from '@/components/scroll-animator'

export default function Page() {
  return (
    <main className="bg-neutral-50">
      <Header />
      <div className="pt-16 md:pt-20" />
      <IntroHero />
      <Hero />
      <Specialties />
      <NotAlone />
      <Faqs />
      <Background />

      <section id="get-started" className="w-full bg-green-800 py-32 md:py-48 text-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <ScrollAnimator>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Get started today.
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 font-light max-w-2xl mx-auto">
              Ready to take the first step towards a happier, healthier you? Contact me to book your first session. I look forward to starting this therapeutic journey with you.
            </p>
            <button className="bg-white text-green-800 px-8 py-4 font-semibold tracking-widest hover:bg-neutral-100 transition-colors duration-300">
              GET IN TOUCH →
            </button>
          </ScrollAnimator>
        </div>
      </section>

      <ContactInfo />
      <Footer />
    </main>
  )
}




