const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Copia las fotos
  eleventyConfig.addPassthroughCopy("src/photos");

  // Copia el CSS compilado
  eleventyConfig.addPassthroughCopy({
    "src/css/styles.css": "css/styles.css"
  });

  // Crea la colección `photo` leyendo src/photos
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

  return {
    dir: { input: "src", output: "docs" }
  };
};
