const fileLoaderConfig = {
  loader: 'file-loader',
  options: {
    name: '[name]-[sha512:hash:hex:5].[ext]',
    publicPath: '/_next/static/files',
    outputPath: 'static/files',
  },
};

const fileLoader = {
  test: /\.(pdf|mp3|svg|mp4)$/,
  use: [fileLoaderConfig],
};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(fileLoader);
    return config;
  },
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/family-dinner-delivery',
        destination: '/dinner-delivery-program',
        permanent: true,
      },
      {
        source: '/order/family-dinner-delivery',
        destination: '/order/dinner-delivery-program',
        permanent: true,
      },
    ];
  },
};
