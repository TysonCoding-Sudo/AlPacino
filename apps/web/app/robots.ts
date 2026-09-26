import type { MetadataRoute } from "next";
import { company } from "@ai-pacino/shared";

const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "OAI-SearchBot-Request-Server",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "meta-externalagent",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "YouBot",
  "AI2Bot",
  "AI2Bot-Dolma",
  "FriendlyCrawler",
  "KangarooBot",
  "Meltwater",
  "PetalBot",
  "SentiOneBot",
  "Timpibot",
  "VelenPublicWebCrawler",
  "YaK",
  "Meta-ExternalFetcher",
  "meta-externalfetcher",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiBots.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${company.siteUrl}/sitemap.xml`,
    host: company.siteUrl,
  };
}