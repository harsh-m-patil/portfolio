import { BookOpenText } from "lucide-react";

const BOOK_URL = "https://ericnormand.me/grokking-simplicity";

export function CurrentlyReading() {
  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-fade-in-up fixed bottom-5 right-5 z-50 group no-underline [--stagger:1.2s]"
      aria-label="Currently reading: Grokking Simplicity"
    >
      <div className="flex items-center gap-2.5 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl px-4 py-3 shadow-lg transition-transform duration-200 ease-[var(--ease-out)] active:scale-[0.97] supports-[hover:hover]:hover:-translate-y-0.5">
        {/* Live indicator */}
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 duration-[2000ms]" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>

        <div className="shrink-0 text-muted-foreground/60 transition-[color,transform] duration-200 ease-[var(--ease-out)] group-hover:text-foreground/90 supports-[hover:hover]:group-hover:-rotate-6">
          <BookOpenText className="size-4" strokeWidth={1.7} />
        </div>

        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50 transition-colors duration-200 group-hover:text-muted-foreground/80">
            Reading
          </span>
          <span className="text-[13px] font-medium leading-tight text-muted-foreground/90 transition-colors duration-200 group-hover:text-foreground truncate">
            Grokking Simplicity
          </span>
        </div>
      </div>
    </a>
  );
}
