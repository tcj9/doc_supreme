import { notFound } from 'next/navigation'
import { getDocContent, getDocNavigation, getAllTools } from '@/lib/docs'
import Sidebar from '@/components/Sidebar'
import Breadcrumbs from '@/components/Breadcrumbs'
import MarkdownRenderer from '@/components/MarkdownRenderer'

interface PageProps {
  params: Promise<{
    category: string
    tool: string
    version: string
    slug: string[]
  }>
}

export async function generateStaticParams() {
  const tools = getAllTools()
  const params: { category: string; tool: string; version: string; slug: string[] }[] = []

  for (const t of tools) {
    for (const v of t.versions) {
      const pages = getDocNavigation(t.category, t.tool, v)
      for (const page of pages) {
        if (page.slug) {
          params.push({
            category: t.category,
            tool: t.tool,
            version: v,
            slug: page.slug.split('/'),
          })
        }
      }
    }
  }

  return params
}

export default async function SlugPage({ params }: PageProps) {
  const { category, tool, version, slug } = await params
  const doc = getDocContent(category, tool, version, slug)
  const pages = getDocNavigation(category, tool, version)

  if (!doc) return notFound()

  const currentSlug = slug.join('/')
  const currentPage = pages.find((p) => p.slug === currentSlug)

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] bg-slate-900">
      <Sidebar pages={pages} category={category} tool={tool} version={version} />
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-10">
          <Breadcrumbs
            items={[
              { label: 'Docs', href: '/' },
              { label: category, href: '/' },
              { label: tool, href: `/docs/${category}/${tool}/${version}` },
              { label: version.startsWith('v') ? version : `v${version}`, href: `/docs/${category}/${tool}/${version}` },
              { label: currentPage?.title || currentSlug },
            ]}
          />
          <MarkdownRenderer content={doc.content} />
        </div>
      </main>
    </div>
  )
}
