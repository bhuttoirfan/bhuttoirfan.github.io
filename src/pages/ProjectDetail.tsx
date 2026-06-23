import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { getProject } from "../data/projects";
import { PageHeader } from "../components/Section";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="container-content py-20 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block text-accent-soft hover:underline">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container-content py-12">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm link-muted">
        <ArrowLeft size={16} /> All projects
      </Link>

      <PageHeader eyebrow={project.category} title={project.name} subtitle={project.tagline} />

      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary mb-10">
          Visit live site <ExternalLink size={16} />
        </a>
      )}

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <h2 className="text-xl font-bold">Overview</h2>
          {project.description.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}

          <h2 className="pt-4 text-xl font-bold">Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-muted">
                <Check size={18} className="mt-0.5 shrink-0 text-accent-soft" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="card sticky top-24 p-6">
            <h3 className="mb-4 font-mono text-sm text-accent-soft">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-6 w-full"
              >
                <ExternalLink size={15} /> Live site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
