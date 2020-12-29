const home = require('./pages/home.js');
const profile = require('./pages/profile.js');
const general = require('./pages/general.js');

const helper = require('./utils/helper.js');
const storage = require('./utils/storage.js');
// const characters = require('./pages/character.js');
// const staff = require('./pages/staff.js');
// const social = require('./pages/social.js');
// const mal = require('./pages/mal.js');
// const generic = require('./pages/generic.js');

(async function () {
	const observer = new MutationObserver(() => {
		if (window.location.hostname === 'anilist.co') {
			let whoAmI = helper.whoAmI();
			storage.set('whoAmI', whoAmI);

			general.init();

			if (helper.page(/^\/home$/)) {
				home.init();
			}

			if (helper.page(/^\/user\/.+\/$/)) {
				profile.init();
			}

			// if (helpers.page(/^\/(anime|manga)\/\d+\/[\w\d-_]+(\/)?$/)) {
			// 	entryOverview.init();
			// }

			// if (helpers.page(/^\/(anime|manga)\/.+\/characters$/)) {
			// 	characters.init();
			// }

			// if (helpers.page(/^(\/staff)|(\/(anime|manga)\/\d+\/.+\/staff$)/)) {
			// 	staff.init();
			// }

			// if (helpers.page(/^\/user\/.+\/social$/)) {
			// 	social.init();
			// }
		}
	});

	observer.observe(document, { childList: true, subtree: true });

	// document.addEventListener('DOMContentLoaded', () => {
	// 	if (window.location.hostname === 'myanimelist.net') {
	// 		if (helpers.page(/^\/(anime|manga)/)) {
	// 			mal.init();
	// 		}
	// 	}
	// });
})();
