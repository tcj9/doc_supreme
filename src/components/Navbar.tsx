import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            Doc <span className="text-indigo-400">Supreme</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/docs/frameworks/react/19.2" className="hover:text-white transition-colors">
            React
          </Link>
          <Link href="/docs/apis/youtube/v3" className="hover:text-white transition-colors">
            YouTube API
          </Link>
        </div>
      </div>
    </nav>
  )
}
