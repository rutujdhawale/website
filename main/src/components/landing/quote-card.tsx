"use client";

import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { quoteConfig } from "@/config/quote";

export function QuoteCard() {
  return (
    <Container>
      <LiquidGlassCard
        glowIntensity="sm"
        shadowIntensity="md"
        borderRadius="18px"
        blurIntensity="md"
        className="animate-in-up-on-view"
      >
        <div className="relative px-6 py-8 sm:px-12 sm:py-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <blockquote className="relative text-base font-medium italic leading-relaxed text-foreground/90 sm:text-lg">
              <span className="font-serif text-2xl font-bold text-foreground/50 sm:text-3xl">&ldquo;</span>
              {quoteConfig.text}
              <span className="font-serif text-2xl font-bold text-foreground/50 sm:text-3xl">&rdquo;</span>
            </blockquote>
            <cite className="mt-4 block font-mono text-xs font-semibold tracking-wider text-secondary uppercase not-italic sm:text-sm">
              — {quoteConfig.author}
            </cite>
          </div>
        </div>
      </LiquidGlassCard>
    </Container>
  );
}
