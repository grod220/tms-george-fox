const fileLoaderConfig = {
  loader: 'file-loader',
  options: {
    name: '[name]-[sha512:hash:hex:5].[ext]',
    publicPath: '/_next/static/files',
    outputPath: 'static/files',
  },
};

const pdfLoader = {
  test: /\.(pdf)$/,
  use: [fileLoaderConfig],
};

const imageOptimizerLoader = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    fileLoaderConfig,
    {
      loader: 'image-webpack-loader',
    },
  ],
};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(pdfLoader);
    config.module.rules.push(imageOptimizerLoader);
    return config;
  },
};
