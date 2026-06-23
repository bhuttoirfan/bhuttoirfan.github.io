import { Download } from "lucide-react";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";
import { education, certifications } from "../data/resume";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import { PageHeader, Reveal } from "../components/Section";

export default function Resume() {
  return (
    <div className="container-content py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <PageHeader eyebrow="Résumé" title="Résumé" subtitle="A snapshot of my experience. Download the full PDF below." />
        <ResumeDownloadButton className="btn-primary">
          <Download size={16} /> Download PDF
        </ResumeDownloadButton>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <Reveal>
            <section>
              <h2 className="mb-4 text-xl font-bold">Experience</h2>
              <div className="space-y-6">
                {experience.map((job) => (
                  <div key={job.company + job.period}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-semibold">
                        {job.role} · <span className="text-muted">{job.company}</span>
                      </h3>
                      <span className="font-mono text-sm text-accent-soft">{job.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="mb-2 text-xl font-bold">Education</h2>
              {education.map((e) => (
                <div key={e.degree} className="mb-4 last:mb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold">
                      {e.degree} · <span className="text-muted">{e.institution}</span>
                    </h3>
                    <span className="font-mono text-sm text-accent-soft">{e.period}</span>
                  </div>
                  {e.details && <p className="mt-2 text-sm text-muted">{e.details}</p>}
                </div>
              ))}
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="mb-3 font-mono text-sm text-accent-soft">Core skills</h3>
              <div className="flex flex-wrap gap-2">
                {[...new Set(skillGroups.flatMap((g) => g.items))].slice(0, 18).map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6 text-sm">
              <h3 className="mb-3 font-mono text-sm text-accent-soft">Certificates</h3>
              <ul className="space-y-2 text-muted">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
