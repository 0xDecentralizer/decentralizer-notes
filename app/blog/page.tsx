import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { format } from 'date-fns'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Thoughts, tutorials, and learnings about Solidity, Web3, and blockchain development.
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 text-lg">No posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all bg-white dark:bg-gray-800">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
                <h2 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex gap-2">
                  {post.tags?.map((tag: string) => (
                    <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
