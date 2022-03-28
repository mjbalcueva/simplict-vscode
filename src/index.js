const fs = require('fs').promises
const getTheme = require('./theme')

const darkTheme = getTheme({
	theme: 'vs-dark',
	name: 'SimpliCT Dark',
})

/**
 *	const hcTheme = getTheme({
 *		theme: 'hc-black',
 *		name: 'SimpliCT High Contrast',
 *	});
 *
 *	const lightTheme = getTheme({
 *		theme: 'vs',
 *		name: 'SimpliCT Light',
 *	});
 */

fs.mkdir('./themes', { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile('./themes/simplict_dark.json', JSON.stringify(darkTheme, null, 2)),
			/**
			 *	fs.writeFile('./themes/simplict_hc.json', JSON.stringify(hcTheme, null, 2)),
			 *	fs.writeFile('./themes/simplict_light.json', JSON.stringify(lightTheme, null, 2)),
			 */
		]),
	)
	.catch(() => process.exit(1))
