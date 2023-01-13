module.exports = {
  // Using fake extensions is a trick to run tasks concurrently.
  // See https://github.com/okonet/lint-staged/issues/934
  // Run type-check to all TypeScript files
  "*.{ts,type-check}": () => "yarn type-check",
  // Run ESLint on changed TypeScript files
  "*.{ts,lint}": (filenames) => `yarn lint --fix ${filenames.join(" ")}`,
  "*.{json,md,prettierrc,eslintrc}": (filenames) =>
    `prettier --write ${filenames.join(" ")}`,
};
