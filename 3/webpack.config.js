var path = require('path');

module.exports = {
  entry: './public/app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { 'modules': false }]
              ],
              plugins: ['angularjs-annotate']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }
};
