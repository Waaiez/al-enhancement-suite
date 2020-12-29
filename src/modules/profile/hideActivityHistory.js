const polyfill = require('../../utils/polyfill.js');

const hideActivityHistoryCSS = `
div.desktop:nth-child(2) {
	display: none !important;
}
`;

function hideProfileActivityHistory() {
	polyfill.GM_addStyle(hideActivityHistoryCSS);
}

exports.hide = hideProfileActivityHistory;
