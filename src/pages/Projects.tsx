import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { PageHeader, Reveal } from "../components/Section";

const categories = ["All", "Healthcare", "Workplace", "Platform", "Earlier work"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container-content py-12">
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Production platforms, internal tooling, and earlier projects. Click any card for details."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === c
                ? "bg-accent text-white"
                : "border border-border bg-surface text-muted hover:text-text"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
