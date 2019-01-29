module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2015
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
