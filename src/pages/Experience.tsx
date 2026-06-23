import { experience } from "../data/experience";
import { PageHeader, Reveal } from "../components/Section";

export default function Experience() {
  return (
    <div className="container-content py-12">
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Several years building and shipping production full-stack products and AI systems."
      />

      <div className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.period} delay={i * 0.06}>
            <div className="relative mb-12 last:mb-0">
              <span
                className={`absolute -left-[2.6rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:-left-[3.1rem] ${
                  job.current ? "border-accent bg-accent" : "border-border bg-surface"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <span className="font-mono text-sm text-accent-soft">{job.period}</span>
              </div>
              <p className="mt-0.5 text-muted">
                {job.company} · <span className="text-muted/70">{job.location}</span>
                {job.current && (
                  <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent-soft">
                    Current
                  </span>
                )}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
