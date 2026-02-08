'use client'

import { useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-solidity'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'

export function CodeBlock({ 
  children, 
  className,
  inline 
}: { 
  children: string
  className?: string
  inline?: boolean
}) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current && !inline) {
      Prism.highlightElement(codeRef.current)
    }
  }, [children, inline])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // If inline code, return simple code tag
  if (inline) {
    return <code className="inline-code">{children}</code>
  }

  // Block code with copy button
  return (
    <div className="relative group my-6">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Copy code"
      >
        {copied ? '✓ Copied!' : 'Copy'}
      </button>
      <pre className="!p-4 !m-0">
        <code ref={codeRef} className={className}>
          {children}
        </code>
      </pre>
    </div>
  )
}