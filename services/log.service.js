import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = msg => {
	console.log(chalk.bgRed(' Error: ') + ' ' + msg);
};

const printSuccess = msg => {
	console.log(chalk.bgGreen(' Success: ') + ' ' + msg);
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

const printWeather = (msg, icon) => {
	console.log(dedent`${chalk.bgCyan(' WEATHER ')}
	Погода в городе ${msg.name} 
	${icon} (${msg.weather[0].description})
	🌡️ Температура: ${msg.main.temp}°C
	🌬️ Ощущается как: ${msg.main.feels_like}°C
	💧 Влажность: ${msg.main.humidity}%
	💨 Ветер: ${msg.wind.speed} м/с, ${msg.wind.deg}°
	`);
};

export { printError, printHelp, printSuccess, printWeather };
