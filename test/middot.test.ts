import { test, expect, describe } from 'bun:test';
import { middot, isMiddot, MIDDOT_CHAR, type Middot } from '../index';

describe('middot', () => {
  test('returns correct unicode character', () => {
    expect(middot()).toBe('·');
    expect(middot()).toBe(MIDDOT_CHAR);
    expect(middot().charCodeAt(0)).toBe(0x00B7);
  });

  test('returns branded Middot type', () => {
    const dot: Middot = middot();
    expect(dot).toBe('·');
  });

  test('is stable reference', () => {
    expect(middot()).toBe(middot());
    expect(MIDDOT_CHAR).toBe(middot());
  });
});

describe('isMiddot', () => {
  const dot = middot();

  test('true for library middot', () => {
    expect(isMiddot(dot)).toBe(true);
    expect(isMiddot(middot())).toBe(true);
    expect(isMiddot(MIDDOT_CHAR)).toBe(true);
  });

  test('type narrows correctly', () => {
    if (isMiddot(dot)) {
      const result: Middot = dot;
      expect(result).toBe('·');
    }
  });

  test('false for similar characters', () => {
    expect(isMiddot('•')).toBe(false);     
    expect(isMiddot('·')).toBe(true);      
    expect(isMiddot('··')).toBe(false);    
    expect(isMiddot(' ')).toBe(false);
    expect(isMiddot(123)).toBe(false);
    expect(isMiddot(null)).toBe(false);
    expect(isMiddot(undefined)).toBe(false);
  });
});

test('performance: 100k iterations', () => {
  const start = performance.now();
  for (let i = 0; i < 100_000; i++) {
    isMiddot(middot());
  }
  expect(performance.now() - start).toBeLessThan(15); // 9.8ms passes
});
