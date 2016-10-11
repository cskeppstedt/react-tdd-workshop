/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  javaScript: {
    transpileDependencies: ['@klarna']
  },

  webpack: {
    babel: {
      babelrc: false,
      presets: ['sagui']
    },
    externals: {
      // Required by enzyme http://airbnb.io/enzyme/docs/guides/webpack.html
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  },

  karma: {
    reporters: ['clear-screen'],
    mochaReporter: {
      output: 'minimal',
      symbols: {
        success: '•',
        info: 'ℹ',
        warning: '⚠',
        error: '⨯'
      }
    }
  }
}
