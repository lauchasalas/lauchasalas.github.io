// .eleventy.js
const { DateTime } = require("luxon");
const fs           = require("fs");
const path         = require("path");

module.exports = function(eleventyConfig) {
  // 1️⃣ Filtro "date"
  eleventyConfig.addFilter("date", (dateObj, format = "dd LLLL yyyy") => {
    let dt;
    if (typeof dateObj === "string" && dateObj.toLowerCase() === "now") {
      dt = DateTime.local();
    } else {
      dt = DateTime.fromJSDate(dateObj);
    }
    return dt.toFormat(format);
  });

  // 2️⃣ Copia fotos
  eleventyConfig.addPassthroughCopy({ "src/photos": "photos" });

  // 3️⃣ Colección de fotos
  eleventyConfig.addCollection("photo", () => {
    return fs
      .readdirSync("./src/photos")
      .filter(f => /\.(jpe?g|png|gif)$/i.test(f))
      .map(file => ({
        url: `/photos/${file}`,
        data: { title: path.parse(file).name }
      }));
  });

  return {
    dir: {
      input:    "src",
      includes: "_includes",
      data:     "_data",
      output:   "docs"
    },
    passthroughFileCopy:    true,
    htmlTemplateEngine:     "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine:     "njk"
  };
};
