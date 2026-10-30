"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function SiteAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;

  return (
    <>
      {/* Vercel Web Analytics: tracks page views, unique visitors, countries, devices, and referrers */}
      <Analytics />

      {/* Vercel Speed Insights: tracks Core Web Vitals and performance across regions */}
      <SpeedInsights />

      {/* Optional Google Analytics 4 (GA4): activated automatically when NEXT_PUBLIC_GA_ID is set */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Optional Cloudflare Web Analytics: activated when NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN is set */}
      {cloudflareToken && (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cloudflareToken })}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

