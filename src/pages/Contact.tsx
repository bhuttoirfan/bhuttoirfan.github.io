import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/profile";
import { PageHeader, Reveal } from "../components/Section";

// Get a free key at https://web3forms.com — it's tied to your email and is safe
// to expose client-side. Replace the placeholder below with your own key.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or email me directly.");
    }
  }

  return (
    <div className="container-content py-12">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Have a project in mind, or want to talk full-stack architecture and AI agents? Drop me a message and I'll get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card space-y-6 p-6 sm:p-8">
            <div>
              <h2 className="text-xl font-bold">Send a message</h2>
              <p className="mt-1 text-sm text-muted">
                Fill in the form below and I'll usually reply within a day or two.
              </p>
            </div>

            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New message from your portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            {/* Honeypot field to deter spam bots */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name <span className="text-accent-soft">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email <span className="text-accent-soft">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message <span className="text-accent-soft">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Tell me a bit about your project, role, or what you'd like to build…"
                className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted/50 focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              />
              <p className="mt-2 text-xs text-muted/70">
                The more context you share, the better I can help.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
                {status === "submitting" ? "Sending…" : "Send message"}
                <Send size={16} />
              </button>
              {status === "success" && (
                <p className="text-sm font-medium text-accent-soft">
                  Thanks! Your message has been sent. I'll be in touch soon.
                </p>
              )}
              {status === "error" && <p className="text-sm font-medium text-red-400">{error}</p>}
            </div>
          </form>
        </Reveal>

        {/* Direct links */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="card h-full space-y-5 p-6 sm:p-8">
            <div>
              <h3 className="font-mono text-sm text-accent-soft">Other ways to reach me</h3>
              <p className="mt-1 text-sm text-muted">Prefer email or socials? Reach me directly here.</p>
            </div>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm link-muted">
              <Mail size={18} className="text-accent-soft" />
              <span className="break-all">{profile.email}</span>
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm link-muted">
              <Github size={18} className="text-accent-soft" />
              <span>GitHub</span>
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm link-muted">
              <Linkedin size={18} className="text-accent-soft" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-3 border-t border-border pt-4 text-sm text-muted">
              <MapPin size={18} className="text-accent-soft" />
              <span>{profile.location}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
