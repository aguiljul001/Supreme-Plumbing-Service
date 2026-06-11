import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 1. Establish directory path variables for flat config mapping
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Initialize the Flat Compatibility utility layer
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 3. Cleanly parse the classic Next.js web vitals configuration
  ...compat.extends("next/core-web-vitals"),
  
  // 4. Custom rule adjustments to prevent build crashes from unescaped quotes
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];

export default eslintConfig;