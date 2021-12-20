const chroma = require('chroma-js');
const { getColors } = require('./colors');

const hex = color => {
	return chroma(color).hex();
};

const getTheme = ({ theme, name }) => {
	const color = getColors(theme);

	return {
		name: name,
		//~ UI Colors
		colors: {
			focusBorder: hex(color.fg.accent),
			foreground: hex(color.fg.default),
			'icon.foreground': hex(color.fg.text),
			'sash.hoverBorder': hex(color.accent.emphasis),

			'toolbar.hoverBackground': hex(color.fg.accent),

			'button.background': hex(color.accent.emphasis),
			'button.foreground': hex(color.canvas.secondary),
			'button.hoverBackground': hex(color.accent.emphasis),

			'dropdown.background': hex(color.canvas.secondary),
			'dropdown.listBackground': hex(color.canvas.accentSecondary),
			'dropdown.foreground': hex(color.fg.default),

			'input.background': hex(color.canvas.special),
			'input.border': hex(color.canvas.secondary),
			'input.foreground': hex(color.fg.text),
			'input.placeholderForeground': hex(color.fg.default),
			'inputValidation.errorBackground': hex(color.canvas.secondary),
			'inputValidation.errorForeground': hex(color.fg.text),
			'inputValidation.infoBackground': hex(color.canvas.secondary),
			'inputValidation.infoForeground': hex(color.fg.text),
			'inputValidation.warningBackground': hex(color.canvas.secondary),
			'inputValidation.warningForeground': hex(color.fg.text),

			'badge.foreground': hex(color.fg.text),
			'badge.background': hex(color.fg.accent),

			'progressBar.background': hex(color.accent.emphasis),

			'list.activeSelectionBackground': hex(color.fg.accent),
			'list.activeSelectionForeground': hex(color.fg.text),
			'list.dropBackground': hex(color.ghost.primary),
			'list.hoverBackground': hex(color.ghost.primary),
			'list.inactiveSelectionBackground': hex(color.ghost.secondary),
			'list.inactiveSelectionForeground': hex(color.fg.text),

			'activityBar.background': hex(color.canvas.tertiary),
			'activityBar.foreground': hex(color.fg.default),
			'activityBarBadge.background': hex(color.accent.emphasis),
			'activityBarBadge.foreground': hex(color.canvas.tertiary),

			'sideBar.background': hex(color.canvas.secondary),
			'sideBar.border': hex(color.fg.accent),
			'sideBarSectionHeader.background': hex(color.canvas.tertiary),

			'editorGroup.border': hex(color.canvas.tertiary),
			'editorGroupHeader.tabsBackground': hex(color.canvas.secondary),
			'editorGroupHeader.noTabsBackground': hex(color.canvas.secondary),
			'editorPane.background': hex(color.canvas.accentTertiary),

			'tab.activeBorder': hex(color.accent.emphasis),
			'tab.activeForeground': hex(color.fg.default),
			'tab.inactiveBackground': hex(color.canvas.secondary),
			'tab.inactiveForeground': hex(color.fg.defaultMuted),
			'tab.unfocusedActiveBorder': hex(color.none),
			'tab.unfocusedActiveBackground': hex(color.canvas.secondary),
			'tab.unfocusedActiveForeground': hex(color.fg.defaultMuted),
			'tab.unfocusedInactiveForeground': hex(color.fg.defaultMuted),

			'editor.background': hex(color.canvas.primary),
			'editor.foreground': hex(color.fg.text),
			'editorLineNumber.foreground': hex(color.fg.defaultMuted),
			'editorLineNumber.activeForeground': hex(color.fg.default),
			'editorCursor.background': hex(color.canvas.primary),
			'editorCursor.foreground': hex(color.accent.emphasis),
			'editor.selectionBackground': hex(color.fg.accent),
			'editor.inactiveSelectionBackground': hex(color.ghost.accentSecondary),
			'editor.wordHighlightBackground': hex(color.ghost.accentSecondary),
			'editor.wordHighlightBorder': hex(color.fg.defaultMuted),
			'editor.wordHighlightStrongBackground': hex(color.attention.emphasisMuted),
			'editor.wordHighlightStrongBorder': hex(color.fg.defaultMuted),
			'editor.findMatchBackground': hex(color.attention.emphasis),
			'editor.findMatchHighlightBackground': hex(color.attention.emphasisMuted),
			'editor.findMatchHighlightBorder': hex(color.attention.emphasis),
			'editor.hoverHighlightBackground': hex(color.ghost.accentSecondary),
			'editor.lineHighlightBorder': hex(color.ghost.accentSecondary),
			'editor.rangeHighlightBackground': hex(color.ghost.accentSecondary),
			'editorGhostText.foreground': hex(color.fg.defaultMuted),

			'editorWidget.background': hex(color.canvas.accentSpecial),
			'editorWidget.foreground': hex(color.fg.default),
			'editorWidget.border': hex(color.fg.defaultMuted),

			'peekView.border': hex(color.none),
			'peekViewEditor.background': hex(color.canvas.accentPrimary),
			'peekViewEditor.matchHighlightBackground': hex(color.attention.emphasis),
			'peekViewResult.matchHighlightBackground': hex(color.attention.emphasis),
			'peekViewResult.selectionBackground': hex(color.fg.accent),
			'peekViewResult.selectionForeground': hex(color.fg.text),
			'peekViewResult.background': hex(color.canvas.accentSecondary),
			'peekViewTitle.background': hex(color.canvas.accentTertiary),
			'peekViewTitleLabel.foreground': hex(color.fg.text),

			'panel.background': hex(color.canvas.secondary),
			'panel.border': hex(color.canvas.border),
			'panelTitle.activeForeground': hex(color.fg.default),

			'statusBar.background': hex(color.canvas.tertiary),
			'statusBar.foreground': hex(color.fg.default),
			'statusBar.debuggingBackground': hex(color.canvas.tertiary),
			'statusBar.noFolderBackground': hex(color.canvas.tertiary),
			'statusBarItem.activeBackground': hex(color.ghost.accentSecondary),
			'statusBarItem.hoverBackground': hex(color.ghost.accentPrimary),
			'statusBarItem.prominentBackground': hex(color.canvas.special),
			'statusBarItem.prominentForeground': hex(color.fg.text),
			'statusBarItem.remoteBackground': hex(color.accent.emphasis),
			'statusBarItem.remoteForeground': hex(color.canvas.tertiary),

			'titleBar.activeBackground': hex(color.canvas.tertiary),
			'titleBar.inactiveBackground': hex(color.canvas.tertiary),
			'titleBar.activeForeground': hex(color.fg.default),
			'titleBar.inactiveForeground': hex(color.fg.default),

			'menu.background': hex(color.canvas.special),
			'menu.foreground': hex(color.fg.text),

			'quickInputTitle.background': hex(color.canvas.tertiary),
			'quickInputList.focusBackground': hex(color.ghost.accentSecondary),
			'quickInputList.focusForeground': hex(color.fg.text),

			'keybindingLabel.background': hex(color.ghost.accentSecondary),
			'keybindingLabel.foreground': hex(color.fg.text),
			'keybindingLabel.border': hex(color.fg.accent),
			'terminal.foreground': hex(color.fg.text),

			'debugToolBar.background': hex(color.canvas.special),
			'editor.inlineValuesBackground': hex(color.none),
			'editor.inlineValuesForeground': hex(color.fg.special),
			'debugTokenExpression.name': hex(color.text.blue),
			'debugTokenExpression.value': hex(color.text.white),
			'debugTokenExpression.string': hex(color.text.blue),
			'debugTokenExpression.boolean': hex(color.text.orange),
			'debugTokenExpression.number': hex(color.text.yellow),
			'debugTokenExpression.error': hex(color.text.red),

			'settings.headerForeground': hex(color.fg.text),
			'settings.modifiedItemIndicator': hex(color.accent.emphasis),
			'settings.textInputBackground': hex(color.canvas.secondary),
			'settings.numberInputBackground': hex(color.canvas.secondary),
			'settings.focusedRowBackground': hex(color.canvas.special),
		},
		//~ Semantic Sytax Highlighting
		semanticHighlighting: true,
		semanticTokenColors: {},
		//~ Non-Semantic Syntax Highlighting
		tokenColors: [],
	};
};

module.exports = getTheme;
