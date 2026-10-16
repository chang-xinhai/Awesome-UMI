/** Sort dated works chronologically, keeping undated resources last. */
export function compareDates(
  a: { date: string },
  b: { date: string },
  direction: "newest" | "oldest" = "newest",
) {
  const undated = Number(!/^\d{4}/.test(a.date)) - Number(!/^\d{4}/.test(b.date));
  return undated || (direction === "newest"
    ? b.date.localeCompare(a.date)
    : a.date.localeCompare(b.date));
}
