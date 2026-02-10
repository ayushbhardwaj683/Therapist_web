import Header from '@/components/header'
import ScrollAnimator from '@/components/scroll-animator'

const blogPosts = [
  {
    id: 1,
    title: 'Blog Post One',
    date: '3/11/19',
    excerpt: 'A glimpse into my thoughts on personal growth and self-discovery.',
  },
  {
    id: 2,
    title: 'Blog Post Two',
    date: '3/11/19',
    excerpt: 'Exploring the connection between mindfulness and everyday life.',
  },
  {
    id: 3,
    title: 'Blog Post Three',
    date: '3/11/19',
    excerpt: 'Understanding the importance of self-care and boundaries.',
  },
  {
    id: 4,
    title: 'Blog Post Four',
    date: '3/11/19',
    excerpt: 'Building a healthier relationship with yourself and others.',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-neutral-50 pt-24">
      <Header />

      <section className="w-full bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-8 max-w-4xl">
          <ScrollAnimator>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-4">
                The Lilac Blog
              </h1>
              <p className="text-lg text-neutral-600 font-light">
                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
              </p>
              <p className="text-xl font-serif font-semibold text-neutral-900 mt-6">
                Glad you&apos;re here.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      <section className="w-full bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <ScrollAnimator key={post.id} delay={index * 100}>
                <div className="group">
                  <div className="image-placeholder mb-6 overflow-hidden rounded-sm">
                    <div className="w-full h-96 bg-gradient-to-br from-neutral-300 to-neutral-200 flex items-center justify-center">
                      <span className="text-neutral-500 text-sm font-medium">Image Placeholder</span>
                    </div>
                  </div>

                  <div className="text-sm text-neutral-600 mb-3">{post.date}</div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <a href="#" className="text-neutral-900 hover:text-green-700 font-semibold underline transition-colors">
                    Read More
                  </a>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-neutral-50 border-t border-neutral-200 py-16">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Lilac Template</h3>
              <p className="text-neutral-600 mb-2">123 Example Road</p>
              <p className="text-neutral-600 mb-4">Minneapolis, MN</p>
              <a href="mailto:email@example.com" className="text-neutral-900 underline hover:text-green-700 transition-colors block mb-1">
                email@example.com
              </a>
              <a href="tel:+15555555555" className="text-neutral-900 underline hover:text-green-700 transition-colors">
                (555) 555-5555
              </a>
            </div>

            <div>
              <h4 className="font-serif text-xl font-semibold text-neutral-900 mb-4">Hours</h4>
              <p className="text-neutral-600 mb-1">Monday – Friday</p>
              <p className="text-neutral-600">10am – 6pm</p>
            </div>

            <div className="text-right">
              <h4 className="font-serif text-xl font-semibold text-neutral-900 mb-4">Find</h4>
              <div className="flex flex-col gap-2">
                <a href="/" className="text-neutral-900 hover:text-green-700 transition-colors underline">Home</a>
                <a href="#contact" className="text-neutral-900 hover:text-green-700 transition-colors underline">Contact</a>
                <a href="/blog" className="text-neutral-900 hover:text-green-700 transition-colors underline">Blog</a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <a href="#" className="text-neutral-900 hover:text-green-700 transition-colors underline text-sm">Privacy & Cookies Policy</a>
              <a href="#" className="text-neutral-900 hover:text-green-700 transition-colors underline text-sm">Good Faith Estimate</a>
              <a href="#" className="text-neutral-900 hover:text-green-700 transition-colors underline text-sm">Website Terms & Conditions</a>
              <a href="#" className="text-neutral-900 hover:text-green-700 transition-colors underline text-sm">Disclaimer</a>
            </div>

            <p className="text-center text-neutral-600 text-sm mb-2">
              Website Template Credits: <a href="#" className="underline hover:text-green-700 transition-colors">Go Bloom Creative</a>
            </p>

            <p className="text-center text-neutral-600 text-sm">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
