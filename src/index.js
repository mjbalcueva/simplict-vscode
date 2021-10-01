const fs = require('fs').promises;
const getTheme = require('./theme');

const darkDefaultTheme = getTheme({
	theme: 'dark',
	name: 'SimpliCT Dark Default',
});

const darkDimmedTheme = getTheme({
	theme: 'dimmed',
	name: 'SimpliCT Dark Dimmed',
});

const lightDefaultTheme = getTheme({
	theme: 'dimmed',
	name: 'SimpliCT Light Default',
});

fs
	.mkdir('./themes', { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(
				'./themes/dark-default.json',
				JSON.stringify(darkDefaultTheme, null, 2),
			),
			fs.writeFile(
				'./themes/dark-dimmed.json',
				JSON.stringify(darkDimmedTheme, null, 2),
			),
			fs.writeFile(
				'./themes/light-default.json',
				JSON.stringify(lightDefaultTheme, null, 2),
			),
		]),
	)
	.catch(() => process.exit(1));
