import { unstable_cache } from "next/cache";

export type GitHubContributionActivity = {
  date: string;
  count: number;
  level: number;
};

type GitHubContributionsResponse = {
  contributions: GitHubContributionActivity[];
};

export const GITHUB_USERNAME = "harsh-m-patil";

const GITHUB_CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(GITHUB_CONTRIBUTIONS_URL);

      if (!res.ok) {
        return [];
      }

      const data = (await res.json()) as GitHubContributionsResponse;
      return data.contributions;
    } catch {
      return [];
    }
  },
  ["github-contributions"],
  { revalidate: 86400 },
);
