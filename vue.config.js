const path = require("path");
const log = console.log;

log("config 실행");

module.exports = {
  publicPath: "/",
  outputDir: "dist/todo",
  resovle: {
    alias: {
      "@": path.resolve("src"),
      "@api": path.resolve("src/api"),
      "@view": path.resolve("src/views")
    }
  }
}