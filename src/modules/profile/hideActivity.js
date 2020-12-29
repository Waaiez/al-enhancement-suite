const polyfill = require('../../utils/polyfill.js');

const hideMyActivityCSS = `
.activity-feed-wrap {
	display: none !important;
}
`;

function hideProfileMyActivity() {
	polyfill.GM_addStyle(hideMyActivityCSS);
}

exports.hide = hideProfileMyActivity;
