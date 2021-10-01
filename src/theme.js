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
		colors: {},
		//~ Semantic Sytax Highlighting
		semanticHighlighting: true,
		semanticTokenColors: {},
		//~ Non-Semantic Syntax Highlighting
		tokenColors: [],
	};
};

module.exports = getTheme;
