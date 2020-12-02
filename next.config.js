const fileLoaderConfig = {
  loader: 'file-loader',
  options: {
    name: '[name]-[sha512:hash:hex:5].[ext]',
    publicPath: '/_next/static/files',
    outputPath: 'static/files',
  },
};

const fileLoader = {
  test: /\.(pdf|gif|png|jpe?g|svg)$/,
  use: [fileLoaderConfig],
};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(fileLoader);
    return config;
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};
