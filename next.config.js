/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config, options) {
    // Add the custom rule for handling .pdf files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: '[name].[ext]',
          },
        },
      ],
    });

    // Add a fallback for the 'canvas' module if it's not server-side
    if (!options.isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // Preserve existing fallbacks (if any)
        canvas: false, // Provide an empty module for 'canvas' on the client-side
      };
    }

    return config;
  },
};

module.exports = nextConfig;
