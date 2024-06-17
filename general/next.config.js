const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const withLess = require('next-with-less');

const CATALOG_SEARCH_APP_URL =
  process.env.NEXT_PUBLIC_CATALOG_SEARCH_APP_URL || 'http://localhost:3002';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    catalogSearch: `catalogSearch@${CATALOG_SEARCH_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

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
        name: 'general',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {},
        shared: {
          '@antd/': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
        },
      }),
    );

    return config;
  },
};

module.exports = withLess(nextConfig);
