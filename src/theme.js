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
			focusBorder: hex(color.Border_Alternate_Dark),
			foreground: hex(color.FG),
			descriptionForeground: hex(color.FG_Dark),
			// 'selection.background': hex(color.Shade_Darker),
			'icon.foreground': hex(color.FG),
			'sash.hoverBorder': hex(color.Border),
			'widget.shadow': hex(color.BG_Darker),

			'toolbar.hoverBackground': hex(color.Shade_Darker),
			'toolbar.activeBackground': hex(color.Shade_Darker),

			'button.background': hex(color.Border_Dark),
			'button.foreground': hex(color.BG_Dark),
			'button.hoverBackground': hex(color.Border),
			'button.secondaryBackground': hex(color.Border_Dark),
			'button.secondaryHoverBackground': hex(color.Border),
			'button.secondaryForeground': hex(color.FG),

			'badge.background': hex(color.Shade_Dark),
			'badge.foreground': hex(color.FG),

			'dropdown.background': hex(color.Shade_Dark),
			'dropdown.listBackground': hex(color.Shade_Dark),
			'dropdown.foreground': hex(color.FG),

			'input.background': hex(color.Shade_Dark),
			'input.foreground': hex(color.FG),
			'input.placeholderForeground': hex(color.FG_Dark),
			'inputOption.activeBackground': hex(color.Util),
			'inputOption.activeBorder': hex(color.Border_Alternate),
			'inputOption.activeForeground': hex(color.FG),
			'inputValidation.errorBackground': hex(color.BG_Dark),
			'inputValidation.errorForeground': hex(color.FG_Dark),
			'inputValidation.infoBackground': hex(color.BG_Dark),
			'inputValidation.infoForeground': hex(color.FG_Dark),
			'inputValidation.warningBackground': hex(color.BG_Dark),
			'inputValidation.warningForeground': hex(color.FG_Dark),

			// 'settings.dropdownBackground': hex(color.red),

			'activityBar.background': hex(color.BG_Darker),
			'activityBar.foreground': hex(color.FG),
			'activityBar.inactiveForeground': hex(color.Border_Alternate),
			'activityBarBadge.background': hex(color.Border),
			'activityBarBadge.foreground': hex(color.BG_Darker),

			'sideBar.background': hex(color.BG_Dark),
			'sideBar.foreground': hex(color.FG_Dark),
			'sideBar.border': hex(color.Border_Alternate_Dark),
			'sideBarSectionHeader.background': hex(color.BG_Darker),
			'sideBarTitle.foreground': hex(color.FG),

			'editorGroupHeader.tabsBackground': hex(color.BG_Dark),

			'tab.activeForeground': hex(color.FG),
			'tab.inactiveForeground': hex(color.FG_Darker),
			'tab.activeBorder': hex(color.Border),
			'tab.border': hex(color.Border_Alternate_Dark),
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

			'editorWidget.background': hex(color.Util_Darker),
			'editorWidget.foreground': hex(color.FG_Dark),
			'editorWidget.border': hex(color.Border_Alternate),

			'panel.background': hex(color.BG_Dark),
			'panel.border': hex(color.Border_Alternate_Dark),
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

			'breadcrumb.foreground': hex(color.FG_Darker),
			'breadcrumb.focusForeground': hex(color.FG_Dark),
			'breadcrumb.activeSelectionForeground': hex(color.FG_Dark),
			'breadcrumbPicker.background': hex(color.Util_Dark),
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
