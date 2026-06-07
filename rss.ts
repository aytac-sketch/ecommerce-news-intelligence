import Parser from 'rss-parser';
import { categorizeNews } from './categorizer';

const parser = new Parser({
  timeout: 15000,
  headers: {
    'User-Agent': 'EcommerceNewsIntelligence/1.0'
  }
});

export type ParsedNewsItem = {
  title: string;
  url: string;
  summary?: string;
  publishedAt?: string;
  author?: string;
  category: string;
  tags: string[];
  importanceScore: number;
};

export async function fetchRssFeed(rssUrl: string): Promise<ParsedNewsItem[]> {
  const feed = await parser.parseURL(rssUrl);
  return (feed.items ?? [])
    .filter(item => item.title && item.link)
    .map(item => {
      const summary = item.contentSnippet || item.content || item.summary || '';
      const category = categorizeNews({ title: item.title!, summary });
      return {
        title: item.title!,
        url: item.link!,
        summary,
        publishedAt: item.isoDate || item.pubDate,
        author: item.creator || item.author,
        category: category.category,
        tags: category.tags,
        importanceScore: category.importanceScore
      };
    });
}
