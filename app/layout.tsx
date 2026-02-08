import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decentralizer Notes - Learn Solidity & Web3 in Public',
  description:
    'My journey learning Solidity, smart contracts, and Web3 development. Building in public and sharing knowledge.',
  keywords: [
    'Solidity',
    'Web3',
    'Blockchain',
    'Smart Contracts',
    'Ethereum',
    'Learning in Public',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
            
            {/* Header */}
            <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <nav className="max-w-4xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                  
                  {/* Logo + Title */}
                  <Link
                    href="/"
                    className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Image
                      src="/logo.png"
                      alt="Decentralizer Logo"
                      width={64}
                      height={64}
                      priority
                    />
                    <span>Decentralizer Notes</span>
                  </Link>

                  {/* Navigation */}
                  <div className="flex items-center gap-6">
                    <Link
                      href="/blog"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/projects"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/learning"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Learning Log
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      About
                    </Link>
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </header>

            {/* Main */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-700 mt-20 bg-white dark:bg-gray-900">
              <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <p>© 2026 Decentralizer Notes. Learning in public.</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/0xdecentralizer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://twitter.com/0xdecentralizer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </footer>

          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
