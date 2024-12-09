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
		Использование: weather [options]
		Параметры:
		Без параметров - вывод погоды на установленный город(пример weather -s moscow)
		-h           Вывод информации
		-s <CITY>    Поиск погоды по городу
		-t <API_KEY> Сохранить токен
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
