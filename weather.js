#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async token => {
	if (!token.length) {
		printError('No token provided');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Токен сохранен');
	} catch (err) {
		printError(err.message);
	}
};

const saveCity = async city => {
	if (!city.length) {
		printError('No token provided');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('Город добавлен');
	} catch (err) {
		printError(err.message);
	}
};

const getForecast = async () => {
	try {
		const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
	} catch (e) {
		if (e?.response?.status === 404) {
			printError('The city is set incorrectly');
		} else if (e?.response?.status === 401) {
			printError('Токен установлен неправильно');
		} else {
			printError(e.message);
		}
	}
};
const initCLI = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		return saveCity(args.s);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	return getForecast();
};

initCLI();
