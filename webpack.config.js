module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
                test: /\.css$/i,
                use: ['style-loader' ,'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
                ],
              },
          ]
    },

    devServer: {
      contentBase: './dist'
    }
  };