export type CategoryResult = {
  category: string;
  tags: string[];
  importanceScore: number;
};

const rules: Array<{ category: string; keywords: string[]; score: number }> = [
  { category: 'regulation', keywords: ['bakanlık', 'rekabet kurumu', 'kanun', 'yönetmelik', 'regulation', 'law', 'compliance'], score: 9 },
  { category: 'marketplace', keywords: ['trendyol', 'hepsiburada', 'amazon', 'seller', 'marketplace', 'commission', 'komisyon'], score: 8 },
  { category: 'ads', keywords: ['meta ads', 'google ads', 'advantage+', 'performance max', 'cpas', 'catalog ads'], score: 8 },
  { category: 'social_commerce', keywords: ['tiktok shop', 'instagram shop', 'social commerce', 'creator', 'influencer'], score: 7 },
  { category: 'ai_commerce', keywords: ['ai', 'yapay zeka', 'agentic commerce', 'chatgpt', 'copilot'], score: 7 },
  { category: 'ecommerce', keywords: ['e-commerce', 'ecommerce', 'e-ticaret', 'online shopping', 'retail'], score: 6 }
];

export function categorizeNews(input: { title: string; summary?: string | null }): CategoryResult {
  const text = `${input.title} ${input.summary ?? ''}`.toLowerCase();
  const matched = rules.find(rule => rule.keywords.some(keyword => text.includes(keyword.toLowerCase())));
  if (!matched) return { category: 'general', tags: [], importanceScore: 4 };
  const tags = matched.keywords.filter(keyword => text.includes(keyword.toLowerCase())).slice(0, 8);
  return { category: matched.category, tags, importanceScore: matched.score };
}
