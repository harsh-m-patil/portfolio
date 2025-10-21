export function CodeTitle({ children }: { children: string }) {
  return (
    <h4 className="text-muted-foreground pt-3 font-mono tracking-tight">{`< ${children} />`}</h4>
  );
}
