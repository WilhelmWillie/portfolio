const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    return config;
  }
});
