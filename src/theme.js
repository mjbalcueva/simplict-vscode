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
			focusBorder: hex(color.attention.emphasis),
			foreground: hex(color.fg.default),
			'icon.foreground': hex(color.fg.default),
			'sash.hoverBorder': hex(color.accent.emphasis),

			'progressBar.background': hex(color.accent.emphasis),

			'activityBar.background': hex(color.canvas.tertiary),
			'activityBar.foreground': hex(color.fg.default),

			'sideBar.background': hex(color.canvas.secondary),
			// 'sideBar.border': hex(color.canvas.border),
			'sideBarSectionHeader.background': hex(color.canvas.tertiary),

			'editor.background': hex(color.canvas.primary),
			'editor.foreground': hex(color.fg.default),
			'editorCursor.background': hex(color.canvas.primary),
			'editorCursor.foreground': hex(color.accent.emphasis),

			'editorGroup.border': hex(color.canvas.tertiary),
			'editorGroupHeader.tabsBackground': hex(color.canvas.secondary),
			'editorGroupHeader.noTabsBackground': hex(color.canvas.secondary),

			'tab.activeBorder': hex(color.accent.emphasis),
			'tab.activeForeground': hex(color.fg.default),
			'tab.inactiveBackground': hex(color.canvas.secondary),
			'tab.inactiveForeground': hex(color.fg.defaultMuted),
			'tab.unfocusedActiveBorder': hex(color.accent.none),
			'tab.unfocusedActiveBackground': hex(color.canvas.secondary),
			'tab.unfocusedActiveForeground': hex(color.fg.defaultMuted),
			'tab.unfocusedInactiveForeground': hex(color.fg.defaultMuted),

			'editorWidget.background': hex(color.canvas.accentSpecial),
			'editorWidget.foreground': hex(color.fg.default),

			'peekView.border': hex(color.canvas.none),
			'peekViewEditor.background': hex(color.canvas.accentPrimary),
			'peekViewResult.background': hex(color.canvas.accentSecondary),
			'peekViewTitle.background': hex(color.canvas.accentTertiary),

			'panel.background': hex(color.canvas.primary),
			'panel.border': hex(color.canvas.border),
			'panelTitle.activeForeground': hex(color.fg.default),

			'statusBar.background': hex(color.canvas.tertiary),
			'statusBar.foreground': hex(color.fg.default),
			'statusBarItem.remoteBackground': hex(color.accent.emphasis),
			'statusBarItem.remoteForeground': hex(color.canvas.tertiary),

			'titleBar.activeBackground': hex(color.canvas.tertiary),
			'titleBar.inactiveBackground': hex(color.canvas.tertiary),
			'titleBar.activeForeground': hex(color.fg.defaultMuted),
			'titleBar.inactiveForeground': hex(color.fg.defaultMuted),

			'menu.background': hex(color.canvas.accentSpecial),
			'menu.foreground': hex(color.fg.default),
		},
		//~ Semantic Sytax Highlighting
		semanticHighlighting: true,
		semanticTokenColors: {},
		//~ Non-Semantic Syntax Highlighting
		tokenColors: [],
	};
};

module.exports = getTheme;
