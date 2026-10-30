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
        <div className="p-6 text-center sm:p-8">
          <span className="text-4xl leading-none text-muted-foreground sm:text-5xl">&ldquo;</span>
          <p className="mx-auto mt-2 max-w-2xl text-base font-medium italic leading-relaxed text-foreground/90 sm:text-lg">
            {quoteConfig.text}
          </p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-secondary">
            — {quoteConfig.author}
          </p>
        </div>
      </LiquidGlassCard>
    </Container>
  );
}

