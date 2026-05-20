export async function summarizeWithOpenAI(article) {
  if (!process.env.OPENAI_API_KEY) return null;
  const model = process.env.UI_DESK_SUMMARY_MODEL || "gpt-4o-mini";
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: `Summarize this article for a technical daily digest in 2 concise sentences.\n\nTitle: ${article.title}\nSource: ${article.source}\nText:\n${String(article.text || article.summary || "").slice(0, 6000)}`,
    }),
  });
  if (!response.ok) throw new Error(`OpenAI summary failed: ${response.status}`);
  const json = await response.json();
  return extractOutputText(json);
}

export async function embedTexts(texts) {
  if (!process.env.OPENAI_API_KEY || !texts.length) return null;
  const model = process.env.UI_DESK_EMBEDDING_MODEL || "text-embedding-3-small";
  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: texts.map((text) => String(text || "").slice(0, 8000)),
      encoding_format: "float",
    }),
  });
  if (!response.ok) throw new Error(`OpenAI embeddings failed: ${response.status}`);
  const json = await response.json();
  return {
    provider: "openai",
    model,
    vectors: json.data.map((item) => item.embedding),
  };
}

function extractOutputText(json) {
  if (json.output_text) return json.output_text.trim();
  const chunks = [];
  for (const item of json.output || []) {
    for (const content of item.content || []) {
      if (content.text) chunks.push(content.text);
    }
  }
  return chunks.join("").trim();
}
