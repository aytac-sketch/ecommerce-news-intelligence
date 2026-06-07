insert into sources (name, website_url, rss_url, source_type, country, language, category, trust_score) values
('Webrazzi E-Ticaret', 'https://webrazzi.com/kategori/e-ticaret/', null, 'website', 'TR', 'tr', 'ecommerce', 8),
('T.C. Ticaret Bakanlığı Duyurular', 'https://ticaret.gov.tr/duyurular', null, 'website', 'TR', 'tr', 'regulation', 10),
('Rekabet Kurumu', 'https://www.rekabet.gov.tr/', null, 'website', 'TR', 'tr', 'regulation', 10),
('Shopify Blog', 'https://www.shopify.com/blog', null, 'website', 'global', 'en', 'ecommerce', 9),
('Google Ads News', 'https://blog.google/innovation-and-ai/technology/ads/', null, 'website', 'global', 'en', 'ads', 10),
('TikTok Business Blog', 'https://ads.tiktok.com/business/en/blog', null, 'website', 'global', 'en', 'social_ads', 9),
('Amazon Sell Blog', 'https://sell.amazon.com/blog', null, 'website', 'global', 'en', 'marketplace', 9)
on conflict do nothing;
