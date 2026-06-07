# AI Haber Analiz Promptu

Aşağıdaki haberi İşim Dijital, Satıcı Ailesi, İşim Dijital Akademi, CPAS ve Satıcıyız perspektifinden değerlendir.

Yanıtı JSON olarak ver:

{
  "plain_news_summary": "Salt haber özeti. Yorumsuz, net ve kaynak haber diline yakın.",
  "ai_summary": "Haberi daha anlaşılır şekilde açıkla.",
  "seller_impact": "Türkiye'deki e-ticaret satıcıları için etkisi.",
  "agency_opportunity": "İşim Dijital için danışmanlık, eğitim veya hizmet fırsatı.",
  "content_idea": "Instagram/LinkedIn/blog/reels için içerik fikri.",
  "customer_alert": "Müşterilere geçilecek kısa uyarı metni.",
  "risk_level": "low | medium | high",
  "opportunity_level": "low | medium | high",
  "suggested_action": "Atılması gereken aksiyon.",
  "target_projects": ["Satıcı Ailesi", "İşim Dijital Akademi", "CPAS", "Satıcıyız"]
}

Haber:
Başlık: {{title}}
Kaynak: {{source}}
Özet: {{summary}}
Link: {{url}}
