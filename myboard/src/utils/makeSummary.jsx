export function makeSummary(content, limit = 60) {
  const text = (content ?? "").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
}