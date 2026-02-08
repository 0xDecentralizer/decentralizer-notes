'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="max-w-4xl mx-auto px-4 py-4 md:py-6">
      <div className="flex items-center justify-between">
        {/* Logo + Title */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Image
            src="/logo.png"
            alt="Decentralizer Logo"
            width={128}
            height={128}
            className="w-10 h-10 md:w-16 md:h-16"
            quality={100}
            priority
          />
          <span className="hidden sm:inline">Decentralizer Notes</span>
          <span className="sm:hidden">Decentralizer</span>
        </Link>

        {/* Desktop Menu + Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/learning" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Learning Log
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            About
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-3 pt-4">
            <Link 
              href="/blog" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/learning" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Learning Log
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}