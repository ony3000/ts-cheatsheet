// ---------------- from ony3000/project-euler ---------------- //
export function isNumberArray(arg: unknown[]): arg is number[] {
  return Array.isArray(arg) && arg.length > 0 && arg.every((element) => (typeof element === 'number'));
}

export function isBigIntArray(arg: unknown[]): arg is bigint[] {
  return Array.isArray(arg) && arg.length > 0 && arg.every((element) => (typeof element === 'bigint'));
}

export function isStringArray(arg: unknown[]): arg is string[] {
  return Array.isArray(arg) && arg.length > 0 && arg.every((element) => (typeof element === 'string'));
}
// ---------------- from ony3000/project-euler ---------------- //

// ---------------- from ony3000/my-to-do ---------------- //
type Dict<T = unknown> = Record<string, T>;

export const isDict = (arg: unknown): arg is Dict => (
  arg !== undefined && arg !== null && Object.getPrototypeOf(arg) === Object.prototype
);

export const isRegExp = (arg: unknown): arg is RegExp => (
  arg !== undefined && arg !== null && Object.getPrototypeOf(arg) === RegExp.prototype
);

export const isOneOf = <T extends string>(arg: string, list: T[]): arg is T => (
  (list as string[]).includes(arg)
);
// ---------------- from ony3000/my-to-do ---------------- //
