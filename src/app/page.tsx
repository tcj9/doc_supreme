import Link from 'next/link'
import { getAllTools } from '@/lib/docs'

const categoryIcons: Record<string, string> = {
  frameworks: '⚛️',
  apis: '🔌',
  'build-tools': '🔧',
}

const categoryDescriptions: Record<string, string> = {
  frameworks: 'UI and application frameworks',
  apis: 'Third-party APIs and services',
  'build-tools': 'Bundlers, compilers, and dev tools',
}

const toolDescriptions: Record<string, string> = {
  react: 'A JavaScript library for building user interfaces',
  youtube: 'Access YouTube data: videos, channels, playlists, and more',
}

export default function HomePage() {
  const tools = getAllTools()

  // Group by category
  const grouped: Record<string, typeof tools> = {}
  for (const t of tools) {
    if (!grouped[t.category]) grouped[t.category] = []
    grouped[t.category].push(t)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-indigo-400 text-sm font-medium">Documentation Platform</span>
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">
          Doc <span className="text-indigo-400">Supreme</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Beautiful, searchable documentation for modern frameworks, APIs, and tools.
          Everything you need, exactly where you expect it.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs/frameworks/react/19.2"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Explore React 19.2 →
          </Link>
          <Link
            href="/docs/apis/youtube/v3"
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            YouTube API v3 →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {Object.entries(grouped).map(([category, categoryTools]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{categoryIcons[category] || '📦'}</span>
              <div>
                <h2 className="text-2xl font-bold text-white capitalize">{category}</h2>
                <p className="text-slate-400 text-sm">{categoryDescriptions[category] || ''}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTools.map((t) => (
                <Link
                  key={t.tool}
                  href={`/docs/${t.category}/${t.tool}/${t.versions[0]}`}
                  className="group block bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 rounded-xl p-6 transition-all hover:bg-slate-800"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors capitalize">
                      {t.tool}
                    </h3>
                    <div className="flex gap-1.5 flex-wrap justify-end">
                      {t.versions.map((v) => (
                        <span
                          key={v}
                          className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-2 py-0.5"
                        >
                          v{v}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {toolDescriptions[t.tool] || `Documentation for ${t.tool}`}
                  </p>
                  <div className="mt-4 text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View docs →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
