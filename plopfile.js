export default function (plop) {

	plop.setGenerator('component', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Component name'
		}],
		actions: [{
			type: 'addMany',
			destination: 'src/components/{{kebabCase name}}',
			base: 'src/utils/plop-templates/component',
			templateFiles: 'src/utils/plop-templates/component/*.hbs'
		}]
	});

	plop.setGenerator('page', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Component name'
		}],
		actions: [{
			type: 'addMany',
			destination: 'src/pages/{{kebabCase name}}',
			base: 'src/utils/plop-templates/page',
			templateFiles: 'src/utils/plop-templates/page/*.hbs'
		}]
	});

};