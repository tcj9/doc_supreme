'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { DocPage } from '@/lib/docs'

interface SidebarProps {
  pages: DocPage[]
  category: string
  tool: string
  version: string
}

export default function Sidebar({ pages, category, tool, version }: SidebarProps) {
  const pathname = usePathname()
  const basePath = `/docs/${category}/${tool}/${version}`

  return (
    <aside className="w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-900 border-r border-slate-700/50">
      <div className="p-4">
        <div className="mb-4 pb-4 border-b border-slate-700/50">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            {category}
          </p>
          <h2 className="text-white font-semibold capitalize">{tool}</h2>
          <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded px-1.5 py-0.5">
            v{version}
          </span>
        </div>

        <nav className="space-y-0.5">
          {pages.map((page) => {
            const href = page.slug ? `${basePath}/${page.slug}` : basePath
            const isActive = pathname === href || (page.slug === '' && pathname === basePath)

            return (
              <Link
                key={page.slug || 'index'}
                href={href}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {page.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
