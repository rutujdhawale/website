"use client";

import { useState } from "react";
import Image from "next/image";
import { heroConfig } from "@/config/hero";
import { cn } from "@/lib/utils";

export function ProfileAvatar({ className }: { className?: string }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked((prev) => !prev)}
      className={cn(
        "group relative size-24 shrink-0 cursor-pointer overflow-hidden rounded-full bg-blue-300 dark:bg-yellow-300",
        className,
      )}
      role="button"
      tabIndex={0}
      aria-label="Toggle avatar smile"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsClicked((prev) => !prev);
        }
      }}
    >
      <Image
        src={heroConfig.avatar}
        alt={`${heroConfig.name} profile`}
        width={96}
        height={96}
        className={cn(
          "size-full rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0",
          isClicked && "opacity-0",
        )}
        priority
      />
      <Image
        src={heroConfig.avatarSmile}
        alt={`${heroConfig.name} smiling`}
        width={96}
        height={96}
        className={cn(
          "absolute inset-0 size-full rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          isClicked && "opacity-100",
        )}
        loading="lazy"
      />
    </div>
  );
}
