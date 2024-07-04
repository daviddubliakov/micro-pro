const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'catalogSearch',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './Categories': './pages/categories.tsx',
          './Search': './pages/search.tsx',
        },
        shared: {
          '@antd/': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
        },
        extraOptions: {
          exposePages: true,
        },
      }),
    );

    return config;
  },
};

module.exports = withLess(nextConfig);
