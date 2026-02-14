const MIDDOT_CP = 0x00B7;
const BULLET_CP = 0x2022;

export const MIDDOT_CHAR = '\u00B7' as const;
export const BULLET_CHAR = '\u2022' as const;

export type Middot = typeof MIDDOT_CHAR | typeof BULLET_CHAR;
export type MiddotOption = 'middot' | 'bullet';

export function middot(type: MiddotOption = 'middot'): Middot {
  return type === 'bullet' ? BULLET_CHAR : MIDDOT_CHAR;
}

export function isMiddot(char: unknown): char is Middot {
  if (typeof char !== 'string' || char.length !== 1) return false;
  const code = char.charCodeAt(0);
  return code === MIDDOT_CP || code === BULLET_CP;
}