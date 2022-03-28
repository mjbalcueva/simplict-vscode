const darkColors = require('./themeColors/dark.json')

/**
 *	const hcColors = require('./themeColors/hc.json')
 *	const lightColors = require('./themeColors/light.json')
 *
 *	function getColors(theme) {
 *		if (theme === 'dark') {
 *			return darkColors
 *		} else if (theme === 'hc') {
 *			return hcColors
 *		} else if (theme === 'light') {
 *			return lightColors
 *		}
 *	}
 */

function getColors(theme) {
	return darkColors
}

module.exports = {
	getColors,
}
