import { promises } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const FILE_DICTIONARY = {
	token: 'token',
	cities: 'cities'
};

const saveKeyValue = async (key, value) => {
	let data = {};

	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath, 'utf-8');
		try {
			data = JSON.parse(file);
		} catch (error) {
			console.error('Ошибка при парсинге JSON:', error.message);
			data = {};
		}
	}

	data[key] = value;

	await promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

const getKeyValue = async key => {
	let data = {};
	if (isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
		return data[key];
	}
	return null;
};

const isExist = async path => {
	try {
		await promises.stat(path);
		return true;
	} catch (e) {
		return false;
	}
};

export { FILE_DICTIONARY, getKeyValue, saveKeyValue };
