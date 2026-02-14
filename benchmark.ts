import { middot, isMiddot } from "./index.js";

const dot = middot();

// @ts-ignore
benchmark("middot()", () => {
  middot();
});

// @ts-ignore
benchmark("isMiddot(middot)", () => {
  isMiddot(dot);
});