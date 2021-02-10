export function debounce<F extends (...params: any[]) => void>(fn: F, delay: number) {
  let timeout: number = 0;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => fn.apply(this, args), delay);
  } as F;
}