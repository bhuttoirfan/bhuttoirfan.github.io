import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import ProjectCard from "../components/ProjectCard";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import { Reveal } from "../components/Section";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const topSkills = [...new Set(skillGroups.flatMap((g) => g.items))].slice(0, 12);

  return (
    <div>
      {/* Hero */}
      <section className="container-content py-16 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted"
        >
          <MapPin size={15} className="text-accent-soft" /> {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
        >
          Hi, I'm {profile.name.split(" ")[0]}, a{" "}
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            Full-Stack Engineer
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link to="/projects" className="btn-primary">
            View my work <ArrowRight size={16} />
          </Link>
          <ResumeDownloadButton className="btn-ghost" />
          <div className="ml-1 flex items-center gap-3">
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
        </motion.div>

        {/* skill chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {topSkills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Featured projects */}
      <section className="container-content py-12">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-1 font-mono text-sm text-accent-soft">Selected work</p>
              <h2 className="text-2xl font-bold sm:text-3xl">Featured projects</h2>
            </div>
            <Link to="/projects" className="hidden text-sm font-medium text-accent-soft hover:underline sm:inline">
              View all →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link to="/projects" className="text-sm font-medium text-accent-soft hover:underline">
            View all projects →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-content py-16">
        <Reveal>
          <div className="card flex flex-col items-center gap-4 p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Let's build something together</h2>
            <p className="max-w-xl text-muted">
              Have a project in mind, or want to talk full-stack architecture and AI agents? I'm always happy to connect.
            </p>
            <Link to="/contact" className="btn-primary mt-2">
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
