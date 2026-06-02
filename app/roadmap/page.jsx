"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  LayoutDashboard,
  ListChecks,
  Moon,
  Network,
  Play,
  RefreshCcw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Server,
  Workflow,
  Layers3,
  Circle,
} from "lucide-react";

const STORAGE_KEY = "execution-first-blockchain-roadmap-v1";

const phases = [
  {
    id: 1,
    title: "Foundation & JavaScript Upgrade",
    timeline: "Months 1–2",
    outcome:
      "You can build the off-chain tooling, scripts, and debugging utilities that blockchain products depend on.",
    concepts: [
      "JavaScript fundamentals for real work: async/await, modules, errors, and data shaping.",
      "Node.js runtime basics: file IO, environment variables, CLI flags, and process control.",
      "Transaction lifecycle: wallet -> RPC -> mempool -> block -> receipt.",
      "Node/provider stack: geth, Nethermind, Alchemy, Infura, QuickNode, and why each exists.",
    ],
    projects: [
      {
        id: "p1-1",
        name: "Transaction Inspector CLI",
        goal: "Inspect real transactions, decode calldata, and explain what happened in plain language.",
        features: [
          "Fetch a tx by hash from an RPC endpoint.",
          "Decode function selectors and arguments using an ABI.",
          "Show status, gas used, logs, and revert reasons when available.",
          "Export a JSON report for later review.",
        ],
        architecture:
          "Node.js CLI + ethers.js + RPC provider + local JSON storage for saved investigations.",
        stack: ["Node.js", "ethers.js", "JSON-RPC", "SQLite or JSON files"],
        challenges: [
          "Handling missing ABI data gracefully.",
          "Dealing with rate limits and flaky RPC responses.",
          "Understanding receipts, logs, and failed transaction traces.",
        ],
        done: [
          "Can inspect at least 20 known transactions without breaking.",
          "Can explain a failure in one paragraph from the report output.",
          "Has a saved investigation folder with reusable examples.",
        ],
        tasks: [
          { id: "p1-1-t1", text: "Build the RPC client and fetch a tx + receipt by hash." },
          { id: "p1-1-t2", text: "Decode calldata and display the called function name." },
          { id: "p1-1-t3", text: "Add gas, logs, status, and error handling output." },
          { id: "p1-1-t4", text: "Save each investigation as a JSON file." },
          { id: "p1-1-t5", text: "Write one page of lessons learned from 5 real txs." },
        ],
      },
      {
        id: "p1-2",
        name: "Local Chain Lab",
        goal: "Reproduce transaction behavior on a local chain so debugging becomes repeatable.",
        features: [
          "Deploy a tiny contract set on a local network.",
          "Simulate success, revert, nonce conflict, and pending tx scenarios.",
          "Compare expected vs actual gas usage.",
          "Document 5 reproducible cases with screenshots or logs.",
        ],
        architecture:
          "Hardhat or Anvil local chain + scripts + test cases + a small status dashboard.",
        stack: ["Hardhat", "Foundry or Anvil", "ethers.js", "Markdown notes"],
        challenges: [
          "Creating minimal reproducible examples instead of vague tests.",
          "Understanding nonce management and chain state resets.",
          "Keeping the lab small enough to revisit weekly.",
        ],
        done: [
          "Five scenarios can be reproduced from a clean repo clone.",
          "Each scenario has a before/after explanation.",
          "A teammate could run the lab without asking for clarification.",
        ],
        tasks: [
          { id: "p1-2-t1", text: "Create a local deploy script and one simple test contract." },
          { id: "p1-2-t2", text: "Simulate a revert and explain the revert path." },
          { id: "p1-2-t3", text: "Simulate pending and replaced transactions." },
          { id: "p1-2-t4", text: "Record gas usage for each scenario." },
          { id: "p1-2-t5", text: "Write a lab guide with exact commands." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Contract Engineering & Testing",
    timeline: "Months 3–4",
    outcome:
      "You can write production-grade contracts, test them aggressively, and reason about security trade-offs.",
    concepts: [
      "ERC standards, storage layout, access control, events, and upgrade-safe design.",
      "Testing depth: unit, integration, coverage, fuzzing, and regression tests.",
      "Common security failures: reentrancy, bad approvals, missing checks, and broken assumptions.",
      "Tooling: OpenZeppelin, Slither, Foundry or Hardhat, and why each tool exists.",
    ],
    projects: [
      {
        id: "p2-1",
        name: "Token Operations Suite",
        goal: "Ship a token system with vesting, roles, pauses, and admin controls that is safe to operate.",
        features: [
          "Mint, burn, and role-gated admin flows.",
          "Vesting schedules with cliffs and revocation rules.",
          "Pausable operations and event-rich actions.",
          "Deployment scripts and upgrade-safe storage decisions.",
        ],
        architecture:
          "Solidity contracts + test suite + deployment scripts + a small admin UI for operations.",
        stack: ["Solidity", "OpenZeppelin", "Foundry or Hardhat", "Slither", "Ethers.js"],
        challenges: [
          "Preserving storage layout for future upgrades.",
          "Writing tests that cover malicious and edge-case behavior.",
          "Avoiding overengineering while still making the system real.",
        ],
        done: [
          "Coverage is consistently high and meaningful.",
          "A malicious test suite exists for each risky function.",
          "The system can be deployed to a testnet and operated safely.",
        ],
        tasks: [
          { id: "p2-1-t1", text: "Implement the core token contract and role model." },
          { id: "p2-1-t2", text: "Add vesting, pause, and revoke flows." },
          { id: "p2-1-t3", text: "Write unit and integration tests for normal and hostile cases." },
          { id: "p2-1-t4", text: "Run static analysis and fix every actionable warning." },
          { id: "p2-1-t5", text: "Deploy to a testnet and verify one full operational flow." },
        ],
      },
      {
        id: "p2-2",
        name: "Security Reproduction Lab",
        goal: "Understand vulnerabilities by reproducing them, then patching them with proof.",
        features: [
          "One exploit per vulnerability with a test that proves the issue exists.",
          "A fixed version with the exploit test turned into a regression test.",
          "A short postmortem for each case.",
          "A checklist of what signal would have caught the bug earlier.",
        ],
        architecture:
          "Isolated contract playground + attack test harness + write-up folder + regression suite.",
        stack: ["Solidity", "Foundry", "Cheatcodes", "Markdown write-ups"],
        challenges: [
          "Keeping each reproduction focused on one failure mode.",
          "Turning theory into a concrete exploit path.",
          "Learning the habit of proving, not assuming, that a fix works.",
        ],
        done: [
          "Three vulnerabilities are reproduced and patched.",
          "Each patch has a regression test that fails on the old code.",
          "Each case has a one-page explanation in plain English.",
        ],
        tasks: [
          { id: "p2-2-t1", text: "Pick one reentrancy-style case and reproduce it." },
          { id: "p2-2-t2", text: "Add one access-control bug and exploit it." },
          { id: "p2-2-t3", text: "Add one oracle or assumption failure and document the impact." },
          { id: "p2-2-t4", text: "Patch each issue and convert exploit tests into regressions." },
          { id: "p2-2-t5", text: "Write a concise postmortem for each bug." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Full-Stack dApp Systems",
    timeline: "Months 5–7",
    outcome:
      "You can build the front end, backend, and on-chain layer as one product instead of isolated pieces.",
    concepts: [
      "API design, data modeling, queues, retries, idempotency, and event indexing.",
      "Wallet UX, transaction states, and why users need clear operational feedback.",
      "React + ethers.js integration for product-like user flows.",
      "Observability: logs, alerts, and the difference between a demo and a service.",
    ],
    projects: [
      {
        id: "p3-1",
        name: "Treasury Operations dApp",
        goal: "Let a team propose, approve, simulate, and execute treasury actions with a full audit trail.",
        features: [
          "Multi-approval flow with roles and thresholds.",
          "Proposal queue with comments, statuses, and execution history.",
          "Transaction simulation before execution.",
          "Searchable audit log and event history.",
        ],
        architecture:
          "Smart contracts + Next.js frontend + Node API + database + background worker for event sync.",
        stack: ["Solidity", "Next.js", "Node.js", "Postgres or SQLite", "ethers.js", "BullMQ or a simple worker"],
        challenges: [
          "Keeping on-chain and off-chain state in sync.",
          "Designing data structures that are easy to query.",
          "Handling failed or delayed transactions without confusing users.",
        ],
        done: [
          "A user can create, approve, and execute a real workflow end to end.",
          "The audit trail survives refreshes, restarts, and reconnects.",
          "A new user can understand the product without a walkthrough.",
        ],
        tasks: [
          { id: "p3-1-t1", text: "Define the contract workflow and event model." },
          { id: "p3-1-t2", text: "Build the backend API and database schema." },
          { id: "p3-1-t3", text: "Create the approval and execution UI." },
          { id: "p3-1-t4", text: "Add simulation and audit log screens." },
          { id: "p3-1-t5", text: "Test the full flow on a public testnet." },
        ],
      },
      {
        id: "p3-2",
        name: "Indexer + Notification Service",
        goal: "Track contract events reliably and notify operators when important things happen.",
        features: [
          "Backfill historical blocks and continue in real time.",
          "Store indexed events in a queryable database.",
          "Send notifications for high-value or risky actions.",
          "Recover safely after crashes without duplicate events.",
        ],
        architecture:
          "RPC listener + event parser + job queue + database + notification adapters.",
        stack: ["Node.js", "ethers.js", "Database", "Email/Telegram/Slack webhook integration"],
        challenges: [
          "Reorg awareness and duplicate prevention.",
          "Choosing sane retry and checkpoint behavior.",
          "Writing useful alerts instead of noise.",
        ],
        done: [
          "Indexer can restart and resume from the last checkpoint.",
          "At least one notification channel is live.",
          "Backfill and real-time mode both work with the same schema.",
        ],
        tasks: [
          { id: "p3-2-t1", text: "Build the event listener and checkpoint storage." },
          { id: "p3-2-t2", text: "Store events in a normalized schema." },
          { id: "p3-2-t3", text: "Add one notification adapter and one alert rule." },
          { id: "p3-2-t4", text: "Handle duplicate and replayed events correctly." },
          { id: "p3-2-t5", text: "Write a restart-and-recover test plan." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Security, Protocol Thinking & Scaling",
    timeline: "Months 8–10",
    outcome:
      "You can think about failure modes, chain behavior, monitoring, and what actually breaks in production.",
    concepts: [
      "Mempool behavior, reorgs, finality, and what transaction ordering really means.",
      "Consensus basics and client diversity: why nodes do not all behave the same.",
      "MEV, oracle risk, and the difference between correctness and operability.",
      "Monitoring, incident response, and writing the runbook before the incident happens.",
    ],
    projects: [
      {
        id: "p4-1",
        name: "Security Monitoring Console",
        goal: "Detect abnormal contract behavior before it turns into a loss or an outage.",
        features: [
          "Rules for large transfers, owner changes, role changes, and failed tx spikes.",
          "A live dashboard with severity levels and timestamps.",
          "Alert history and dismiss/acknowledge workflow.",
          "A minimal runbook for each alert type.",
        ],
        architecture:
          "Event indexer + rule engine + alert storage + dashboard UI + notification sink.",
        stack: ["Node.js", "ethers.js", "React or Next.js", "Database", "Webhook notifications"],
        challenges: [
          "Avoiding alert spam.",
          "Selecting rules that are simple but useful.",
          "Turning monitoring into an operational habit, not a side feature.",
        ],
        done: [
          "Ten rules are implemented and tested on simulated events.",
          "Alerts are actionable and linked to a runbook.",
          "The dashboard can be used by someone else without explanation.",
        ],
        tasks: [
          { id: "p4-1-t1", text: "Define ten detection rules with thresholds." },
          { id: "p4-1-t2", text: "Implement the rule engine and severity levels." },
          { id: "p4-1-t3", text: "Build the dashboard and alert history views." },
          { id: "p4-1-t4", text: "Test each rule against simulated event streams." },
          { id: "p4-1-t5", text: "Write a one-page runbook for every high-severity alert." },
        ],
      },
      {
        id: "p4-2",
        name: "Incident Reproduction Book",
        goal: "Learn from real failures by recreating them and documenting the prevention strategy.",
        features: [
          "Three incident chapters with reproduction steps.",
          "Each chapter includes a patch and a monitoring rule.",
          "A before/after summary of what changed operationally.",
          "A final checklist for launch readiness.",
        ],
        architecture:
          "Local fork or simulation environment + attack scripts + notes + defense checklist.",
        stack: ["Foundry", "Solidity", "Node.js scripts", "Markdown documentation"],
        challenges: [
          "Choosing incidents that teach something reusable.",
          "Keeping the reproduction precise enough to be believable.",
          "Avoiding the trap of collecting notes without converting them into defenses.",
        ],
        done: [
          "Three incidents are reproducible end to end.",
          "Each one has a fix and a detection idea.",
          "The book is readable as an internal training document.",
        ],
        tasks: [
          { id: "p4-2-t1", text: "Choose three incidents that map to your target product class." },
          { id: "p4-2-t2", text: "Reproduce the first incident and record the exact command sequence." },
          { id: "p4-2-t3", text: "Patch the reproduction and add a monitoring rule." },
          { id: "p4-2-t4", text: "Repeat for the second and third incidents." },
          { id: "p4-2-t5", text: "Summarize the common failure patterns across all three." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Capstone & Senior Polish",
    timeline: "Months 11–12",
    outcome:
      "You can ship, explain, defend, and operate a production-grade blockchain system end to end.",
    concepts: [
      "System design: trade-offs, reliability, upgrade strategy, and scope control.",
      "Launch readiness: CI, release checks, rollback plans, and documentation quality.",
      "Architecture communication: draw the system, explain risks, and defend decisions.",
      "Career-level proof: portfolio, postmortems, and interviews based on real work.",
    ],
    projects: [
      {
        id: "p5-1",
        name: "Production Treasury Platform",
        goal: "Release a deployable on-chain treasury system with backend services, monitoring, and admin workflows.",
        features: [
          "Role-based approvals and policy checks.",
          "Simulation before execution and a full transaction history.",
          "Upgradeable contract path with a documented storage layout strategy.",
          "Admin dashboards and notification hooks.",
        ],
        architecture:
          "Upgradeable contracts + API server + event indexer + dashboard + release/CI pipeline.",
        stack: ["Solidity", "Next.js", "Node.js", "Postgres", "ethers.js", "CI/CD"],
        challenges: [
          "Making the architecture small enough to launch but strong enough to trust.",
          "Keeping the upgrade path honest and documented.",
          "Balancing simplicity with operational safety.",
        ],
        done: [
          "There is a launch checklist, rollback plan, and release notes.",
          "The system has a staged deployment path and an audit trail.",
          "You can explain the architecture without looking at the code.",
        ],
        tasks: [
          { id: "p5-1-t1", text: "Freeze the product scope and define the release criteria." },
          { id: "p5-1-t2", text: "Implement the final on-chain and off-chain integration points." },
          { id: "p5-1-t3", text: "Add CI, tests, and deployment automation." },
          { id: "p5-1-t4", text: "Write rollback and incident handling docs." },
          { id: "p5-1-t5", text: "Perform one dry-run launch from scratch." },
        ],
      },
      {
        id: "p5-2",
        name: "Ops Package + Incident Drill",
        goal: "Prove that you can operate the system calmly, not just build it.",
        features: [
          "A public-grade README and architecture overview.",
          "An incident drill with a timed response.",
          "A metrics and alert review checklist.",
          "A retrospective template for future improvements.",
        ],
        architecture:
          "Documentation hub + drill scenarios + dashboards + postmortem templates.",
        stack: ["Markdown", "Monitoring dashboard", "Task tracker", "Notion or repo docs"],
        challenges: [
          "Treating operations as a first-class deliverable.",
          "Responding to an incident with a process, not panic.",
          "Identifying what to simplify before shipping.",
        ],
        done: [
          "You can run an incident drill in under 30 minutes.",
          "A stranger can understand the product from the docs.",
          "There is a clear next-step plan after the capstone ships.",
        ],
        tasks: [
          { id: "p5-2-t1", text: "Write the public README and architecture overview." },
          { id: "p5-2-t2", text: "Create the incident drill scenario and response steps." },
          { id: "p5-2-t3", text: "Add the metrics and alert review checklist." },
          { id: "p5-2-t4", text: "Run a timed drill and capture the gaps." },
          { id: "p5-2-t5", text: "Write the retrospective and next-iteration plan." },
        ],
      },
    ],
  },
];

const skillStack = [
  {
    icon: Brain,
    title: "CS fundamentals",
    text: "Focus on data structures, algorithms, and complexity only when they help you ship, test, or debug faster.",
    output: "Small utilities, reliable tests, and clear trade-offs.",
  },
  {
    icon: Server,
    title: "Backend / Node.js",
    text: "Build RPC consumers, workers, queues, APIs, and persistence layers that survive failures.",
    output: "Indexer, notification service, and admin APIs.",
  },
  {
    icon: Network,
    title: "Blockchain internals",
    text: "Understand mempool behavior, node diversity, consensus, finality, forks, and reorgs.",
    output: "Fewer surprises during production incidents.",
  },
  {
    icon: ShieldCheck,
    title: "Security mindset",
    text: "Threat model everything that moves money, privileges, state, or trust.",
    output: "Exploit tests, monitoring rules, and safer designs.",
  },
  {
    icon: Layers3,
    title: "System design",
    text: "Design products as connected services, not isolated contracts.",
    output: "Architecture docs that explain how everything fits together.",
  },
];

const dailySystem = [
  {
    title: "15 min review",
    text: "Open yesterday’s notes, confirm the active phase, and choose one next task only.",
  },
  {
    title: "90 min build",
    text: "Implement one thin vertical slice that changes code, tests, or product behavior.",
  },
  {
    title: "45 min learn",
    text: "Read or watch one targeted resource, then immediately turn it into a test, script, or note.",
  },
  {
    title: "30 min validate",
    text: "Run tests, inspect output, write a short decision log, and commit the result.",
  },
];

const stuckProtocol = [
  "Restate the problem in one sentence and write the expected outcome.",
  "Create the smallest failing example you can.",
  "Check official docs, source code, and one known good example.",
  "Reduce the problem until one file or one test explains it.",
  "If 45 minutes pass, write the blocker clearly and switch to another task.",
];

function flattenTasks() {
  return phases.flatMap((phase) =>
    phase.projects.flatMap((project) =>
      project.tasks.map((task) => ({
        ...task,
        phaseId: phase.id,
        phaseTitle: phase.title,
        projectId: project.id,
        projectName: project.name,
      })),
    ),
  );
}

const allTasks = flattenTasks();
const allTaskIds = allTasks.map((task) => task.id);

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function progressFromCount(done, total) {
  if (!total) return 0;
  return clamp(Math.round((done / total) * 100));
}

function StatCard({ icon: Icon, label, value, subtext, themeDark }) {
  return (
    <div
      className={cx(
        "rounded-3xl border p-4 shadow-sm backdrop-blur-sm transition",
        themeDark
          ? "border-slate-800 bg-slate-900/80 shadow-black/20"
          : "border-slate-200 bg-white shadow-slate-200/60",
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cx(
            "rounded-2xl p-2",
            themeDark ? "bg-cyan-400/10 text-cyan-300" : "bg-sky-50 text-sky-700",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className={cx("text-xs uppercase tracking-[0.2em]", themeDark ? "text-slate-400" : "text-slate-500")}>
            {label}
          </p>
          <p className={cx("mt-1 text-2xl font-semibold", themeDark ? "text-white" : "text-slate-950")}>{value}</p>
          <p className={cx("mt-1 text-sm", themeDark ? "text-slate-400" : "text-slate-600")}>{subtext}</p>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value, themeDark, small = false }) {
  return (
    <div
      className={cx(
        "w-full overflow-hidden rounded-full",
        small ? "h-2" : "h-3",
        themeDark ? "bg-slate-800" : "bg-slate-200",
      )}
    >
      <div
        className={cx(
          "h-full rounded-full transition-all duration-500",
          themeDark ? "bg-gradient-to-r from-cyan-400 to-sky-500" : "bg-gradient-to-r from-sky-500 to-indigo-500",
        )}
        style={{ width: `${clamp(value)}%` }}
      />
    </div>
  );
}

function Badge({ children, themeDark, subtle = false }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        themeDark
          ? subtle
            ? "bg-slate-800 text-slate-300"
            : "bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20"
          : subtle
            ? "bg-slate-100 text-slate-600"
            : "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
      )}
    >
      {children}
    </span>
  );
}

export default function ExecutionFirstSeniorBlockchainRoadmap() {
  const [themeDark, setThemeDark] = useState(true);
  const [activePhaseId, setActivePhaseId] = useState(phases[0].id);
  const [openProjectId, setOpenProjectId] = useState(phases[0].projects[0].id);
  const [progress, setProgress] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const storedProgress = window.localStorage.getItem(STORAGE_KEY);
      if (storedProgress) {
        const parsed = JSON.parse(storedProgress);
        if (parsed && typeof parsed === "object") {
          setProgress(parsed.progress || {});
          if (typeof parsed.themeDark === "boolean") setThemeDark(parsed.themeDark);
          if (parsed.activePhaseId) setActivePhaseId(parsed.activePhaseId);
          if (parsed.openProjectId) setOpenProjectId(parsed.openProjectId);
        }
      } else {
        const systemTheme =
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setThemeDark(systemTheme);
      }
    } catch {
      const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeDark(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        progress,
        themeDark,
        activePhaseId,
        openProjectId,
      }),
    );
  }, [progress, themeDark, activePhaseId, openProjectId, mounted]);

  const tasksByPhase = useMemo(() => {
    const map = new Map();
    for (const phase of phases) {
      map.set(
        phase.id,
        phase.projects.flatMap((project) =>
          project.tasks.map((task) => ({
            ...task,
            projectName: project.name,
            projectId: project.id,
          })),
        ),
      );
    }
    return map;
  }, []);

  const phaseStats = useMemo(() => {
    return phases.map((phase) => {
      const phaseTasks = tasksByPhase.get(phase.id) || [];
      const done = phaseTasks.filter((task) => progress[task.id]).length;
      const total = phaseTasks.length;
      const percentage = progressFromCount(done, total);

      const projects = phase.projects.map((project) => {
        const doneProject = project.tasks.filter((task) => progress[task.id]).length;
        return {
          ...project,
          done: doneProject,
          total: project.tasks.length,
          percentage: progressFromCount(doneProject, project.tasks.length),
        };
      });

      return {
        ...phase,
        done,
        total,
        percentage,
        projects,
      };
    });
  }, [progress, tasksByPhase]);

  const overallDone = allTaskIds.filter((id) => progress[id]).length;
  const overallProgress = progressFromCount(overallDone, allTaskIds.length);
  const completedProjects = phaseStats.flatMap((phase) => phase.projects).filter((project) => project.percentage === 100).length;
  const activePhase = phaseStats.find((phase) => phase.id === activePhaseId) || phaseStats[0];
  const activeProject = activePhase.projects.find((project) => project.id === openProjectId) || activePhase.projects[0];

  const nextTask = useMemo(() => {
    for (const phase of phaseStats) {
      for (const project of phase.projects) {
        const task = project.tasks.find((item) => !progress[item.id]);
        if (task) {
          return {
            ...task,
            phaseId: phase.id,
            phaseTitle: phase.title,
            projectName: project.name,
            projectId: project.id,
          };
        }
      }
    }
    return null;
  }, [phaseStats, progress]);

  const focusTasks = nextTask
    ? activePhase.projects.flatMap((project) =>
        project.tasks
          .filter((task) => !progress[task.id])
          .slice(0, 2)
          .map((task) => ({ ...task, projectName: project.name })),
      )
    : [];

  const toggleTask = (taskId) => {
    setProgress((current) => ({ ...current, [taskId]: !current[taskId] }));
  };

  const toggleTheme = () => setThemeDark((current) => !current);

  const resetAll = () => {
    if (typeof window !== "undefined" && window.confirm("Reset all roadmap progress?")) {
      setProgress({});
    }
  };

  const jumpToNextAction = () => {
    if (nextTask) {
      setActivePhaseId(nextTask.phaseId);
      setOpenProjectId(nextTask.projectId);
      const el = document.getElementById(nextTask.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const surfaceClass = themeDark
    ? "bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_35%),linear-gradient(180deg,#020617_0%,#0b1020_100%)] text-slate-100"
    : "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_35%),linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] text-slate-950";

  const panelClass = themeDark
    ? "border-slate-800 bg-slate-900/80 shadow-black/20"
    : "border-slate-200 bg-white shadow-slate-200/60";

  const subtleText = themeDark ? "text-slate-400" : "text-slate-600";
  const strongText = themeDark ? "text-white" : "text-slate-950";

  return (
    <div className={cx("min-h-screen", surfaceClass)}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header
          className={cx(
            "rounded-[2rem] border p-5 shadow-2xl backdrop-blur-sm sm:p-6",
            panelClass,
          )}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge themeDark={themeDark}>
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Execution-first
                </Badge>
                <Badge themeDark={themeDark} subtle>
                  Built from roadmap.sh blockchain + awesome-solidity
                </Badge>
              </div>
              <h1 className={cx("mt-4 text-3xl font-bold tracking-tight sm:text-4xl", strongText)}>
                Senior Blockchain Developer Roadmap
              </h1>
              <p className={cx("mt-3 max-w-3xl text-base leading-7", subtleText)}>
                This dashboard turns a 12-month self-study path into daily execution. It is designed to
                answer one question every morning: <span className={strongText}>what do I build next?</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => {
                      setActivePhaseId(phase.id);
                      setOpenProjectId(phase.projects[0].id);
                    }}
                    className={cx(
                      "rounded-full border px-4 py-2 text-sm font-medium transition",
                      activePhaseId === phase.id
                        ? themeDark
                          ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                          : "border-sky-500/30 bg-sky-50 text-sky-700"
                        : themeDark
                          ? "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300",
                    )}
                  >
                    {phase.timeline}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <button
                onClick={jumpToNextAction}
                className={cx(
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  themeDark
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "bg-slate-950 text-white hover:bg-slate-800",
                )}
              >
                <Play className="h-4 w-4" />
                Go to next action
              </button>
              <button
                onClick={toggleTheme}
                className={cx(
                  "inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                  themeDark
                    ? "border-slate-700 bg-slate-950/50 text-slate-200 hover:border-slate-600"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                )}
              >
                {themeDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {themeDark ? "Light mode" : "Dark mode"}
              </button>
              <button
                onClick={resetAll}
                className={cx(
                  "inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                  themeDark
                    ? "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                )}
              >
                <RefreshCcw className="h-4 w-4" />
                Reset progress
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={BarChart3}
              label="Overall progress"
              value={`${overallProgress}%`}
              subtext={`${overallDone}/${allTaskIds.length} tasks completed`}
              themeDark={themeDark}
            />
            <StatCard
              icon={Target}
              label="Current phase"
              value={`Phase ${activePhase.id}`}
              subtext={activePhase.title}
              themeDark={themeDark}
            />
            <StatCard
              icon={ListChecks}
              label="Projects finished"
              value={`${completedProjects}/${phases.flatMap((phase) => phase.projects).length}`}
              subtext="Every project has a measurable definition of done"
              themeDark={themeDark}
            />
            <StatCard
              icon={ArrowRight}
              label="Next action"
              value={nextTask ? "Ready" : "Complete" }
              subtext={nextTask ? `${nextTask.phaseTitle} → ${nextTask.projectName}` : "Everything is checked off"}
              themeDark={themeDark}
            />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
            <div className={cx("rounded-[2rem] border p-5", panelClass)}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={cx("text-xs uppercase tracking-[0.25em]", subtleText)}>Now</p>
                  <h2 className={cx("mt-1 text-2xl font-semibold", strongText)}>{nextTask ? "Next action" : "Roadmap complete"}</h2>
                  <p className={cx("mt-2 text-sm leading-6", subtleText)}>
                    {nextTask
                      ? `Open ${nextTask.phaseTitle}, work inside ${nextTask.projectName}, and finish the next unchecked task.`
                      : "All tasks are checked. Use this dashboard to plan a new product or a deeper specialization."}
                  </p>
                </div>
                {nextTask && (
                  <div
                    className={cx(
                      "rounded-2xl border px-4 py-3 text-sm",
                      themeDark ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-100" : "border-sky-100 bg-sky-50 text-sky-800"
                    )}
                  >
                    <p className="font-semibold">{nextTask.phaseTitle}</p>
                    <p className="mt-1">{nextTask.projectName}</p>
                  </div>
                )}
              </div>
              <div className={cx("mt-4 rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                {nextTask ? (
                  <>
                    <p className={cx("text-sm font-medium", subtleText)}>Tomorrow’s exact move</p>
                    <p className={cx("mt-2 text-lg font-semibold", strongText)}>{nextTask.text}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge themeDark={themeDark} subtle>
                        Phase {nextTask.phaseId}
                      </Badge>
                      <Badge themeDark={themeDark} subtle>
                        {nextTask.projectName}
                      </Badge>
                      <Badge themeDark={themeDark} subtle>
                        One task, one commit
                      </Badge>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={cx("text-sm font-medium", subtleText)}>Completion state</p>
                    <p className={cx("mt-2 text-lg font-semibold", strongText)}>
                      You have finished every listed task. Use the capstone docs and incident drills as your proof of seniority.
                    </p>
                  </>
                )}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {(nextTask ? activePhase.projects : phases[0].projects).map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setActivePhaseId(nextTask ? activePhase.id : phases[0].id);
                      setOpenProjectId(project.id);
                    }}
                    className={cx(
                      "rounded-2xl border p-4 text-left transition hover:-translate-y-0.5",
                      openProjectId === project.id && activePhase.id === (nextTask ? activePhase.id : phases[0].id)
                        ? themeDark
                          ? "border-cyan-400/30 bg-cyan-400/5"
                          : "border-sky-200 bg-sky-50"
                        : themeDark
                          ? "border-slate-800 bg-slate-950/40"
                          : "border-slate-200 bg-white",
                    )}
                  >
                    <p className={cx("text-sm font-semibold", strongText)}>{project.name}</p>
                    <p className={cx("mt-1 text-sm", subtleText)}>
                      {project.percentage}% complete · {project.done}/{project.total} tasks
                    </p>
                  </button>
                ))}
              </div>

              {focusTasks.length > 0 && (
                <div className={cx("mt-4 rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                  <p className={cx("text-sm font-semibold", strongText)}>This session’s queue</p>
                  <ul className={cx("mt-3 space-y-2 text-sm leading-6", subtleText)}>
                    {focusTasks.slice(0, 3).map((task) => (
                      <li key={task.id} className="flex gap-2">
                        <ArrowRight className={cx("mt-0.5 h-4 w-4 flex-shrink-0", themeDark ? "text-cyan-300" : "text-sky-600")} />
                        <span>{task.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className={cx("rounded-[2rem] border p-5", panelClass)}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={cx("text-xs uppercase tracking-[0.25em]", subtleText)}>Daily execution</p>
                  <h2 className={cx("mt-1 text-2xl font-semibold", strongText)}>Your working loop</h2>
                </div>
                <Clock3 className={cx("h-5 w-5", themeDark ? "text-cyan-300" : "text-sky-600")} />
              </div>
              <div className="mt-4 space-y-3">
                {dailySystem.map((item) => (
                  <div key={item.title} className={cx("rounded-2xl border p-3", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                    <p className={cx("font-semibold", strongText)}>{item.title}</p>
                    <p className={cx("mt-1 text-sm leading-6", subtleText)}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className={cx("mt-5 rounded-2xl border p-4", themeDark ? "border-amber-400/20 bg-amber-400/5" : "border-amber-200 bg-amber-50")}>
                <div className="flex items-center gap-2">
                  <ShieldAlert className={cx("h-4 w-4", themeDark ? "text-amber-300" : "text-amber-600")} />
                  <p className={cx("text-sm font-semibold", strongText)}>When you are stuck</p>
                </div>
                <ol className={cx("mt-3 space-y-2 text-sm leading-6", subtleText)}>
                  {stuckProtocol.map((step, index) => (
                    <li key={index} className="flex gap-2">
                      <span className={themeDark ? "text-amber-300" : "text-amber-600"}>{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className={cx("rounded-[2rem] border p-5 h-fit", panelClass)}>
            <div className="flex items-center gap-2">
              <LayoutDashboard className={cx("h-5 w-5", themeDark ? "text-cyan-300" : "text-sky-600")} />
              <h2 className={cx("text-lg font-semibold", strongText)}>Roadmap navigation</h2>
            </div>
            <p className={cx("mt-2 text-sm leading-6", subtleText)}>
              Use this panel like a daily command center: pick the current phase, open one project, and finish one task.
            </p>

            <div className="mt-4 space-y-3">
              {phaseStats.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => {
                    setActivePhaseId(phase.id);
                    setOpenProjectId(phase.projects[0].id);
                  }}
                  className={cx(
                    "w-full rounded-2xl border p-4 text-left transition",
                    activePhaseId === phase.id
                      ? themeDark
                        ? "border-cyan-400/30 bg-cyan-400/5"
                        : "border-sky-200 bg-sky-50"
                      : themeDark
                        ? "border-slate-800 bg-slate-950/30 hover:border-slate-700"
                        : "border-slate-200 bg-white hover:border-slate-300",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className={cx("text-sm font-semibold", strongText)}>
                        Phase {phase.id}: {phase.title}
                      </p>
                      <p className={cx("mt-1 text-xs uppercase tracking-[0.2em]", subtleText)}>{phase.timeline}</p>
                    </div>
                    <span className={cx("text-sm font-semibold", strongText)}>{phase.percentage}%</span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar value={phase.percentage} themeDark={themeDark} small />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <Workflow className={cx("h-5 w-5", themeDark ? "text-cyan-300" : "text-sky-600")} />
                <h3 className={cx("text-base font-semibold", strongText)}>Milestones</h3>
              </div>
              <div className="mt-3 space-y-3">
                {phaseStats.map((phase) => {
                  const unlocked = phase.percentage === 100;
                  return (
                    <div
                      key={phase.id}
                      className={cx(
                        "rounded-2xl border p-3",
                        unlocked
                          ? themeDark
                            ? "border-cyan-400/20 bg-cyan-400/5"
                            : "border-sky-200 bg-sky-50"
                          : themeDark
                            ? "border-slate-800 bg-slate-950/30"
                            : "border-slate-200 bg-white",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className={cx("text-sm font-semibold", strongText)}>Milestone {phase.id}</p>
                        {unlocked ? (
                          <CheckCircle2 className={themeDark ? "h-4 w-4 text-cyan-300" : "h-4 w-4 text-sky-600"} />
                        ) : (
                          <Circle className={cx("h-4 w-4", subtleText)} />
                        )}
                      </div>
                      <p className={cx("mt-1 text-sm", subtleText)}>
                        {phase.title} · {unlocked ? "done" : `${phase.percentage}% complete`}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className={cx("rounded-[2rem] border p-5", panelClass)}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className={cx("text-xs uppercase tracking-[0.25em]", subtleText)}>Selected phase</p>
                  <h2 className={cx("mt-1 text-2xl font-semibold", strongText)}>
                    Phase {activePhase.id} · {activePhase.title}
                  </h2>
                  <p className={cx("mt-2 max-w-3xl text-sm leading-6", subtleText)}>{activePhase.outcome}</p>
                </div>
                <div className="min-w-[220px]">
                  <div className="flex items-center justify-between text-sm">
                    <span className={subtleText}>Phase progress</span>
                    <span className={strongText}>{activePhase.percentage}%</span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={activePhase.percentage} themeDark={themeDark} />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {activePhase.concepts.map((concept, index) => (
                  <div
                    key={index}
                    className={cx(
                      "rounded-2xl border p-4",
                      themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className={cx("h-4 w-4", themeDark ? "text-cyan-300" : "text-sky-600")} />
                      <p className={cx("text-sm font-semibold", strongText)}>Concept {index + 1}</p>
                    </div>
                    <p className={cx("mt-2 text-sm leading-6", subtleText)}>{concept}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {activePhase.projects.map((project) => {
                const isOpen = openProjectId === project.id;
                return (
                  <div key={project.id} className={cx("rounded-[2rem] border", panelClass)}>
                    <button
                      onClick={() => setOpenProjectId(isOpen ? "" : project.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge themeDark={themeDark}>
                            <Code2 className="mr-2 h-3.5 w-3.5" />
                            Project
                          </Badge>
                          <Badge themeDark={themeDark} subtle>
                            {project.percentage}% complete
                          </Badge>
                        </div>
                        <h3 className={cx("mt-3 text-xl font-semibold", strongText)}>{project.name}</h3>
                        <p className={cx("mt-2 max-w-3xl text-sm leading-6", subtleText)}>{project.goal}</p>
                      </div>
                      {isOpen ? (
                        <ChevronDown className={cx("h-5 w-5 flex-shrink-0", subtleText)} />
                      ) : (
                        <ChevronRight className={cx("h-5 w-5 flex-shrink-0", subtleText)} />
                      )}
                    </button>

                    {isOpen && (
                      <div className="border-t px-5 pb-5 pt-1">
                        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                          <div className="space-y-4">
                            <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                              <p className={cx("text-sm font-semibold", strongText)}>Features</p>
                              <ul className={cx("mt-3 space-y-2 text-sm leading-6", subtleText)}>
                                {project.features.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <CheckCircle2 className={cx("mt-0.5 h-4 w-4 flex-shrink-0", themeDark ? "text-cyan-300" : "text-sky-600")} />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                              <p className={cx("text-sm font-semibold", strongText)}>Architecture</p>
                              <p className={cx("mt-2 text-sm leading-6", subtleText)}>{project.architecture}</p>
                            </div>

                            <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                              <p className={cx("text-sm font-semibold", strongText)}>Definition of done</p>
                              <ul className={cx("mt-3 space-y-2 text-sm leading-6", subtleText)}>
                                {project.done.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <Target className={cx("mt-0.5 h-4 w-4 flex-shrink-0", themeDark ? "text-cyan-300" : "text-sky-600")} />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                              <p className={cx("text-sm font-semibold", strongText)}>Tech stack</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                  <Badge key={item} themeDark={themeDark} subtle>
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                              <p className={cx("text-sm font-semibold", strongText)}>Challenges to expect</p>
                              <ul className={cx("mt-3 space-y-2 text-sm leading-6", subtleText)}>
                                {project.challenges.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <AlertTriangle className={cx("mt-0.5 h-4 w-4 flex-shrink-0", themeDark ? "text-amber-300" : "text-amber-600")} />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-50")}>
                              <div className="flex items-center justify-between">
                                <p className={cx("text-sm font-semibold", strongText)}>Tasks</p>
                                <span className={cx("text-sm", subtleText)}>
                                  {project.done}/{project.total} complete
                                </span>
                              </div>
                              <div className="mt-3 space-y-2">
                                {project.tasks.map((task) => {
                                  const checked = !!progress[task.id];
                                  return (
                                    <label
                                      key={task.id}
                                      id={task.id}
                                      className={cx(
                                        "flex cursor-pointer items-start gap-3 rounded-2xl border p-3 transition",
                                        checked
                                          ? themeDark
                                            ? "border-cyan-400/20 bg-cyan-400/5"
                                            : "border-sky-200 bg-sky-50"
                                          : themeDark
                                            ? "border-slate-800 bg-slate-950/40 hover:border-slate-700"
                                            : "border-slate-200 bg-white hover:border-slate-300",
                                      )}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => toggleTask(task.id)}
                                        className="mt-1 h-4 w-4 rounded border-slate-400"
                                      />
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                          <p className={cx("text-sm font-medium", strongText)}>{task.text}</p>
                                        </div>
                                        <p className={cx("mt-1 text-xs uppercase tracking-[0.2em]", subtleText)}>
                                          {task.projectName}
                                        </p>
                                      </div>
                                    </label>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className={cx("rounded-[2rem] border p-5", panelClass)}>
                <div className="flex items-center gap-2">
                  <Brain className={cx("h-5 w-5", themeDark ? "text-cyan-300" : "text-sky-600")} />
                  <h3 className={cx("text-lg font-semibold", strongText)}>Skill stack beyond Solidity</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {skillStack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-50 bg-slate-50")}>
                        <div className="flex items-start gap-3">
                          <div className={cx("rounded-2xl p-2", themeDark ? "bg-cyan-400/10 text-cyan-300" : "bg-sky-50 text-sky-700")}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className={cx("font-semibold", strongText)}>{item.title}</p>
                            <p className={cx("mt-1 text-sm leading-6", subtleText)}>{item.text}</p>
                            <p className={cx("mt-2 text-xs uppercase tracking-[0.18em]", themeDark ? "text-cyan-300" : "text-sky-700")}>
                              Output: {item.output}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={cx("rounded-[2rem] border p-5", panelClass)}>
                <div className="flex items-center gap-2">
                  <FileText className={cx("h-5 w-5", themeDark ? "text-cyan-300" : "text-sky-600")} />
                  <h3 className={cx("text-lg font-semibold", strongText)}>Execution rules</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-50 bg-slate-50")}>
                    <p className={cx("text-sm font-semibold", strongText)}>Build before consume</p>
                    <p className={cx("mt-1 text-sm leading-6", subtleText)}>
                      No article or video counts unless it produces code, tests, a note, a diagram, or a decision.
                    </p>
                  </div>
                  <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-50 bg-slate-50")}>
                    <p className={cx("text-sm font-semibold", strongText)}>Ship every week</p>
                    <p className={cx("mt-1 text-sm leading-6", subtleText)}>
                      Every seven days should end with a commit, a README update, and a visible progress change here.
                    </p>
                  </div>
                  <div className={cx("rounded-2xl border p-4", themeDark ? "border-slate-800 bg-slate-950/40" : "border-slate-50 bg-slate-50")}>
                    <p className={cx("text-sm font-semibold", strongText)}>Use the dashboard daily</p>
                    <p className={cx("mt-1 text-sm leading-6", subtleText)}>
                      Open the next action, complete one task, and do not switch phases until the task is real and checked off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
