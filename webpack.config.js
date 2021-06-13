module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build",
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /.js$/, use: "babel-loader" }],
  },
  resolve: {
    modules: ["node_modules", "src"],
  },
};
