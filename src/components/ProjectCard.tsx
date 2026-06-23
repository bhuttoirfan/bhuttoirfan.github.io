import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card group flex flex-col p-6 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <span className="chip mb-3">{project.category}</span>
          <h3 className="text-xl font-bold transition-colors group-hover:text-accent-soft">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <ArrowUpRight className="shrink-0 text-muted transition-colors group-hover:text-accent-soft" size={22} />
      </div>

      <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted/90">
        {project.description[0]}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
        {project.tech.length > 5 && <span className="chip">+{project.tech.length - 5}</span>}
      </div>

      {project.liveUrl && (
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft">
          <ExternalLink size={15} /> Live site
        </span>
      )}
    </Link>
  );
}
