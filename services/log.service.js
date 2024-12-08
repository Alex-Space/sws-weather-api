import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = msg => {
	console.log(chalk.bgRed(' Error: ') + ' ' + msg);
};

const printSuccess = msg => {
	console.log(chalk.bgGreen(' Error: ') + ' ' + msg);
};

const printHelp = msg => {
	console.log(
		dedent`
		${chalk.bgCyan(' HELP ')}
		Usage: weather [options]
		Options:
		Without parameters - weather output
		-h           Output usage information
		-s <CITY>    Search for weather information for a specific city
		-t <API_KEY> Save token
		`
	);
};
export { printError, printHelp, printSuccess };
