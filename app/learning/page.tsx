export default function LearningPage() {
  const learningLogs = [
    {
      week: "Week 1 - February 2025",
      topics: [
        "Understanding ERC-20 token standards",
        "Setting up Hardhat development environment",
        "Writing my first unit tests for smart contracts",
      ],
      resources: [
        { title: "OpenZeppelin Contracts Documentation", url: "https://docs.openzeppelin.com" },
        { title: "Hardhat Tutorial", url: "https://hardhat.org/tutorial" },
      ],
      reflection: "This week I focused on the basics of ERC-20 tokens. The most challenging part was understanding how to properly test smart contracts. I learned that testing is crucial in blockchain development because deployed contracts can't be easily modified.",
    },
    // Add more weekly logs
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Learning Log</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Weekly updates on what I'm learning, challenges I'm facing, and resources I find valuable.
      </p>

      <div className="space-y-12">
        {learningLogs.map((log, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{log.week}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">What I Learned</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                {log.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Helpful Resources</h3>
              <ul className="space-y-2">
                {log.resources.map((resource, i) => (
                  <li key={i}>
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      {resource.title} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Reflection</h3>
              <p className="text-gray-700 dark:text-gray-300">{log.reflection}</p>
            </div>
          </div>
        ))}

        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">More updates coming every week!</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            I update this log every Sunday with my weekly learnings and progress.
          </p>
        </div>
      </div>
    </div>
  )
}
