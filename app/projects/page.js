export const metadata = {
  title: 'Projects | Decentralizer Notes',
  description: 'Smart contract projects and dApps',
}

export default function Projects() {
  const projects = [
    {
      title: "Coming Soon",
      description: "I'm currently working on my first projects. Check back soon!",
      tech: ["Solidity", "Hardhat", "Next.js"],
      status: "planning",
      github: null,
      demo: null
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="terminal-border bg-black/70 p-8 backdrop-blur-sm mb-8">
        <h1 className="text-4xl font-bold mb-4 text-green-400 terminal-glow">
          <span className="text-green-500">$</span> Projects
        </h1>
        <p className="text-green-300/70">
          Smart contracts and dApps I'm building
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="terminal-border bg-black/70 p-6 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-green-400">
                <span className="text-green-500">&gt;</span> {project.title}
              </h2>
              <span className={`text-xs px-3 py-1 border ${
                project.status === 'live' ? 'border-green-500 text-green-400' :
                project.status === 'development' ? 'border-yellow-500 text-yellow-400' :
                'border-green-500/30 text-green-400/60'
              }`}>
                {project.status}
              </span>
            </div>

            <p className="text-green-300/70 mb-4">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map(tech => (
                <span 
                  key={tech}
                  className="text-xs px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-green-500/20">
              {project.github && (
                <a
                  href={project.github}
                  className="text-green-400 hover:terminal-glow transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-green-400 hover:terminal-glow transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → Live Demo
                </a>
              )}
              {!project.github && !project.demo && (
                <span className="text-green-400/40">
                  Links coming soon...
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 terminal-border bg-black/70 p-6 backdrop-blur-sm">
        <p className="text-green-400/60 text-center">
          <span className="text-green-500">💡</span> Have a project idea or want to collaborate? 
          <a href="/about" className="ml-2 text-green-400 hover:underline">
            Get in touch
          </a>
        </p>
      </div>
    </div>
  )
}
