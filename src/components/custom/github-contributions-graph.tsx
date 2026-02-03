"use client";

import { Badge } from "@/components/ui/badge";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ContributionThemeKey } from "@/lib/contribution-themes";
import {
  CONTRIBUTION_THEMES,
  getRandomContributionThemeKey,
} from "@/lib/contribution-themes";
import type { GitHubContributionActivity } from "@/lib/github-contributions";
import { useEffect, useState } from "react";
import {
  Section,
  SectionDescription,
  SectionHeading,
  SectionTitle,
} from "./section";

type GitHubContributionsGraphProps = {
  contributions: GitHubContributionActivity[];
  themeKey?: ContributionThemeKey;
};

export function GitHubContributionsGraph({
  contributions,
  themeKey,
}: GitHubContributionsGraphProps) {
  const [activeThemeKey, setActiveThemeKey] = useState<ContributionThemeKey>(
    themeKey ?? "github",
  );

  useEffect(() => {
    if (themeKey) {
      setActiveThemeKey(themeKey);
      return;
    }

    setActiveThemeKey(getRandomContributionThemeKey());
  }, [themeKey]);

  const theme = CONTRIBUTION_THEMES[activeThemeKey].join(" ");

  if (contributions.length === 0) {
    return (
      <Section>
        <SectionHeading>
          <SectionTitle>GitHub</SectionTitle>
          Recent contributions
        </SectionHeading>
        <SectionDescription>
          Couldn&apos;t load contributions right now.
        </SectionDescription>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeading>
        <SectionTitle>GitHub</SectionTitle>
        Recent contributions
      </SectionHeading>
      <SectionDescription>
        A quick look at the last year of public activity.
      </SectionDescription>
      <div className="mt-4 rounded-2xl border border-muted/60 bg-muted/30 p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
          <span>Last 12 months</span>
          <a
            className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground/70 transition hover:text-foreground"
            href="https://github.com/harsh-m-patil"
            target="_blank"
            rel="noreferrer"
          >
            harsh-m-patil
          </a>
        </div>
        <ContributionGraph
          className="mx-auto pt-3"
          data={contributions}
          blockSize={10}
          blockMargin={2}
          blockRadius={1}
          themeClass={theme}
        >
          <ContributionGraphCalendar
            className="px-1 text-[11px]"
            title="GitHub Contributions"
          >
            {({ activity, dayIndex, weekIndex }) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </g>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-mono">
                  {activity.count} contribution
                  {activity.count === 1 ? "" : "s"} on{" "}
                  {new Date(activity.date).toLocaleDateString("en-GB")}
                </TooltipContent>
              </Tooltip>
            )}
          </ContributionGraphCalendar>
          <ContributionGraphFooter className="px-1 pt-3 text-xs">
            <ContributionGraphTotalCount>
              {({ totalCount, year }) => (
                <div className="text-muted-foreground">
                  {totalCount.toLocaleString("en")} contributions in {year} on{" "}
                  <a
                    className="font-medium underline underline-offset-4"
                    href="https://github.com/harsh-m-patil"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </div>
              )}
            </ContributionGraphTotalCount>
            <div className="ml-auto flex items-center gap-3">
              <Badge
                variant="secondary"
                className="gap-2 text-[10px] uppercase tracking-[0.2em]"
              >
                <svg className="size-3" viewBox="0 0 12 12">
                  <title>Theme colors</title>
                  {[1, 2, 3, 4].map((level, index) => (
                    <rect
                      // biome-ignore lint/suspicious/noArrayIndexKey: stable order
                      key={`${activeThemeKey}-${index}`}
                      className={theme}
                      data-level={level}
                      height={4}
                      width={4}
                      x={(index % 2) * 6}
                      y={Math.floor(index / 2) * 6}
                      rx={1}
                    />
                  ))}
                </svg>
                {activeThemeKey}
              </Badge>
              <ContributionGraphLegend align="start" />
            </div>
          </ContributionGraphFooter>
        </ContributionGraph>
      </div>
    </Section>
  );
}
