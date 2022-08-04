const chroma = require('chroma-js')
const { getColors } = require('./colors')

const hex = color => {
	return chroma(color).hex()
}

const getTheme = ({ theme, name }) => {
	const color = getColors(theme)

	return {
		name: name,
		colors: {
			focusBorder: hex(color.Border_Alternate),
			foreground: hex(color.FG),
			descriptionForeground: hex(color.FG_Dark),
			// 'selection.background': hex(color.Shade_Darker),
			'icon.foreground': hex(color.FG),
			'sash.hoverBorder': hex(color.Border),

			'toolbar.hoverBackground': hex(color.Shade_Darker),
			'toolbar.activeBackground': hex(color.Shade_Darker),

			'badge.background': hex(color.Shade_Dark),
			'badge.foreground': hex(color.FG),

			'activityBar.background': hex(color.BG_Darker),
			'activityBar.foreground': hex(color.FG),
			'activityBar.inactiveForeground': hex(color.FG_Darker),
			'activityBarBadge.background': hex(color.Border),
			'activityBarBadge.foreground': hex(color.BG_Darker),

			'sideBar.background': hex(color.BG_Dark),
			'sideBarSectionHeader.background': hex(color.BG_Darker),

			'editorGroupHeader.tabsBackground': hex(color.BG_Dark),

			'tab.activeForeground': hex(color.FG),
			'tab.inactiveForeground': hex(color.FG_Darker),
			'tab.activeBorder': hex(color.Border),
			'tab.border': hex(color.Border_Alternate),
			'tab.inactiveBackground': hex(color.BG_Dark),
			'tab.unfocusedActiveBorder': hex(color.none),
			'tab.unfocusedActiveBackground': hex(color.BG_Dark),
			'tab.unfocusedActiveForeground': hex(color.FG_Darker),
			'tab.unfocusedInactiveForeground': hex(color.FG_Darker),

			'editor.background': hex(color.BG),
			'editorGroup.border': hex(color.BG_Dark),
			'editorLineNumber.foreground': hex(color.FG_Darker),
			'editorLineNumber.activeForeground': hex(color.FG),
			'editorCursor.background': hex(color.BG),
			'editorCursor.foreground': hex(color.Border),

			'panelTitle.activeBorder': hex(color.FG),
			'panelTitle.activeForeground': hex(color.FG),
			'panelTitle.inactiveForeground': hex(color.FG_Darker),

			'statusBar.background': hex(color.BG_Darker),
			'statusBar.foreground': hex(color.FG),
			'statusBar.debuggingBackground': hex(color.BG_Darker),
			'statusBar.noFolderBackground': hex(color.BG_Darker),
			'statusBarItem.remoteBackground': hex(color.Border),
			'statusBarItem.remoteForeground': hex(color.BG_Darker),

			'titleBar.activeBackground': hex(color.BG_Darker),
			'titleBar.inactiveBackground': hex(color.BG_Darker),
			'titleBar.activeForeground': hex(color.FG),
			'titleBar.inactiveForeground': hex(color.FG),
		},
		semanticHighlighting: true,
		semanticTokenColors: {},
		tokenColors: [
			// comments
			// constants
			// identifiers
			// keywords
			// literals
			// operators
			// special symbols
		],
	}
}

module.exports = getTheme
