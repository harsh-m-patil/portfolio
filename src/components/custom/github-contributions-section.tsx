import { getRandomContributionThemeKey } from "@/lib/contribution-themes";
import { getGitHubContributions } from "@/lib/github-contributions";
import { GitHubContributionsGraph } from "./github-contributions-graph";

export async function GitHubContributionsSection() {
  const contributions = await getGitHubContributions();
  const themeKey = getRandomContributionThemeKey();

  return (
    <GitHubContributionsGraph
      contributions={contributions}
      themeKey={themeKey}
    />
  );
}
