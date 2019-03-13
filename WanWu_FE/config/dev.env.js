'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const date = require('moment')().format('YYYYMMDD')
const commit = require('child_process').execSync('git rev-parse HEAD').toString().slice(0, 5)
const version = `"${date}-${commit}"`

console.log(`current version is ${version}`)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VERSION: version,
  USE_SENTRY: '0'
})
