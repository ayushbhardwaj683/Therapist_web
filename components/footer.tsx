export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-50 py-12 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm">© 2024 Lilac Template. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm hover:text-green-400 transition-colors">Privacy</a>
          <a href="#" className="text-sm hover:text-green-400 transition-colors">Terms</a>
          <a href="#" className="text-sm hover:text-green-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
