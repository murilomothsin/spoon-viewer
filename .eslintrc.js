module.exports = {
  extends: "react-app",
  plugins: ["prettier"],
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-no-undef": "error",
    "react/react-in-jsx-scope": "error",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
  },
  settings: {
    react: {
      version: "16.7",
    },
  },
}
