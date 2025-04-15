module.exports = {
  plugins: [
    require('@tailwindcss/postcss7-compat'), // This should be required directly
    require('autoprefixer')
  ]
};