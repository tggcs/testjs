const rollup = require('rollup')
const babel = require("rollup-plugin-babel");
// const replace = require('rollup-plugin-replace')
// const alias = require('rollup-plugin-alias')
// const aliases = require('./alias')

const watcher = rollup.watch({
  input: 'src/main.js',
  output: {
    name: 'domhelper',
    file: 'dist/bundle.js',
    format: 'umd'
  },
  watch: {},
  plugins: [ 
    babel()
  ]
});

watcher.on('event', event => {
  console.log(event)
  console.log('watching....')
})