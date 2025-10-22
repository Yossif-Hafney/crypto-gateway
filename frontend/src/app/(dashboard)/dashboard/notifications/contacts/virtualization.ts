export default async function fetchServerPage(
  limit: number,
  offset: number = 0
): Promise<{ rows: Array<string>; nextOffset: number }> {
  const rows = new Array(limit)
    .fill(0)
    .map((_, i) => `Async loaded row #${i + offset * limit}`);

  await new Promise((r) => setTimeout(r, 500));

  return { rows, nextOffset: offset + 1 };
}
