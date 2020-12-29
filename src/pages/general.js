const greenManga = require('../modules/general/addGreenManga.js');
const greenManga = require('../modules/general/addYellowAnime.js');
const _storage = require('../utils/storage.js');

let running = false;

async function init() {
	if (running) return;

	running = true;

	//* Makes Manga green
	if (await _storage.get('GeneralGreenManga')) greenManga.add();

	//* Makes Anime Yellow
	if (await _storage.get('GeneralYellowAnime')) yellowAnime.add();
}

exports.init = init;
