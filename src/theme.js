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
			'icon.foreground': hex(color.fg.default),
			'sash.hoverBorder': hex(color.accent.emphasis),

			'textCodeBlock.background': hex(color.ghost.accentPrimary),

			'toolbar.hoverBackground': hex(color.ghost.accentSecondary),

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

			'badge.foreground': hex(color.fg.default),
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
			'editorGroup.dropBackground': hex(color.ghost.accentPrimary),
			'editorGroupHeader.tabsBackground': hex(color.canvas.secondary),
			'editorGroupHeader.noTabsBackground': hex(color.canvas.secondary),
			'editorPane.background': hex(color.canvas.accentTertiary),

			'tab.activeBorder': hex(color.accent.emphasis),
			'tab.activeForeground': hex(color.fg.default),
			'tab.border': hex(color.canvas.special),
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
			'editorCodeLens.foreground': hex(color.fg.default),

			'editorUnnecessaryCode.opacity': '#000000a6',

			'editorWidget.background': hex(color.canvas.accentSpecial),
			'editorWidget.foreground': hex(color.fg.default),
			'editorWidget.border': hex(color.fg.defaultMuted),
			'editorHoverWidget.statusBarBackground': hex(color.canvas.accentSpecial),
			'editorGhostText.foreground': hex(color.fg.defaultMuted),

			'peekView.border': hex(color.none),
			'peekViewEditor.background': hex(color.canvas.accentPrimary),
			'peekViewEditor.matchHighlightBackground': hex(color.attention.emphasis),
			'peekViewResult.matchHighlightBackground': hex(color.attention.emphasis),
			'peekViewResult.selectionBackground': hex(color.ghost.secondary),
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
			'menubar.selectionBackground': hex(color.ghost.accentPrimary),

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

			'walkThrough.embeddedEditorBackground': hex(color.red),

			'settings.headerForeground': hex(color.fg.text),
			'settings.modifiedItemIndicator': hex(color.accent.emphasis),
			'settings.textInputBackground': hex(color.canvas.secondary),
			'settings.numberInputBackground': hex(color.canvas.secondary),
			'settings.focusedRowBackground': hex(color.canvas.special),

			'editor.snippetTabstopHighlightBackground': hex(color.ghost.accentPrimary),
		},
		//~ Semantic Sytax Highlighting
		semanticHighlighting: true,
		semanticTokenColors: {
			'class.declaration': {
				foreground: hex(color.text.yellow),
				underline: true,
			},
			'class.constructor': hex(color.text.yellow),
			'class.generic': hex(color.text.yellow),
			'class.builtin': hex(color.text.red),
			'property.private': hex(color.text.red),
			'property.declaration:java': hex(color.fg.text),
			type: hex(color.text.orange),
			'*.documentation': hex(color.text.white),
			'*.documentation.constructor': hex(color.text.white),
		},
		//~ Non-Semantic Syntax Highlighting
		tokenColors: [
			// -- -- General Programming Language Syntax Highlights -- -- //
			{
				// comments
				scope: ['comment', 'punctuation.definition.comment'],
				settings: {
					foreground: hex(color.text.black),
					fontStyle: 'italic',
				},
			},
			{
				// strings
				scope: ['string', 'punctuation.definition.string'],
				settings: { foreground: hex(color.text.green) },
			},
			{
				// numbers
				scope: 'constant.numeric',
				settings: { foreground: hex(color.text.yellow) },
			},
			{
				// booleans
				scope: ['constant.language.boolean', 'constant.language'],
				settings: { foreground: hex(color.text.red) },
			},
			{
				// class
				scope: ['storage.type', 'entity.name.type.class', 'variable.other.object'],
				settings: { foreground: hex(color.text.orange) },
			},
			{
				// control
				scope: [
					'keyword.control',
					'keyword.other.new',
					'keyword.other.using',
					'keyword.other.namespace',
				],
				settings: { foreground: hex(color.text.purple) },
			},
			{
				// format
				scope: [
					'constant.character.format.placeholder',
					'punctuation.definition.template-expression',
				],
				settings: { foreground: hex(color.text.pink) },
			},
			{
				// function
				scope: [
					'entity.name.function',
					'support.function',
					'meta.function-call.generic',
					'meta.object-literal.key',
					'meta.object-literal.key string',
					'meta.object-literal.key punctuation.definition.string',
					'support.type.property-name',
					'support.type.vendored.property-name',
					'support.variable.property',
				],
				settings: { foreground: hex(color.text.blue) },
			},
			{
				// modifier
				scope: ['storage.modifier', 'keyword.other.special-method'],
				settings: { foreground: hex(color.text.purple) },
			},
			{
				// variable declaration
				scope: ['keyword.type', 'storage.type.primitive', 'storage.type.built-in'],
				settings: { foreground: hex(color.text.red) },
			},
			// -- -- Markdown -- -- //
			{
				// heading
				scope: 'markup.heading',
				settings: { foreground: hex(color.text.red) },
			},
			{
				// italics
				scope: 'markup.italic',
				settings: {
					foreground: hex(color.text.purple),
					fontStyle: 'italic',
				},
			},
			{
				// bolds
				scope: 'markup.bold',
				settings: {
					foreground: hex(color.text.orange),
					fontStyle: 'bold',
				},
			},
			{
				// hr
				scope: 'meta.separator.markdown',
				settings: {
					foreground: hex(color.text.yellow),
					fontStyle: 'italic',
				},
			},
			{
				// blockquote
				scope: 'markup.quote',
				settings: { fontStyle: 'italic' },
			},
			{
				// link
				scope: 'markup.underline.link',
				settings: { foreground: hex(color.text.yellow) },
			},
			{
				// inline code block
				scope: 'markup.inline',
				settings: { foreground: hex(color.text.blue) },
			},
			{
				// code language
				scope: 'fenced_code.block.language',
				settings: { foreground: hex(color.text.red) },
			},
			// -- -- Web Dev -- -- //
			{
				// content
				scope: 'meta.jsx',
				settings: { foreground: hex(color.fg.text) },
			},
			{
				// tags
				scope: ['entity.name.tag'],
				settings: { foreground: hex(color.text.red) },
			},
			{
				// tags alternate
				scope: [
					'punctuation.section.embedded.begin.php',
					'punctuation.section.embedded.end.php',
				],
				settings: {
					foreground: hex(color.text.cyan),
					fontStyle: 'italic',
				},
			},
			{
				// attributes
				scope: 'entity.other.attribute-name',
				settings: { foreground: hex(color.text.orange) },
			},
			{
				// punctuations
				scope: [
					'punctuation.definition.tag',
					'punctuation.separator.key-value',
					'keyword.operator.assignment.js',
					'meta.tag.xml',
				],
				settings: { foreground: hex(color.text.white) },
			},
			{
				// other
				scope: ['storage.type.function.pug'],
				settings: { foreground: hex(color.text.purple) },
			},
			// -- -- EXCEPTIONS -- -- //
			{
				scope: ['storage.type.asm', 'storage.modifier.import'],
				settings: { foreground: hex(color.text.blue) },
			},
			{
				scope: [
					'entity.name.scope-resolution',
					'punctuation.definition.annotation',
					'variable.language.this',
				],
				settings: { foreground: hex(color.text.orange) },
			},
			{
				scope: [
					'keyword.other.class',
					'keyword.other.import',
					'keyword.other.package',
					'storage.type.class',
					'storage.type.modifier.access.control',
					'punctuation.definition.directive',
					'support.type.object.module',
				],
				settings: { foreground: hex(color.text.purple) },
			},
			{
				scope: [
					'meta.method.body variable.other.object',
					'meta.catch.body variable.other.object',
				],
				settings: { foreground: hex(color.text.red) },
			},
			{
				scope: [
					'meta.method.return-type storage.type.primitive',
					'meta.template.expression',
					// 'punctuation',
					'variable.other.object.property',
				],
				settings: { foreground: hex(color.fg.text) },
			},
			{
				scope: ['storage.modifier.package'],
				settings: { foreground: hex(color.text.yellow) },
			},
			{
				scope: ['constant.character.escape'],
				settings: { foreground: hex(color.text.cyan) },
			},
		],
	};
};

module.exports = getTheme;
