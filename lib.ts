/**
 * Unicode codepoint for HTML middot · (U+00B7)
 * @constant
 */
const MIDDOT_CODEPOINT = 0x00B7;

/**
 * The canonical HTML middot character · (U+00B7)
 * @type {'·'}
 */
export const MIDDOT_CHAR = '\u00B7' as const;

/**
 * Branded literal type representing the official middot character from this library
 * @type {'·'}
 */
export type Middot = typeof MIDDOT_CHAR;

/**
 * Returns the standard HTML middot character · (U+00B7)
 * 
 * ## Features
 * - ✅ Tree-shakeable (1 byte runtime)
 * - ✅ Branded `Middot` return type  
 * - ✅ Stable reference (same instance every call)
 * - ✅ Zero allocations after first call
 * 
 * @returns {Middot} The canonical HTML middot character
 * @example
 * ```ts
 * const dot = middot(); // '·' (typed as Middot)
 * ```
 */
export function middot(): Middot {
  return MIDDOT_CHAR;
}

/**
 * Type guard + runtime validator: Verifies input is exactly U+00B7 middot
 * 
 * Distinguishes true middot · (183) from similar characters:
 * - Bullet • (8226, U+2022) ❌
 * - Multiple chars ·· (fails length check) ❌ 
 * - Non-strings (null, number) ❌
 * 
 * ## Type Narrowing
 * ```ts
 * const userInput: unknown = "·";
 * if (isMiddot(userInput)) {
 *   bullets.push(userInput); // ✅ userInput: Middot
 * }
 * ```
 * 
 * @param char - Input to validate (string, unknown, or any)
 * @returns {char is Middot} True if exactly single U+00B7 character
 * @throws Will never throw - returns boolean
 * 
 * @example
 * ```ts
 * isMiddot('·');     // ✅ true  (U+00B7)
 * isMiddot('•');     // ❌ false (U+2022 bullet)  
 * isMiddot('··');    // ❌ false (length > 1)
 * isMiddot(null);    // ❌ false
 * isMiddot(123);     // ❌ false
 * ```
 */
export function isMiddot(char: unknown): char is Middot {
  return typeof char === 'string' && 
         char.length === 1 && 
         char.charCodeAt(0) === MIDDOT_CODEPOINT;
}
