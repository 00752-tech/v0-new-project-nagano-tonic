import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://v0-new-project-gxmu9vjmzdb-8zu88t3z6.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
  ]
}
