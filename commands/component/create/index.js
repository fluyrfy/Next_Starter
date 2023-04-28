const { prompt } = require('enquirer');
const { createComponentFiles } = require('./fileWriter');

const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'component name:',
		validate: (input) => {
			if (input) {
				return true;
			}

			return 'component name is required!';
		},
	},
	{
		type: 'select',
		name: 'scope',
		message: 'component scope:',
		choices: ['atom', 'molecule', 'organism', 'layout'],
		default: 'atom',
	},
];

const createComponent = async () => {
	const { name, scope } = await prompt(questions);
	await createComponentFiles({ name, scope });
};

createComponent();
