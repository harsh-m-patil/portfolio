export function CodeTitle({ children }: { children: string }) {
  return (
    <h2 className="text-base font-normal text-muted-foreground pt-3 font-mono tracking-tight">{`< ${children} />`}</h2>
  );
}
