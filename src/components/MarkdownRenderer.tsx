'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-slate max-w-none
      prose-headings:font-semibold prose-headings:text-white
      prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-slate-700
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-slate-300 prose-p:leading-7
      prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-white
      prose-code:text-indigo-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
      prose-pre:bg-slate-800/80 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl prose-pre:overflow-x-auto
      prose-pre:code:bg-transparent prose-pre:code:p-0 prose-pre:code:text-sm
      prose-blockquote:border-l-indigo-500 prose-blockquote:text-slate-400
      prose-ul:text-slate-300 prose-ol:text-slate-300
      prose-li:my-1
      prose-table:text-slate-300
      prose-th:text-white prose-th:bg-slate-800
      prose-td:border-slate-700 prose-th:border-slate-700
      prose-hr:border-slate-700
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
