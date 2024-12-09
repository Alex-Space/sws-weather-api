#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { FILE_DICTIONARY, saveKeyValue } from './services/storage.service.js';

const saveToken = async token => {
	if (!token.length) {
		printError('Токен не предоставлен');
		return;
	}
	try {
		await saveKeyValue(FILE_DICTIONARY.token, token);
		printSuccess('Токен сохранен');
	} catch (err) {
		printError(err.message);
	}
};

const saveCities = async cities => {
	if (!cities || cities.length === 0) {
		printError('Город(а) передан(ы) неверно');
		return;
	}

	try {
		await saveKeyValue(FILE_DICTIONARY.cities, cities);
		printSuccess('Город(а) сохранен(ы)');
	} catch (err) {
		printError(err.message);
	}
};

const getForecast = async () => {
	try {
		const weather = await getWeather();
		for (const city of weather) {
			printWeather(city.data, getIcon(city.data.weather[0].icon));
		}
	} catch (e) {
		if (e?.response?.status === 404) {
			printError('The city is set incorrectly');
		} else if (e?.response?.status === 401) {
			printError('Токен установлен неправильно');
		} else {
			printError(' Не удалось сделать вывод. ', e.message);
		}
	}
};

const initCLI = async () => {
	const { token, cities, help } = getArgs(process.argv);

	if (help) {
		return printHelp();
	}

	if (cities?.length > 0) {
		await saveCities(cities);
	}

	if (token) {
		await saveToken(token);
	}

	return getForecast();
};

initCLI();
