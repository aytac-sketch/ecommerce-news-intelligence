# Cursor Master Prompt — E-Commerce News Intelligence MVP

Bu projeyi Next.js App Router + TypeScript + Supabase ile geliştir.

Amaç: Türkiye ve global e-ticaret, pazaryeri, martech, growth, reklam, regülasyon ve sosyal medya haberlerini RSS / web kaynak / manuel link yoluyla toplayan, salt haber akışı ve AI analiz katmanı sunan bir dashboard oluşturmak.

## MVP kapsamı
1. Supabase bağlantısı
2. `sources` yönetimi: kaynak ekle, düzenle, aktif/pasif yap
3. `news_items` haber akışı: kaynak, tarih, kategori, önem skoru, özet, orijinal link
4. RSS fetch scripti: aktif RSS kaynaklarını çek, yeni haberleri URL unique olacak şekilde kaydet
5. Intelligence alanı: haberin AI özetini, satıcı etkisini, ajans fırsatını, içerik fikrini göster
6. Manuel link ekleme alanı: RSS olmayan haberleri manuel kaydet
7. Filtreler: kategori, ülke, kaynak, tarih, önem skoru, durum

## Sayfalar
- `/dashboard/news`: salt haber akışı
- `/dashboard/sources`: kaynak yönetimi
- `/dashboard/intelligence`: analiz edilmiş haberler
- `/dashboard/content-opportunities`: içerik fırsatları

## Tasarım
Modern SaaS dashboard. Sol sidebar, üstte filtreler, haber kartları. Haber kartlarında iki sekme olsun: `Haber` ve `Analiz`.

## Önemli kural
Salt haber bilgilendirmesi ayrı tutulacak. AI yorumları ayrı analiz alanında gösterilecek. Kullanıcı isterse yalnızca haber okuyabilmeli.
