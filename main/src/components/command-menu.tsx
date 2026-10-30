"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Home, Search, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", isExternal: false },
  { label: "About", href: "/#about", isExternal: false },
  { label: "Projects", href: "/projects", isExternal: false },
  { label: "Work", href: "/#experience", isExternal: false },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/15IFprveGBnG0ORohpRr8SAJG1Qvv2rDB/view?usp=sharing",
    isExternal: true,
  },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Listen for keyboard shortcut (if on mobile keyboard or device)
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
      {/* Floating Bottom Navigation & Search Dock (Mobile Only) */}
      <div className="pointer-events-none fixed bottom-5 inset-x-0 z-40 flex justify-center px-4 md:hidden">
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 p-1.5 shadow-xl backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
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
            <span className="text-xs">Search</span>
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
            className="w-full max-w-sm overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl dark:bg-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <Command
              label="Command Menu"
              className="flex w-full flex-col font-sans"
            >
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 border-b border-border/60 px-4">
                <Search className="size-4 shrink-0 text-secondary" />
                <Command.Input
                  autoFocus
                  placeholder="Search pages and links..."
                  className="w-full bg-transparent py-3.5 text-sm font-sans outline-none placeholder:text-secondary"
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
              <Command.List className="p-3">
                <Command.Empty className="py-6 text-center text-sm font-sans text-secondary">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="space-y-1 font-sans text-xs font-medium text-foreground/70"
                >
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.label}
                      value={item.label}
                      onSelect={() => handleSelect(item.href, item.isExternal)}
                      className="cursor-pointer rounded-lg px-3 py-2.5 font-sans text-sm font-normal text-foreground transition-colors data-[selected=true]:bg-muted/80 hover:bg-muted/70"
                    >
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
