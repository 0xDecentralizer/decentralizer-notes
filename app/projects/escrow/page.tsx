import Link from 'next/link'
import { CopyButton } from '@/components/CopyButton'

export default function EscrowProjectPage() {
  const contractAddress = "0x258e6Bdd93dB488cAe69C3c4d11a35d3AbAb17A1"
  const explorerUrl = `https://sepolia.etherscan.io/address/${contractAddress}`
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 inline-block">
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Decentralized Token Escrow
          </h1>
          <span className="text-xs px-3 py-1 rounded bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Live on Sepolia
          </span>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          A trustless peer-to-peer ERC-20 token swap protocol with predefined terms and no intermediaries.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Solidity', 'Foundry', 'OpenZeppelin', 'ERC-20', 'Sepolia Testnet'].map((tag) => (
            <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Warning */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                <strong>Educational Purpose Only:</strong> This contract is unaudited and deployed on testnet for demonstration. 
                Do not use with real funds on mainnet without a professional audit.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex gap-4">
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View on Etherscan
          </a>
          <a
            href="https://github.com/0xDecentralizer/Escrow-contract"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Source Code
          </a>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Overview</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300">
            This smart contract enables two parties to securely exchange ERC-20 tokens without requiring a trusted intermediary. 
            Both parties agree on terms (token addresses, amounts, and prices) upfront, and the contract ensures atomic execution - 
            either both transfers happen, or neither does.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Trustless Execution",
              desc: "No intermediary needed - smart contract enforces the agreement"
            },
            {
              title: "Atomic Swaps",
              desc: "Either both transfers complete or the transaction reverts"
            },
            {
              title: "Flexible Terms",
              desc: "Support for any ERC-20 tokens with custom amounts and prices"
            },
            {
              title: "Dispute Resolution",
              desc: "Built-in mechanisms for handling conflicts"
            },
          ].map((feature, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contract Info */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contract Information</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Network</span>
              <p className="text-gray-900 dark:text-white font-mono">Sepolia Testnet</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Contract Address</span>
              <div className="flex items-center gap-2">
                <code className="text-sm bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded text-gray-900 dark:text-white font-mono">
                  {contractAddress}
                </code>
                <CopyButton text={contractAddress} />
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Verified</span>
              <p className="text-green-600 dark:text-green-400">✓ Source code verified on Etherscan</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Test */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How to Test</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Get Sepolia ETH</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              You'll need testnet ETH for gas fees. Get free Sepolia ETH from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
              <li><a href="https://sepoliafaucet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Alchemy Sepolia Faucet</a></li>
              <li><a href="https://www.infura.io/faucet/sepolia" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Infura Sepolia Faucet</a></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Get Test ERC-20 Tokens</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Deploy your own test ERC-20 tokens or use existing testnet tokens. You'll need tokens for both parties in the swap.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Interact with Contract</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Use Etherscan's "Write Contract" feature or connect your wallet to interact with the escrow functions:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Approve the escrow contract to spend your tokens</li>
              <li>Create an escrow with agreed terms</li>
              <li>The other party deposits their tokens</li>
              <li>Execute the swap when both parties are ready</li>
            </ol>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 4: Verify Transaction</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check the transaction on Etherscan to see the token transfers and contract state changes.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Details</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Main Functions</h3>
          <div className="space-y-3">
            <div>
              <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">
                createEscrow()
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Initialize a new escrow with swap terms</p>
            </div>
            <div>
              <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">
                depositTokens()
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Second party deposits their tokens</p>
            </div>
            <div>
              <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">
                executeSwap()
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Complete the atomic token swap</p>
            </div>
            <div>
              <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">
                cancelEscrow()
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Cancel escrow and refund deposited tokens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Considerations */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Security Considerations</h2>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-semibold text-red-900 dark:text-red-200 mb-3">⚠️ Important Notes</h3>
          <ul className="list-disc pl-6 text-red-800 dark:text-red-300 space-y-2">
            <li>This contract has <strong>NOT been audited</strong> by professional security firms</li>
            <li>It is for <strong>educational and demonstration purposes only</strong></li>
            <li>Do not deploy to mainnet or use with real funds without a thorough audit</li>
            <li>Always test thoroughly on testnet before considering production use</li>
            <li>Be aware of potential vulnerabilities in token approval mechanisms</li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/0xDecentralizer/Escrow-contract"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-800"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📁 Source Code</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">View full source code, tests, and documentation on GitHub</p>
          </a>
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-800"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Etherscan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Explore contract on blockchain explorer</p>
          </a>
        </div>
      </div>

      {/* Back to projects */}
      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          ← Back to all projects
        </Link>
      </div>
    </div>
  )
}