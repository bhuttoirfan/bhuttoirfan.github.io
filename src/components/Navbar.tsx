import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import ResumeDownloadButton from "./ResumeDownloadButton";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-accent-soft" : "text-muted hover:text-text"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-xl">
      <nav className="container-content flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-lg font-bold">
          <span className="text-accent-soft">{"<"}</span>
          {profile.name.split(" ")[0]}
          <span className="text-accent-soft">{"/>"}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <ResumeDownloadButton className="btn-primary text-sm">Resume</ResumeDownloadButton>
        </div>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-card text-accent-soft" : "text-muted hover:bg-card hover:text-text"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
