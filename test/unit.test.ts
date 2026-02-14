import { test, expect, describe } from 'bun:test';
import { 
  middot, 
  isMiddot, 
  MIDDOT_CHAR, 
  BULLET_CHAR, 
  type Middot 
} from '../index';

describe('middot', () => {
  test('returns correct characters based on parameter', () => {
    expect(middot()).toBe('·');
    expect(middot('middot')).toBe('·');
    expect(middot('bullet')).toBe('•');
    expect(middot()).toBe(MIDDOT_CHAR);
    expect(middot('bullet')).toBe(BULLET_CHAR);
  });

  test('codepoints are correct', () => {
    expect(middot('middot').charCodeAt(0)).toBe(0x00B7);
    expect(middot('bullet').charCodeAt(0)).toBe(0x2022);
  });

  test('returns branded Middot type', () => {
    const dot: Middot = middot();
    const bullet: Middot = middot('bullet');
    expect(dot).toBe('·');
    expect(bullet).toBe('•');
  });
});

describe('isMiddot', () => {
  test('true for supported dots', () => {
    expect(isMiddot(middot())).toBe(true);
    expect(isMiddot(middot('bullet'))).toBe(true);
    expect(isMiddot(MIDDOT_CHAR)).toBe(true);
    expect(isMiddot(BULLET_CHAR)).toBe(true);
  });

  test('type narrows correctly', () => {
    const input: unknown = '•';
    if (isMiddot(input)) {
      const result: Middot = input;
      expect(result).toBe('•');
    }
  });

  test('false for invalid values', () => {
    expect(isMiddot('··')).toBe(false);
    expect(isMiddot(' ')).toBe(false);
    expect(isMiddot('-')).toBe(false);
    expect(isMiddot(123)).toBe(false);
    expect(isMiddot(null)).toBe(false);
  });
});

test('performance: 100k iterations', () => {
  const start = performance.now();
  for (let i = 0; i < 100_000; i++) {
    isMiddot(middot('middot'));
    isMiddot(middot('bullet'));
  }
  expect(performance.now() - start).toBeLessThan(15);
});