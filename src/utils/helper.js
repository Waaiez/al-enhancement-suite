function page(regex, href = false) {
	return regex.test(href ? window.location.href : window.location.pathname);
}

function whoAmI() {
	let whoAmI = document
		.querySelector(".nav .links .link[href^='/user/']")
		.href.match(/\/user\/(.*)\//)[1];
	return whoAmI;
}

exports.page = page;
exports.whoAmI = whoAmI;
