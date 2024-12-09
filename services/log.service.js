import chalk from 'chalk';
import dedent from 'dedent-js';
import { drawBox } from '../helpers/drawBox.js';

const printError = (title = ' ', msg) => {
	console.log(chalk.bgRed(' Ошибка: ') + title + msg);
};

const printSuccess = msg => {
	console.log(chalk.bgGreen(' Успех: ') + ' ' + msg);
};

const printHelp = msg => {
	console.log(
		dedent`
		${chalk.bgCyan(' СПРАВКА ')}
		Использование: weather [options]
		Параметры:
		Без параметров - вывод погоды на установленные города
		-h                          Вывод справочной информации
		-s <city> [city2 city3 ...] Установить требуемые города
		-t <token>                  Сохранить токен
		`
	);
};

const printWeather = (city, icon) => {
	console.log(dedent`
		${drawBox(city.name)}
		${icon} (${city.weather[0].description})
		🌡️ Температура: ${city.main.temp}°C
		🌬️ Ощущается как: ${city.main.feels_like}°C
		💧 Влажность: ${city.main.humidity}%
		💨 Ветер: ${city.wind.speed} м/с, ${city.wind.deg}°
		`);
};

export { printError, printHelp, printSuccess, printWeather };
