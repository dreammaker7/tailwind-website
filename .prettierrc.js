// prettier.config.js
module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 130,
  tabWidth: 2,
  endOfLine: 'auto',
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts'
};
