const del = require('del');
const path = require("path");

const config = {
	passthroughFileCopy: true,
	dir: {
		input: "src",
		output: "_site"
	},
	templateFormats: ["njk", "html", "png", "json", "svg", "js"]
};

const dirToClean = path.join(config.dir.output, "*");
del.sync(dirToClean, { dot: true });

module.exports = function (eleventyConfig) {

	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addPassthroughCopy("./src/**/*.js")

	eleventyConfig.addPassthroughCopy({
		"./src/_includes/compiledStyles/main.css": "./main.css"
	});

	return config;
}