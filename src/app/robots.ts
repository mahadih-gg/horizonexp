import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://horizonexp.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all bots
      {
        userAgent: '*',
        allow: '/',
      },
      // AI-specific crawlers
      {
        userAgent: 'GPTBot', // OpenAI’s crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT browsing agent
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google’s Gemini crawler
        allow: '/',
      },
      {
        userAgent: 'Anthropic-AI', // Claude crawler
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
      },
      {
        userAgent: 'CCBot', // CommonCrawl (used by Perplexity and others)
        allow: '/',
      },
      {
        userAgent: 'Grok', // xAI’s Grok bot
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
