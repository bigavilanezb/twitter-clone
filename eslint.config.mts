import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";

export default [
  // IGNORES PRIMERO (muy importante)
  {
    ignores: [
      "**/database.ts",
      "src/app/types/database.ts",
      "node_modules/**",
      ".next/**",
      "**/*.d.ts"
    ]
  },
  
  // Configuración base para archivos de código
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    ...js.configs.recommended,
    languageOptions: { 
      globals: {...globals.browser, ...globals.node} 
    } 
  },
  
  // TypeScript
  ...tseslint.configs.recommended,
  
  // React
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  
  // Reglas personalizadas
  {
    files: ["**/*.{ts,mts,cts,tsx}"],
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unused-vars": "warn" // cambiar a warn en vez de error
    }
  },
  
  // JSON, Markdown, CSS
  { files: ["**/*.json"], ...json.configs.recommended },
  { files: ["**/*.md"], ...markdown.configs.recommended },
  { files: ["**/*.css"], ...css.configs.recommended }
];