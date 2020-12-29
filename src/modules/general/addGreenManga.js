const polyfill = require('../../utils/polyfill.js');

const addGreenMangaCSS = `
// Review Cards - Home
.review-card .banner[data-src*='/media/manga/'] + .content > .header,
.review-card
	.banner[data-src*='/media/manga/']
	+ .content
	> .header
	+ .summary {
	color: rgb(0,128,0);
}

// Global Feed - Home
.activity-feed .activity-manga_list > .wrap > .list > .details > .status {
	color: rgb(0,128,0);
}

.activity-feed .activity-manga_list > .wrap > .list > .cover[href^='/manga/'] > .image {
	border-bottom-style: solid !important;
	border-bottom-color: rgb(0,128,0) !important;
	border-bottom-width: 3px !important;
}

// Trending Anime & Manga - Home
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > .media-preview > .media-preview-card > .cover[href^='/manga/'] > .image {
    border-bottom-style: solid !important;
	border-bottom-color: rgb(0,128,0) !important;
	border-bottom-width: 3px !important;
}
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > .media-preview > .media-preview-card > .cover[href^='/manga/'] + .content {
	color: rgb(0,128,0);
}

// Newly Added Manga - Home
div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > .media-preview-card > .cover[href^='/manga/'] > .image {
    border-bottom-style: solid !important;
	border-bottom-color: rgb(0,128,0) !important;
	border-bottom-width: 3px !important;
}

div.home:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > .media-preview-card > .cover[href^='/manga/'] + .content {
	color: rgb(0,128,0);
}

// Relations
.relations > div > .media-preview-card > .cover[href^='/manga/'] > .image {
    border-bottom-style: solid !important;
	border-bottom-color: rgb(0,128,0) !important;
	border-bottom-width: 3px !important;
}

.relations > div > .media-preview-card > .cover[href^='/manga/'] > .image-text {
    color: rgb(0,128,0);
}

.relations > div > .media-preview-card > .cover[href^='/manga/'] + .content {
	color: rgb(0,128,0);
}

// Character Page
.roles > div > .grid-wrap > .role-card >  .cover[href^='/manga/'] > .image {
	border-bottom-style: solid !important;
	border-bottom-color: rgb(0,128,0) !important;
	border-bottom-width: 3px !important;
}
.roles > div > .grid-wrap > .role-card >  .cover[href^='/manga/'] + .titles > .title {
	color: rgb(0,128,0);
}


.media .relations .cover[href^='/manga/'] + div div {
	color: rgba(var(--color-green));
}

.media .relations .cover[href^='/manga/'] {
	border-bottom-style: solid;
	border-bottom-color: rgba(var(--color-green));
	border-bottom-width: 2px;
}

.character-wrap .role-card .title[href^='/manga/'],
.character-wrap .role-card:hover .title[href^='/manga/'],
.media-roles .media .content:hover[href^='/manga/'] .name {
	color: rgb(var(--color-green)) !important;
}
.media .relations.small .cover[href^='/manga/']::after {
	position: absolute;
	left: 1px;
	bottom: 3px;
	content: '';
	border-style: solid;
	border-color: rgba(var(--color-green));
	border-width: 2px;
}

.media .relations .cover div.image-text {
	margin-bottom: 2px !important;
	border-radius: 0px !important;
	padding-bottom: 8px !important;
	padding-top: 8px !important;
	font-weight: 500 !important;
}
.media-embed[data-media-type='manga'] .title {
	color: rgba(var(--color-green));
}
.media-manga .actions .list {
	background: rgba(var(--color-green));
}
.media-manga .sidebar .review.button {
	background: rgba(var(--color-green));
}
.media-manga .container .content .nav .link {
	color: rgba(var(--color-green));
}

.recommendations-wrap
	.recommendation-pair-card
	a[href^='/manga/']:hover
	.title {
	color: rgba(var(--color-green));
}

`;

function addGreenManga() {
	polyfill.GM_addStyle(addGreenMangaCSS);
}

exports.add = addGreenManga;
