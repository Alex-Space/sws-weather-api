import dedent from 'dedent-js';
const drawBox = cityName => {
	const text = `Погода в городе ${cityName}`;
	const boxWidth = text.length + 2; // Добавляем отступы по бокам
	const topBorder = `┌${'─'.repeat(boxWidth)}┐`;
	const bottomBorder = `└${'─'.repeat(boxWidth)}┘`;
	const middleLine = `│ ${text} │`;

	const box = dedent`${topBorder}
	${middleLine}
	${bottomBorder}`;

	return box;
};

export { drawBox };
