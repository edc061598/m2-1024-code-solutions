/** Converts cents to a string of dollars. */
export function toDollars(value: number): string {
  return '$' + (value / 100).toFixed(2);
}
