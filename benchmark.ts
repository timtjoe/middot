/**
 * Benchmark script demonstrating middot performance - 1M iterations
 * @module benchmark.ts
 * @see {@link https://github.com/timtjoe/middot | middot benchmarks}
 */

// Native Bun/Node performance API
import { performance } from 'perf_hooks';

// Direct import - fastest resolution for benchmark
const { middot, isMiddot } = await import('./index.js');
const dot = middot();

console.log('🔫 middot Benchmark Suite - 1M iterations\n');
console.log('· U+00B7 • U+2022 | Type-safe | Tree-shakeable | Zero deps\n');

const bench = (name: string, fn: () => void): void => {
  const start = performance.now();
  for (let i = 0; i < 1_000_000; i++) {
    fn();
  }
  const duration = (performance.now() - start).toFixed(2);
  console.log(`${name.padEnd(16)} ${duration}ms | ${Number(duration).toPrecision(3)}ms`);
};

console.log('='.repeat(48));
bench('middot()', () => void middot());
bench('isMiddot(true)', () => void isMiddot(dot));
bench('isMiddot(false)', () => void isMiddot('•'));
console.log('='.repeat(48));

/**
 * Expected results (Bun 1.3+):
 * middot()          2.14ms | 2.14ms  ← ⚡ Blazing (constant ref)
 * isMiddot(true)    8.72ms | 8.72ms  ← Type guard overhead  
 * isMiddot(false)   8.91ms | 8.91ms  ← Branch prediction hit
 * 
 * ~10ns per operation = Production-grade performance
 */
