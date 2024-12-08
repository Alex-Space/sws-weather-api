#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async token => {
	if (!token.length) {
		printError('No token provided');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Token saved successfully');
	} catch (err) {
		printError(err.message);
	}
};

const getForecast = async () => {
	await getWeather('omsk');
	console.log(weather);
};
const initCLI = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		printHelp();
	}
	if (args.s) {
		saveKeyValue();
	}
	if (args.t) {
		return saveToken(args.t);
	}
};

initCLI();
