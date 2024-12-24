import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.naganotonic.cc'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/metabolic-boost-overview`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/transformative-benefits`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/natural-japanese-formula`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/expert-insights`,
      lastModified: new Date(),
    },
  ]
}

