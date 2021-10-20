const chroma = require('chroma-js');
const { getColors } = require('./colors');

const hex = color => {
	return chroma(color).hex();
};

const getTheme = ({ theme, name }) => {
	const themes = options => options[theme]; // specific theme versions
	const color = getColors(theme); // all theme verions
	const scale = color.scale; // color flavour

	return {
		name: name,
		//~ UI Colors
		colors: {
			foreground: hex(color.fg.default),
			'icon.foreground': hex(color.fg.default),
			'sash.hoverBorder': hex(color.accent.emphasis),

			'progressBar.background': hex(color.accent.emphasis),

			'activityBar.background': hex(color.canvas.tertiary),
			'activityBar.foreground': hex(color.fg.default),

			'sideBar.background': hex(color.canvas.secondary),
			'sideBarSectionHeader.background': hex(color.canvas.tertiary),

			'editor.background': hex(color.canvas.primary),

			'editorGroupHeader.tabsBackground': hex(color.canvas.secondary),
			'editorGroupHeader.noTabsBackground': hex(color.canvas.secondary),

			'editorWidget.background': hex(color.canvas.secondary),
			'editorWidget.foreground': hex(color.fg.default),

			'panel.background': hex(color.canvas.secondary),
			'panelTitle.activeForeground': hex(color.fg.default),

			'statusBar.background': hex(color.canvas.tertiary),
			'statusBar.foreground': hex(color.fg.default),

			'tab.inactiveBackground': hex(color.canvas.secondary),

			'titleBar.activeBackground': hex(color.canvas.tertiary),
			'titleBar.inactiveBackground': hex(color.canvas.tertiary),
			'titleBar.activeForeground': hex(color.fg.default),
			'titleBar.inactiveForeground': hex(color.fg.default),
		},
		//~ Semantic Sytax Highlighting
		semanticHighlighting: true,
		semanticTokenColors: {},
		//~ Non-Semantic Syntax Highlighting
		tokenColors: [],
	};
};

module.exports = getTheme;
