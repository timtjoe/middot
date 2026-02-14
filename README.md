> [!IMPORTANT]
> Because developers love using packages for literally everything—even things that already exist on their keyboards—behold: the ultimate, enterprise-grade solution for the middle dot character.

**The most sophisticated HTML middot character utility for TypeScript.** middot(): the most type-safe, benchmarked, and CI/CD-optimized way to get a single dot character.

![npm](https://img.shields.io/npm/v/middot?style=for-the-badge) ![build](https://img.shields.io/github/actions/workflow/status/timtjoe/middot/test.yml) ![types](https://img.shields.io/npm/types/middot) ![size](https://img.shields.io/bundlephobia/minzip/middot)

## 🚀 Quick Start

```bash
npm i middot

```

```ts
import { middot, isMiddot } from 'middot';

const dot = middot(); // · (U+00B7)
if (isMiddot(dot)) console.log('Official middot!'); // ✅ true

```

## Usage Anywhere (React / Vue / Svelte)

### React

```tsx
import { middot } from "middot";

export const Divider = () => <span>{middot()}</span>;

```

### Vue

```vue
<script setup lang="ts">
import { middot } from "middot";
const dot = middot();
</script>

<template>
  <span>{{ dot }}</span>
</template>

```

### Svelte

```svelte
<script lang="ts">
  import { middot } from "middot";
  const dot = middot();
</script>

<span>{dot}</span>

```

```ts
// Type-safe everywhere
const maybeDot: unknown = userInput;
if (isMiddot(maybeDot)) {
  bullets.push(maybeDot); // ✅ Narrowed to Middot type
}

```

## 📊 Benchmarks

```bash
$ bun run benchmark
✓ benchmark: 100k iterations [9.8ms]

```

## 🛠️ Development

```bash
git clone [https://github.com/timtjoe/middot](https://github.com/timtjoe/middot)
cd middot
bun install
bun test          # Unit tests
bun run benchmark  # Performance validation
bun run build      # Build dist/index.js + types

```

## 🤖 Auto-Publish

Commit messages trigger semantic releases via GitHub Actions:

```text
feat: add new feature        # v1.0.0 → v1.1.0
fix: patch bug              # v1.1.0 → v1.1.1  
feat!: breaking change      # v1.1.1 → v2.0.0

```

---

### About the Developer

I am a Full-Stack Developer dedicated to crafting modern UIs that feel fast, clean, and intuitive. With **5+ years of experience**, I thrive on the joy that a well-built interface brings to users.

Interestingly, my journey into code started with a fascination for Operating Systems. While I love the frontend, I still enjoy delving into low-level programming and OS concepts. I'm always looking for opportunities that allow me to be creative, solve complex problems, and contribute to products that reach a global audience.

## Let's Connect

If you're looking for a developer to help shape your user experience and make your product stand out in a crowded market, I'd love to hear from you.

* **Email:** [timtjoe@gmail.com](mailto:timtjoe@gmail.com)
* **WhatsApp:** [wa.me/+231770934646](https://wa.me/+231770934646)
* **Facebook:** [fb.com/timtjoe](https://fb.com/timtjoe)

---

<div align="center">
<img src="https://img.shields.io/badge/built%20with-bun-orange?logo=bun.sh" alt="built with bun" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="typescript" />
</div>