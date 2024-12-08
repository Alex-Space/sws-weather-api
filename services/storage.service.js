import { promises } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
	token: 'token',
	city: 'city'
};

const saveKeyValue = async (key, value) => {
	let data = {};
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
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
export { getKeyValue, saveKeyValue, TOKEN_DICTIONARY };
