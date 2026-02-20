export const siteConfig = {
  name: "Harshwardhan Patil Portfolio",
  shortName: "Harsh Portfolio",
  description:
    "Harshwardhan Patil is a full stack developer and AI engineer building scalable web apps, APIs, and AI-driven products.",
  url: "https://harshmpatil.xyz",
  locale: "en_US",
  creator: "Harshwardhan Patil",
  twitterHandle: "@patilharshm",
  keywords: [
    "Harshwardhan Patil",
    "Harsh Patil",
    "portfolio",
    "full stack developer",
    "AI engineer",
    "Next.js developer",
    "TypeScript",
    "backend developer",
    "React developer",
  ],
  sameAs: [
    "https://github.com/harsh-m-patil",
    "https://www.linkedin.com/in/harshmpatil",
    "https://x.com/patilharshm",
  ],
  defaultOgImage: "/opengraph-image",
  defaultOgImageAlt: "Harshwardhan Patil portfolio preview",
};

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, siteConfig.url).toString();
}

export function toValidDate(value: unknown): Date | undefined {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }

  if (typeof value === "number" || typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  }

  return undefined;
}

export function toIsoDate(value: unknown): string | undefined {
  return toValidDate(value)?.toISOString();
}

export function toJsonLd(value: object): string {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}
