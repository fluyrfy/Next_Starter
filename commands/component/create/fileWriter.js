const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { genComponentContent, genStyleContent } = require('./contentGenerator');

exports.createComponentFiles = async ({ name, scope }) => {
	const componentName = name.charAt(0).toUpperCase() + name.slice(1);
	const scopeDestination = path.join(__dirname, '..', '..', '..', 'components', `${scope}s`);
	const componentFolder = path.join(scopeDestination, componentName);

	// check component exist
	try {
		const fileExist = await fs.existsSync(componentFolder);

		if (fileExist) {
			throw new Error('COMPONENT_EXIST');
		}
	} catch (err) {
		if (err.message === 'COMPONENT_EXIST') {
			console.error(colors.red(`COMPONENT_EXIST: ${scope}s/${componentName}`));
		} else {
			console.log(err);
		}
		return;
	}

	// create component
	fs.mkdir(componentFolder, () => {
		const componentContent = genComponentContent(componentName);

		// create index.js
		const indexFile = path.join(componentFolder, 'index.js');
		const indexWriteStream = fs.createWriteStream(indexFile);

		indexWriteStream.write(componentContent);

		indexWriteStream.end();

		indexWriteStream.on('finish', () => {
			console.log('index.js 建立完成');
		});

		// create index.css
		const styleContent = genStyleContent(componentName);
		const styleFile = path.join(componentFolder, 'index.module.scss');
		const styleWriteStream = fs.createWriteStream(styleFile);
		styleWriteStream.write(styleContent);
		styleWriteStream.end();

		styleWriteStream.on('finish', () => {
			console.log('index.module.scss 建立完成');
		});
	});
};
