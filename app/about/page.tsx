export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Hey! I'm Mohammad Mahdi (0xDecentralizer).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">My Journey</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I started learning blockchain development because I believe in the potential of 
          decentralized systems to create more transparent, fair, and accessible applications. 
          Currently, I'm at an intermediate level with Solidity and beginner level with JavaScript, 
          and I'm documenting everything I learn along the way.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">What I'm Learning</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>Solidity smart contract development</li>
          <li>Next.js and modern web development</li>
          <li>Web3 integration and dApp development</li>
          <li>Security best practices for smart contracts</li>
          <li>Testing and deployment on Ethereum</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Why This Site?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'm building this site to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li><strong className="text-gray-900 dark:text-white">Learn in public:</strong> Teaching others helps me learn better</li>
          <li><strong className="text-gray-900 dark:text-white">Build a portfolio:</strong> Showcase my projects and skills</li>
          <li><strong className="text-gray-900 dark:text-white">Connect with the community:</strong> Meet other developers and learners</li>
          <li><strong className="text-gray-900 dark:text-white">Stay accountable:</strong> Regular updates keep me motivated</li>
          <li><strong className="text-gray-900 dark:text-white">Give back:</strong> Help others who are on a similar journey</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Connect With Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'd love to connect! Feel free to reach out:
        </p>
        <ul className="list-none space-y-2 mb-6">
          <li>
            <a href="https://github.com/0xdecentralizer" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              GitHub - Check out my projects
            </a>
          </li>
          <li>
            <a href="https://twitter.com/0xdecentralizer" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              Twitter - Follow my journey
            </a>
          </li>
          <li>
            <a href="https://t.me/Oxdecentralizer" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              Telegram - Connect closer =]
            </a>
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8">
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Currently looking for opportunities!</strong> If you're interested in working 
            together or know of any positions for junior blockchain developers, I'd love to hear from you.
          </p>
        </div>
      </div>
    </div>
  )
}
