const polyfill = require('../../utils/polyfill.js');

const hideForumActivityCSS = `
.recent-threads {
	display: none !important;
}
`;

function hideForumActivity() {
	polyfill.GM_addStyle(hideForumActivityCSS);
}

exports.hide = hideForumActivity;
