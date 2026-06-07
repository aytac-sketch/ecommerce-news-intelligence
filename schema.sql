create extension if not exists "pgcrypto";

create table if not exists sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  website_url text,
  rss_url text,
  source_type text not null default 'rss', -- rss | website | manual | social | newsletter
  country text default 'global',
  language text default 'en',
  category text default 'general',
  trust_score integer default 5 check (trust_score between 1 and 10),
  is_active boolean default true,
  last_checked_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists news_items (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references sources(id) on delete set null,
  title text not null,
  url text not null unique,
  canonical_url text,
  summary text,
  raw_content text,
  image_url text,
  author text,
  published_at timestamptz,
  language text,
  country text,
  category text,
  tags text[] default '{}',
  importance_score integer default 0 check (importance_score between 0 and 10),
  status text default 'new', -- new | read | archived | analyzed
  source_type text default 'rss',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists news_ai_analysis (
  id uuid primary key default gen_random_uuid(),
  news_item_id uuid references news_items(id) on delete cascade,
  ai_summary text,
  plain_news_summary text,
  seller_impact text,
  agency_opportunity text,
  content_idea text,
  customer_alert text,
  risk_level text,
  opportunity_level text,
  suggested_action text,
  target_projects text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists content_opportunities (
  id uuid primary key default gen_random_uuid(),
  news_item_id uuid references news_items(id) on delete cascade,
  format text not null, -- instagram_carousel | reel | blog | whatsapp | newsletter | training
  title text not null,
  hook text,
  draft text,
  priority integer default 5,
  status text default 'idea',
  created_at timestamptz default now()
);

create index if not exists idx_news_items_published_at on news_items(published_at desc);
create index if not exists idx_news_items_category on news_items(category);
create index if not exists idx_news_items_status on news_items(status);
create index if not exists idx_sources_active on sources(is_active);
