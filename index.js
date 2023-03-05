/**
 * Spongebobify a string
 * @param {string} str the string to spongebobify
 * @returns the string randomly uppercased and lowercased
 */
function spongebob(str) {
	return str
		.split('')
		.map(char => (Math.random() <= 0.5 ? char.toUpperCase() : char.toLowerCase()))
		.join('');
}

/**
 * add multiple random diacritics to each character in a string
 * @param {string} str - the string to curse
 * @param {number} lvl - the number of diacritics to add to each character
 * @returns the cursed string
 */
function curse(str, lvl = 4) {
	return str
		.split('')
		.map(char => {
			let newChar = char;
			for (let i = 0; i < lvl; i++) {
				newChar += String.fromCharCode(Math.floor(Math.random() * (879 - 768 + 1) + 768));
			}
			return newChar;
		})
		.join('');
}

module.exports = {
	spongebob,
	curse,
};
