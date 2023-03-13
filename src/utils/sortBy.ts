/* eslint-disable @typescript-eslint/no-explicit-any */
export function sortBy(arr: any[], key: any) {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}
