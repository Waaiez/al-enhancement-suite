/* eslint-disable no-undef */
async function get(key) {
	let result = await browser.storage.local.get(key);
	return result[key];
}

function set(key, value) {
	browser.storage.local.set({ [`${key}`]: value });
}

exports.get = get;
exports.set = set;
