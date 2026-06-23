import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-bg/60">
      <div className="container-content flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="link-muted" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="link-muted" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="link-muted" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
