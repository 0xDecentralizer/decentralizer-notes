import { useState, useEffect, useRef } from "react";

const PHASES = [
  {
    id: 1,
    title: "Foundations & JavaScript Upgrade",
    duration: "Months 1–2",
    color: "#00D9FF",
    icon: "⚡",
    tagline: "Build the bedrock. Everything else depends on this.",
    status: "start",
    weeks: [
      {
        week: "Weeks 1–2",
        focus: "JavaScript Deep Dive",
        topics: [
          "ES6+ syntax (destructuring, spread, modules)",
          "Async/Await, Promises, Event Loop",
          "Closures, Scope, Prototype Chain",
          "Array / Object methods mastery",
          "Node.js basics & npm ecosystem",
        ],
        resources: [
          { label: "javascript.info", url: "https://javascript.info" },
          { label: "You Don't Know JS (free book)", url: "https://github.com/getify/You-Dont-Know-JS" },
        ],
      },
      {
        week: "Weeks 3–4",
        focus: "CS Fundamentals for Blockchain",
        topics: [
          "Data Structures: Hash tables, Linked lists, Trees",
          "Merkle Trees & Merkle Proofs",
          "Hash functions (SHA-256, Keccak-256)",
          "Big O notation — understand gas as compute cost",
          "Public/Private Key Cryptography (ECDSA)",
        ],
        resources: [
          { label: "CS50 (free, Harvard)", url: "https://cs50.harvard.edu" },
          { label: "Brilliant.org Cryptography", url: "https://brilliant.org" },
        ],
      },
      {
        week: "Weeks 5–6",
        focus: "Blockchain Internals Deep Dive",
        topics: [
          "How blocks & chains are linked (headers, nonces)",
          "Consensus: PoW vs PoS vs DPoS vs PBFT",
          "Ethereum vs Bitcoin architecture differences",
          "Mempool, gas auction, transaction lifecycle",
          "EVM architecture: Opcodes, Stack, Memory, Storage",
        ],
        resources: [
          { label: "Ethereum Whitepaper", url: "https://ethereum.org/en/whitepaper/" },
          { label: "evm.codes (opcode explorer)", url: "https://evm.codes" },
        ],
      },
      {
        week: "Weeks 7–8",
        focus: "Solidity Review & Advanced Features",
        topics: [
          "Storage layout & packing slots for gas savings",
          "Memory vs Storage vs Calldata — when to use what",
          "Assembly basics (YUL): reading slot values",
          "Function modifiers, custom errors, events deep dive",
          "Interface vs Abstract Contract vs Library",
        ],
        resources: [
          { label: "Solidity Docs", url: "https://docs.soliditylang.org" },
          { label: "Solidity by Example", url: "https://solidity-by-example.org" },
        ],
      },
    ],
    project: {
      name: "ERC-20 Token + React Frontend",
      description: "Build a complete ERC-20 token with minting, burning, and transfer. Connect a React UI with ethers.js. Deploy to Sepolia testnet.",
      skills: ["Solidity", "ethers.js", "React", "Hardhat", "MetaMask integration"],
      why: "Forces JS + Solidity to work together for the first time. Real deployment experience.",
    },
    milestone: "You can explain the EVM from memory, write async JS fluently, and have a live dApp on testnet.",
  },
  {
    id: 2,
    title: "Advanced Solidity & Security",
    duration: "Months 3–4",
    color: "#A855F7",
    icon: "🔒",
    tagline: "Most bugs happen here. Learn to see them before they cost you.",
    status: "intermediate",
    weeks: [
      {
        week: "Weeks 1–2",
        focus: "Design Patterns",
        topics: [
          "Factory Pattern (deploying contracts from contracts)",
          "Singleton & Registry patterns",
          "Access Control: Ownable, Role-based (RBAC)",
          "Pull-over-Push payment pattern",
          "Checks-Effects-Interactions pattern (CEI)",
        ],
        resources: [
          { label: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts" },
          { label: "Smart Contract Patterns (GitHub)", url: "https://github.com/fravoll/solidity-patterns" },
        ],
      },
      {
        week: "Weeks 3–4",
        focus: "Security Fundamentals",
        topics: [
          "Reentrancy attacks & ReentrancyGuard",
          "Integer overflow/underflow (pre & post 0.8.x)",
          "Front-running & commit-reveal schemes",
          "Flash loan attack vectors",
          "tx.origin vs msg.sender abuse",
          "Timestamp dependence & block number manipulation",
        ],
        resources: [
          { label: "SWC Registry (all known vulnerabilities)", url: "https://swcregistry.io" },
          { label: "Ethernaut (Wargame, free)", url: "https://ethernaut.openzeppelin.com" },
        ],
      },
      {
        week: "Weeks 5–6",
        focus: "Testing Mastery with Hardhat & Foundry",
        topics: [
          "Unit tests with Hardhat (mocha/chai style)",
          "Foundry forge tests in Solidity — faster iteration",
          "Mocking, impersonation, fork testing (mainnet fork)",
          "Code coverage: 100% line + branch targets",
          "Integration tests: multi-contract interaction",
        ],
        resources: [
          { label: "Foundry Book", url: "https://book.getfoundry.sh" },
          { label: "Hardhat Docs", url: "https://hardhat.org/docs" },
        ],
      },
      {
        week: "Weeks 7–8",
        focus: "Static Analysis & Fuzz Testing",
        topics: [
          "Slither: automated vulnerability scanner",
          "Echidna: property-based fuzzing",
          "MythX / Mythril cloud analysis",
          "Writing fuzz invariants (what should NEVER be broken)",
          "Reading audit reports from known protocols",
        ],
        resources: [
          { label: "Slither GitHub", url: "https://github.com/crytic/slither" },
          { label: "Cyfrin Updraft (Security)", url: "https://updraft.cyfrin.io" },
        ],
      },
    ],
    project: {
      name: "DeFi Lending Protocol (mini-Aave)",
      description: "Build a lending protocol: deposit collateral, borrow against it, track health factor, liquidate undercollateralized positions. Full test suite with Foundry (>95% coverage). Run Slither on it.",
      skills: ["Advanced Solidity", "Foundry", "Security Patterns", "OpenZeppelin", "Fork Testing"],
      why: "Lending protocols are the most complex smart contract systems. If you can build and secure one, you can build anything.",
    },
    milestone: "You can write a test suite from scratch, run static analysis tools, and explain 10 common vulnerability classes without looking them up.",
  },
  {
    id: 3,
    title: "dApp Architecture & Full-Stack",
    duration: "Months 5–6",
    color: "#10B981",
    icon: "🏗️",
    tagline: "Bridge the on-chain and off-chain worlds. Build things users can actually use.",
    status: "intermediate",
    weeks: [
      {
        week: "Weeks 1–2",
        focus: "React Intermediate + Web3 Libraries",
        topics: [
          "React Hooks in depth (useCallback, useMemo, useReducer)",
          "Context API & state management for Web3 state",
          "ethers.js v6: providers, signers, contracts",
          "wagmi + viem: modern React hooks for Ethereum",
          "RainbowKit for wallet connection UI",
        ],
        resources: [
          { label: "wagmi docs", url: "https://wagmi.sh" },
          { label: "ethers.js docs", url: "https://docs.ethers.org" },
        ],
      },
      {
        week: "Weeks 3–4",
        focus: "Event Indexing & The Graph",
        topics: [
          "Ethereum events: indexed topics, ABI decoding",
          "The Graph: writing subgraphs (GraphQL schemas)",
          "Subgraph deployment & querying on-chain history",
          "Alchemy Webhooks & WebSocket subscriptions",
          "Node-as-a-Service: Alchemy, Infura, Quicknode comparison",
        ],
        resources: [
          { label: "The Graph Docs", url: "https://thegraph.com/docs" },
          { label: "Alchemy University (free)", url: "https://university.alchemy.com" },
        ],
      },
      {
        week: "Weeks 5–6",
        focus: "Decentralized Storage & IPFS",
        topics: [
          "IPFS concepts: content addressing vs location addressing",
          "Pinata / NFT.storage for pinning",
          "Arweave for permanent storage use cases",
          "Storing NFT metadata on IPFS correctly",
          "On-chain vs off-chain data architecture decisions",
        ],
        resources: [
          { label: "IPFS Docs", url: "https://docs.ipfs.tech" },
          { label: "Pinata Docs", url: "https://docs.pinata.cloud" },
        ],
      },
      {
        week: "Weeks 7–8",
        focus: "Deployment Pipelines & Monitoring",
        topics: [
          "Hardhat deployment scripts with verify on Etherscan",
          "Foundry script: broadcast & multi-chain deployments",
          "Environment management: .env, secret management",
          "Monitoring with Tenderly (alerts, simulations)",
          "Contract verification & ABI management",
        ],
        resources: [
          { label: "Tenderly Docs", url: "https://docs.tenderly.co" },
          { label: "Etherscan API", url: "https://docs.etherscan.io" },
        ],
      },
    ],
    project: {
      name: "Full-Stack AMM DEX (Uniswap v2 Clone)",
      description: "Build a simplified Uniswap v2: liquidity pools, token swaps, LP tokens, price calculation. Full React frontend with swap UI. Subgraph for historical data. Deploy to Sepolia + verify on Etherscan.",
      skills: ["React", "wagmi", "The Graph", "AMM math", "Full deployment pipeline"],
      why: "AMMs are the core of DeFi. Building one teaches you math, architecture, and UX simultaneously.",
    },
    milestone: "You have a live, publicly verifiable dApp with indexed data, reachable via the internet, that anyone can use.",
  },
  {
    id: 4,
    title: "Advanced Concepts & Token Standards",
    duration: "Months 7–8",
    color: "#F59E0B",
    icon: "🧩",
    tagline: "Go deep on the building blocks every serious project uses.",
    status: "advanced",
    weeks: [
      {
        week: "Weeks 1–2",
        focus: "Token Standards Deep Dive",
        topics: [
          "ERC-721: NFT standard, tokenURI, enumerable extension",
          "ERC-1155: Multi-token standard, batch transfers",
          "ERC-2612: Permit (gasless approvals via signatures)",
          "ERC-4337: Account Abstraction — how it works",
          "ERC-3525: Semi-fungible token (advanced)",
        ],
        resources: [
          { label: "EIPs Repository", url: "https://eips.ethereum.org" },
          { label: "OpenZeppelin Wizard", url: "https://wizard.openzeppelin.com" },
        ],
      },
      {
        week: "Weeks 3–4",
        focus: "Upgradeable Contracts & Proxy Patterns",
        topics: [
          "Why immutability is a double-edged sword",
          "Transparent Proxy Pattern (OZ implementation)",
          "UUPS Proxy — more gas efficient, who controls upgrade?",
          "Diamond Standard (EIP-2535): large contract architectures",
          "Storage collision risks and how to prevent them",
        ],
        resources: [
          { label: "OZ Upgrades Plugin", url: "https://docs.openzeppelin.com/upgrades-plugins" },
          { label: "EIP-2535 Diamond Standard", url: "https://eips.ethereum.org/EIPS/eip-2535" },
        ],
      },
      {
        week: "Weeks 5–6",
        focus: "Oracles & Chainlink",
        topics: [
          "Oracle problem: why smart contracts can't call APIs",
          "Chainlink Price Feeds: how to integrate, freshness checks",
          "Chainlink VRF v2: verifiable randomness — gaming use cases",
          "Chainlink Automation (Keepers): scheduled contract execution",
          "Chainlink CCIP: cross-chain messaging basics",
        ],
        resources: [
          { label: "Chainlink Docs", url: "https://docs.chain.link" },
          { label: "Chainlink Hardhat Starter Kit", url: "https://github.com/smartcontractkit/hardhat-starter-kit" },
        ],
      },
      {
        week: "Weeks 7–8",
        focus: "Gas Optimization",
        topics: [
          "Storage packing: fitting multiple vars in one slot",
          "Calldata over memory for external functions",
          "Unchecked math blocks when overflow impossible",
          "Custom errors vs require strings (cheaper)",
          "Bytecode optimization: optimizer runs value tuning",
          "Reading gas reports from Foundry/Hardhat",
        ],
        resources: [
          { label: "Gas Puzzles (free game)", url: "https://github.com/RareSkills/gas-puzzles" },
          { label: "RareSkills Gas Optimization Guide", url: "https://www.rareskills.io/post/gas-optimization" },
        ],
      },
    ],
    project: {
      name: "NFT Marketplace with Chainlink VRF",
      description: "NFT marketplace: mint, list, buy, make offers. Royalty enforcement (ERC-2981). Chainlink VRF for randomized trait assignment during mint. Metadata on IPFS. ERC-2612 permit for gasless listing approvals.",
      skills: ["ERC-721/2981", "Chainlink VRF", "IPFS", "Proxy Pattern", "Gas optimization"],
      why: "Combines most of what you've learned. Real NFT marketplaces are among the most-used dApps.",
    },
    milestone: "You can design a contract system with upgradability baked in, use Chainlink oracles, and produce gas reports showing your optimizations.",
  },
  {
    id: 5,
    title: "System Design & Architecture",
    duration: "Months 9–10",
    color: "#EF4444",
    icon: "🗺️",
    tagline: "Stop being a code writer. Start being an architect.",
    status: "advanced",
    weeks: [
      {
        week: "Weeks 1–2",
        focus: "Layer 2 Architecture & Scaling",
        topics: [
          "Optimistic Rollups: how Arbitrum & Optimism work",
          "ZK Rollups: validity proofs (StarkNet, zkSync Era)",
          "State channels & payment channels",
          "Plasma chains & Validium architecture",
          "Choosing the right L2 for your project requirements",
        ],
        resources: [
          { label: "L2Beat (compare all L2s)", url: "https://l2beat.com" },
          { label: "Ethereum Scaling Docs", url: "https://ethereum.org/en/developers/docs/scaling/" },
        ],
      },
      {
        week: "Weeks 3–4",
        focus: "Cross-Chain & Interoperability",
        topics: [
          "Bridge architectures: lock-and-mint, burn-and-mint",
          "Bridge security risks (most DeFi hacks are bridges)",
          "Chainlink CCIP for cross-chain messaging",
          "LayerZero protocol architecture",
          "Multi-chain deployment strategy",
        ],
        resources: [
          { label: "Blockchain Bridge Security (Trail of Bits)", url: "https://github.com/trailofbits/publications" },
          { label: "LayerZero Docs", url: "https://docs.layerzero.network" },
        ],
      },
      {
        week: "Weeks 5–6",
        focus: "DAO Design & Governance",
        topics: [
          "DAO governance models: token-weighted, quadratic, conviction",
          "Governor contract (OZ Governor + Timelock)",
          "Snapshot for off-chain signaling — when to use it",
          "Treasury management patterns",
          "Governance attacks: flash loan voting, voter apathy solutions",
        ],
        resources: [
          { label: "Tally (DAO explorer)", url: "https://tally.xyz" },
          { label: "a16z Governance Research", url: "https://a16zcrypto.com/content/article/building-and-running-a-dao-why-governance-matters/" },
        ],
      },
      {
        week: "Weeks 7–8",
        focus: "System Design Thinking",
        topics: [
          "Architecture Decision Records (ADRs): documenting decisions",
          "Threat modelling for smart contract systems",
          "Economic design: tokenomics and incentive alignment",
          "MEV (Maximal Extractable Value): how it affects your design",
          "Protocol invariants: defining what can NEVER change",
        ],
        resources: [
          { label: "Paradigm MEV Research", url: "https://research.paradigm.xyz" },
          { label: "Token Engineering Academy", url: "https://tokenengineering.net" },
        ],
      },
    ],
    project: {
      name: "On-Chain DAO with Treasury & Timelock",
      description: "Full DAO system: governance token, proposal creation & voting (OZ Governor), 2-day timelock, treasury with multi-asset management. Deploy on Arbitrum (L2). Write an architecture decision document explaining every design choice.",
      skills: ["DAO design", "Arbitrum deployment", "OZ Governor", "Timelock", "Tokenomics"],
      why: "DAOs require understanding governance, economics, and security simultaneously — true senior territory.",
    },
    milestone: "You can draw the full architecture of a protocol on a whiteboard, explain trade-offs, and write an ADR document for your decisions.",
  },
  {
    id: 6,
    title: "Senior-Level Security & Portfolio",
    duration: "Months 11–12",
    color: "#FF6B6B",
    icon: "🏆",
    tagline: "The final stretch. Prove you can own a system end-to-end.",
    status: "senior",
    weeks: [
      {
        week: "Weeks 1–2",
        focus: "Advanced Security Auditing",
        topics: [
          "Reading real audit reports (Code4rena, Sherlock, Immunefi)",
          "Advanced Slither detectors and writing custom ones",
          "Echidna: writing comprehensive invariant test suites",
          "Formal verification concepts (Certora, Halmos)",
          "Manual review methodology: reading code like an auditor",
        ],
        resources: [
          { label: "Code4rena (audit contests)", url: "https://code4rena.com" },
          { label: "Solodit (audit findings database)", url: "https://solodit.xyz" },
        ],
      },
      {
        week: "Weeks 3–4",
        focus: "ZK Proof Practical Usage",
        topics: [
          "ZK proof concepts: provers, verifiers, circuits",
          "circom + snarkjs: writing simple circuits",
          "ZK use cases: private voting, private transfers",
          "ZK identity & ZK KYC patterns",
          "Why ZK is the future of L2 and privacy",
        ],
        resources: [
          { label: "ZK Whiteboard Sessions (YouTube)", url: "https://www.youtube.com/playlist?list=PLj80z0cJm8QErn3akRcqvxUsyXWC81OGq" },
          { label: "circom docs", url: "https://docs.circom.io" },
        ],
      },
      {
        week: "Weeks 5–6",
        focus: "Running Your Own Node & Infrastructure",
        topics: [
          "Running Geth (execution) + Lighthouse (consensus) locally",
          "Understanding P2P networking in Ethereum",
          "Archive vs full vs light node trade-offs",
          "Indexing data with your own The Graph node",
          "Client diversity: Besu, Nethermind, Erigon",
        ],
        resources: [
          { label: "Ethereum.org Node Setup", url: "https://ethereum.org/en/developers/docs/nodes-and-clients/" },
          { label: "ethereum-on-arm project", url: "https://ethereum-on-arm-documentation.readthedocs.io" },
        ],
      },
      {
        week: "Weeks 7–8",
        focus: "Portfolio & Open Source Contributions",
        topics: [
          "Write a detailed README for every project",
          "Participate in a Code4rena or Sherlock audit contest",
          "Contribute a PR to an open source protocol (fix a bug, add a test)",
          "Write 3 technical blog posts on things you've built",
          "Deploy your flagship project to mainnet (or a well-known L2)",
        ],
        resources: [
          { label: "Sherlock DeFi (audit + coverage)", url: "https://sherlock.xyz" },
          { label: "Immunefi (bug bounties)", url: "https://immunefi.com" },
        ],
      },
    ],
    project: {
      name: "Production-Ready Yield Aggregator",
      description: "Build a vault protocol: users deposit tokens, vault automatically routes to highest-yield strategies (Aave, Compound), harvests and compounds rewards. Full security audit with Slither + Echidna invariants. Deploy to mainnet or Arbitrum. Get external feedback on the code.",
      skills: ["Vault architecture", "Strategy pattern", "Security audit process", "Mainnet deployment", "Risk management"],
      why: "Yield vaults touch every major DeFi primitive. Successfully shipping one to mainnet proves you're ready for a senior role.",
    },
    milestone: "You have 6 deployed projects, an audit contest participation, and a technical blog. You can design, build, test, and ship production-grade protocol code.",
  },
];

const PARALLEL_SKILLS = [
  {
    icon: "📐",
    title: "CS Fundamentals",
    items: ["Data structures & algorithms", "Cryptography basics", "Networking (TCP/IP, HTTP)", "Operating systems concepts"],
    when: "Month 1–2",
  },
  {
    icon: "🔧",
    title: "Dev Tools & Git",
    items: ["Git branching, rebase, cherry-pick", "GitHub Actions (CI/CD)", "VS Code advanced config", "Foundry, Hardhat proficiency"],
    when: "Month 1+",
  },
  {
    icon: "📊",
    title: "DeFi Protocol Reading",
    items: ["Read Uniswap v3 code", "Read Aave v3 codebase", "Follow protocol governance", "Track audit reports weekly"],
    when: "Month 3+",
  },
  {
    icon: "✍️",
    title: "Technical Writing",
    items: ["Write ADRs for each project", "Explain code decisions in READMEs", "Post on Mirror / Paragraph", "Teach what you learn"],
    when: "Month 5+",
  },
  {
    icon: "🌐",
    title: "Community",
    items: ["Join ETHGlobal hackathons", "Follow Protocol research on Twitter", "Engage in governance forums", "Answer questions on StackExchange"],
    when: "Month 6+",
  },
  {
    icon: "🧠",
    title: "Economics & Game Theory",
    items: ["Tokenomics design basics", "Mechanism design reading", "MEV research", "Incentive alignment patterns"],
    when: "Month 8+",
  },
];

const BOOKS = [
  { title: "Mastering Ethereum", author: "Andreas M. Antonopoulos", tag: "Essential" },
  { title: "Solidity Programming Essentials", author: "Ritesh Modi", tag: "Solidity" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", tag: "System Design" },
  { title: "The Art of Invisibility", author: "Kevin Mitnick", tag: "Security Mindset" },
  { title: "Zero to One", author: "Peter Thiel", tag: "Product Thinking" },
];

const tagColors = {
  start: "#00D9FF",
  intermediate: "#A855F7",
  advanced: "#F59E0B",
  senior: "#FF6B6B",
};

const tagLabels = {
  start: "Foundations",
  intermediate: "Intermediate",
  advanced: "Advanced",
  senior: "Senior",
};

export default function BlockchainRoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [completedPhases, setCompletedPhases] = useState(new Set());
  const [tab, setTab] = useState("roadmap");
  const [expandedProject, setExpandedProject] = useState(null);
  const headerRef = useRef(null);

  const phase = PHASES[activePhase];

  const toggleComplete = (id) => {
    setCompletedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalWeeks = 52;
  const weeksPerPhase = [8, 8, 8, 8, 8, 8];
  const startWeek = weeksPerPhase.slice(0, activePhase).reduce((a, b) => a + b, 0);

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      background: "#08090C",
      minHeight: "100vh",
      color: "#E2E8F0",
      maxWidth: 960,
      margin: "0 auto",
      padding: "0 0 80px 0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 2px; }
        .phase-btn:hover { opacity: 1 !important; transform: translateX(3px); }
        .resource-link { color: #00D9FF; text-decoration: none; font-size: 11px; }
        .resource-link:hover { text-decoration: underline; }
        .week-tab:hover { background: rgba(255,255,255,0.06) !important; }
        .topic-item { transition: background 0.15s; }
        .topic-item:hover { background: rgba(255,255,255,0.04) !important; }
        .skill-card:hover { transform: translateY(-2px); transition: transform 0.2s; }
        @keyframes fadeSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .fade-in { animation: fadeSlide 0.25s ease-out both; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        .blink { animation: pulse 2s ease-in-out infinite; }
        .nav-tab:hover { color: #E2E8F0 !important; }
      `}</style>

      {/* HEADER */}
      <div ref={headerRef} style={{
        padding: "40px 32px 0",
        borderBottom: "1px solid #1a1a2e",
        marginBottom: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: "#00D9FF", letterSpacing: "0.2em", textTransform: "uppercase" }}>roadmap.sh/blockchain</span>
          <span style={{ color: "#2a2a3a", fontSize: 11 }}>///</span>
          <span className="blink" style={{ width: 6, height: 6, background: "#00FF88", borderRadius: "50%", display: "inline-block" }} />
          <span style={{ fontSize: 11, color: "#00FF88" }}>Self-Study</span>
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(22px, 5vw, 36px)",
          fontWeight: 700,
          color: "#F8FAFC",
          margin: "0 0 6px 0",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}>
          Blockchain Developer<br />
          <span style={{ color: "#00D9FF" }}>Senior Track</span>
        </h1>
        <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 24px 0" }}>
          12-month project-driven roadmap · Intermediate → Senior · 100% self-study
        </p>

        {/* Progress bar */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#475569", marginBottom: 6, letterSpacing: "0.1em" }}>
            <span>OVERALL PROGRESS</span>
            <span>{completedPhases.size} / {PHASES.length} PHASES COMPLETE</span>
          </div>
          <div style={{ height: 3, background: "#1E293B", borderRadius: 2 }}>
            <div style={{
              height: "100%",
              width: `${(completedPhases.size / PHASES.length) * 100}%`,
              background: "linear-gradient(90deg, #00D9FF, #00FF88)",
              borderRadius: 2,
              transition: "width 0.5s ease",
            }} />
          </div>
        </div>

        {/* Nav tabs */}
        <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #1a1a2e" }}>
          {["roadmap", "parallel skills", "reading list"].map((t) => (
            <button key={t} className="nav-tab" onClick={() => setTab(t)} style={{
              background: "none",
              border: "none",
              borderBottom: tab === t ? "2px solid #00D9FF" : "2px solid transparent",
              color: tab === t ? "#00D9FF" : "#475569",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "inherit",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s",
              marginBottom: -1,
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* ROADMAP TAB */}
      {tab === "roadmap" && (
        <div style={{ padding: "0 0 0 0" }}>
          {/* Phase selector — left sidebar + content layout */}
          <div style={{ display: "flex", gap: 0, minHeight: 600 }}>

            {/* Sidebar: Phase list */}
            <div style={{
              width: 200,
              flexShrink: 0,
              borderRight: "1px solid #1a1a2e",
              padding: "20px 0",
            }}>
              {PHASES.map((p, i) => (
                <button
                  key={p.id}
                  className="phase-btn"
                  onClick={() => { setActivePhase(i); setActiveWeek(0); }}
                  style={{
                    width: "100%",
                    background: activePhase === i ? "rgba(255,255,255,0.04)" : "none",
                    border: "none",
                    borderLeft: activePhase === i ? `2px solid ${p.color}` : "2px solid transparent",
                    padding: "12px 16px",
                    cursor: "pointer",
                    textAlign: "left",
                    opacity: activePhase === i ? 1 : 0.55,
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <div style={{ marginTop: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <span style={{ fontSize: 14 }}>{p.icon}</span>
                      {completedPhases.has(p.id) && <span style={{ fontSize: 9, color: "#00FF88" }}>✓</span>}
                    </div>
                    <div style={{ fontSize: 10, color: p.color, letterSpacing: "0.1em", marginBottom: 3 }}>{p.duration}</div>
                    <div style={{ fontSize: 11, color: "#CBD5E1", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>
                      {p.title.split(" ").slice(0, 3).join(" ")}{p.title.split(" ").length > 3 ? "…" : ""}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Main content */}
            <div className="fade-in" key={activePhase} style={{ flex: 1, padding: "24px 28px", minWidth: 0 }}>

              {/* Phase header */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 22 }}>{phase.icon}</span>
                  <h2 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#F8FAFC",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}>{phase.title}</h2>
                  <span style={{
                    fontSize: 10,
                    fontFamily: "inherit",
                    color: tagColors[phase.status],
                    background: `${tagColors[phase.status]}18`,
                    border: `1px solid ${tagColors[phase.status]}40`,
                    padding: "3px 8px",
                    borderRadius: 3,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>{tagLabels[phase.status]}</span>
                </div>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", fontStyle: "italic" }}>"{phase.tagline}"</p>
                <span style={{ fontSize: 11, color: phase.color }}>{phase.duration}</span>
              </div>

              {/* Week tabs */}
              <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
                {phase.weeks.map((w, i) => (
                  <button key={i} className="week-tab" onClick={() => setActiveWeek(i)} style={{
                    background: activeWeek === i ? `${phase.color}18` : "transparent",
                    border: activeWeek === i ? `1px solid ${phase.color}` : "1px solid #1E293B",
                    color: activeWeek === i ? phase.color : "#475569",
                    padding: "6px 12px",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontSize: 11,
                    fontFamily: "inherit",
                    letterSpacing: "0.05em",
                    transition: "all 0.15s",
                  }}>{w.week}</button>
                ))}
                <button onClick={() => setExpandedProject(expandedProject === activePhase ? null : activePhase)} style={{
                  background: expandedProject === activePhase ? "#00FF8818" : "transparent",
                  border: `1px solid ${expandedProject === activePhase ? "#00FF88" : "#1E293B"}`,
                  color: expandedProject === activePhase ? "#00FF88" : "#475569",
                  padding: "6px 12px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: "inherit",
                  letterSpacing: "0.05em",
                }}>🔨 Project</button>
              </div>

              {/* Week content */}
              {expandedProject !== activePhase ? (
                <div className="fade-in" key={`${activePhase}-${activeWeek}`}>
                  <div style={{
                    background: "#0E1117",
                    border: "1px solid #1E293B",
                    borderRadius: 8,
                    padding: "20px",
                    marginBottom: 16,
                  }}>
                    <div style={{ fontSize: 11, color: phase.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                      {phase.weeks[activeWeek].week} · {phase.weeks[activeWeek].focus}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {phase.weeks[activeWeek].topics.map((topic, i) => (
                        <div key={i} className="topic-item" style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          padding: "8px 10px",
                          borderRadius: 4,
                          background: "transparent",
                        }}>
                          <span style={{ color: phase.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
                          <span style={{ fontSize: 12, color: "#CBD5E1", lineHeight: 1.5 }}>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div style={{
                    background: "#0A0B10",
                    border: "1px solid #1E293B",
                    borderRadius: 8,
                    padding: "14px 18px",
                  }}>
                    <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.15em", marginBottom: 10, textTransform: "uppercase" }}>Resources</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {phase.weeks[activeWeek].resources.map((r, i) => (
                        <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-link" style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          background: "#0E1117", border: "1px solid #1E293B",
                          padding: "5px 10px", borderRadius: 4,
                          color: "#00D9FF", fontSize: 11,
                          textDecoration: "none",
                        }}>
                          <span style={{ fontSize: 9 }}>↗</span> {r.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Project details */
                <div className="fade-in" style={{
                  background: "#0A0E1A",
                  border: `1px solid ${phase.color}40`,
                  borderRadius: 8,
                  padding: 20,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: 16 }}>🔨</span>
                    <div>
                      <div style={{ fontSize: 11, color: phase.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Phase Project</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: "#F8FAFC" }}>
                        {phase.project.name}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.7, margin: "0 0 16px 0" }}>
                    {phase.project.description}
                  </p>

                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>Skills Practiced</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {phase.project.skills.map((s, i) => (
                        <span key={i} style={{
                          fontSize: 11, color: "#CBD5E1",
                          background: "#1E293B", border: "1px solid #334155",
                          padding: "3px 9px", borderRadius: 3,
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    background: `${phase.color}0C`,
                    border: `1px solid ${phase.color}30`,
                    borderRadius: 6,
                    padding: "10px 14px",
                  }}>
                    <span style={{ fontSize: 10, color: phase.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>Why this project? </span>
                    <span style={{ fontSize: 12, color: "#94A3B8" }}>{phase.project.why}</span>
                  </div>
                </div>
              )}

              {/* Milestone */}
              <div style={{
                marginTop: 20,
                background: "#0D1117",
                border: "1px solid #1E293B",
                borderLeft: `3px solid ${phase.color}`,
                borderRadius: "0 8px 8px 0",
                padding: "12px 16px",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>🎯</span>
                <div>
                  <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.12em", marginBottom: 4, textTransform: "uppercase" }}>Phase Milestone</div>
                  <div style={{ fontSize: 12, color: "#CBD5E1", lineHeight: 1.6 }}>{phase.milestone}</div>
                </div>
              </div>

              {/* Mark complete */}
              <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => toggleComplete(phase.id)} style={{
                  background: completedPhases.has(phase.id) ? "#00FF8818" : "transparent",
                  border: `1px solid ${completedPhases.has(phase.id) ? "#00FF88" : "#334155"}`,
                  color: completedPhases.has(phase.id) ? "#00FF88" : "#475569",
                  padding: "8px 16px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: "inherit",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                  {completedPhases.has(phase.id) ? "✓ Phase Complete" : "○ Mark Complete"}
                </button>
              </div>
            </div>
          </div>

          {/* Timeline overview */}
          <div style={{ padding: "24px 28px", borderTop: "1px solid #1a1a2e" }}>
            <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              12-Month Timeline Overview
            </div>
            <div style={{ display: "flex", gap: 3, height: 32, borderRadius: 6, overflow: "hidden" }}>
              {PHASES.map((p, i) => (
                <button key={p.id} onClick={() => { setActivePhase(i); setActiveWeek(0); }} style={{
                  flex: 1,
                  background: completedPhases.has(p.id)
                    ? `${p.color}60`
                    : i === activePhase
                      ? p.color
                      : "#1E293B",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  position: "relative",
                  transition: "background 0.2s",
                  borderRadius: 3,
                }} title={p.title}>
                  {i === activePhase && <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 3,
                  }} />}
                  {p.icon}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", marginTop: 6, gap: 3 }}>
              {PHASES.map((p) => (
                <div key={p.id} style={{ flex: 1, fontSize: 9, color: "#334155", textAlign: "center" }}>{p.duration.split("–")[0]}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PARALLEL SKILLS TAB */}
      {tab === "parallel skills" && (
        <div className="fade-in" style={{ padding: "28px 28px" }}>
          <p style={{ fontSize: 13, color: "#64748B", marginBottom: 24, lineHeight: 1.6 }}>
            These skills run alongside the main roadmap. A senior developer has all of these — not just Solidity mastery.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {PARALLEL_SKILLS.map((skill, i) => (
              <div key={i} className="skill-card" style={{
                background: "#0E1117",
                border: "1px solid #1E293B",
                borderRadius: 8,
                padding: "18px 20px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>{skill.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#F1F5F9" }}>{skill.title}</div>
                    <div style={{ fontSize: 10, color: "#475569", marginTop: 2 }}>Start: {skill.when}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {skill.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 11, color: "#94A3B8", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#334155", flexShrink: 0 }}>—</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mindset section */}
          <div style={{ marginTop: 32, background: "#0A0B10", border: "1px solid #1E293B", borderRadius: 8, padding: 24 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: "#F1F5F9", margin: "0 0 16px 0" }}>
              🧭 Senior Developer Mindset
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                ["Read code, not docs", "Spend 60% of time reading real protocol code (Uniswap, Aave, Compound). Docs lie; code tells the truth."],
                ["Build in public", "Every project on GitHub with a README. Employers and protocols find you through your work."],
                ["Security-first thinking", "Before writing any function, ask: how can an attacker break this? Write the attack before writing the defense."],
                ["Understand trade-offs", "There's no best solution. There are trade-offs. A senior always explains what they gave up for what they gained."],
                ["Follow the money", "Learn how protocols make money, how incentives align (or misalign). Tokenomics matters as much as code."],
                ["Ship and iterate", "A deployed, imperfect contract teaches more than a perfect contract that's never deployed. Ship early, audit often."],
              ].map(([title, desc], i) => (
                <div key={i} style={{ padding: "12px 14px", background: "#0E1117", borderRadius: 6, border: "1px solid #1E293B" }}>
                  <div style={{ fontSize: 12, color: "#00D9FF", marginBottom: 5, fontWeight: 600 }}>{title}</div>
                  <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* READING LIST TAB */}
      {tab === "reading list" && (
        <div className="fade-in" style={{ padding: "28px 28px" }}>
          <p style={{ fontSize: 13, color: "#64748B", marginBottom: 24 }}>
            Selected books and primary resources for going deep.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {BOOKS.map((b, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "#0E1117", border: "1px solid #1E293B",
                borderRadius: 6, padding: "14px 18px",
              }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>📖</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "#F1F5F9", marginBottom: 3 }}>{b.title}</div>
                  <div style={{ fontSize: 11, color: "#475569" }}>by {b.author}</div>
                </div>
                <span style={{
                  fontSize: 10, color: "#00D9FF",
                  background: "#00D9FF10", border: "1px solid #00D9FF30",
                  padding: "3px 8px", borderRadius: 3, flexShrink: 0,
                }}>{b.tag}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#0A0B10", border: "1px solid #1E293B", borderRadius: 8, padding: 24 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: "#F1F5F9", margin: "0 0 16px 0" }}>
              📡 Ongoing Learning Sources
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Ethereum Research Forum", url: "https://ethresear.ch", cat: "Research" },
                { label: "Week in Ethereum News", url: "https://weekinethereumnews.com", cat: "Newsletter" },
                { label: "Code4rena Reports", url: "https://code4rena.com/reports", cat: "Security" },
                { label: "Solodit (audit DB)", url: "https://solodit.xyz", cat: "Security" },
                { label: "RareSkills Blog", url: "https://www.rareskills.io/blog", cat: "Deep Dives" },
                { label: "Paradigm Research", url: "https://www.paradigm.xyz/writing", cat: "Research" },
                { label: "a16z Crypto", url: "https://a16zcrypto.com", cat: "Industry" },
                { label: "Cyfrin Updraft (free courses)", url: "https://updraft.cyfrin.io", cat: "Courses" },
              ].map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  textDecoration: "none",
                  background: "#0E1117", border: "1px solid #1E293B",
                  borderRadius: 5, padding: "10px 12px",
                }}>
                  <span style={{ fontSize: 12, color: "#CBD5E1" }}>{r.label}</span>
                  <span style={{ fontSize: 10, color: "#475569" }}>{r.cat}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20, background: "#0A0E1A", border: "1px solid #00D9FF30", borderRadius: 8, padding: "16px 20px" }}>
            <div style={{ fontSize: 10, color: "#00D9FF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
              🔗 Primary Roadmap Reference
            </div>
            <a href="https://roadmap.sh/blockchain" target="_blank" rel="noopener noreferrer" style={{
              fontSize: 13, color: "#00D9FF", textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
            }}>
              <span>↗</span> roadmap.sh/blockchain — Interactive node-based roadmap for visual learners
            </a>
            <p style={{ fontSize: 11, color: "#475569", margin: "8px 0 0 0", lineHeight: 1.6 }}>
              This roadmap above is built directly from roadmap.sh/blockchain, personalized for your current Solidity intermediate level and senior goal. Use roadmap.sh alongside this plan to explore any node in more depth.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        padding: "20px 28px 0",
        borderTop: "1px solid #0F172A",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}>
        <span style={{ fontSize: 10, color: "#1E293B" }}>
          Based on roadmap.sh/blockchain · Personalized for Intermediate → Senior path
        </span>
        <span style={{ fontSize: 10, color: "#1E293B" }}>
          {completedPhases.size}/{PHASES.length} phases · {PHASES.length * 2} months total
        </span>
      </div>
    </div>
  );
}
