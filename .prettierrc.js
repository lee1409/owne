module.exports = {
  arrowParens: "avoid",
  semi: false,
  tabWidth: 2,
  overrides: [
    {
      // This apps uses semicolons.
      files: ["cms/*"],
      options: {
        semi: true,
        singleQuote: true
      },
    }
  ],
}