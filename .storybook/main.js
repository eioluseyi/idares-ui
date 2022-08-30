module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-links",
		"@storybook/addon-controls",
		"@storybook/addon-storysource",
		"@storybook/addon-measure",
		"@storybook/addon-backgrounds",
		"@storybook/addon-viewport",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app"
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5"
	}
};
