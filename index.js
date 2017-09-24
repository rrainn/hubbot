#!/usr/bin/env node
'use strict';
const opn = require('opn');
const path = require('path');
try {
	require(path.join(process.cwd(), 'package.json'));
} catch (e) {
	console.error("Can't find package.json file.");
	process.exit(1);
}
const pjson = require(path.join(process.cwd(), 'package.json'));
const argvs = process.argv;
const parsedParams = allElementsAfter("hubbot", argvs); // ex. ['hubbot', 'bugs']
const keyword = parsedParams[1]; // ex. 'bugs'

if (keyword == "bugs" || keyword == "issues") {
	opn(pjson.bugs.url);
} else if (keyword == "home" || keyword == "homepage") {
	opn(pjson.homepage);
}

function allElementsAfter(keyword, array) {
	let pastValue = false;
	let newArray = [];
	array.forEach(function (element) {
		if (element.includes(keyword)) {
			pastValue = true;
		}
		if (pastValue) {
			newArray.push(element);
		}
	});
	return newArray;
}

process.exit();