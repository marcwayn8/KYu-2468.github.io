/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config, options) {
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

    return config;
  },
};

module.exports = nextConfig;
