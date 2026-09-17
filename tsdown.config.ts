import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "tsdown";

const root = path.dirname(fileURLToPath(import.meta.url));
const primitivesEntry = path.join(root, "src/primitives/index.ts");
const primitivesWeb = path.join(root, "src/primitives/web.tsx");
const primitivesNative = path.join(root, "src/primitives/native.ts");

export default defineConfig([
  {
    entry: "src/index.ts",
    platform: "browser",
    dts: true,
    exports: true,
    alias: {
      [primitivesEntry]: primitivesWeb,
    },
  },
  {
    entry: {
      "index.native": "src/index.ts",
      "primitives.native": "src/primitives/index.native.ts",
    },
    platform: "neutral",
    dts: true,
    exports: true,
    alias: {
      [primitivesEntry]: primitivesNative,
    },
  },
]);
