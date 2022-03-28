const chroma = require('chroma-js')
const { getColors } = require('./colors')

const hex = color => {
	return chroma(color).hex()
}

const getTheme = ({ theme, name }) => {
	const color = getColors(theme)

	return {
		name: name,
		colors: {},
		semanticHighlighting: true,
		semanticTokenColors: {},
		tokenColors: [],
	}
}

module.exports = getTheme
