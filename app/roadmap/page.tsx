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
      description:
        "Build a complete ERC-20 token with minting, burning, and transfer. Connect a React UI with ethers.js. Deploy to Sepolia testnet.",
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
      description:
        "Build a lending protocol: deposit collateral, borrow against it, track health factor, liquidate undercollateralized positions. Full test suite with Foundry (>95% coverage). Run Slither on it.",
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
      description:
        "Build a simplified Uniswap v2: liquidity pools, token swaps, LP tokens, price calculation. Full React frontend with swap UI. Subgraph for historical data. Deploy to Sepolia + verify on Etherscan.",
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
      description:
        "NFT marketplace: mint, list, buy, make offers. Royalty enforcement (ERC-2981). Chainlink VRF for randomized trait assignment during mint. Metadata on IPFS. ERC-2612 permit for gasless listing approvals.",
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
      description:
        "Full DAO system: governance token, proposal creation & voting (OZ Governor), 2-day timelock, treasury with multi-asset management. Deploy on Arbitrum (L2). Write an architecture decision document explaining every design choice.",
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
      description:
        "Build a vault protocol: users deposit tokens, vault automatically routes to highest-yield strategies (Aave, Compound), harvests and compounds rewards. Full security audit with Slither + Echidna invariants. Deploy to mainnet or Arbitrum. Get external feedback on the code.",
      skills: ["Vault architecture", "Strategy pattern", "Security audit process", "Mainnet deployment", "Risk management"],
      why: "Yield vaults touch every major DeFi primitive. Successfully shipping one to mainnet proves you're ready for a senior role.",
    },
    milestone: "You have 6 deployed projects, an audit contest participation, and a technical blog. You can design, build, test, and ship production-grade protocol code.",
  },
] as const;

const PARALLEL_SKILLS = [
  { icon: "📐", title: "CS Fundamentals", items: ["Data structures & algorithms", "Cryptography basics", "Networking (TCP/IP)", "OS concepts"], when: "Month 1–2" },
  { icon: "🔧", title: "Dev Tools & Git", items: ["Git branch, rebase, cherry-pick", "GitHub Actions (CI/CD)", "VS Code advanced config", "Foundry, Hardhat mastery"], when: "Month 1+" },
  { icon: "📊", title: "DeFi Protocol Reading", items: ["Read Uniswap v3 code", "Read Aave v3 codebase", "Follow protocol governance", "Track audit reports weekly"], when: "Month 3+" },
  { icon: "✍️", title: "Technical Writing", items: ["Write ADRs for each project", "Explain decisions in READMEs", "Post on Mirror / Paragraph", "Teach what you learn"], when: "Month 5+" },
  { icon: "🌐", title: "Community", items: ["Join ETHGlobal hackathons", "Follow Protocol Twitter", "Engage in governance forums", "Answer on StackExchange"], when: "Month 6+" },
  { icon: "🧠", title: "Economics & Game Theory", items: ["Tokenomics design basics", "Mechanism design reading", "MEV research", "Incentive alignment patterns"], when: "Month 8+" },
] as const;

