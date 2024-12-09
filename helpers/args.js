import { Command } from 'commander';

const getArgs = () => {
	const program = new Command();

	program
		.option('-t, --token <token>', 'токен для API')
		.option('-h, --help', 'справочная информация')
		.option('-s, --cities <cities...>', 'список городов');

	program.parse(process.argv);

	const options = program.opts();
	const token = options.token;
	const cities = options.cities;
	const help = options.help;

	return {
		token,
		cities,
		help
	};
};

export { getArgs };

