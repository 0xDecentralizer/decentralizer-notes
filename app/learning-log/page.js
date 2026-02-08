export const metadata = {
  title: 'Learning Log | Decentralizer Notes',
  description: 'Weekly updates on what I\'m learning',
}

export default function LearningLog() {
  const logs = [
    {
      week: "Week 1",
      date: "Feb 8, 2025",
      learnings: [
        "Built this website with Next.js 14 and deployed to Vercel",
        "Reviewed Solidity storage patterns and gas optimization",
        "Started learning about upgradeable smart contracts"
      ],
      resources: [
        { title: "Next.js App Router Docs", url: "https://nextjs.org/docs" },
        { title: "Solidity Gas Optimization", url: "#" }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="terminal-border bg-black/70 p-8 backdrop-blur-sm mb-8">
        <h1 className="text-4xl font-bold mb-4 text-green-400 terminal-glow">
          <span className="text-green-500">$</span> Learning Log
        </h1>
        <p className="text-green-300/70">
          Weekly updates on my learning journey
        </p>
      </div>

      <div className="space-y-6">
        {logs.map((log, idx) => (
          <div 
            key={idx}
            className="terminal-border bg-black/70 p-6 backdrop-blur-sm"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="text-2xl font-bold text-green-400">
                <span className="text-green-500">&gt;</span> {log.week}
              </h2>
              <time className="text-green-400/60 text-sm">
                {log.date}
              </time>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">
                What I Learned:
              </h3>
              <ul className="space-y-2">
                {log.learnings.map((learning, i) => (
                  <li key={i} className="text-green-300/80 flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {log.resources && log.resources.length > 0 && (
              <div className="pt-4 border-t border-green-500/20">
                <h3 className="text-sm font-bold text-green-400/70 mb-2">
                  Helpful Resources:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {log.resources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.url}
                      className="text-sm text-green-400 hover:terminal-glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      → {resource.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 terminal-border bg-black/70 p-6 backdrop-blur-sm">
        <p className="text-green-400/60">
          <span className="text-green-500">📝</span> I update this log every week. 
          Follow along to see my progress!
        </p>
      </div>
    </div>
  )
}
