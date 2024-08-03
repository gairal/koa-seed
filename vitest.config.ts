import { defineConfig } from "vitest/config";

// biome-ignore lint/style/noDefaultExport: exception
export default defineConfig({
  test: {
    include: ["**/__tests__/*"],
    globals: true,
  },
});
