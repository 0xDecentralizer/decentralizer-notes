export default function ProjectsPage() {
  const projects = [
    {
      title: "Simple Token Contract",
      description: "My first ERC-20 token implementation with basic transfer and balance functionality.",
      tech: ["Solidity", "Hardhat", "OpenZeppelin"],
      status: "completed",
      github: "https://github.com/yourusername/simple-token",
    },
    // Add more projects as you build them
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Smart contracts, dApps, and experiments I'm building to learn Web3 development.
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all bg-white dark:bg-gray-800">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
              <span className={`text-xs px-2 py-1 rounded ${
                project.status === 'completed' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' :
                project.status === 'in-progress' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300' :
                'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
            >
              View on GitHub →
            </a>
          </div>
        ))}

        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">More projects coming soon!</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            I'm actively building and will be adding new projects regularly.
          </p>
        </div>
      </div>
    </div>
  )
}
