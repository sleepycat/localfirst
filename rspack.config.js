module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.js',
  },
  devServer: { port: 3000 },
  builtins: {
    html: [
      {
        template: './index.html',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['macros'],
          },
        },
      },
    ],
  },
}
