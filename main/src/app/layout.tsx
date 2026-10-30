import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CursorPet } from "@/components/cursor-pet";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/meta";
import { PersonJsonLd } from "@/components/person-json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/assets/avatar-smile.png",
    apple: "/assets/avatar-smile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background font-sans antialiased"
        suppressHydrationWarning
      >
        <PersonJsonLd />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col bg-green-grid">
              <SiteHeader />
              <main className="page-content flex-1">{children}</main>
              <ScrollReveal />
              <SiteFooter />
              <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-[60px] bg-gradient-to-t from-background/80 to-transparent [mask-image:linear-gradient(to_top,black_50%,transparent)]" />
              <CursorPet />
            </div>
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
