module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("public");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/css/");

  // Add current year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add UTM link filter
  eleventyConfig.addFilter("utm", function(url, medium) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}utm_source=backtobasicscatlitter&utm_medium=${medium}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
