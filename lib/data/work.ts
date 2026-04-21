export interface WorkExperience {
  name: string;
  logoUrl?: string;
  link?: string;
  status: "active" | "archived";
  role: string;
  summary: string;
  stack: string;
  period: string;
  notes: string[];
  capabilities?: string[];
  distribution?: {
    label: string;
    url: string;
  };
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    name: "Arqora Cloud",
    logoUrl: "/work/arqora.png",
    link: "https://arqora.cloud",
    status: "active",
    role: "Backend, APIs, Infrastructure",
    summary: "Developer-focused cloud hosting platform",
    stack: "TypeScript, Node.js, Next.js, PostgreSQL, Docker",
    period: "2021 — present",
    notes: [
      "- designed internal APIs for container orchestration",
      "- implemented custom reverse proxy solution",
      "- focused on observability and zero-downtime deployments"
    ]
  },
  {
    name: "talkshitgetdared",
    status: "active",
    role: "Package Architecture, API Design",
    summary: "Zero-dependency TypeScript engine for configurable truth/dare workflows",
    stack: "TypeScript, Node.js",
    period: "2021 — present",
    capabilities: [
      "filtering",
      "batching",
      "deduplication",
      "multi-language support"
    ],
    distribution: {
      label: "npmjs.com/package/talkshitgetdared",
      url: "https://npmjs.com/package/talkshitgetdared"
    },
    notes: [
      "- designed deterministic prompt selection logic",
      "- implemented configurable filtering and difficulty modes",
      "- exposed both library and CLI interfaces",
      "- maintained zero-dependency constraint"
    ]
  }
];

export const ARCHIVED_WORK = [
  "Ayane (multipurpose Discord bot)"
];
