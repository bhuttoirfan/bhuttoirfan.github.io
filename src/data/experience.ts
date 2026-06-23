export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
}

export const experience: Job[] = [
  {
    company: "Kindred AI",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    location: "Remote · Islamabad",
    current: true,
    points: [
      "Build and maintain multiple production SaaS platforms across healthcare and workplace wellbeing, working end to end on their React frontends, public sites, admin panels, and APIs.",
      "Design and build AI agents and bots that automate engineering and product workflows, including clinical note generation and event-driven automation across Linear, GitHub, Sentry, and Slack.",
      "Develop services in NestJS, Fastify, and Django backed by Prisma and PostgreSQL, with Stripe billing, WorkOS auth, and Redis caching, scaling databases and queries as the products grow.",
      "Architect Nx and Turborepo monorepos and ship infrastructure and deployments on AWS.",
    ],
  },
  {
    company: "InfinityBits",
    role: "Backend Developer (Node.js)",
    period: "2022 — 2023",
    location: "Islamabad",
    points: [
      "Built REST APIs and server-side services in Node.js, managing SQL and DynamoDB databases to project requirements.",
      "Owned server-side deployment and management on AWS EC2, handling release and environment configuration.",
      "Delivered backends for products including a package-delivery app and a multi-school management platform.",
    ],
  },
  {
    company: "Orcalo Ltd",
    role: "Node API Developer",
    period: "2021 — 2022",
    location: "Islamabad",
    points: [
      "Designed and built REST APIs and backend services in Node.js for client products.",
      "Modeled relational data, wrote efficient queries, and integrated third-party APIs.",
      "Worked closely with frontend developers to ship features end to end and documented API endpoints.",
    ],
  },
  {
    company: "Freelance / Upwork",
    role: "Backend Developer",
    period: "2020 — 2021",
    location: "Remote",
    points: [
      "Delivered Node.js and serverless APIs for clients, from chat and library systems to employee-management backends.",
      "Worked across DynamoDB and SQL with a focus on cost-efficient querying and clean API design.",
    ],
  },
  {
    company: "Interns.pk",
    role: "Front-End Development Intern",
    period: "2020",
    location: "Remote",
    points: [
      "Practiced core web fundamentals (HTML, CSS, JavaScript, and PHP) through daily tasks.",
      "Built a complete web application using WordPress and PHP.",
    ],
  },
];
