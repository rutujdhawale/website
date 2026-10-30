import { cn } from "@/lib/utils";

export function Container({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      data-scroll-section
      className={cn(
        "mx-auto w-full max-w-(--portfolio-content-width) px-5 sm:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
