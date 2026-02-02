import { cn } from "@/lib/utils";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn(className)} {...props} />;
}

function SectionHeading({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-muted-foreground/50", className)} {...props} />;
}

function SectionTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "mr-3 text-black dark:text-white text-2xl font-doto font-extrabold tracking-wider",
        className,
      )}
      {...props}
    />
  );
}

function SectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground/80 mt-2", className)} {...props} />
  );
}

export { Section, SectionHeading, SectionTitle, SectionDescription };
