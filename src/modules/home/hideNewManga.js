const polyfill = require('../../utils/polyfill.js');

const hideNewMangaCSS = `
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) {
	display: none !important;
}
`;

function hideNewManga() {
	polyfill.GM_addStyle(hideNewMangaCSS);
}

exports.hide = hideNewManga;
