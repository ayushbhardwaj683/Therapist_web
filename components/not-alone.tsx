export default function NotAlone() {
  return (
    <section className="bg-neutral-50">
      <div className="grid grid-cols-2 min-h-screen">
        {/* Left - Image with overlay */}
        <div className="relative bg-neutral-200">
          <img 
            src="https://images.unsplash.com/photo-1439552036328-894b8d949c28?w=800&h=800&fit=crop" 
            alt="Woman looking up" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Content with lavender background */}
        <div className="bg-purple-100 flex flex-col justify-center px-12 py-20">
          <h2 className="text-6xl font-serif font-bold text-neutral-900 mb-8">
            You don't have to do this all <span className="italic">alone</span>.
          </h2>

          <p className="text-lg text-neutral-700 mb-8">
            If you are facing any of these, there's hope:
          </p>

          <ul className="space-y-4 mb-12">
            <li className="text-neutral-700 flex items-start gap-4">
              <span className="text-green-700 font-bold">•</span>
              <span>Persistent feelings of sadness or hopelessness</span>
            </li>
            <li className="text-neutral-700 flex items-start gap-4">
              <span className="text-green-700 font-bold">•</span>
              <span>Trouble focusing or making decisions</span>
            </li>
            <li className="text-neutral-700 flex items-start gap-4">
              <span className="text-green-700 font-bold">•</span>
              <span>Difficulty maintaining relationships</span>
            </li>
            <li className="text-neutral-700 flex items-start gap-4">
              <span className="text-green-700 font-bold">•</span>
              <span>Feeling constantly exhausted or unmotivated</span>
            </li>
            <li className="text-neutral-700 flex items-start gap-4">
              <span className="text-green-700 font-bold">•</span>
              <span>A pervasive sense of being overwhelmed</span>
            </li>
          </ul>

          <p className="text-lg text-neutral-700">
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>
      </div>
    </section>
  )
}
