module.exports = {
    syntax: 'postcss-scss',
    plugins: [
      // require('tailwindcss'),
      // require('postcss-import'),
      require('@csstools/postcss-sass'),
      // require('postcss-custom-properties'),
      // require('postcss-preset-env'),
      require('autoprefixer'),
      // require('cssnano')
    ]
  }