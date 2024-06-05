const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
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
        filename: 'static/chunks/remoteEntry.tsx',
        remotes: {},
        exposes: {
          './Featured': './pages/featured.tsx',
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

module.exports = nextConfig;
