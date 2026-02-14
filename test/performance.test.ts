// performance.test.ts
import { test, expect } from "bun:test";
import { middot } from "../index.js";

test("performance: execution budget", () => {
  const start = performance.now();
  for (let i = 0; i < 1_000_000; i++) {
    middot();
  }
  const end = performance.now();
  const duration = end - start;

  /**
   * Performance Assertion:
   * We expect 1,000,000 iterations to execute within a 50ms window.
   * Note: Environmental jitter, thermal throttling, and OS context switching
   * may impact results. 50ms represents a p99 safety margin for CI/CD.
   */
  expect(duration).toBeLessThan(50);
});