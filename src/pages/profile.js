//* Runs on - https://anilist.co/user/{user}

const activity = require('../modules/profile/hideActivity.js');
const activityHistory = require('../modules/profile/hideActivityHistory.js');
const animeWatched = require('../modules/profile/hideAnimeWatched.js');
const bio = require('../modules/profile/hideBio.js');
const favouriteAnime = require('../modules/profile/hideFavouriteAnime.js');
const favouriteCharacters = require('../modules/profile/hideFavouriteCharacters.js');
const favouriteManga = require('../modules/profile/hideFavouriteManga.js');
const favouriteStaff = require('../modules/profile/hideFavouriteStaff.js');
const favouriteStudio = require('../modules/profile/hideFavouriteStudio.js');
const genreOverview = require('../modules/profile/hideGenreOverview.js');
const mangaRead = require('../modules/profile/hideMangaRead.js');
const _storage = require('../utils/storage.js');

let running = false;

function stopRunning() {
	running = false;
}

async function init() {
	if (running) return;

	running = true;

	//* Hide Activity
	if (await _storage.get('ProfileHideActivity')) activity.hide();

	//* Hide Activity History
	if (await _storage.get('ProfileHideActivityHistory'))
		activityHistory.hide();

	//* Hide Anime Watched
	if (await _storage.get('ProfileHideAnimeWatched')) animeWatched.hide();

	//* Hide Bio
	if (await _storage.get('ProfileHideBio')) bio.hide();

	//* Hide Favourite Anime
	if (await _storage.get('ProfileHideFavouriteAnime')) favouriteAnime.hide();

	//* Hide Favourite Characters
	if (await _storage.get('ProfileHideFavouriteCharacters'))
		favouriteCharacters.hide();

	//* Hide Favourite Manga
	if (await _storage.get('ProfileHideFavouriteManga')) favouriteManga.hide();

	//* Hide Favourite Staff
	if (await _storage.get('ProfileHideFavouriteStaff')) favouriteStaff.hide();

	//* Hide Favourite Studio
	if (await _storage.get('ProfileHideFavouriteStudio'))
		favouriteStudio.hide();

	//* Hide Genre Overview
	if (await _storage.get('ProfileHideGenreOverview')) genreOverview.hide();

	//* Hide Manga Read
	if (await _storage.get('ProfileHideMangaRead')) mangaRead.hide();

	return stopRunning();
}

exports.init = init;
