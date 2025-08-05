const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // --- Pase de fotos y CSS --------------------------------
  eleventyConfig.addPassthroughCopy("src/photos");
  eleventyConfig.addPassthroughCopy({
    "src/css/styles.css": "css/styles.css"
  });

  // --- Colección de fotos ---------------------------------
  eleventyConfig.addCollection("photo", function() {
    const dir = "./src/photos";
    return fs
      .readdirSync(dir)
      .filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f))
      .map(f => ({
        url: `/photos/${f}`,
        data: { title: path.parse(f).name }
      }));
  });

  // === Aquí añadimos la variable global "year" ==========
  eleventyConfig.addGlobalData("year", new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};
