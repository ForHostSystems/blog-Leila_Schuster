/* eslint-disable @typescript-eslint/no-explicit-any */
export function orderById(a: any, b: any) {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
}
