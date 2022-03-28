const darkColors = require('./themeColors/dark.json')

/**
 *	const dimmedColors = require('./themeColors/dimmed.json')
 *	const lightColors = require('./themeColors/light.json')
 *
 *	function getColors(theme) {
 *		if (theme === 'dark') {
 *			return darkColors
 *		} else if (theme === 'dimmed') {
 *			return dimmedColors
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
