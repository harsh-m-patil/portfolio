import { getGitHubContributions } from "@/lib/github-contributions";
import { GitHubContributionsGraph } from "./github-contributions-graph";

export async function GitHubContributionsSection() {
  const contributions = await getGitHubContributions();

  return (
    <GitHubContributionsGraph contributions={contributions} />
  );
}
