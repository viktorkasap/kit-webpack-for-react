const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;

const paths = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  output: path.resolve(__dirname, 'dist'),
  watchFiles: path.resolve(__dirname, 'src/**/*'),
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  template: path.resolve(__dirname, 'public/index.html'),
};

const alias = {
  '@app': paths.src,
};

const babelPlugins = [
  [
    '@emotion',
    {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      cssPropOptimization: true,
    },
  ],
];

module.exports = {
  mode,

  target: mode === 'production' ? 'browserslist' : 'web',

  devtool: 'source-map',

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    watchFiles: {
      paths: [paths.watchFiles],
      options: {
        ignored: /node_modules/,
        usePolling: true,
      },
    },
  },

  watchOptions: {
    poll: 1000,
    aggregateTimeout: 200,
    ignored: '/node_modules/',
  },

  entry: {
    index: paths.entry.index,
  },

  output: {
    filename: 'js/[name].js',
    path: paths.output,
  },

  module: {
    rules: [
      /* JS/JSX */
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: babelPlugins,
          },
        },
      },
      /* STYLES MODULE */
      {
        test: /\.module\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[sha1:hash:hex:7]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      /* STYLES NO MODULE */
      {
        test: /^((?!\.module).)*(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      /* IMAGES */
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      /* SVG */
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'svg/[name][ext]',
        },
      },
      /* FONTS */
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: paths.template,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
