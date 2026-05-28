import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: React.ReactNode;
  favourite?: boolean;
  className?: string;
};

export function SkillBadge({
  children,
  favourite,
  className,
}: SkillBadgeProps) {
  return (
    <Button
      variant="secondary"
      className={cn(
        "relative group shadow-sm transition-transform duration-160 ease-[var(--ease-out)] supports-[hover:hover]:hover:-translate-y-0.5",
        favourite &&
          "border-primary/20 dark:bg-primary/10 text-foreground shadow-sm",
        className,
      )}
    >
      {children}
      {favourite ? (
        <span className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-background px-2 py-0.5 text-[10px] tracking-wide text-primary shadow-sm opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-[var(--ease-out)] group-hover:opacity-100 group-hover:scale-100">
          Favourite
        </span>
      ) : null}
    </Button>
  );
}
