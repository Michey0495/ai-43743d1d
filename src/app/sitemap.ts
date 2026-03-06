import type { MetadataRoute } from "next";
import { scenes } from "@/lib/scenes";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eigo.ezoai.jp";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/generate`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const scenePages: MetadataRoute.Sitemap = scenes.map((scene) => ({
    url: `${baseUrl}/scenes/${scene.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guide/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...scenePages, ...guidePages];
}
