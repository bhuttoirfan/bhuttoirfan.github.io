import { MapPin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import { PageHeader, Reveal } from "../components/Section";

export default function About() {
  return (
    <div className="container-content py-12">
      <PageHeader eyebrow="About" title="A bit about me" />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="card space-y-4 p-6">
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} className="text-accent-soft" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-accent-soft" />
              <a href={`mailto:${profile.email}`} className="link-muted break-all">
                {profile.email}
              </a>
            </div>
            <div className="border-t border-border pt-4">
              <ResumeDownloadButton className="btn-primary w-full" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <Reveal>
          <h2 className="mb-6 text-2xl font-bold">Skills & technologies</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="card h-full p-6">
                <h3 className="mb-3 font-mono text-sm text-accent-soft">{g.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
