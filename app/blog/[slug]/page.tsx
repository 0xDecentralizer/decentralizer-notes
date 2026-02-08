import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { format } from 'date-fns'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  return {
    title: `${post.title} - Decentralizer Notes`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 inline-block">
        ← Back to Blog
      </Link>
      
      <article>
        <header className="mb-8">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </time>
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex gap-2 mb-4">
            {post.tags?.map((tag: string) => (
              <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote 
            source={post.content}
            components={{
              code: ({ className, children, ...props }: any) => {
                const isInline = !className
                return (
                  <CodeBlock 
                    className={className}
                    inline={isInline}
                  >
                    {children}
                  </CodeBlock>
                )
              },
            }}
          />
        </div>
      </article>

      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          ← Back to all posts
        </Link>
      </div>
    </div>
  )
}
