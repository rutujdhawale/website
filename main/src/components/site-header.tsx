"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-(--portfolio-content-width) items-center justify-between gap-4 px-5 sm:px-0">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-foreground hover:opacity-80"
          aria-label="Home"
        >
          @rutujdhawale
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center gap-4 text-sm font-medium sm:gap-6">
            {headerNav.map((item) => {
              const isExternal = item.external || item.href.startsWith("http");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "transition-colors hover:text-foreground",
                    pathname === item.href
                      ? "font-semibold text-foreground"
                      : "text-secondary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-border" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
