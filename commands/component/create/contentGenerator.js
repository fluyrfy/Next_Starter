exports.genComponentContent = (_componentName) => {
	const transferClassName = (oldName) =>
		oldName
			.split('')
			.map((letter, index) => {
				if (letter !== letter.toLowerCase()) {
					if (index !== 0) {
						return `-${letter.toLowerCase()}`;
					}

					return letter.toLowerCase();
				}
				return letter;
			})
			.join('');
	return `import styles from './index.module.scss';
  
  const ${_componentName} = () => {return <div className={styles['${transferClassName(
		_componentName
	)}']}>${_componentName}</div>;
  };
  
  export default ${_componentName};
  `;
};

exports.genStyleContent = (_componentName) => {
	const transferClassName = (oldName) =>
		oldName
			.split('')
			.map((letter, index) => {
				if (letter !== letter.toLowerCase()) {
					if (index !== 0) {
						return `-${letter.toLowerCase()}`;
					}

					return letter.toLowerCase();
				}
				return letter;
			})
			.join('');

	return `.${transferClassName(_componentName)} {}\n`;
};
