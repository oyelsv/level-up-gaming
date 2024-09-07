/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  /*
  * This solution is a workaround for the following issue:
  * https://github.com/mswjs/examples/pull/101
  * Here's the original code that was added to the example repository:
  * https://github.com/mswjs/examples/tree/eb017b0976cbab722e5af5e8077261581fe328af/examples/with-next
  * It needs to be removed once the issue is resolved.
  * */
  experimental: {
    instrumentationHook: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    /**
     * @fixme This is completely redundant. webpack should understand
     * export conditions and don't try to import "msw/browser" code
     * that's clearly marked as client-side only in the app.
     */
    if (isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/browser', alias: false })
      } else {
        config.resolve.alias['msw/browser'] = false
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/node', alias: false })
      } else {
        config.resolve.alias['msw/node'] = false
      }
    }

    return config;
  },
};

export default nextConfig;
