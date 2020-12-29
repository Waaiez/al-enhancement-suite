//* Runs on - https://anilist.co/home

const footer = require('../modules/home/hideFooter.js');
const forumActivity = require('../modules/home/hideForumActivity.js');
const globalActivity = require('../modules/home/hideGlobalActivity.js');
const newAnime = require('../modules/home/hideNewAnime.js');
const newManga = require('../modules/home/hideNewManga.js');
const recentReview = require('../modules/home/hideRecentReview.js');
const trendingAnimeManga = require('../modules/home/hideTrendingAnimeManga.js');
const airingAnime = require('../modules/home/hideAiringAnime.js');
const animeInProgress = require('../modules/home/hideAnimeInProgress.js');
const _storage = require('../utils/storage.js');

let running = false;

function stopRunning() {
	running = false;
}

async function init() {
	if (running) return;

	running = true;

	//* Hide Airing Anime
	if (await _storage.get('HomeHideAiringAnime')) airingAnime.hide();

	//* Hide Anime In Progress
	if (await _storage.get('HomeHideAnimeInProgress')) animeInProgress.hide();

	//* Hide Footer
	if (await _storage.get('HomeHideFooter')) footer.hide();

	//* Remove Forum Activity
	if (await _storage.get('HomeHideForumActivity')) forumActivity.hide();

	//* Remove Home Activity
	if (await _storage.get('HomeHideGlobalActivity')) globalActivity.hide();

	//* Remove Newly Added Anime
	if (await _storage.get('HomeHideNewAnime')) newAnime.hide();

	//* Remove Newly Added Manga
	if (await _storage.get('HomeHideNewManga')) newManga.hide();

	//* Remove Recent Reviews
	if (await _storage.get('HomeHideRecentReview')) recentReview.hide();

	//* Remove Trending Anime and Manga
	if (await _storage.get('HomeHideTrendingAnimeManga'))
		trendingAnimeManga.hide();

	return stopRunning();
}

exports.init = init;
