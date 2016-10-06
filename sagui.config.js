/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  webpack: {
    externals: {
      // Required by enzyme http://airbnb.io/enzyme/docs/guides/webpack.html
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  }
}
