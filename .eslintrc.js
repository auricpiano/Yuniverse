module.exports = {
  // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
  env: {
    // "browser": true,
    // "amd": true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 13,
  },
  // https://eslint.org/docs/latest/rules/
  rules: {
    "array-callback-return": "warn",
    "for-direction": "error",
    "no-async-promise-executor": "error",
    "no-unused-vars": "warn",
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
    "semi": ["error", "always"],
    "semi-spacing": "error",
    "no-extra-semi": "error",
    "spaced-comment": "error",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "keyword-spacing": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-before-blocks": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "indent": ["error", 2],
    "comma-dangle": ["error", "always-multiline"],
  },
};
