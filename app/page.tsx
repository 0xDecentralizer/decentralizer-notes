import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Building on the Blockchain,
          <span className="block text-blue-600 dark:text-blue-400 mt-2">Learning in Public</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to my learning journey. I'm documenting my path from Solidity beginner 
          to blockchain developer, sharing tutorials, insights, and projects along the way.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link href="/blog" className="group">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-gray-900 dark:text-white">📝 Blog</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tutorials, insights, and deep dives into Solidity, smart contracts, and Web3 development.
            </p>
          </div>
        </Link>

        <Link href="/projects" className="group">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-gray-900 dark:text-white">🚀 Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Smart contracts, dApps, and experiments I'm building to learn and contribute to Web3.
            </p>
          </div>
        </Link>

        <Link href="/learning" className="group">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-gray-900 dark:text-white">📚 Learning Log</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Weekly updates on what I'm learning, resources I find valuable, and my progress.
            </p>
          </div>
        </Link>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Why This Site?</h3>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I believe in learning in public. By documenting my journey, I reinforce my own learning, 
          help others who are on a similar path, and build a portfolio that showcases my growth. 
          Plus, it keeps me accountable and motivated to keep pushing forward.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Recent Posts</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Coming soon... Writing my first post!</p>
        <Link 
          href="/blog" 
          className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          View All Posts →
        </Link>
      </div>
    </div>
  )
}
