import type { MetadataRoute } from "next";
import { company } from "@ai-pacino/shared";

const LAST_CONTENT_UPDATE = new Date("2026-09-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const lastModified = LAST_CONTENT_UPDATE;

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/construction`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/construction/services`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/construction/projects`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/it`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/it/services`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/it/approach`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/quote`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}