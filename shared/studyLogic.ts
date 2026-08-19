export function scoreAnswer(selectedIndex: number, correctIndex: number) {
  return selectedIndex === correctIndex;
}

export function completionPercent(currentIndex: number, total: number) {
  if (total <= 0) return 0;
  return Math.round(((currentIndex + 1) / total) * 100);
}

export function filterMaterials<T extends { title: string; subject: string; grade: string }>(items: T[], subject: string, grade: string, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => (subject === "All subjects" || item.subject === subject) && (grade === "All grades" || item.grade === grade) && item.title.toLowerCase().includes(normalizedQuery));
}
