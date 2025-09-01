import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // You don't need to import React in scope when using JSX in React 17+
      "react/react-in-jsx-scope": "off",
    },
  },

  // React plugin recommended config
  pluginReact.configs.flat.recommended,

  // Jest globals for test files
  {
    files: ["**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      },
    },
  },
]);
