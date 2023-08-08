const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    configure: {
      resolve: {
        fallback: {
          querystring: require.resolve("querystring-es3"),
        },
      },
    },
  },
};
