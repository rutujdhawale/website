"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { lastPlayedTrack } from "@/config/spotify";
import { cn } from "@/lib/utils";

const waveformHeights = [28, 44, 56, 40, 24, 36, 22, 30, 58, 20, 26, 42, 48, 24, 34, 52, 38, 26, 30, 46, 54, 28, 40, 32, 22, 48, 18, 50, 56, 30, 22];

export function SpotifyLastPlayed() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingOnSite, setIsPlayingOnSite] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const playableSource = lastPlayedTrack.audioSrc || null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !playableSource) return;

    if (isPlayingOnSite) {
      audio.play().catch(() => setIsPlayingOnSite(false));
    } else {
      audio.pause();
    }
  }, [isPlayingOnSite, playableSource]);

  return (
    <LiquidGlassCard
      glowIntensity="sm"
      shadowIntensity="sm"
      borderRadius="14px"
      blurIntensity="sm"
      className="w-full p-3"
      contentClassName="relative z-10"
    >
      <audio
        ref={audioRef}
        src={playableSource ?? undefined}
        preload="none"
        onTimeUpdate={(event) => setElapsed(event.currentTarget.currentTime)}
        onPlay={() => setIsPlayingOnSite(true)}
        onPause={() => setIsPlayingOnSite(false)}
        onEnded={() => setIsPlayingOnSite(false)}
        onError={() => setIsPlayingOnSite(false)}
      />

      <div className="music-card-row flex items-center gap-3">
        <div className="relative flex h-[84px] w-[108px] shrink-0 items-center">
          <button
            type="button"
            onClick={() => setIsPlayingOnSite((current) => !current)}
            disabled={!playableSource}
            className="group relative z-20 size-20 overflow-hidden rounded-full bg-black shadow-[0_10px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/15 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed"
            aria-label={isPlayingOnSite ? `Pause ${lastPlayedTrack.title}` : `Play ${lastPlayedTrack.title}`}
          >
            <Image
              src={lastPlayedTrack.albumArt}
              alt={`${lastPlayedTrack.title} vinyl record`}
              fill
              sizes="80px"
              className={cn(
                "rounded-full object-cover",
                isPlayingOnSite ? "animate-vinyl-spin-fast" : "animate-vinyl-spin-slow",
              )}
              priority={false}
            />
          </button>

          <div
            className={cn(
              "pointer-events-none absolute right-1 top-2 z-30 h-4 w-10 origin-right transition-transform duration-700 ease-out",
              isPlayingOnSite ? "rotate-0" : "rotate-[18deg]",
            )}
          >
            <span className="absolute right-0 top-1/2 size-4 -translate-y-1/2 rounded-full bg-neutral-500 shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
            <span className="absolute right-2 top-1/2 h-1 w-9 -translate-y-1/2 rounded-full bg-neutral-500 shadow-[0_2px_4px_rgba(0,0,0,0.18)]" />
            <span className="absolute -left-0.5 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-[#1DB954] shadow-sm" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-xs font-medium text-secondary">
            <span className="size-1.5 rounded-full bg-secondary/60" />
            Favorite
          </p>

          <Link
            href={lastPlayedTrack.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 block truncate text-base font-bold text-foreground hover:underline"
          >
            {lastPlayedTrack.title}
          </Link>
          <p className="truncate text-sm text-secondary">{lastPlayedTrack.artist}</p>

          <Link
            href={lastPlayedTrack.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block truncate text-[11px] text-secondary/80 underline-offset-2 hover:text-foreground hover:underline"
          >
            Last listened: {lastPlayedTrack.title} · {lastPlayedTrack.artist}
          </Link>
        </div>

        <div className={cn("music-player", isPlayingOnSite && "music-player--playing")}>
          <button
            type="button"
            onClick={() => setIsPlayingOnSite((current) => !current)}
            disabled={!playableSource}
            className="music-player-toggle"
            aria-label={isPlayingOnSite ? `Pause ${lastPlayedTrack.title}` : `Play ${lastPlayedTrack.title}`}
            aria-pressed={isPlayingOnSite}
          >
            {isPlayingOnSite ? (
              <Pause className="size-4" weight="fill" />
            ) : (
              <Play className="ml-0.5 size-4" weight="fill" />
            )}
          </button>
          <div className="music-player-waveform" aria-hidden="true">
            {waveformHeights.map((height, index) => (
              <span
                key={index}
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * -0.13}s`,
                  animationDuration: `${0.65 + (index % 5) * 0.12}s`,
                }}
              />
            ))}
          </div>
          <span className="music-player-time" aria-hidden="true">
            {Math.floor(elapsed)}s
          </span>
        </div>
      </div>
    </LiquidGlassCard>
  );
}