const BOOKS = [
  { title: "Mastering Ethereum", author: "Andreas M. Antonopoulos", tag: "Essential" },
  { title: "Solidity Programming Essentials", author: "Ritesh Modi", tag: "Solidity" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", tag: "System Design" },
  { title: "The Art of Invisibility", author: "Kevin Mitnick", tag: "Security Mindset" },
  { title: "Zero to One", author: "Peter Thiel", tag: "Product Thinking" },
] as const;

const tagColors: Record<string, string> = { start: "#00D9FF", intermediate: "#A855F7", advanced: "#F59E0B", senior: "#FF6B6B" };
const tagLabels: Record<string, string> = { start: "Foundations", intermediate: "Intermediate", advanced: "Advanced", senior: "Senior" };

type ProgressMap = Record<
  number,
  {
    completed: boolean;
  }
>;

export default function RoadmapPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [completedPhases, setCompletedPhases] = useState<Set<number>>(new Set());
  const [tab, setTab] = useState("roadmap");
  const [expandedProject, setExpandedProject] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const phase = PHASES[activePhase];

  useEffect(() => {
    const savedTheme = localStorage.getItem("roadmap-theme");
    if (savedTheme) setIsDark(savedTheme === "dark");

    const savedCompleted = localStorage.getItem("roadmap-completed-phases");
    if (savedCompleted) {
      try {
        const parsed = JSON.parse(savedCompleted) as number[];
        setCompletedPhases(new Set(parsed));
      } catch {
        // ignore invalid localStorage
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("roadmap-theme", isDark ? "dark" : "light");
    document.body.style.backgroundColor = isDark ? "#08090C" : "#F4F7FA";
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("roadmap-completed-phases", JSON.stringify(Array.from(completedPhases)));
  }, [completedPhases]);

  const toggleComplete = (id: number) => {
    setCompletedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getPhaseColor = (color: string) => {
    if (isDark) return color;
    if (color === "#00D9FF") return "#0284C7";
    if (color === "#A855F7") return "#7C3AED";
    if (color === "#10B981") return "#059669";
    if (color === "#F59E0B") return "#D97706";
    if (color === "#EF4444") return "#DC2626";
    if (color === "#FF6B6B") return "#E11D48";
    return color;
  };

  const t = useMemo(
    () => ({
      bg: isDark ? "#08090C" : "#F4F7FA",
      text: isDark ? "#E2E8F0" : "#334155",
      heading: isDark ? "#F8FAFC" : "#0F172A",
      cardBg: isDark ? "#0E1117" : "#FFFFFF",
      cardBgMuted: isDark ? "#121620" : "#EAF0F6",
      border: isDark ? "#1A1A2E" : "#E2E8F0",
      borderMuted: isDark ? "#24243e" : "#CBD5E1",
      mutedText: isDark ? "#64748B" : "#64748B",
      navUnselected: isDark ? "#64748B" : "#64748B",
      pillBg: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.05)",
      pillActiveBg: isDark ? "#1E293B" : "#FFFFFF",
      shadow: isDark ? "none" : "0 4px 18px -4px rgba(15,23,42,0.06)",
      navBlurBg: isDark ? "rgba(8, 9, 12, 0.8)" : "rgba(244, 247, 250, 0.8)",
    }),
    [isDark]
  );

  const pColor = getPhaseColor(phase.color);

  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', 'IBM Plex Mono', sans-serif",
        background: t.bg,
        minHeight: "100vh",
        color: t.text,
        maxWidth: 1024,
        margin: "0 auto",
        padding: "0 0 100px 0",
        transition: "all 0.3s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .sticky-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: ${t.navBlurBg};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid ${t.border};
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .segmented-control {
          display: flex;
          background: ${t.pillBg};
          padding: 4px;
          border-radius: 30px;
          align-items: center;
        }

        .segmented-btn {
          background: none;
          border: none;
          padding: 6px 18px;
          border-radius: 20px;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .phase-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 240px;
          flex-shrink: 0;
          padding: 24px 16px 24px 0;
          border-right: 1px solid ${t.border};
        }

        .phase-card-btn {
          background: ${t.cardBg};
          border: 1px solid ${t.border};
          border-radius: 12px;
          padding: 12px 14px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: ${t.shadow};
        }

        .phase-card-btn:hover {
          border-color: ${isDark ? '#3b82f6' : '#94a3b8'};
          transform: translateY(-1px);
        }

        .main-layout { display: flex; gap: 0; min-height: 500px; }
        .responsive-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        @media (max-width: 768px) {
          .sticky-navbar { flex-direction: column; padding: 12px 16px; gap: 12px; }
          .main-layout { flex-direction: column; }
          .phase-list-wrapper {
            width: 100%;
            flex-direction: row;
            overflow-x: auto;
            padding: 16px;
            border-right: none;
            border-bottom: 1px solid ${t.border};
            -webkit-overflow-scrolling: touch;
          }
          .phase-card-btn { flex-shrink: 0; width: 180px; }
          .responsive-grid-layout { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sticky-navbar">
        <div className="segmented-control">
          {[
            { id: "roadmap", label: "🗺️ Roadmap" },
            { id: "parallel skills", label: "🔧 Parallel Skills" },
            { id: "reading list", label: "📖 Reading List" },
          ].map((tabItem) => (
            <button
              key={tabItem.id}
              className="segmented-btn"
              onClick={() => setTab(tabItem.id)}
              style={{
                background: tab === tabItem.id ? t.pillActiveBg : "transparent",
                color: tab === tabItem.id ? t.heading : t.navUnselected,
                boxShadow: tab === tabItem.id ? t.shadow : "none",
                fontWeight: tab === tabItem.id ? "600" : "500",
              }}
            >
              {tabItem.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            background: t.cardBg,
            border: "1px solid " + t.border,
            boxShadow: t.shadow,
            color: t.heading,
            padding: "8px 16px",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "inherit",
            fontWeight: "600",
            transition: "all 0.2s",
          }}
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div style={{ padding: "40px 32px 24px", borderBottom: "1px solid " + t.border }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 11, color: pColor, letterSpacing: "0.15em", fontWeight: "600" }}>ROADMAP.SH // BLOCKCHAIN</span>
          <span style={{ width: 6, height: 6, background: "#00FF88", borderRadius: "50%" }} />
          <span style={{ fontSize: 11, color: isDark ? "#00FF88" : "#059669", fontWeight: "600" }}>Senior Track Deployed</span>
        </div>
        <h1
          style={{
            fontSize: "clamp(24px, 5vw, 38px)",
            fontWeight: 700,
            color: t.heading,
            margin: 0,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Blockchain Developer Strategy
        </h1>

        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: t.mutedText, marginBottom: 8, fontWeight: "500" }}>
            <span>Curriculum Completion Status</span>
            <span>{completedPhases.size} / {PHASES.length} Phases Verified</span>
          </div>
          <div style={{ height: 6, background: isDark ? "#1E293B" : "#E2E8F0", borderRadius: 10, overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${(completedPhases.size / PHASES.length) * 100}%`,
                background: `linear-gradient(90deg, ${isDark ? '#00D9FF' : '#0284C7'}, #00FF88)`,
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>
        </div>
      </div>

      {tab === "roadmap" && (
        <div className="main-layout">
          <div className="phase-list-wrapper">
            {PHASES.map((p, i) => {
              const currentPColor = getPhaseColor(p.color);
              const isSelected = activePhase === i;
              return (
                <button
                  key={p.id}
                  className="phase-card-btn"
                  onClick={() => {
                    setActivePhase(i);
                    setActiveWeek(0);
                    setExpandedProject(false);
                  }}
                  style={{
                    borderColor: isSelected ? currentPColor : t.border,
                    background: isSelected ? (isDark ? "rgba(255,255,255,0.02)" : "#FFFFFF") : t.cardBg,
                    boxShadow: isSelected ? t.shadow : "none",
                    transform: isSelected ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontFamily: "'IBM Plex Mono', monospace",
                      background: isSelected ? currentPColor : isDark ? "#1E293B" : "#E2E8F0",
                      color: isSelected ? "#000000" : t.heading,
                      borderRadius: "6px",
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    {`0${p.id}`}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "10px", color: currentPColor, fontWeight: "600" }}>{p.duration}</div>
                    <div style={{ fontSize: "12px", color: t.heading, fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: 2 }}>
                      {p.title.split(" ")[0]} {p.title.split(" ")[1] || ""}
                    </div>
                  </div>
                  {completedPhases.has(p.id) && <span style={{ marginLeft: "auto", color: "#00FF88", fontSize: "12px" }}>✓</span>}
                </button>
              );
            })}
          </div>

          <div style={{ flex: 1, padding: "32px 24px", minWidth: 0 }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 24 }}>{phase.icon}</span>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: t.heading, margin: 0 }}>{phase.title}</h2>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: "600",
                    color: tagColors[phase.status],
                    background: `${tagColors[phase.status]}15`,
                    border: `1px solid ${tagColors[phase.status]}30`,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  {tagLabels[phase.status]}
                </span>
              </div>
              <p style={{ fontSize: 13, color: t.mutedText, margin: "0 0 4px 0", fontStyle: "italic" }}>"{phase.tagline}"</p>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap", background: t.pillBg, padding: 4, borderRadius: "8px" }}>
              {phase.weeks.map((w, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveWeek(i);
                    setExpandedProject(false);
                  }}
                  style={{
                    background: activeWeek === i && !expandedProject ? t.pillActiveBg : "transparent",
                    border: "none",
                    boxShadow: activeWeek === i && !expandedProject ? t.shadow : "none",
                    color: activeWeek === i && !expandedProject ? pColor : t.mutedText,
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  {w.week}
                </button>
              ))}
              <button
                onClick={() => setExpandedProject(true)}
                style={{
                  background: expandedProject ? t.pillActiveBg : "transparent",
                  border: "none",
                  boxShadow: expandedProject ? t.shadow : "none",
                  color: expandedProject ? (isDark ? "#00FF88" : "#059669") : t.mutedText,
                  padding: "8px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  marginLeft: "auto",
                }}
              >
                🔨 Action Project
              </button>
            </div>

            {!expandedProject ? (
              <div>
                <div style={{ background: t.cardBg, border: "1px solid " + t.border, boxShadow: t.shadow, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: pColor, fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'IBM Plex Mono', monospace" }}>
                    FOCUS AREA // {phase.weeks[activeWeek].focus}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {phase.weeks[activeWeek].topics.map((topic, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span style={{ color: pColor, fontSize: 12, marginTop: 1 }}>▸</span>
                        <span style={{ fontSize: 13, color: t.text, lineHeight: 1.5 }}>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: t.cardBgMuted, borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 11, color: t.mutedText, fontWeight: "600", marginBottom: 12 }}>RELIABLE SYLLABUS LINKS</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {phase.weeks[activeWeek].resources.map((r, i) => (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: t.cardBg,
                          border: "1px solid " + t.border,
                          padding: "6px 14px",
                          borderRadius: "8px",
                          boxShadow: t.shadow,
                          color: isDark ? "#00D9FF" : "#0284C7",
                          fontSize: 12,
                          textDecoration: "none",
                          fontWeight: "500",
                        }}
                      >
                        <span>↗</span> {r.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ background: isDark ? "#0D1322" : "#F0F6FC", border: `1px solid ${pColor}40`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 24 }}>🔨</span>
                  <div>
                    <div style={{ fontSize: 11, color: pColor, fontWeight: "700" }}>PRACTICAL MILESTONE CAPSTONE</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: t.heading, marginTop: 2 }}>{phase.project.name}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: t.text, lineHeight: 1.7, margin: "0 0 20px 0" }}>{phase.project.description}</p>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 11, color: t.mutedText, fontWeight: "600", marginBottom: 8 }}>SKILL VERIFICATION ENGINE</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {phase.project.skills.map((s, i) => (
                      <span key={i} style={{ fontSize: 11, color: t.heading, background: t.cardBg, border: "1px solid " + t.border, padding: "4px 10px", borderRadius: "6px" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ background: t.cardBg, border: "1px solid " + t.border, padding: "14px 16px", borderRadius: "8px" }}>
                  <span style={{ fontSize: 11, color: pColor, fontWeight: "700" }}>ARCHITECTURE VALIDATION: </span>
                  <span style={{ fontSize: 13, color: t.mutedText }}>{phase.project.why}</span>
                </div>
              </div>
            )}

            <div style={{ marginTop: 24, background: t.cardBg, border: "1px solid " + t.border, borderLeft: `4px solid ${pColor}`, borderRadius: "4px 12px 12px 4px", padding: 18, boxShadow: t.shadow }}>
              <div style={{ fontSize: 11, color: t.mutedText, fontWeight: "600", marginBottom: 4 }}>OBJECTIVE CRITERIA</div>
              <div style={{ fontSize: 13, color: t.heading, lineHeight: 1.5 }}>{phase.milestone}</div>
            </div>

            <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => toggleComplete(phase.id)}
                style={{
                  background: completedPhases.has(phase.id) ? "#00FF8815" : "transparent",
                  border: `1px solid ${completedPhases.has(phase.id) ? isDark ? "#00FF88" : "#059669" : t.border}`,
                  color: completedPhases.has(phase.id) ? (isDark ? "#00FF88" : "#059669") : t.heading,
                  padding: "10px 20px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: t.shadow,
                }}
              >
                {completedPhases.has(phase.id) ? "✓ Complete & Deployed" : "○ Mark Phase Achieved"}
              </button>
            </div>
          </div>
        </div>
      )}

      {tab === "parallel skills" && (
        <div style={{ padding: "32px 24px" }}>
          <p style={{ fontSize: 14, color: t.mutedText, marginBottom: 24, textAlign: "center" }}>
            Core engineering stacks running in parallel with the smart contract workflow.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {PARALLEL_SKILLS.map((skill, i) => (
              <div key={i} style={{ background: t.cardBg, border: "1px solid " + t.border, boxShadow: t.shadow, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>{skill.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: t.heading }}>{skill.title}</div>
                    <div style={{ fontSize: 10, color: t.mutedText, marginTop: 1, fontFamily: "monospace" }}>TIMELINE: {skill.when}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {skill.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 12, color: t.text, display: "flex", gap: 8 }}>
                      <span style={{ color: t.borderMuted }}>—</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, background: t.cardBgMuted, borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: t.heading, margin: "0 0 20px 0" }}>🧭 Senior Architecture Playbook</h3>
            <div className="responsive-grid-layout">
              {[
                ["Audit Code, Don't Just Consume Docs", "Seniors review production code repositories (Uniswap, Compound, Aave) to map out algorithmic edge cases. Code is the single source of truth."],
                ["Production Invariants", "Before scaffolding architectures, write strict invariants (what states must never exist). Secure the asset flow structurally."],
                ["Gas & Storage Micro-Optimization", "Understand storage packing slots, custom errors vs string bounds, and the exact gas profiles of deployment parameters."],
                ["Trade-off Transparency", "A junior defends an absolute stack choice. A senior details why they yielded specific execution vectors for throughput or absolute safety."],
              ].map(([title, desc], i) => (
                <div key={i} style={{ padding: 16, background: t.cardBg, borderRadius: 10, border: "1px solid " + t.border, boxShadow: t.shadow }}>
                  <div style={{ fontSize: 13, color: isDark ? "#00D9FF" : "#0284C7", marginBottom: 6, fontWeight: "600" }}>{title}</div>
                  <div style={{ fontSize: 12, color: t.mutedText, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "reading list" && (
        <div style={{ padding: "32px 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {BOOKS.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: t.cardBg, border: "1px solid " + t.border, boxShadow: t.shadow, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ fontSize: 24 }}>📖</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.heading, marginBottom: 2 }}>{b.title}</div>
                  <div style={{ fontSize: 12, color: t.mutedText }}>{b.author}</div>
                </div>
                <span style={{ fontSize: 11, color: isDark ? "#00D9FF" : "#0284C7", background: isDark ? "rgba(0,217,255,0.08)" : "rgba(2,132,199,0.08)", padding: "4px 10px", borderRadius: "6px", fontWeight: "600" }}>
                  {b.tag}
                </span>
              </div>
            ))}
          </div>

          <div style={{ background: t.cardBgMuted, borderRadius: 16, padding: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: t.heading, margin: "0 0 16px 0" }}>📡 Industry Tracking Infrastructure</h3>
            <div className="responsive-grid-layout" style={{ gap: 12 }}>
              {[
                { label: "Ethereum Research Forum", url: "https://ethresear.ch", cat: "Research" },
                { label: "Week in Ethereum News", url: "https://weekinethereumnews.com", cat: "Newsletter" },
                { label: "Code4rena Reports", url: "https://code4rena.com/reports", cat: "Security Audits" },
                { label: "Solodit Database", url: "https://solodit.xyz", cat: "Vulnerability Engine" },
                { label: "RareSkills Gas Mechanics", url: "https://www.rareskills.io/blog", cat: "Deep Dives" },
                { label: "Paradigm Engineering Papers", url: "https://www.paradigm.xyz/writing", cat: "Mechanism Design" },
              ].map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    background: t.cardBg,
                    border: "1px solid " + t.border,
                    boxShadow: t.shadow,
                    borderRadius: 8,
                    padding: "12px 14px",
                  }}
                >
                  <span style={{ fontSize: 13, color: t.heading, fontWeight: "500" }}>{r.label}</span>
                  <span style={{ fontSize: 11, color: t.mutedText }}>{r.cat}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div style={{ padding: "32px 24px 0", borderTop: "1px solid " + t.border, display: "flex", justifyContent: "space-between", fontSize: 11, color: t.mutedText }}>
        <span>Compiled using roadmap.sh/blockchain specifications</span>
        <span>12 Month Architecture Framework</span>
      </div>
    </div>
  );
}
