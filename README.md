# 🅼🅸🅳🅳🅾🆃: 🅰 🆃🆁🅴🅰🆃🅸🆂🅴 🅾🅽 🆄🅽🅸🅲🅾🅳🅴 🆂🅴🅿🅰🆁🅰🆃🅸🅾🅽

> [!IMPORTANT]
> In an era where human cognitive load is depleted by the arduous task of 
> locating the · (U+00B7) or • (U+2022) keys, this library provides an 
> abstracted, enterprise-grade interface for character retrieval. It is a 
> monument to the philosophy that if a thing is worth doing, it is worth 
> wrapping in a Type Guard and publishing to a registry.

---

```text
## 0x01 ABSTRACT

middot is a zero-dependency, high-throughput utility designed for the 
rigorous demands of modern typographic separation. While the uninitiated 
may perceive these characters as mere pixels, the discerning engineer 
recognizes them as C where C ∈ { U+00B7, U+2022 }. This library ensures 
that C is accessed via a stable, referentially transparent API, optimized 
for the JavaScriptCore (JSC) JIT compiler.

---

## 0x02 TESTIMONIALS OF VERIFICATION

I eschew "Usage" documentation in favor of EMPIRICAL EVIDENCE. The 
following test cases represent the core invariant logic of the library.

### IDENTITY AND CODEPOINT ASSERTION
I verify that the returned string literal maps precisely to the IEEE-754 
adjacent memory space allocated for Unicode scalars.

  test('identity', () => {
    expect(middot()).toBe('\u00B7');           // Interpunct
    expect(middot('bullet')).toBe('\u2022');   // List Bullet
    expect(middot().charCodeAt(0)).toBe(183);  // 0x00B7
  });

### TYPE-LEVEL SOPHISTICATION
The library utilizes TypeScript's narrowing capabilities to provide 
compile-time safety for character validation.

  test('narrowing', () => {
    const char: unknown = '•';
    if (isMiddot(char)) {
      // Within this scope, char is strictly type Middot
      const verified: Middot = char; 
      expect(verified).toBeDefined();
    }
  });

---

## 0x03 PERFORMANCE AND OPERATIONAL THROUGHPUT

Benchmark results obtained via 'bun bench' on a Unix-like environment. 

| OPERATION       | THROUGHPUT    | LATENCY (P99) |
|-----------------|---------------|---------------|
| middot()        | ~142.5M ops/s | 0.007 ns      |
| isMiddot(dot)   | ~98.2M ops/s  | 0.012 ns      |
| isMiddot(fail)  | ~105.1M ops/s | 0.010 ns      |

---

## 0x04 DEPLOYMENT AND SEMANTIC GOVERNANCE

The lifecycle of this library is governed by a GitHub Actions CI/CD 
pipeline, enforcing CRYPTOGRAPHIC PROVENANCE. 

  # The path to enlightenment
  $ bun run typecheck   # Static Analysis
  $ bun test            # Logic Verification
  $ bun run build       # Transpilation to ESM/CJS

---

## 0x05 POSTSCRIPT: THE EXISTENTIAL JOKE

Since developers notoriously love over-engineering the most trivial 
abstractions—turning simple key-presses into 400-kb dependencies—I 
created this library as a satirical tribute to that obsession. 

If you appreciate the absurdity of enterprise-grade interpuncts, 
please share the joke with your fellow engineers.

01001010 01001111 01001011 01000101 00100000 01000100 01000101 
01010000 01001100 01001111 01011001 01000101 01000100

---

## 0x06 ABOUT THE ARCHITECT

- EMAIL:   timtjoe@gmail.com
- DIGITAL: wa.me/+231770934646

                          built with bun.sh
          01101101 01101001 01100100 01100100 01101111 01110100