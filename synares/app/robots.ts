import { MetadataRoute } from "next";
import { siteConfig } from "@/src/data/site";

const robots: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/admin/"],
  },
  sitemap: `${siteConfig.url}/sitemap.xml`,
  host: siteConfig.url,
};

export default robots;