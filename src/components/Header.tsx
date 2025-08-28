"use client"

import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa"

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-background shadow-sm">
      
      {/* Left side: Logo/Title */}
      <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
        T-sender
      </h1>

      {/* Middle: GitHub link */}
      <nav className="flex-1 flex justify-center">
        <Link
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FaGithub className="w-6 h-6" />
          <span className="font-medium">GitHub</span>
        </Link>
      </nav>

      {/* Right side: Wallet Connect */}
      <div className="flex items-center">
        <ConnectButton />
      </div>
    </header>
  )
}
