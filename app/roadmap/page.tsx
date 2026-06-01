"use client";

import { useEffect, useMemo, useState } from "react";

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
                  { label: "ethereum-on-arm project", url: "https://ethereum-on-arm-documentation.readthedocs.io" },
                ],
              },
              {
                week: "Weeks 7–8",
                focus: "Portfolio & Open Source Contributions",
                topics: [
                  "Deploy your flagship project to mainnet (or a well-known L2)",
                ],
                resources: [
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
          { icon: "📐", title: "CS Fundamentals", items: ["Data structures & algorithms", "Cryptography basics", "Networking (TCP/IP)", "OS concepts"], when: "Month 1–2" },
          { icon: "🔧", title: "Dev Tools & Git", items: ["Git branch, rebase, cherry-pick", "GitHub Actions (CI/CD)", "VS Code advanced config", "Foundry, Hardhat mastery"], when: "Month 1+" },
          { icon: "📊", title: "DeFi Protocol Reading", items: ["Read Uniswap v3 code", "Read Aave v3 codebase", "Follow protocol governance", "Track audit reports weekly"], when: "Month 3+" },
          { icon: "✍️", title: "Technical Writing", items: ["Write ADRs for each project", "Explain decisions in READMEs", "Post on Mirror / Paragraph", "Teach what you learn"], when: "Month 5+" },
          { icon: "🌐", title: "Community", items: ["Join ETHGlobal hackathons", "Follow Protocol Twitter", "Engage in governance forums", "Answer on StackExchange"], when: "Month 6+" },
          { icon: "🧠", title: "Economics & Game Theory", items: ["Tokenomics design basics", "Mechanism design reading", "MEV research", "Incentive alignment patterns"], when: "Month 8+" },
        ];
const BOOKS = [
          { title: "Mastering Ethereum", author: "Andreas M. Antonopoulos", tag: "Essential" },
          { title: "Solidity Programming Essentials", author: "Ritesh Modi", tag: "Solidity" },
          { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", tag: "System Design" },
          { title: "The Art of Invisibility", author: "Kevin Mitnick", tag: "Security Mindset" },
          { title: "Zero to One", author: "Peter Thiel", tag: "Product Thinking" },
        ];

/* =========================
   TYPES HELPERS
========================= */
type ProgressMap = {
  [phaseId: number]: {
    completedTopics: string[];
    completedWeeks: string[];
  };
};

/* =========================
   MAIN COMPONENT
========================= */
export default function RoadmapPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [progress, setProgress] = useState<ProgressMap>({});

  const phase = PHASES[activePhase];

  /* =========================
     LOAD FROM LOCALSTORAGE
  ========================= */
  useEffect(() => {
    const saved = localStorage.getItem("roadmap-progress");
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  /* =========================
     AUTO SAVE
  ========================= */
  useEffect(() => {
    localStorage.setItem("roadmap-progress", JSON.stringify(progress));
  }, [progress]);

  /* =========================
     THEME SYNC
  ========================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem("roadmap-theme");
    if (savedTheme) setIsDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("roadmap-theme", isDark ? "dark" : "light");
    document.body.style.background = isDark ? "#08090C" : "#F4F7FA";
  }, [isDark]);

  /* =========================
     HELPERS
  ========================= */
  const toggleTopic = (phaseId: number, topic: string) => {
    setProgress((prev) => {
      const p = prev[phaseId] || { completedTopics: [], completedWeeks: [] };

      const exists = p.completedTopics.includes(topic);

      const updated = {
        ...prev,
        [phaseId]: {
          ...p,
          completedTopics: exists
            ? p.completedTopics.filter((t) => t !== topic)
            : [...p.completedTopics, topic],
        },
      };

      return updated;
    });
  };

  const getTopicDone = (phaseId: number, topic: string) => {
    return progress[phaseId]?.completedTopics.includes(topic);
  };

  const t = useMemo(
    () => ({
      bg: isDark ? "#08090C" : "#F4F7FA",
      card: isDark ? "#0E1117" : "#FFFFFF",
      text: isDark ? "#E2E8F0" : "#334155",
      muted: "#64748B",
      border: isDark ? "#1A1A2E" : "#E2E8F0",
      accent: phase?.color || "#00D9FF",
    }),
    [isDark, phase]
  );

  /* =========================
     UI
  ========================= */
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        background: t.bg,
        minHeight: "100vh",
        color: t.text,
        transition: "0.3s ease",
        padding: 24,
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid " + t.border,
          paddingBottom: 16,
        }}
      >
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>
          Blockchain Roadmap
        </h1>

        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid " + t.border,
            background: t.card,
            color: t.text,
            cursor: "pointer",
          }}
        >
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* PHASE SELECTOR */}
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {PHASES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(i)}
            style={{
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid " + t.border,
              background: i === activePhase ? p.color : t.card,
              color: i === activePhase ? "#000" : t.text,
              cursor: "pointer",
              transition: "0.2s",
              transform: i === activePhase ? "translateY(-2px)" : "none",
            }}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* PHASE CONTENT */}
      <div style={{ marginTop: 30 }}>
        <h2 style={{ color: phase.color }}>{phase.title}</h2>
        <p style={{ color: t.muted }}>{phase.tagline}</p>

        {/* WEEKS */}
        <div style={{ marginTop: 20 }}>
          {phase.weeks.map((week: any, i: number) => (
            <div
              key={i}
              style={{
                marginBottom: 14,
                padding: 16,
                borderRadius: 12,
                border: "1px solid " + t.border,
                background: t.card,
                transition: "0.2s",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 6 }}>
                {week.week} — {week.focus}
              </div>

              <div style={{ marginTop: 10 }}>
                {week.topics.map((topic: string, j: number) => {
                  const done = getTopicDone(phase.id, topic);

                  return (
                    <div
                      key={j}
                      onClick={() => toggleTopic(phase.id, topic)}
                      style={{
                        padding: "6px 8px",
                        marginBottom: 6,
                        borderRadius: 8,
                        cursor: "pointer",
                        background: done ? phase.color : "transparent",
                        color: done ? "#000" : t.text,
                        opacity: done ? 0.9 : 1,
                        transition: "0.15s",
                      }}
                    >
                      {done ? "✅ " : "⬜ "} {topic}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* PROJECT */}
        <div
          style={{
            marginTop: 30,
            padding: 18,
            borderRadius: 14,
            border: "1px solid " + t.border,
            background: t.card,
          }}
        >
          <h3>{phase.project.name}</h3>
          <p style={{ color: t.muted }}>{phase.project.description}</p>
        </div>

        {/* MILESTONE */}
        <div style={{ marginTop: 20, color: t.muted }}>
          <strong>Milestone:</strong> {phase.milestone}
        </div>
      </div>
    </div>
  );
}