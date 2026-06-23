import { useState } from "react";
import { Copy, Check, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { PageHeader, Reveal } from "../components/Section";
import Toast, { ToastState } from "../components/Toast";

const MAILTO = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Let's work together"
)}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setToast({ type: "success", message: "Email address copied to your clipboard." });
    } catch {
      setToast({ type: "error", message: `Couldn't copy automatically. My email is ${profile.email}.` });
    }
  }

  return (
    <div className="container-content py-12">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Have a project in mind, or want to talk full-stack architecture and AI? The best way to reach me is by email, and I usually reply within a day or two."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Primary email card */}
        <Reveal className="lg:col-span-2">
          <div className="card flex h-full flex-col justify-center gap-6 p-8">
            <div>
              <h2 className="text-2xl font-bold">Let's talk</h2>
              <p className="mt-2 max-w-md text-muted">
                Drop me a line about a role, a project, or just to say hello. I read everything that comes in.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href={MAILTO} className="btn-primary">
                <Mail size={16} /> Email me
              </a>
              <button type="button" onClick={copyEmail} className="btn-ghost">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy address"}
              </button>
            </div>

            <p className="font-mono text-sm text-muted">{profile.email}</p>
          </div>
        </Reveal>

        {/* Social / direct links */}
        <Reveal delay={0.1}>
          <div className="card h-full space-y-5 p-6 sm:p-8">
            <h3 className="font-mono text-sm text-accent-soft">Find me online</h3>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm link-muted"
            >
              <Github size={18} className="text-accent-soft" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm link-muted"
            >
              <Linkedin size={18} className="text-accent-soft" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-3 border-t border-border pt-5 text-sm text-muted">
              <MapPin size={18} className="text-accent-soft" />
              <span>{profile.location}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
