"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Briefcase,
  ExternalLink,
  FileText,
  Folder,
  Home,
  Mail,
  Search,
  User,
  X,
} from "lucide-react";
import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { projects } from "@/config/projects";

const resumeUrl =
  "https://drive.google.com/file/d/15IFprveGBnG0ORohpRr8SAJG1Qvv2rDB/view?usp=sharing";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string, isExternal = false) => {
    setOpen(false);
    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Floating Bottom Navigation & Search Dock */}
      <div className="pointer-events-none fixed bottom-5 inset-x-0 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/80 bg-background/85 p-1.5 shadow-xl backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
          <Link
            href="/"
            aria-label="Home"
            className="flex size-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            <Home className="size-5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 text-sm font-medium text-secondary shadow-xs transition-colors hover:bg-muted hover:text-foreground active:scale-[0.98]"
            aria-label="Search pages and links"
          >
            <Search className="size-4" />
            <span className="text-xs sm:text-sm">Search</span>
            <kbd className="hidden rounded border border-border/60 bg-muted/70 px-1.5 py-0.5 font-mono text-[10px] text-secondary sm:inline-block">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      {/* Command Palette Modal Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-16 backdrop-blur-xs sm:pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl dark:bg-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <Command
              label="Command Menu"
              className="flex w-full flex-col overflow-hidden"
            >
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 border-b border-border/60 px-4">
                <Search className="size-4 shrink-0 text-secondary" />
                <Command.Input
                  autoFocus
                  placeholder="Search pages and links..."
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-secondary sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="rounded-md p-1.5 text-secondary transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Items List */}
              <Command.List className="max-h-[60vh] overflow-y-auto p-2 sm:p-3">
                <Command.Empty className="py-8 text-center text-sm text-secondary">
                  No results found.
                </Command.Empty>

                {/* Navigation Group */}
                <Command.Group
                  heading="Navigate"
                  className="px-2 py-1.5 text-[11px] font-mono font-medium uppercase tracking-wider text-secondary"
                >
                  <Command.Item
                    value="Home"
                    onSelect={() => handleSelect("/")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <Home className="size-4 text-secondary" />
                      <span>Home</span>
                    </div>
                  </Command.Item>

                  <Command.Item
                    value="About"
                    onSelect={() => handleSelect("/#about")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <User className="size-4 text-secondary" />
                      <span>About</span>
                    </div>
                  </Command.Item>

                  <Command.Item
                    value="Projects"
                    onSelect={() => handleSelect("/projects")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <Folder className="size-4 text-secondary" />
                      <span>Projects</span>
                    </div>
                  </Command.Item>

                  <Command.Item
                    value="Work Experience"
                    onSelect={() => handleSelect("/#experience")}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase className="size-4 text-secondary" />
                      <span>Work</span>
                    </div>
                  </Command.Item>

                  <Command.Item
                    value="Resume"
                    onSelect={() => handleSelect(resumeUrl, true)}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-secondary" />
                      <span>Resume</span>
                    </div>
                    <ExternalLink className="size-3.5 text-secondary" />
                  </Command.Item>
                </Command.Group>

                {/* Projects Group */}
                <Command.Group
                  heading="Projects"
                  className="mt-2 px-2 py-1.5 text-[11px] font-mono font-medium uppercase tracking-wider text-secondary"
                >
                  {projects.map((project) => (
                    <Command.Item
                      key={project.slug}
                      value={`${project.title} ${project.tags?.join(" ")}`}
                      onSelect={() => handleSelect(project.website || project.href, true)}
                      className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <Folder className="size-4 text-secondary" />
                        <span>{project.title}</span>
                      </div>
                      <ExternalLink className="size-3.5 text-secondary" />
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Connect & Social Group */}
                <Command.Group
                  heading="Connect"
                  className="mt-2 px-2 py-1.5 text-[11px] font-mono font-medium uppercase tracking-wider text-secondary"
                >
                  <Command.Item
                    value="GitHub"
                    onSelect={() => handleSelect("https://github.com/rutujdhawale", true)}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <GithubLogo className="size-4 text-secondary" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="size-3.5 text-secondary" />
                  </Command.Item>

                  <Command.Item
                    value="LinkedIn"
                    onSelect={() => handleSelect("https://www.linkedin.com/in/rutujdhawale/", true)}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinLogo className="size-4 text-secondary" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="size-3.5 text-secondary" />
                  </Command.Item>

                  <Command.Item
                    value="X Twitter"
                    onSelect={() => handleSelect("https://x.com/mirutuj", true)}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <XLogo className="size-4 text-secondary" />
                      <span>X</span>
                    </div>
                    <ExternalLink className="size-3.5 text-secondary" />
                  </Command.Item>

                  <Command.Item
                    value="Email"
                    onSelect={() => handleSelect("mailto:rutujdhawale@gmail.com", true)}
                    className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors data-[selected=true]:bg-muted hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="size-4 text-secondary" />
                      <span>Email</span>
                    </div>
                    <ExternalLink className="size-3.5 text-secondary" />
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}

