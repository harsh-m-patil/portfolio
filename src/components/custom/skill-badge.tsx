import { Button } from "@/components/ui/button";

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return <Button variant="secondary">{children}</Button>;
}
