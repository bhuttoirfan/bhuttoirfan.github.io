export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  category: "Healthcare" | "Workplace" | "Platform" | "Earlier work";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "medimap",
    name: "Medimap",
    tagline: "Medical directory & content platform",
    category: "Healthcare",
    featured: true,
    liveUrl: "https://medimap.ca",
    description: [
      "Medimap is a modern medical directory and content platform that helps people discover clinics and health services. It pairs a content-managed marketing experience with rich, searchable provider listings and interactive maps.",
      "Built on Next.js with Payload CMS, it features a full admin panel, multi-tenant support, SEO and search, a flexible layout builder, and scheduled publishing, production-ready end to end. I worked across the stack here, from the Next.js frontend and maps to the CMS, data modeling, and deployment.",
    ],
    tech: ["Next.js", "Payload CMS", "PostgreSQL", "TypeScript", "Stripe", "Leaflet / MapLibre", "AWS CDK", "Tailwind CSS"],
    highlights: [
      "Multi-tenant architecture with a full content-management admin panel",
      "Interactive maps with clustering for provider discovery",
      "SEO, search, redirects, and scheduled publishing built in",
    ],
  },
  {
    slug: "kindred-practice",
    name: "Kindred Practice",
    tagline: "Mental-health therapy platform",
    category: "Healthcare",
    featured: true,
    liveUrl: "https://app.kindredpractice.com",
    description: [
      "Kindred Practice is a comprehensive platform for therapists, practices, and their clients, covering clinical workflows, appointment scheduling, billing, and AI-powered clinical note generation.",
      "It's built as an Nx monorepo: a React + Vite therapy platform, an SSR marketing site, a Fastify + Prisma AI service for note generation, and a Django/DRF core API, all sharing a Chakra UI design system. I contributed across the full stack here, from the React therapy UI to the backend services, the AI note-generation agent, admin tooling, and shared libraries.",
    ],
    tech: ["React", "Vite", "Chakra UI", "Django / DRF", "Fastify", "Prisma", "PostgreSQL", "Nx Monorepo"],
    highlights: [
      "AI-powered clinical note generation for therapists",
      "Appointment scheduling, billing, and a customizable form builder",
      "Modular Nx monorepo with shared component and service libraries",
    ],
  },
  {
    slug: "kindred-workplace",
    name: "Kindred Workplace",
    tagline: "Organizational emotional-intelligence platform",
    category: "Workplace",
    featured: true,
    liveUrl: "https://kindredworkplace.com",
    description: [
      "Kindred Workplace is an organizational emotional-intelligence platform that helps teams understand and improve how they work together.",
      "It's a Turborepo monorepo with a NestJS + Fastify backend, Prisma and PostgreSQL, and a React 19 + Vite frontend using shadcn/ui and Tailwind. It includes WorkOS authentication with SSO, CASL permissions, Stripe billing with per-seat and metered plans, an AI/LLM gateway, and a separate admin app. I worked across the stack on this product, from the React 19 frontend and admin app to the NestJS APIs, the AI/LLM gateway, and the data layer.",
    ],
    tech: ["NestJS", "Fastify", "Prisma", "PostgreSQL", "React 19", "shadcn/ui", "Turborepo", "WorkOS", "Stripe", "Redis"],
    highlights: [
      "NestJS + Fastify API with isomorphic CASL authorization",
      "WorkOS auth (email/password + SSO) and Stripe subscription billing",
      "Dedicated admin app and an AI/LLM gateway with streaming",
    ],
  },
  {
    slug: "kindred-agent-ops",
    name: "Kindred Agent Ops",
    tagline: "AI-driven engineering automation",
    category: "Platform",
    featured: true,
    description: [
      "Kindred Agent Ops is an engineering-automation service I designed and built that routes events from Linear, GitHub, Sentry, and Slack through Inngest-orchestrated workflows.",
      "Those workflows spawn AI agents in isolated Docker containers to investigate bugs, review pull requests, and run security scans, all deployed on a single VPS via Docker Compose with PostgreSQL/pgvector and a Neo4j knowledge graph behind Traefik. I built the agents and the workflows that drive them end to end.",
    ],
    tech: ["Node.js", "TypeScript", "Inngest", "Docker", "PostgreSQL / pgvector", "Neo4j", "AWS EC2"],
    highlights: [
      "Event-driven automation across Linear, GitHub, Sentry, and Slack",
      "AI agents run in isolated containers for bug triage and PR review",
      "Single-VPS Docker Compose deployment with a graph-backed knowledge store",
    ],
  },
  {
    slug: "boon4",
    name: "Boon4",
    tagline: "Package-delivery application",
    category: "Earlier work",
    description: [
      "Boon4 is a package-delivery service offering four delivery modes (express, on-the-way, scheduled, and bulk) across three roles: admin, sender, and driver.",
      "I designed the databases (SQL with Sequelize), wrote the API documentation, built the backend, and managed the server side.",
    ],
    tech: ["Node.js", "Express", "SQL", "Sequelize", "Swagger"],
    highlights: [
      "Multi-role system for admins, senders, and drivers",
      "Relational data modeling with Sequelize ORM",
      "Full API documentation and server management",
    ],
  },
  {
    slug: "witnous",
    name: "Witnous Global Academy",
    tagline: "Multi-school management platform",
    category: "Earlier work",
    description: [
      "Witnous lets organizations manage multiple schools with chat, comments, video lectures, assignments, quizzes, and other management features.",
      "I owned the Node.js backend development for this SQL-based platform.",
    ],
    tech: ["Node.js", "Express", "SQL"],
    highlights: [
      "Manages multiple schools from a single platform",
      "Lectures, assignments, quizzes, chat, and comments",
    ],
  },
  {
    slug: "0code",
    name: "0Code",
    tagline: "Serverless workflow automation",
    category: "Earlier work",
    description: [
      "0Code is a serverless application for automating workflows, built on AWS Lambda and CloudFormation with Node.js and Mongoose.",
      "I integrated public APIs from services like Stripe and Amazon and exposed them through 0Code so users could wire automations together.",
    ],
    tech: ["Node.js", "AWS Lambda", "CloudFormation", "MongoDB", "Mongoose", "Stripe API"],
    highlights: [
      "Serverless, event-driven architecture on AWS",
      "Third-party API integrations (Stripe, Amazon, and more)",
    ],
  },
  {
    slug: "game-success-prediction",
    name: "Game Success Prediction",
    tagline: "Machine-learning final-year project",
    category: "Earlier work",
    description: [
      "My final-year project: training multiple machine-learning models to predict outcomes from real-world data, with experimentation to improve model performance.",
      "I built a Flask web app for the project and deployed it across Google Cloud, Heroku, and Microsoft Azure.",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Flask", "Cloud Platforms"],
    highlights: [
      "Trained and compared multiple ML models",
      "Deployed across Google Cloud, Heroku, and Azure",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
