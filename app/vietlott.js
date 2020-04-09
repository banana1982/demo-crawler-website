const _ = require('lodash');

// Import helper functions
const {
	compose,
	composeAsync,
	extractNumber,
	enforceHttpsUrl,
	fetchHtmlFromUrl,
	extractFromElems,
	fromPairsToObject,
	fetchElemInnerText,
	fetchElemAttribute,
	extractUrlAttribute
} = require("./helpers");

const VIETLOTTE_BASE = "https://vietlott.vn";
const TYPE_655 = "/vi/trung-thuong/ket-qua-trung-thuong/655.html";
const TYPE_645 = "/vi/trung-thuong/ket-qua-trung-thuong/645.html";

const extractPost = elem => {
	const types = elem.find('.box_kqtt_nd_chinh .tong_so_tien');
	// const image = elem.find('a[data-src]');
	// const views = elem.find("a[title='Views'] span");
	// const comments = elem.find("a[title='Comments'] span.comment-number");

	return {
		types: fetchElemInnerText(title),
		// image: extractUrlAttribute('data-src')(image),
		// url: extractScotchUrlAttribute('href')(title),
		// views: extractNumber(views),
		// comments: extractNumber(comments)
	};
};

const fetchAuthorProfile = type => {
    const SUB_URL = type === "655" ? TYPE_655 : TYPE_645;
	const AUTHOR_URL = `${VIETLOTTE_BASE}${SUB_URL}`;
	return composeAsync(fetchHtmlFromUrl)(AUTHOR_URL);
};

module.exports = { fetchAuthorProfile };