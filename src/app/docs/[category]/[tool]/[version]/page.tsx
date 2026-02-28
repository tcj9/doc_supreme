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
  }>
}

export async function generateStaticParams() {
  const tools = getAllTools()
  return tools.flatMap((t) =>
    t.versions.map((v) => ({
      category: t.category,
      tool: t.tool,
      version: v,
    }))
  )
}

export default async function VersionPage({ params }: PageProps) {
  const { category, tool, version } = await params
  const doc = getDocContent(category, tool, version)
  const pages = getDocNavigation(category, tool, version)

  if (!doc) return notFound()

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
              { label: `v${version}` },
            ]}
          />
          <MarkdownRenderer content={doc.content} />
        </div>
      </main>
    </div>
  )
}
