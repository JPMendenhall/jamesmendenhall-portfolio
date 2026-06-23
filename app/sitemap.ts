import type { MetadataRoute } from "next"

const BASE_URL = "https://jamesmendenhall.dev"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/personal-ai", "/sneks", "/ai-pulse"]
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }))
}
