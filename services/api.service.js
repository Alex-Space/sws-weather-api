import axios from 'axios';

import { FILE_DICTIONARY, getKeyValue } from './storage.service.js';

const getIcon = icon => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const getWeather = async () => {
	const token = await getKeyValue(FILE_DICTIONARY.token);
	const cities = await getKeyValue(FILE_DICTIONARY.cities);

	if (!token) {
		throw new Error('Токен не задан, установите его с помощью -t <token>');
	}

	if (!cities || !Array.isArray(cities) || cities.length === 0) {
		throw new Error('Список городов пуст или не задан. Добавьте города с помощью -s <city> [city2 city3 ...]');
	}

	const results = [];

	for (const city of cities) {
		try {
			const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
				params: { q: city, appid: token, lang: 'ru', units: 'metric' }
			});

			results.push({ city, data });
		} catch (error) {
			console.error(`Ошибка при получении данных для города ${city}:`, error.message);
			results.push({ city, error: error.message });
		}
	}

	return results;
};

export { getIcon, getWeather };
