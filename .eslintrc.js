module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["google"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
  rules: {
    "linebreak-style": "off",
    quotes: "off",
    "@typescript-eslint/quotes": ["off", "single"],
    "max-len": [
      "off",
      {
        code: 140,
      },
    ],
  },
};
