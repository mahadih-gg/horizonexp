import { MetadataRoute } from 'next'

const siteUrl = 'https://www.horizonexp.com'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    // Keep it simple: allow everything by default
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },

      // --- Optional: explicitly allow reputable crawlers you care about ---
      // OpenAI: content for browsing (OAI-SearchBot) and general crawler (GPTBot)
      { userAgent: 'GPTBot', allow: '/' },         // OpenAI crawler
      { userAgent: 'OAI-SearchBot', allow: '/' },  // OpenAI search/browsing

      // Google model control token (not a fetcher, but honored in robots)
      { userAgent: 'Google-Extended', allow: '/' },

      // Anthropic
      { userAgent: 'ClaudeBot', allow: '/' },

      // Perplexity (two UAs seen: PerplexityBot and Perplexity-User)
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },

      // Common Crawl
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
