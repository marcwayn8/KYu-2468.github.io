const nextConfig = {
  webpack(config, { isServer }) {
    // Override the Webpack config only for client-side builds
    if (!isServer) {
      // Provide fallbacks for 'fs' and 'canvas' modules to prevent errors in client-side bundle
      config.resolve.fallback = {
        fs: false,
        canvas: false, // Exclude 'canvas' from the client-side bundle
      };
    }

    // Rule for handling .pdf files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files', // Define where to serve the files from
            outputPath: 'static/files', // Define the output path for the files
            name: '[name].[ext]', // Keep the original file name and extension
          },
        },
      ],
    });

    return config; // Return the modified configuration
  },
};

module.exports = nextConfig;
