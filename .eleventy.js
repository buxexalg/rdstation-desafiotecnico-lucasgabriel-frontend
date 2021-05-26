module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy({
		"./src/_includes/compiledStyles/main.css": "./main.css"
	});

	return {
		dir: {
			input: "src",
			output: "_site"
		},
		templateFormats: ["njk", "md", "html"]
	}
}