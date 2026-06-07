import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { fetchRssFeed } from '../lib/rss';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, serviceKey);

async function main() {
  const { data: sources, error } = await supabase
    .from('sources')
    .select('*')
    .eq('is_active', true)
    .not('rss_url', 'is', null);

  if (error) throw error;

  for (const source of sources ?? []) {
    try {
      const items = await fetchRssFeed(source.rss_url);
      for (const item of items) {
        await supabase.from('news_items').upsert({
          source_id: source.id,
          title: item.title,
          url: item.url,
          summary: item.summary,
          published_at: item.publishedAt,
          author: item.author,
          language: source.language,
          country: source.country,
          category: item.category || source.category,
          tags: item.tags,
          importance_score: item.importanceScore,
          source_type: 'rss'
        }, { onConflict: 'url' });
      }
      await supabase.from('sources').update({ last_checked_at: new Date().toISOString() }).eq('id', source.id);
      console.log(`Fetched ${items.length} items from ${source.name}`);
    } catch (err) {
      console.error(`Failed source: ${source.name}`, err);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
