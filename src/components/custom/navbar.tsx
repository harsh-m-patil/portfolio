import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="flex max-w-2xl mx-auto justify-end p-4">
      <ModeToggle />
    </nav>
  );
}
