const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/photos");
  eleventyConfig.addPassthroughCopy({ "src/css/styles.css": "css/styles.css" });

  eleventyConfig.addCollection("photo", () => {
    return fs
      .readdirSync("./src/photos")
      .filter((f) => /\.(jpe?g|png|gif|webp)$/i.test(f))
      .map((f) => ({
        url: `/photos/${f}`,
        data: { title: path.parse(f).name }
      }));
  });

  return { dir: { input: "src", output: "docs" } };
};
