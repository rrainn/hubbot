#!/usr/bin/env node
'use strict';
const opn = require('opn');
const pjson = require('./package.json');
let keyword = process.argv[1];

if (keyword == "open") {
	keyword = process.argv[2];
}


if (keyword == "bugs" || keyword == "issues") {
	opn(pjson.bugs.url);
} else if (keywords == "home" || keywords == "homepage") {
	opn(pjson.homepage);
}

// Get current directory where this was run
// console.log(process.cwd());