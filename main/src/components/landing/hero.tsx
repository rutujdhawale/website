"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Copy,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  SealCheck,
  XLogo,
} from "@phosphor-icons/react";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Container } from "@/components/container";
import { RotatingTitle } from "@/components/landing/rotating-title";
import { SpotifyLastPlayed } from "@/components/landing/spotify-last-played";
import { TimezoneWidget } from "@/components/landing/timezone-widget";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { heroConfig, socialLinks } from "@/config/hero";

const iconMap = {
  x: XLogo,
  linkedin: LinkedinLogo,
  github: GithubLogo,
  medium: MediumLogo,
  mail: EnvelopeSimple,
  resume: FileText,
};

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(heroConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <Container className="pt-4 sm:pt-0">
      <div className="animate-in-up-on-view flex flex-col gap-4 sm:gap-5">
        <div className="corner-frame relative h-[calc(var(--grid-cell-size)*4)] overflow-visible">
          <div className="relative size-full overflow-hidden border border-foreground/15">
            <Image
              src="/assets/hero-cover.jpeg"
              alt="Header background"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 720px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        <TimezoneWidget className="-mt-3 self-end" />

        <div className="-mt-[calc(var(--grid-cell-size)*2)] flex items-end gap-4">
          <div className="relative z-30 shrink-0 rounded-full bg-background p-1">
            <ProfileAvatar />
          </div>
        </div>

        <div className="min-w-0">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {heroConfig.name}
            <SealCheck
              className="size-6 shrink-0 text-[#1D9BF0] sm:size-7"
              weight="fill"
              aria-label="Verified"
            />
          </h1>
          <RotatingTitle />
          <div className="mt-2.5 flex items-center gap-2">
            <span className="font-mono text-xs text-secondary sm:text-sm">
              {heroConfig.email}
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center justify-center rounded-lg border border-black/15 bg-white/50 p-1.5 shadow-xs backdrop-blur-md ring-1 ring-white/50 transition-all hover:border-black/25 hover:bg-white/80 hover:shadow-sm active:scale-95 dark:border-white/20 dark:bg-white/10 dark:ring-white/15 dark:hover:border-white/30 dark:hover:bg-white/20"
              aria-label="Copy email address"
              title="Copy email address"
            >
              {copied ? (
                <Check className="size-3.5 text-emerald-500" weight="bold" />
              ) : (
                <Copy className="size-3.5 text-secondary transition-colors group-hover:text-foreground" />
              )}
              {copied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-border bg-popover px-1.5 py-0.5 text-[10px] font-medium text-popover-foreground shadow-sm">
                  Copied!
                </span>
              )}
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-0.5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const external = link.href.startsWith("http") || link.href.startsWith("mailto:");

              return (
                <Tooltip key={link.name} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={link.name}
                      className="flex items-center gap-2 p-1 text-secondary transition-colors hover:text-foreground"
                    >
                      <Icon className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{link.name}</TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>

        <div className="max-w-full pt-1">
          <SpotifyLastPlayed />
        </div>
      </div>
    </Container>
  );
}
