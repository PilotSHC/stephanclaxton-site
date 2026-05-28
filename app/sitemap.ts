import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.stephanclaxton.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, priority: 0.9 },
    { url: `${base}/writing`, lastModified: now, priority: 0.9 },
    {
      url: `${base}/writing/reading-meadows-from-autonomy`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${base}/writing/satellites-to-autonomy`,
      lastModified: now,
      priority: 0.8,
    },
  ];
}
