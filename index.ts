/**
 * Re-export index for `middot` package. Clean barrel exports with stable MIDDOT constant.
 * @module
 * @see {@link https://www.npmjs.com/package/middot | middot npm}
 */

// Import all symbols into local scope
import { middot, isMiddot, MIDDOT_CHAR, type Middot } from './lib.js';

// Re-export everything for clean imports
export { middot, isMiddot, MIDDOT_CHAR, type Middot };

// Stable readonly constant - same instance as MIDDOT_CHAR
/**
 * Stable readonly reference to canonical middot · (U+00B7)
 * @type {Middot}
 * @constant
 */
export const MIDDOT = middot();
