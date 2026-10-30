"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { experience, type ExperienceItem } from "@/config/experience";

type FeaturedItem = {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
  link?: string;
};

function experienceToFeatured(item: ExperienceItem): FeaturedItem {
  return {
    title: item.company,
    subtitle: item.role,
    period: item.periodLong,
    details: item.details ?? [],
    link: item.link,
  };
}

function ExperienceRow({ item }: { item: FeaturedItem }) {
  return (
    <article className="border-b border-dashed border-border/50 py-5 last:border-b-0">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-8">
        <div className="w-36 shrink-0 pt-0.5 font-mono text-sm text-secondary">
          {item.period}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2 text-base">
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-dotted decoration-muted-foreground/60 underline-offset-4 transition-colors hover:text-foreground/80 hover:decoration-foreground"
              >
                {item.title}
              </Link>
            ) : (
              <span className="font-semibold text-foreground underline decoration-dotted decoration-muted-foreground/60 underline-offset-4">
                {item.title}
              </span>
            )}
            <span className="text-secondary">—</span>
            <span className="text-foreground/90">{item.subtitle}</span>
          </div>

          {item.details.length > 0 && (
            <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-[15px]">
              {item.details.join(" ")}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function FeaturedExperienceSection() {
  const featuredItems = experience.map(experienceToFeatured);

  return (
    <Container>
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      <div className="border-t border-dashed border-border/50">
        {featuredItems.map((item) => (
          <ExperienceRow key={item.title} item={item} />
        ))}
      </div>
    </Container>
  );
}
