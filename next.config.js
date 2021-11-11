const withCSS = require('@zeit/next-css')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = withCSS({
  /* config options here */
  env: {
    CALENDARGROUP: process.env.CALENDARGROUP,
    APIKEY: process.env.APIKEY
  }
})
