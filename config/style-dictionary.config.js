module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "dist/scss/",
      files: [{
        destination: "_tokens.scss",
        format: "scss/variables"
      }]
    },
    json: {
      transformGroup: "js",
      buildPath: "dist/json/",
      files: [{
        destination: "tokens.build.json",
        format: "json/flat"
      }]
    }
  }
};
