#!/usr/bin/env node
/*
Copyright (c) 2015, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

var fs = require('fs'),
	Canonicalizr = require('../src/context-parser').Parser;

if (process.argv.length !== 3) {
    console.log("Usage: canonicalizr filePath");
    process.exit(1);
}

var html = fs.readFileSync(process.argv[2], "utf8");  
var c = new Canonicalizr({
	enableCanonicalization: true,
	enableVoidingIEConditionalComments: true,
	enableStateTracking: false
});

console.log(c.contextualize(html));
